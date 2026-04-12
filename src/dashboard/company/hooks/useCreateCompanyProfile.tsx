import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompanyProfileAction } from "../actions/create-company-profile.action";
import { toast } from "sonner";

export const useCreateCompanyProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createCompanyProfile"],
    mutationFn: createCompanyProfileAction,
    onSuccess: () => {
      // Invalidamos los queries
      queryClient.invalidateQueries({
        queryKey: ["hasCompanyProfile"],
      });

      // Mostramos un mensaje de alerta
      toast.success("Perfil de Empresa creado exitosamente.");
    },
    onError: () => {
      // Mostramos un mensaje de alerta
      toast.error("El perfil no se pudo crear.");
    },
  });
};
