import { getDevelopersAction, type GetDevelopersParams } from "@/actions/get-developers.action";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetDevelopers = (params?: GetDevelopersParams) => {
  return useQuery({
    queryKey: ["getDevelopers", { params }],
    queryFn: () => getDevelopersAction(params),
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });
};
