import type { SignupInput } from "@/auth/actions/signup.action";
import { useSignup } from "@/auth/hooks/useSignup";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router";

type SignupForm = SignupInput & {
  confirmPassword: string;
};

export const SignupPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setError,
    getValues,
  } = useForm<SignupForm>();

  const signupMutation = useSignup();

  const onSubmit = async (data: SignupInput) => {
    try {
      await signupMutation.mutateAsync({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        password: data.password.trim(),
        roles: data.roles,
      });
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "Este correo ya está registrado",
      });
      console.log(error);
    }
  };

  return (
    <form className={cn("flex flex-col gap-6")} onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Crear una cuenta</h1>
        </div>
        <Field>
          <FieldLabel htmlFor="firstName">Nombre</FieldLabel>
          <Input
            id="firstName"
            type="text"
            placeholder="Ana Camila"
            className="bg-background"
            {...register("firstName", {
              required: "Nombre es obligatorio",
              minLength: {
                value: 1,
                message: "El nombre debe tener al menos 1 carácter.",
              },
              maxLength: {
                value: 100,
                message: "El nombre no puede tener más de 100 carácteres",
              },
            })}
          />
          {errors.firstName && <FieldError>{errors.firstName.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="lastName">Apellidos</FieldLabel>
          <Input
            id="lastName"
            type="text"
            placeholder="Balderas Aguilar"
            className="bg-background"
            {...register("lastName", {
              required: "Apellidos son obligatorios.",
              minLength: {
                value: 1,
                message: "El nombre debe tener al menos 1 carácter.",
              },
              maxLength: {
                value: 100,
                message: "El nombre no puede tener más de 100 carácteres",
              },
            })}
          />
          {errors.lastName && <FieldError>{errors.lastName.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="correo@example.com"
            className="bg-background"
            {...register("email", {
              required: "Correo Eléctronico es obligatorio.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo electrónico no válido",
              },
            })}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Contraseña</FieldLabel>
          <Input
            id="password"
            type="password"
            className="bg-background"
            {...register("password", {
              required: "Contraseña es obligatoria.",
              minLength: {
                value: 9,
                message: "El nombre debe tener al menos 9 caracteres.",
              },
            })}
          />
          <FieldDescription>Debe tener más de 8 caracteres</FieldDescription>
          {errors.password && <FieldError>{errors.password.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirmar Contraseña</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            className="bg-background"
            {...register("confirmPassword", {
              required: "Confirmar contraseña es obligatoria.",
              validate: (value) =>
                value === getValues("password") || "Las contraseñas no coinciden",
            })}
          />
          <FieldDescription>Por favor, confirma tu contraseña</FieldDescription>
          {errors.confirmPassword && <FieldError>{errors.confirmPassword.message}</FieldError>}
        </Field>

        <Controller
          name="roles"
          control={control}
          rules={{ required: "Debes seleccionar un tipo de cuenta." }}
          render={({ field }) => (
            <RadioGroup value={field.value?.[0]} onValueChange={(value) => field.onChange([value])}>
              <FieldSet className="w-full max-w-xs">
                <FieldLegend variant="label">Tipo de Cuenta</FieldLegend>
                <FieldDescription>
                  Es importante seleccionar bien, ya que después no se podrá cambiar
                </FieldDescription>

                <Field orientation="horizontal">
                  <RadioGroupItem value="ROLE_COMPANY" id="ROLE_COMPANY" />
                  <FieldLabel htmlFor="ROLE_COMPANY" className="font-normal">
                    Empresa
                  </FieldLabel>
                </Field>

                <Field orientation="horizontal">
                  <RadioGroupItem value="ROLE_DEVELOPER" id="ROLE_DEVELOPER" />
                  <FieldLabel htmlFor="ROLE_DEVELOPER" className="font-normal">
                    Programador
                  </FieldLabel>
                </Field>
              </FieldSet>
            </RadioGroup>
          )}
        />
        {errors.roles && <FieldError>{errors.roles.message}</FieldError>}

        <Field>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
          </Button>
        </Field>
        <FieldSeparator>O continua con</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              Crear cuenta con GitHub
            </a>
          </Button>
          <FieldDescription className="px-6 text-center">
            ¿Ya tienes una cuenta? <Link to="/auth/login">Iniciar Sesión</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
