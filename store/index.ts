import { initialiseStores } from "@/utils/store-accessor"
const initializer = store => initialiseStores(store)
export const plugins = [initializer]
export * from "@/utils/store-accessor"
