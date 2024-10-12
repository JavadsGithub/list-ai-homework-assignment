import axios from "axios";
import Cookies from "js-cookie";
import { getTokens, refreshToken } from "$/lib/utils";

type AxiosConfig = any;

interface ClientProps {
  /**
   * will be setted to true if the request needs authentication.
   */
  auth?: boolean;
  /**
   * this is for passing token manually, mostly used on server-side requests.
   */
  token?: string;
}
export const client = (props?: ClientProps) => {
  const Axios = axios.create({
    baseURL: process.env["BASE_URL"],
  });

  Axios.interceptors.request.use((config: AxiosConfig) => {
    const { accessToken } = getTokens();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  });

  Axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      // Refreshes the token if expired.
      if (error.response?.status === 401) {
        const tokenRefreshed = await refreshToken(Axios);

        if (tokenRefreshed) {
          return Axios(error.config); // Retry the original request
        } else {
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );

  return Axios;
};
