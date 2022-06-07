import { AxiosError, AxiosResponse, AxiosStatic } from "axios";

export const setupAxios = (axios: AxiosStatic) => {
  axios.create();

  /**
   * Response Interceptor
   */
  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (e: AxiosError) => {
      return Promise.reject(e);
    }
  );
};
