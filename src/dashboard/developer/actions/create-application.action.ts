import { devhubApi } from "@/api/devhub.api";
import type { Application } from "@/interfaces/application.interface";

export interface ApplicationInput {
  jobOfferId: string;
  developerProfileId: string;
}

export const createApplicationAction = async (input: ApplicationInput): Promise<Application> => {
  const { data } = await devhubApi.post("/applications", input);

  return data;
};
