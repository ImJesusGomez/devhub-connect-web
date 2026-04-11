import { devhubApi } from "@/api/devhub.api";
import type { LoginResponse } from "../interfaces/login.response.interface";

export type LoginInput = {
  email: string;
  password: string;
};

export const loginAction = async (input: LoginInput): Promise<LoginResponse> => {
  const { data } = await devhubApi.post("/auth/login", input);

  return data;
};
