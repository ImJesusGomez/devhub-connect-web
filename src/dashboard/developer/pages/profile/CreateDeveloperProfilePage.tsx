import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import type { CreateDeveloperProfileInput } from "../../actions/create-developer-profile.action";
import { useCreateDeveloperProfile } from "../../hooks/useCreateDeveloperProfile";
import { useGetProfile } from "@/hooks/useGetProfile";
import { Button } from "@/components/ui/button";

export const CreateDeveloperProfilePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateDeveloperProfileInput>();

  const { data: user } = useGetProfile();

  const createProfileMutation = useCreateDeveloperProfile();

  if (!user) return;

  const onSubmit = async (data: CreateDeveloperProfileInput) => {
    try {
      await createProfileMutation.mutateAsync({
        ...data,
        userId: user?.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet className="w-full">
        <FieldGroup>
          {/* TechStack */}
          <Field>
            <FieldLabel htmlFor="techStack">Tecnologías</FieldLabel>
            <Input
              id="techStack"
              type="text"
              placeholder="Ej: Java, Spring Boot, React, PostgreSQL..."
              {...register("techStack", {
                required: "Las tecnologías son obligatorias.",
              })}
            />
            <FieldDescription>
              Lista las tecnologías que utilizas separadas por comas.
            </FieldDescription>
            {errors.techStack && <FieldError>{errors.techStack.message}</FieldError>}
          </Field>
          {/* yearsOfExperience */}
          <Field>
            <FieldLabel htmlFor="yearsOfExperience">Años de Experiencia</FieldLabel>
            <Input
              id="yearsOfExperience"
              type="number"
              min={0}
              {...register("yearsOfExperience", {
                required: "Años de experiencia son obligatorios.",
                min: {
                  value: 0,
                  message: "Años no pueden ser menor a 0.",
                },
              })}
            />
            {errors.yearsOfExperience && (
              <FieldError>{errors.yearsOfExperience.message}</FieldError>
            )}
          </Field>
          <FieldGroup className="flex flex-row ">
            {/* level */}
            <Field>
              <FieldLabel htmlFor="level">Nivel</FieldLabel>

              <Controller
                control={control}
                name="level"
                rules={{ required: "Nivel es obligatorip" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="level" className="w-full max-w-48">
                      <SelectValue placeholder="Selecciona un Nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Nivel</SelectLabel>
                        <SelectItem value="INTERN">Practicante</SelectItem>
                        <SelectItem value="JUNIOR">Junior</SelectItem>
                        <SelectItem value="MID_LEVEL">Nivel Medio</SelectItem>
                        <SelectItem value="SENIOR">Senior</SelectItem>
                        <SelectItem value="LEAD">Líder Técnico</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.level && <FieldError>{errors.level.message}</FieldError>}
            </Field>
            {/* preferredWorkMode */}
            <Field>
              <FieldLabel htmlFor="preferredWorkMode">Tipo de Trabajo</FieldLabel>

              <Controller
                control={control}
                name="preferredWorkMode"
                rules={{ required: "Tipo de Trabajo es obligatorio." }}
                render={({ field }) => (
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="preferredWorkMode" className="w-full max-w-48">
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipo</SelectLabel>
                        <SelectItem value="REMOTE">Remoto</SelectItem>
                        <SelectItem value="ONSITE">Presencial</SelectItem>
                        <SelectItem value="HYBRID">Híbrido</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.preferredWorkMode && (
                <FieldError>{errors.preferredWorkMode.message}</FieldError>
              )}
            </Field>
            {/* availability */}
            <Field>
              <FieldLabel htmlFor="availability">Disponibilidad</FieldLabel>
              <Controller
                control={control}
                name="availability"
                rules={{ required: "Disponibilidad es obligatoria." }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="availability" className="w-full max-w-48">
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipo</SelectLabel>
                        <SelectItem value="AVAILABLE">Disponible</SelectItem>
                        <SelectItem value="EMPLOYED">Ocupado</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.availability && <FieldError>{errors.availability.message}</FieldError>}
            </Field>
          </FieldGroup>
          {/* description */}
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              {...register("description", {
                required: "Descripción es obligatoria.",
              })}
            />
            <FieldDescription>
              Describe tu perfil como desarrollador: en qué has trabajado, qué tecnologías utilizas,
              tu experiencia y también tus intereses o hobbies relacionados.
            </FieldDescription>
            {errors.description && <FieldError>{errors.description.message}</FieldError>}
          </Field>
          <Field>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creando..." : "Crear"}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};
