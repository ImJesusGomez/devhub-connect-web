import { useQuery } from "@tanstack/react-query";
import { hasDeveloperProfileAction } from "../actions/has-developer-profile.action";

export const useHasDeveloperProfile = (idUser: string) => {
  return useQuery({
    queryKey: ["hasDeveloperProfile", { idUser }],
    queryFn: () => hasDeveloperProfileAction(idUser),
    staleTime: 1000 * 60 * 5,
  });
};
