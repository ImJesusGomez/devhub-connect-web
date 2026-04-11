import { getProfileAction } from "@/actions/get-profile.action";
import { useAuthStore } from "@/store/auth.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetProfile = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const accessToken = useAuthStore((state) => state.accessToken);

  const query = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileAction,
    enabled: !!accessToken, //Solo si hay token
  });

  useEffect(() => {
    if (query.data) {
      setUser(query.data);
    }
  }, [query.data, setUser]);

  return query;
};
