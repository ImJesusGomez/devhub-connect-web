import { devhubApi } from "@/api/devhub.api";
import type { DeveloperProfile } from "@/interfaces/developer-profile.interface";

export const getDeveloperProfileById = async (idProfile: string): Promise<DeveloperProfile> => {
  const { data } = await devhubApi.get(`/developer-profiles/${idProfile}`);

  return data;
};
