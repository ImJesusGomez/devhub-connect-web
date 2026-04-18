import { useMutation } from "@tanstack/react-query";
import { createDeveloperProfileAction } from "../actions/create-developer-profile.action";
import { toast } from "sonner";
import { queryClient } from "@/DevHubConnect";
import { useNavigate } from "react-router";

export const useCreateDeveloperProfile = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["createDeveloperProfile"],
    mutationFn: createDeveloperProfileAction,
    onSuccess: () => {
      // Cancelamos otras queries
      queryClient.invalidateQueries({
        queryKey: ["hasDeveloperProfile"],
      });

      // Mostramos mensaje de éxito
      toast.success("Perfil creado exitosamente.");

      // Redireccionamos a otra página
      navigate("/developer-dashboard/profile");
    },
    onError: () => {
      // Mostramos mensaje de error
      toast.error("Perfil no pudo ser creado.");
    },
  });
};
