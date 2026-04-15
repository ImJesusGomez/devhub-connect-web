import { useQuery } from "@tanstack/react-query";
import { getCompanyProfileAction } from "../actions/get-company-profile.action";
import { useAuthStore } from "@/store/auth.store";

export const useGetCompanyProfile = (enabled = true) => {
  const user = useAuthStore((state) => state.user);

  return useQuery({
    queryKey: ["getCompanyProfile", user?.id],
    queryFn: () => getCompanyProfileAction(user!.id),
    enabled: enabled && !!user?.id,
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
