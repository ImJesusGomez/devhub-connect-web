import { devhubApi } from "@/api/devhub.api";

export type SignupInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: string[];
};

export const signupAction = async (signupInput: SignupInput): Promise<string> => {
  const { data } = await devhubApi.post("/auth/register", signupInput);

  return data;
};
