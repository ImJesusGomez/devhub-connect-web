import { devhubApi } from "@/api/devhub.api";

export const hasCompanyProfileAction = async (idUser: string): Promise<boolean> => {
  const { data } = await devhubApi.get(`/company-profiles/${idUser}/exists`);

  return data;
};
