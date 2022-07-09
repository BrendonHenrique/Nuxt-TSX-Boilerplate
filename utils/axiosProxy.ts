import * as axios from "axios"

export interface IAxiosRequest {
  url: string;
  headers?: any;
  query?: any;
  data?: any;
  contentType?: string;
  responseType?: axios.ResponseType;
}

export interface IAxios {
  setAuthToken(authToken: string): void;
  clearAuthToken(): void;
  get(request: IAxiosRequest): Promise<any>;
  post(request: IAxiosRequest): Promise<any>;
  isAxiosOnLoading(): boolean;
}

const JSON_TYPE: string = "application/json; charset=utf-8"
const FORM_URL_TYPE: string = "application/x-www-form-urlencoded"
const DEFAULT_TIMEOUT: number = 5 * 60 * 1000 // 5 minutos

export default class AxiosProxy implements IAxios {
  authToken: string | undefined = undefined
  awaitingRequests: number = 0

  setAuthToken(authToken: string): void {
    this.authToken = authToken
  }

  clearAuthToken(): void {
    this.authToken = undefined
  }

  validateParams(params: IAxiosRequest): IAxiosRequest {
    const stringifyParams = (params: any): string => {
      Object.keys(params).forEach((p) => {
        switch (params[p]) {
          case null:
            params[p] = ""
            break
          case undefined:
            params[p] = ""
            break
        }
      })
      return new URLSearchParams(params).toString()
    }
    let url = params.url
    if (params.query) {
      const qs = stringifyParams(params.query)
      url = `${url}?${qs}`
    }
    let data = params.data
    if (data && params.contentType === FORM_URL_TYPE) {
      data = stringifyParams(data)
    }

    let contentType = params.contentType
    if (!contentType && data) {
      contentType = JSON_TYPE
    }

    const headers = params.headers ?? { "Content-Type": contentType }
    if (this.authToken) {
      headers.Authorization = `Bearer ${this.authToken}`
    }
    return {
      url,
      data,
      contentType,
      headers
    }
  }

  sendMessage(method: axios.Method, params: IAxiosRequest): Promise<any> {
    this.awaitingRequests++
    if (window.bus) {
      window.bus.$emit("axios-status", this.awaitingRequests > 0)
    }

    const { url, headers, data } = this.validateParams(params)

    return window.$nuxt.$axios
      .request({
        url,
        headers,
        method,
        data,
        responseType: params.responseType,
        timeout: DEFAULT_TIMEOUT
      })
      .then(resp => resp)
      .catch((error) => {
        const errorData = { error }.error.response.data
        const errorMessage = errorData.Error || errorData.error_description
        throw new Error(errorMessage)
      })
      .finally(() => {
        this.awaitingRequests--
        if (window.bus) {
          window.bus.$emit("axios-status", this.awaitingRequests > 0)
        }
      })
  }

  get(params: IAxiosRequest): Promise<any> {
    const method: axios.Method = "GET"
    return this.sendMessage(method, params)
  }

  post(params: IAxiosRequest): Promise<any> {
    const method: axios.Method = "POST"
    return this.sendMessage(method, params)
  }

  isAxiosOnLoading(): boolean {
    return this.awaitingRequests > 0
  }

  hasAuthToken(): boolean {
    return this.authToken !== undefined
  }
}

const axiosProxy = new AxiosProxy()
window.$axios = axiosProxy
