import {
  getApplicationsAction,
  type GetApplicationParams,
} from "@/actions/get-applications.action";
import { useQuery } from "@tanstack/react-query";

export const useGetApplications = (params?: GetApplicationParams) => {
  return useQuery({
    queryKey: ["getApplications", params],
    queryFn: () => getApplicationsAction(params),
    staleTime: 1000 * 60 * 5,
  });
};
