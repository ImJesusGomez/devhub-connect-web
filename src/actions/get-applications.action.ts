import { devhubApi } from "@/api/devhub.api";
import type { GetApplicationsResponse } from "@/interfaces/getApplications.response";

export interface GetApplicationParams {
  jobOfferId?: string;
  developerProfileId?: string;
}

export const getApplicationsAction = async (
  params?: GetApplicationParams,
): Promise<GetApplicationsResponse> => {
  const { data } = await devhubApi.get("/applications", { params });

  return data;
};
