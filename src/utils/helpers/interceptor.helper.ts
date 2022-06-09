import { AxiosError, AxiosResponse, AxiosStatic } from "axios";

export const setupAxios = (axios: AxiosStatic) => {
  axios.create();

  /**
   * Response Interceptor
   */
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      const { status, data } = response;
      switch (status) {
        case 200:
          return { response: data };
      }
      return { response };
    },
    (e: AxiosError) => {
      return Promise.reject(e);
    }
  );
};
