import axios from "axios";
import type { AxiosResponse } from "axios";

import type { Api } from "@/types/api";
import { API_BASE_URL } from "@/constants";

export const getQuotesList = async (
  query: Api.ApiV1QuotesList.RequestQuery
): Promise<Api.ApiV1QuotesList.ResponseBody> => {
  const quotes = (await axios.get(`${API_BASE_URL}/api/v1/quotes/`, {
    params: query,
  })) as AxiosResponse<Api.ApiV1QuotesList.ResponseBody>;

  return quotes.data;
};
