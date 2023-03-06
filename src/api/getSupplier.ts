import axios from "axios";
import type { AxiosResponse } from "axios";

import type { Api } from "@/types/api";
import { API_BASE_URL } from "@/constants";

export const getSupplier = async (
  query: Api.ApiV1SuppliersRead.RequestParams
): Promise<Api.ApiV1SuppliersRead.ResponseBody> => {
  const supplier = (await axios.get(
    `${API_BASE_URL}/api/v1/suppliers/${query.id}/`
  )) as AxiosResponse<Api.ApiV1SuppliersRead.ResponseBody>;

  return supplier.data;
};
