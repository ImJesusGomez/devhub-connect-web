import { devhubApi } from "@/api/devhub.api";
import type { JobOffer } from "@/interfaces/job-offer.interface";

export const getJobOfferByIdAction = async (idJobOffer: string): Promise<JobOffer> => {
  const { data } = await devhubApi.get(`/job-offers/${idJobOffer}`);

  return data;
};
