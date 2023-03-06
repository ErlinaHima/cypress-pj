import axios from "axios";
import type { AxiosResponse } from "axios";

import type { Api } from "@/types/api";
import { API_BASE_URL } from "@/constants";

export const createUser = async (
  requestBody: Api.ApiV1UsersCreate.RequestBody
): Promise<Api.ApiV1UsersCreate.ResponseBody> => {
  const response = (await axios.post(
    `${API_BASE_URL}/api/v1/users/`,
    requestBody
  )) as AxiosResponse<Api.ApiV1UsersCreate.ResponseBody>;

  return response.data;
};
