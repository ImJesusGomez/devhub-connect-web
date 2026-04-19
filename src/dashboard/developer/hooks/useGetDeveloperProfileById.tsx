import { useQuery } from "@tanstack/react-query";
import { getDeveloperProfileById } from "../actions/get-developer-profile-by-id.action";

export const useGetDeveloperProfileById = (idProfile: string) => {
  return useQuery({
    queryKey: ["getDeveloperProfileById", idProfile],
    queryFn: () => getDeveloperProfileById(idProfile),
    staleTime: 1000 * 5,
  });
};
