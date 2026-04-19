import { useQuery } from "@tanstack/react-query";
import { getDeveloperProfileByUserAction } from "../actions/get-developer-profile-by-user.action";
import { useAuthStore } from "@/store/auth.store";

export const useGetDeveloperProfileByUser = () => {
  const user = useAuthStore((state) => state.user);
  return useQuery({
    queryKey: ["getDeveloperProfile", user?.id],
    queryFn: () => getDeveloperProfileByUserAction(user!.id),
    enabled: !!user?.id,
    staleTime: 1000 * 60 * 5,
  });
};
