import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createCompanyProfileAction,
  type CreateCompanyProfileInput,
} from "../actions/create-company-profile.action";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth.store";

export const useCreateCompanyProfile = () => {
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);

  return useMutation({
    mutationKey: ["createCompanyProfile"],
    mutationFn: (input: CreateCompanyProfileInput) => {
      if (!user?.id) throw new Error("User not authenticated");
      return createCompanyProfileAction(input, user.id);
    },
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
      toast.error("Perfil no se ha podido crear.");
    },
  });
};
