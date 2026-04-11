import { devhubApi } from "@/api/devhub.api";
import type { User } from "@/interfaces/user.interface";

export const getProfileAction = async (): Promise<User> => {
  const { data } = await devhubApi.get("/user/get-profile");

  return data;
};
