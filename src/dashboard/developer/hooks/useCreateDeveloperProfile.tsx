import { useMutation } from "@tanstack/react-query";
import { createDeveloperProfileAction } from "../actions/create-developer-profile.action";
import { toast } from "sonner";

export const useCreateDeveloperProfile = () => {
  return useMutation({
    mutationKey: ["createDeveloperProfile"],
    mutationFn: createDeveloperProfileAction,
    onSuccess: () => {
      // Mostramos mensaje de éxito
      toast.success("Perfil creado exitosamente.");
    },
    onError: () => {
      // Mostramos mensaje de error
      toast.error("Perfil no pudo ser creado.");
    },
  });
};
