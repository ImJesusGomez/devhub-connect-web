import { devhubApi } from "@/api/devhub.api";
import type { GetJobOffersResponse } from "@/interfaces/getJobOffers.response";

export interface GetJobsParams {
  position?: string;
  companyProfileId?: string;
}

export const getJobOffersAction = async (params?: GetJobsParams): Promise<GetJobOffersResponse> => {
  const { data } = await devhubApi.get("/job-offers", { params });

  return data;
};
