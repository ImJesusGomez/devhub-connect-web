import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../actions/login.action";
import { useAuthStore } from "@/store/auth.store";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { getProfileAction } from "@/actions/get-profile.action";
import { queryClient } from "@/DevHubConnect";

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginAction,
    onSuccess: async (data) => {
      setToken(data.accessToken);

      const profile = await getProfileAction();

      setUser(profile);

      const role = profile.roles[0].name;

      navigate(role === "ROLE_COMPANY" ? "/company-dashboard" : "/developer-dashboard", {
        replace: true,
      });

      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error("Credenciales incorrectas.");
    },
  });
};
