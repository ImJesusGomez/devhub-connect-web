import { useMutation } from "@tanstack/react-query";
import { updateStatusApplicationAction } from "../actions/update-status-application.action";
import { toast } from "sonner";
import { queryClient } from "@/DevHubConnect";

export const useUpdateStatusApplication = () => {
  return useMutation({
    mutationKey: ["updateStatusApplication"],
    mutationFn: updateStatusApplicationAction,
    onSuccess: () => {
      toast.success("Estado modificado correctamente.");
      queryClient.invalidateQueries({
        queryKey: ["getApplications"],
      });
    },
    onError: () => {
      toast.error("No se pudo modificar el estado.");
    },
  });
};
