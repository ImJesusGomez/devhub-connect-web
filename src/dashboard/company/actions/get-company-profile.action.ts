import { devhubApi } from "@/api/devhub.api";
import type { CompanyProfile } from "@/interfaces/company-profile.interface";

export const getCompanyProfileAction = async (idUser: string): Promise<CompanyProfile> => {
  const { data } = await devhubApi.get(`/company-profiles/${idUser}/user`);

  return data;
};
