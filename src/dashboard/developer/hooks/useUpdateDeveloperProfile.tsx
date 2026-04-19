import { useMutation } from "@tanstack/react-query";
import {
  updateDeveloperProfileAction,
  type UpdateDeveloperProfileInput,
} from "../actions/update-developer-profile.action";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { queryClient } from "@/DevHubConnect";

export const useUpdateDeveloperProfile = (idProfile: string) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (input: UpdateDeveloperProfileInput) =>
      updateDeveloperProfileAction(input, idProfile),
    onSuccess: () => {
      // Mostramos un mensaje de éxito
      toast.success("Perfil editado correctamente.");

      queryClient.invalidateQueries({
        queryKey: ["getDeveloperProfile"],
        exact: false,
      });

      queryClient.invalidateQueries({
        queryKey: ["getDeveloperProfileById", idProfile],
      });

      // Navegamos
      navigate("/developer-dashboard/profile");
    },
    onError: () => {
      // Mostramos un mensaje de error
      toast.error("Perfil no pudo ser actualizado.");
    },
  });
};
