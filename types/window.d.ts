import { IAxios } from "@/utils/axiosProxy";

export {};
declare global {
  interface Window {
    bus: any;
    $axios: IAxios;
  }
}
