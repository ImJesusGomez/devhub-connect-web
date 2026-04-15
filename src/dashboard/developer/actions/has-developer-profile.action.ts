import { devhubApi } from "@/api/devhub.api";

export const hasDeveloperProfileAction = async (idUser: string): Promise<boolean> => {
  const { data } = await devhubApi.get(`/developer-profiles/${idUser}/exists`);

  return data;
};
