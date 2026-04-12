import { useQuery } from "@tanstack/react-query";
import { getCompanyProfile } from "../actions/get-company-profile.action";

export const useGetCompanyProfile = (enabled?: boolean, userId?: string) => {
  return useQuery({
    queryKey: ["getCompanyProfile", userId],
    queryFn: getCompanyProfile,
    enabled,
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
