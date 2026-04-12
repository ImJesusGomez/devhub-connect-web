import { devhubApi } from "@/api/devhub.api";
import type { CompanyProfile } from "@/interfaces/company-profile.interface";
import type { JobOffer } from "@/interfaces/job-offer.interface";

export type CreateJobOfferInput = Omit<JobOffer, "id" | "companyProfile"> & {
  companyProfileID: string;
};

export const createJobOfferAction = async (input: CreateJobOfferInput): Promise<CompanyProfile> => {
  const { data } = await devhubApi.post("/job-offers", input);

  return data;
};
