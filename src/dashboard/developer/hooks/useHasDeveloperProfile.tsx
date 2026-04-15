import { useQuery } from "@tanstack/react-query";
import { hasDeveloperProfileAction } from "../actions/has-developer-profile.action";
import { useAuthStore } from "@/store/auth.store";

export const useHasDeveloperProfile = () => {
  const user = useAuthStore((state) => state.user);

  return useQuery({
    queryKey: ["hasDeveloperProfile", user?.id],
    queryFn: () => hasDeveloperProfileAction(user!.id),
    enabled: !!user?.id,
    staleTime: 1000 * 60 * 5,
  });
};
