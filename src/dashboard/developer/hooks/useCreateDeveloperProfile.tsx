import { useMutation } from "@tanstack/react-query";
import { createDeveloperProfileAction } from "../actions/create-developer-profile.action";
import { toast } from "sonner";
import { queryClient } from "@/DevHubConnect";

export const useCreateDeveloperProfile = () => {
  return useMutation({
    mutationKey: ["createDeveloperProfile"],
    mutationFn: createDeveloperProfileAction,
    onSuccess: () => {
      // Cancelamos otras queries
      queryClient.invalidateQueries({
        queryKey: ["getDevelopers"],
      });

      // Mostramos mensaje de éxito
      toast.success("Perfil creado exitosamente.");
    },
    onError: () => {
      // Mostramos mensaje de error
      toast.error("Perfil no pudo ser creado.");
    },
  });
};
