import { useQuery } from "@tanstack/react-query";
import { getCompanyProfileByUserAction } from "../actions/get-company-profile-by-user.action";
import { useAuthStore } from "@/store/auth.store";

export const useGetCompanyProfileByUser = (enabled = true) => {
  const user = useAuthStore((state) => state.user);
  console.log(enabled);

  return useQuery({
    queryKey: ["getCompanyProfile", user?.id],
    queryFn: () => getCompanyProfileByUserAction(user!.id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
