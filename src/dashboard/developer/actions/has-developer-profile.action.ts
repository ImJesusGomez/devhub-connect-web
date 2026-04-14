import { devhubApi } from "@/api/devhub.api";

export const hasDeveloperProfileAction = async (idUser: string) => {
  const { data } = await devhubApi.get(`/developer-profiles/${idUser}/exists`);

  return data;
};
