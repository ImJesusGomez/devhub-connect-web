import { devhubApi } from "@/api/devhub.api";
import type { DeveloperProfile } from "@/interfaces/developer-profile.interface";

export const getDeveloperProfileByUserAction = async (
  idUser: string,
): Promise<DeveloperProfile> => {
  const { data } = await devhubApi.get(`/developer-profiles/${idUser}/user`);
  return data;
};
