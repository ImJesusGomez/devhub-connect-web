import { useQuery } from "@tanstack/react-query";
import { getDeveloperProfileAction } from "../actions/get-developer-profile.action";
import { useAuthStore } from "@/store/auth.store";

export const useGetDeveloperProfile = () => {
  const user = useAuthStore((state) => state.user);
  return useQuery({
    queryKey: ["getDeveloperProfile", user?.id],
    queryFn: () => getDeveloperProfileAction(user!.id),
    enabled: !!user?.id,
    staleTime: 1000 * 60 * 5,
  });
};
