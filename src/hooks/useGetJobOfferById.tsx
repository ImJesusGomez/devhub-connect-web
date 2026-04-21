import { getJobOfferByIdAction } from "@/actions/get-job-offer-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useGetJobOfferById = (idJobOffer: string) => {
  return useQuery({
    queryKey: ["getJobOfferById", idJobOffer],
    queryFn: () => getJobOfferByIdAction(idJobOffer),
    staleTime: 1000 * 60 * 5,
  });
};
