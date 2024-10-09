import axios from "axios";
import Cookies from "js-cookie";

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
    // Checks if token need to be loaded
    return props?.auth
      ? {
          ...config,
          headers: {
            ...config.header,
            Authorization:
              "Bearer " + props.token
                ? props.token
                : Cookies.get(process.env["ACCESS_TOKEN"]!),
          },
        }
      : config;
  });

  return Axios;
};
