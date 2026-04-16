import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import type { SendEmailInput } from "../actions/send-email.action";
import { Textarea } from "@/components/ui/textarea";
import { useSendEmail } from "../hooks/useSendEmail";
import { useGetCompanyProfile } from "../hooks/useGetCompanyProfile";
import type { DeveloperProfile } from "@/interfaces/developer-profile.interface";

interface Props {
  dev: DeveloperProfile;
}

export const ContactDialog = ({ dev }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SendEmailInput>({
    defaultValues: {
      to: dev.developerEmail,
    },
  });

  const sendEmailMutation = useSendEmail();
  const { data: profile } = useGetCompanyProfile();

  const onSubmit = async (data: SendEmailInput) => {
    try {
      console.log(data);
      const res = await sendEmailMutation.mutateAsync({
        ...data,
        from: profile!.companyEmail,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-cyan-800">Contactar</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Enviar Correo</DialogTitle>
            <DialogDescription>
              Envía un correo electrónico para contactar al desarrollador.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field className="mt-6">
              <Label htmlFor="subject">Asunto</Label>
              <Input
                id="subject"
                {...register("subject", {
                  required: "El asunto es requerido",
                })}
              />
              {errors.subject && <FieldError>{errors.subject.message}</FieldError>}
            </Field>
            <Field>
              <Label htmlFor="content">Contenido</Label>
              <Textarea
                id="content"
                {...register("content", {
                  required: "El contenido es requerido.",
                })}
              />
              {errors.content && <FieldError>{errors.content.message}</FieldError>}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose className="cursor-pointer text-red-600 mr-4">Cancelar</DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
