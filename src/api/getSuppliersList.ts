import axios from "axios";
import type { AxiosResponse } from "axios";

import type { Api } from "@/types/api";
import { API_BASE_URL } from "@/constants";

export const getSuppliersList = async (
  query: Api.ApiV1SuppliersList.RequestQuery
): Promise<Api.ApiV1SuppliersList.ResponseBody> => {
  const suppliers = (await axios.get(`${API_BASE_URL}/api/v1/suppliers/`, {
    params: query,
  })) as AxiosResponse<Api.ApiV1SuppliersList.ResponseBody>;

  return suppliers.data;
};
