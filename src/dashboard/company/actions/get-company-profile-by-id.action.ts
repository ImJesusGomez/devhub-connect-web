import { devhubApi } from "@/api/devhub.api";
import type { CompanyProfile } from "@/interfaces/company-profile.interface";

export const getCompanyProfileById = async (idProfile: string): Promise<CompanyProfile> => {
  const { data } = await devhubApi.get(`/company-profiles/${idProfile}`);

  return data;
};
