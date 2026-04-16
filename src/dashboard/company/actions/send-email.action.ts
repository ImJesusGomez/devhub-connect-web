import { devhubApi } from "@/api/devhub.api";

export interface SendEmailInput {
  from: string;
  to: string;
  subject: string;
  content: string;
}

export const sendEmailAction = async (input: SendEmailInput): Promise<string> => {
  const { data } = await devhubApi.post("/email/send", input);

  return data;
};
