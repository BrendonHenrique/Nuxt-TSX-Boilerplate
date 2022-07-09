/* eslint-disable require-await */
import { Module, VuexModule, MutationAction } from "nuxt-property-decorator"
import { IAxios } from "@/models/axios"

@Module({
  name: "axios",
  namespaced: true,
  stateFactory: true
})
export default class Axios extends VuexModule implements IAxios {
  public isAxiosOnLoading: boolean = false
  public error: any = {}

  get getIsAxiosOnLoading() {
    return this.isAxiosOnLoading
  }

  get getError() {
    return this.error
  }

    @MutationAction({ mutate: ["isAxiosOnLoading"] })
  public async setIsAxiosLoading(isAxiosOnLoading) {
    return {
      isAxiosOnLoading
    }
  }

    @MutationAction({ mutate: ["error", "isAxiosOnLoading"] })
    public async setError(error) {
      return {
        error,
        isAxiosOnLoading: false
      }
    }
}
