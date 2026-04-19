import { useMutation } from "@tanstack/react-query";
import {
  updateCompanyProfileAction,
  type UpdateCompanyProfileInput,
} from "../actions/update-company-profile.action";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { queryClient } from "@/DevHubConnect";

export const useUpdateCompanyProfile = (idProfile: string) => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["updateCompanyProfile"],
    mutationFn: (input: UpdateCompanyProfileInput) => updateCompanyProfileAction(input, idProfile),
    onSuccess: () => {
      // Mostramos un mensaje de éxito
      toast.success("Perfil actualizado correctamente.");

      // Invalidamos queries
      queryClient.invalidateQueries({
        queryKey: ["getCompanyProfile"],
        exact: false,
      });

      queryClient.invalidateQueries({
        queryKey: ["getCompanyProfileById", idProfile],
      });

      // Navegamos
      navigate("/company-dashboard/profile");
    },
    onError: () => {
      // Mostramos mensaje de error
      toast.error("No se ha podido actualizar el perfil.");
    },
  });
};
