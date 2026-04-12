import { getProfileAction } from "@/actions/get-profile.action";
import { devhubApi } from "@/api/devhub.api";
import type { CompanyProfile } from "@/interfaces/company-profile.interface";

export type CreateCompanyProfileInput = Omit<CompanyProfile, "id" | "user">;

export const createCompanyProfileAction = async (
  input: CreateCompanyProfileInput,
): Promise<CompanyProfile> => {
  const user = await getProfileAction();

  const { data } = await devhubApi.post("/company-profiles", {
    ...input,
    userId: user.id,
  });

  return data;
};
