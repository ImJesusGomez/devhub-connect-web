import { useMutation } from "@tanstack/react-query";
import { sendEmailAction } from "../actions/send-email.action";
import { toast } from "sonner";

export const useSendEmail = () => {
  return useMutation({
    mutationKey: ["sendEmail"],
    mutationFn: sendEmailAction,
    onSuccess: () => {
      // Mensaje de Exito
      toast.success("Correo Electrónico enviado correctamente.");
    },
    onError: () => {
      // Mensaje de Error
      toast.error("No se pudo enviar el correo electrónico");
    },
  });
};
