import { getJobOffersAction, type GetJobsParams } from "@/actions/get-job-offers.action";
import { useQuery } from "@tanstack/react-query";

// useGetJobOffers.ts
export const useGetJobOffers = (params?: GetJobsParams) => {
  return useQuery({
    queryKey: ["getJobOffers", params],
    queryFn: () => getJobOffersAction(params),
    enabled: !!params?.companyProfileId, // 👈 clave
    staleTime: 1000 * 60 * 5,
  });
};
