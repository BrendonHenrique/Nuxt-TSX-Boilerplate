import * as Example from "@/models/example";

const baseURL = `${process.env.VUE_APP_SERVER_URL}/YourApi`;

export function exampleRequest({
  payload
}: {
  payload: any;
}): Promise<Example.Example> {
  return window.$axios
    .post({
      url: `${baseURL}/YourEndpoint`,
      data: {
        payload
      }
    })
    .then(resp => resp.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}
