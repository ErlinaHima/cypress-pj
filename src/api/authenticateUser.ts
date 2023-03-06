import axios from "axios";
import type { AxiosResponse } from "axios";

import type { ApiTokenAuth } from "@/types/api";
import { API_BASE_URL } from "@/constants";

export const authenticateUser = async (
  requestBody: ApiTokenAuth.ApiTokenAuthCreate.RequestBody
): Promise<ApiTokenAuth.ApiTokenAuthCreate.ResponseBody> => {
  const response = (await axios.post(
    `${API_BASE_URL}/api-token-auth/`,
    requestBody
  )) as AxiosResponse<ApiTokenAuth.ApiTokenAuthCreate.ResponseBody>;

  return response.data;
};
