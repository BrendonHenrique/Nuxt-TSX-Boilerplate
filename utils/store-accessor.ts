/* eslint-disable import/no-mutable-exports */
import { getModule } from "nuxt-property-decorator"
import Axios from "@/store/axios"

let axios: Axios

function initialiseStores(store) {
  axios = getModule(Axios, store)
}

export {
  initialiseStores,
  axios
}
