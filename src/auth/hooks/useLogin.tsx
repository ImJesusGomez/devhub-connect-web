import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../actions/login.action";
import { useAuthStore } from "@/store/auth.store";

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginAction,
    onSuccess: (data) => {
      setToken(data.accessToken);
    },
  });
};
