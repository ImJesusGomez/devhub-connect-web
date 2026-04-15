import { useQuery } from "@tanstack/react-query";
import { hasCompanyProfileAction } from "../actions/has-company-profile.action";
import { useAuthStore } from "@/store/auth.store";

export const useHasCompanyProfile = () => {
  const user = useAuthStore((state) => state.user);
  return useQuery({
    queryKey: ["hasCompanyProfile", user?.id],
    queryFn: () => hasCompanyProfileAction(user!.id),
    enabled: !!user?.id,
    staleTime: 1000 * 60 * 5,
  });
};
