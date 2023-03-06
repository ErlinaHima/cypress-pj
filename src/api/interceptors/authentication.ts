import type { AxiosRequestConfig } from "axios";

import { getToken } from "@/util/userStatus";

/**
 * Add authentication header to each request.
 * @param {AxiosRequestConfig} config
 */
export const addAuthenticationHeaders = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  const token = getToken.value;

  if (token) {
    config.headers = config.headers || {};

    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
