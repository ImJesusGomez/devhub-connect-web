import { useMutation } from "@tanstack/react-query";
import { signupAction } from "../actions/signup.action";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["signup"],
    mutationFn: signupAction,
    onSuccess: () => {
      // Mostramos el mensaje de éxito
      toast.success("Cuenta creada exitosamente.");

      // Redireccionamos
      navigate("/auth/login");
    },
  });
};
