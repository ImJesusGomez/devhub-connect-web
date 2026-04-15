import { devhubApi } from "@/api/devhub.api";
import type { GetDevelopersResponse } from "@/interfaces/getDevelopers.response";

export interface GetDevelopersParams {
  techStack?: string;
  page?: number;
  size?: number;
}

export const getDevelopersAction = async (
  params?: GetDevelopersParams,
): Promise<GetDevelopersResponse> => {
  const { data } = await devhubApi.get("/developer-profiles", { params });

  return data;
};
