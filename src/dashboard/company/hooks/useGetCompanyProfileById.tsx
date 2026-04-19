import { useQuery } from "@tanstack/react-query";
import { getCompanyProfileById } from "../actions/get-company-profile-by-id.action";

export const useGetCompanyProfileById = (idProfile: string) => {
  return useQuery({
    queryKey: ["getCompanyProfileById", idProfile],
    queryFn: () => getCompanyProfileById(idProfile),
  });
};
