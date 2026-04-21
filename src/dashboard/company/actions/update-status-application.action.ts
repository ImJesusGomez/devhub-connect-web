import { devhubApi } from "@/api/devhub.api";
import type { Application, StatusApplication } from "@/interfaces/application.interface";

export const updateStatusApplicationAction = async ({
  id,
  status,
}: {
  id: string;
  status: StatusApplication;
}): Promise<Application> => {
  const { data } = await devhubApi.put(`/applications/${id}`, { status });
  return data;
};
