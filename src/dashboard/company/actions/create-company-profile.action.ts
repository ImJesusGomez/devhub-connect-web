import { devhubApi } from "@/api/devhub.api";
import type { CompanyProfile } from "@/interfaces/company-profile.interface";

export type CreateCompanyProfileInput = Omit<CompanyProfile, "id" | "user">;

export const createCompanyProfileAction = async (
  input: CreateCompanyProfileInput,
  idUser: string,
): Promise<CompanyProfile> => {
  const { data } = await devhubApi.post("/company-profiles", {
    ...input,
    userId: idUser,
  });

  return data;
};
