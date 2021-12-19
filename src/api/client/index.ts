import axios, { AxiosRequestConfig } from "axios";
import { URL_BASE } from "../../constants";
import errorHandler from "./errorHandler";

const instance = axios.create({
  baseURL: URL_BASE,
});

instance.interceptors.request.use(
  async (config) => {
    const altConfig = config;
    return altConfig;
  },
  (error) => {
    Promise.reject(error);
  }
);

const client = (options: AxiosRequestConfig, handleError = true) => {
  const onSuccess = (response) => response.data;

  const onError = (error) => errorHandler(error, handleError);
  return instance(options).then(onSuccess).catch(onError);
};

export default client;
