import { devhubApi } from "@/api/devhub.api";
import type { DeveloperProfile } from "@/interfaces/developer-profile.interface";

export type UpdateDeveloperProfileInput = Partial<
  Omit<DeveloperProfile, "id" | "user" | "developerEmail">
>;

export const updateDeveloperProfileAction = async (
  input: UpdateDeveloperProfileInput,
  idProfile: string,
): Promise<DeveloperProfile> => {
  const { data } = await devhubApi.patch(`/developer-profiles/${idProfile}`, input);
  return data;
};
