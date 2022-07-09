import { axios } from "@/store"
import "@/utils/axiosProxy"

export default function ({ $axios }) {
  let requestsRunning = 0

  $axios.onRequest((request) => {
    requestsRunning++
    if (request) {
      axios.setIsAxiosLoading(requestsRunning > 0)
    }
  })

  $axios.onResponse((response) => {
    requestsRunning--
    if (response) { axios.setIsAxiosLoading(requestsRunning > 0) }
  })

  $axios.onError((error) => {
    requestsRunning--
    if (error) { axios.setError(error) }
  })
}
