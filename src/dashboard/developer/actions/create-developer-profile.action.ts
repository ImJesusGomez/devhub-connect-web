import { devhubApi } from "@/api/devhub.api";
import type { DeveloperProfile } from "@/interfaces/developer-profile.interface";

export type CreateDeveloperProfileInput = Omit<DeveloperProfile, "id" | "user"> & {
  userId: string;
};

export const createDeveloperProfileAction = async (
  input: CreateDeveloperProfileInput,
): Promise<DeveloperProfile> => {
  const { data } = await devhubApi.post("/developer-profiles", input);

  return data;
};
