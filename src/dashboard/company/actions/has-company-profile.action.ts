import { getProfileAction } from "@/actions/get-profile.action";
import { devhubApi } from "@/api/devhub.api";

export const hasCompanyProfileAction = async (): Promise<boolean> => {
  const { id } = await getProfileAction();

  const { data } = await devhubApi.get(`/company-profiles/${id}/exists`);

  return data;
};
