import { useQuery } from "@tanstack/react-query";
import { getDeveloperProfileAction } from "../actions/get-developer-profile.action";

export const useGetDeveloperProfile = (idUser: string) => {
  return useQuery({
    queryKey: ["getDeveloperProfile", idUser],
    queryFn: () => getDeveloperProfileAction(idUser),
    staleTime: 1000 * 60 * 5,
  });
};
