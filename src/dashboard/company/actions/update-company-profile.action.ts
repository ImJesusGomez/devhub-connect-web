import { devhubApi } from "@/api/devhub.api";
import type { CompanyProfile } from "@/interfaces/company-profile.interface";

export type UpdateCompanyProfileInput = Partial<
  Omit<CompanyProfile, "id" | "user" | "companyEmail">
>;

export const updateCompanyProfileAction = async (
  input: UpdateCompanyProfileInput,
  idProfile: string,
): Promise<CompanyProfile> => {
  const { data } = await devhubApi.patch(`/company-profiles/${idProfile}`, input);

  return data;
};
