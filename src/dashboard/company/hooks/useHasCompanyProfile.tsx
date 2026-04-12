import { useQuery } from "@tanstack/react-query";
import { hasCompanyProfileAction } from "../actions/has-company-profile.action";

export const useHasCompanyProfile = () => {
  return useQuery({
    queryKey: ["hasCompanyProfile"],
    queryFn: hasCompanyProfileAction,
    staleTime: 1000 * 60 * 5,
  });
};
