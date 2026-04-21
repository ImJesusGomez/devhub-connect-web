import { useMutation } from "@tanstack/react-query";
import { createApplicationAction } from "../actions/create-application.action";
import { toast } from "sonner";
import { useGetDeveloperProfileByUser } from "./useGetDeveloperProfileByUser";
import { queryClient } from "@/DevHubConnect";

export const useCreateApplication = () => {
  const { data: profile } = useGetDeveloperProfileByUser();

  return useMutation({
    mutationKey: ["useCreateApplication"],
    mutationFn: (jobOfferId: string) => {
      if (!profile?.id) throw new Error("No profile");

      return createApplicationAction({
        developerProfileId: profile.id,
        jobOfferId,
      });
    },
    onSuccess: () => {
      toast.success("Has aplicado correctamente.");

      queryClient.invalidateQueries({
        queryKey: ["getApplications"],
        exact: false,
      });
    },
    onError: () => {
      toast.error("No se ha podido aplicar");
    },
  });
};
