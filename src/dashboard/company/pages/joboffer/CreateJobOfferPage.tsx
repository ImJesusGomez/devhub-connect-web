import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import type { CreateJobOfferInput } from "../../actions/create-job-offer.action";
import { InputErrors } from "@/components/custom/InputErrors";

import { useGetCompanyProfile } from "../../hooks/useGetCompanyProfile";
import { useGetProfile } from "@/hooks/useGetProfile";
import { useCreateJobOffer } from "../../hooks/useCreateJobOffer";
import { Link } from "react-router";

export const CreateJobOfferPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CreateJobOfferInput>();

  const { data: user } = useGetProfile();
  const { data: companyProfile } = useGetCompanyProfile(true, user?.id);

  const createJobOffer = useCreateJobOffer();

  if (!companyProfile) return;

  const onSubmit = async (data: CreateJobOfferInput) => {
    try {
      const res = await createJobOffer.mutateAsync({
        ...data,
        companyProfileID: companyProfile.id,
      });
      console.log(res);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <Link to={"/company-dashboard/job-offers"}>Volver</Link>
      <h2 className="text-3xl font-bold mb-6">Crea una oferta laboral</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* position */}
        <Field className="mb-6">
          <FieldLabel htmlFor="position">Posición</FieldLabel>
          <Input
            id="position"
            type="text"
            {...register("position", {
              required: "La posición es obligatoria.",
              minLength: {
                value: 1,
                message: "Debe tener al menos 1 carácter.",
              },
              maxLength: {
                value: 100,
                message: "No puede tener más de 100 caracteres.",
              },
            })}
          />
          {errors.position && <InputErrors error={errors.position.message} />}
        </Field>

        <div className="flex flex-row justify-between gap-10">
          {/* salary */}
          <Field className="mb-6">
            <FieldLabel htmlFor="salary">Salario</FieldLabel>
            <Input
              id="salary"
              type="number"
              min={0}
              {...register("salary", {
                required: "El salario es obligatorio.",
              })}
            />
            {errors.salary && <InputErrors error={errors.salary.message} />}
          </Field>

          {/* currency */}
          <Field className="mb-6">
            <FieldLabel htmlFor="currency">Moneda</FieldLabel>
            <Controller
              control={control}
              name="currency"
              rules={{ required: "El tipo de moneda es obligatorio." }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="currency" className="w-full max-w-48">
                    <SelectValue placeholder="Selecciona el tipo de moneda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Moneda</SelectLabel>
                      <SelectItem value="USD">Dólar estadounidense</SelectItem>
                      <SelectItem value="MXN">Peso mexicano</SelectItem>
                      <SelectItem value="EUR">Euro</SelectItem>
                      <SelectItem value="CAD">Dólar canadiense</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.currency && <InputErrors error={errors.currency.message} />}
          </Field>
        </div>

        {/* workInfo */}
        <div className="flex flex-row gap-10">
          {/* contractType */}
          <Field className="mb-6">
            <FieldLabel htmlFor="contractType">Tipo de Contrato</FieldLabel>
            <Controller
              control={control}
              rules={{ required: "El tipo de contrato es obligatorio." }}
              name="contractType"
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="contractType" className="w-full max-w-48">
                    <SelectValue placeholder="Selecciona el tipo de contrato" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Contrato</SelectLabel>
                      <SelectItem value="FULL_TIME">Tiempo completo</SelectItem>
                      <SelectItem value="PART_TIME">A tiempo parcial</SelectItem>
                      <SelectItem value="CONTRACT">Por contrato</SelectItem>
                      <SelectItem value="FREELANCE">Independiente</SelectItem>
                      <SelectItem value="TEMPORARY">Temporal</SelectItem>
                      <SelectItem value="INTERNSHIP">Pasantía</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.contractType && <InputErrors error={errors.contractType.message} />}
          </Field>

          {/* workMode */}
          <Field className="mb-6">
            <FieldLabel htmlFor="workMode">Tipo de Trabajo</FieldLabel>
            <Controller
              control={control}
              rules={{ required: "El tipo de trabajo es obligatorio." }}
              name="workMode"
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="workMode" className="w-full max-w-48">
                    <SelectValue placeholder="Selecciona el tipo de trabajo" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Trabajo</SelectLabel>
                      <SelectItem value="REMOTE">Remoto</SelectItem>
                      <SelectItem value="ONSITE">Presencial</SelectItem>
                      <SelectItem value="HYBRID">Híbrido</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.workMode && <InputErrors error={errors.workMode.message} />}
          </Field>

          {/* experienceLevel */}
          <Field className="mb-6">
            <FieldLabel htmlFor="experienceLevel">Nivel de Experiencia</FieldLabel>
            <Controller
              control={control}
              rules={{ required: "La experiencia es obligatoria." }}
              name="experienceLevel"
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="experienceLevel" className="w-full max-w-48">
                    <SelectValue placeholder="Selecciona la experiencia requerida" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Experiencia</SelectLabel>
                      <SelectItem value="INTERN">Practicante</SelectItem>
                      <SelectItem value="JUNIOR">Junior</SelectItem>
                      <SelectItem value="MID_LEVEL">Nivel Medio</SelectItem>
                      <SelectItem value="SENIOR">Senior</SelectItem>
                      <SelectItem value="LEAD">Líder técnico</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.experienceLevel && <InputErrors error={errors.experienceLevel.message} />}
          </Field>
        </div>

        {/* description */}
        <Field className="mb-6">
          <FieldLabel htmlFor="description">Descripción</FieldLabel>
          <Textarea
            id="description"
            {...register("description", {
              required: "La descripción es obligatoria.",
            })}
          />
          {errors.description && <InputErrors error={errors.description.message} />}
        </Field>

        {/* minEducation */}
        <Field className="mb-6">
          <FieldLabel htmlFor="minEducation">Educación Mínima</FieldLabel>
          <Input
            id="minEducation"
            type="text"
            {...register("minEducation", {
              required: "La educación mínima es obligatoria",
              minLength: {
                value: 1,
                message: "Debe tener al menos 1 carácter.",
              },
              maxLength: {
                value: 100,
                message: "No puede tener más de 100 caracteres.",
              },
            })}
          />
          {errors.minEducation && <InputErrors error={errors.minEducation.message} />}
        </Field>

        {/* minExperienceYears */}
        <Field className="mb-6">
          <FieldLabel htmlFor="minExperienceYears">Experiencia Mínima Requerida en Años</FieldLabel>
          <Input
            id="minExperienceYears"
            type="number"
            min={0}
            {...register("minExperienceYears", {
              required: "La experiencia requerida mínima requerida en años es obligatoria.",
            })}
          />
          {errors.minExperienceYears && <InputErrors error={errors.minExperienceYears.message} />}
        </Field>

        {/* requiredSkills */}
        <Field className="mb-6">
          <FieldLabel htmlFor="requiredSkills">Habilidades Requeridas</FieldLabel>
          <Textarea
            id="requiredSkills"
            {...register("requiredSkills", {
              required: "Las habilidades requeridas son obligatorias.",
            })}
          />
          {errors.requiredSkills && <InputErrors error={errors.requiredSkills.message} />}
        </Field>

        {/* requiredLanguages */}
        <Field className="mb-6">
          <FieldLabel htmlFor="requiredLanguages">Leguajes Requerido</FieldLabel>
          <Input
            id="requiredLanguages"
            {...register("requiredLanguages", {
              required: "Los lengaujes requeridos son obligatorios.",
            })}
          />
          {errors.requiredLanguages && <InputErrors error={errors.requiredLanguages.message} />}
        </Field>

        {/* age*/}
        <div className="flex flex-row justify-between gap-10">
          {/* minAge */}
          <Field className="mb-6">
            <FieldLabel htmlFor="minAge">Edad Mínima</FieldLabel>
            <Input
              id="minAge"
              type="number"
              min={0}
              {...register("minAge", {
                required: "La edad mínima es obligatoria.",
              })}
            />
            {errors.minAge && <InputErrors error={errors.minAge.message} />}
          </Field>

          {/* maxAge */}
          <Field className="mb-6">
            <FieldLabel htmlFor="maxAge">Edad Máxima</FieldLabel>
            <Input
              id="maxAge"
              type="number"
              {...register("maxAge", {
                required: "La edad máxima es obligatoria.",
              })}
            />
            {errors.maxAge && <InputErrors error={errors.maxAge.message} />}
          </Field>
        </div>

        <Field>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creando..." : "Crear"}
          </Button>
        </Field>
      </form>
    </>
  );
};
