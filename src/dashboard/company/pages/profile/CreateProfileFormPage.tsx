import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { InputErrors } from "@/components/custom/InputErrors";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import type { CreateCompanyProfileInput } from "../../actions/create-company-profile.action";
import { useCreateCompanyProfile } from "../../hooks/useCreateCompanyProfile";

export const CreateProfileFormPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CreateCompanyProfileInput>();

  const createProfile = useCreateCompanyProfile();

  const onSubmit = async (data: CreateCompanyProfileInput) => {
    try {
      await createProfile.mutateAsync(data);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mb-6">Crea tu perfil como empresa</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* companyName */}
          <Field className="mb-6">
            <FieldLabel htmlFor="companyName">Nombre de la compañía</FieldLabel>
            <Input
              id="companyName"
              type="text"
              {...register("companyName", {
                required: "El nombre de la compañía es obligatorio.",
                minLength: {
                  value: 1,
                  message: "El nombre de la compañía debe tener al menos 1 carácter.",
                },
                maxLength: {
                  value: 150,
                  message: "El nombre de la compañía no puede tener más de 100 caracteres.",
                },
              })}
            />
            {errors.companyName && <InputErrors error={errors.companyName.message} />}
          </Field>

          {/* Description */}
          <Field className="mb-6">
            <FieldLabel htmlFor="description">Descripción</FieldLabel>
            <Textarea
              id="description"
              {...register("description", {
                required: "La descripción es obligatoria.",
                minLength: {
                  value: 1,
                  message: "El nombre de la compañía debe tener al menos 1 carácter.",
                },
              })}
            />
            {errors.description && <InputErrors error={errors.description.message} />}
          </Field>

          {/* TaxId */}
          <Field className="mb-6">
            <FieldLabel htmlFor="taxId">RFC</FieldLabel>
            <Input
              id="taxId"
              type="text"
              {...register("taxId", {
                required: "El RFC es obligatorio.",
                pattern: {
                  value: /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/,
                  message: "No es un RFC válido",
                },
              })}
            />
            {errors.taxId && <InputErrors error={errors.taxId.message} />}
          </Field>

          {/* Country */}
          <Field className="mb-6">
            <FieldLabel htmlFor="country">País</FieldLabel>
            <Input
              id="country"
              type="text"
              autoComplete="country"
              {...register("country", {
                required: "El país es obligatorio.",
              })}
            />
            {errors.country && <InputErrors error={errors.country.message} />}
          </Field>

          {/* state */}
          <Field className="mb-6">
            <FieldLabel htmlFor="state">Estado</FieldLabel>
            <Input
              id="state"
              type="text"
              {...register("state", {
                required: "El Estado es obligatorio.",
              })}
            />
            {errors.state && <InputErrors error={errors.state.message} />}
          </Field>

          {/* city */}
          <Field className="mb-6">
            <FieldLabel htmlFor="city">Ciudad</FieldLabel>
            <Input
              id="city"
              type="text"
              {...register("city", {
                required: "La Ciudad es obligatoria.",
              })}
            />
            {errors.city && <InputErrors error={errors.city.message} />}
          </Field>

          {/* website */}
          <Field className="mb-6">
            <FieldLabel htmlFor="website">Página web</FieldLabel>

            <Input
              id="website"
              type="url"
              {...register("website", {
                pattern: {
                  value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/,
                  message: "Ingresa una URL válida (ej: https://example.com)",
                },
              })}
            />

            {errors.website && <InputErrors error={errors.website.message} />}
          </Field>

          {/* Size */}
          <Field className="mb-6">
            <FieldLabel htmlFor="size">Tamaño</FieldLabel>

            <Controller
              control={control}
              name="size"
              rules={{ required: "El tamaño es obligatorio." }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="size" className="w-full max-w-48">
                    <SelectValue placeholder="Selecciona un tamaño" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tamaño</SelectLabel>
                      <SelectItem value="MICRO">Micro</SelectItem>
                      <SelectItem value="SMALL">Pequeña</SelectItem>
                      <SelectItem value="MEDIUM">Mediana</SelectItem>
                      <SelectItem value="LARGE">Grande</SelectItem>
                      <SelectItem value="ENTERPRISE">Empresa</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />

            {errors.size && <InputErrors error={errors.size.message} />}
          </Field>

          <Field>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creando..." : "Crear"}
            </Button>
          </Field>
        </form>
      </div>
    </>
  );
};
