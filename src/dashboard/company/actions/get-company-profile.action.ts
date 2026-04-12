import { getProfileAction } from "@/actions/get-profile.action";
import { devhubApi } from "@/api/devhub.api";
import type { CompanyProfile } from "@/interfaces/company-profile.interface";

export const getCompanyProfile = async (): Promise<CompanyProfile> => {
  // Obtenemos el ID del usuario autenticado
  const { id } = await getProfileAction();

  const { data } = await devhubApi.get(`/company-profiles/${id}/user`);

  return data;
};
