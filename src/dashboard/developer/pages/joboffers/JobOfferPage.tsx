import { useGetJobOfferById } from "@/hooks/useGetJobOfferById";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { useCreateApplication } from "../../hooks/useCreateApplication";

const formatSalary = (salary: number, currency: string) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
  }).format(salary);
};

const labelMap = {
  contractType: {
    FULL_TIME: "Tiempo completo",
    PART_TIME: "Medio tiempo",
    CONTRACT: "Contrato",
    FREELANCE: "Freelance",
    TEMPORARY: "Temporal",
    INTERNSHIP: "Prácticas",
  },
  workMode: {
    REMOTE: "Remoto",
    ONSITE: "Presencial",
    HYBRID: "Híbrido",
  },
  experience: {
    INTERN: "Intern",
    JUNIOR: "Junior",
    MID_LEVEL: "Mid",
    SENIOR: "Senior",
    LEAD: "Lead",
  },
};

export const JobOfferPage = () => {
  const { id } = useParams();
  const { data: jobOffer, isLoading } = useGetJobOfferById(id!);

  const { mutate, isPending } = useCreateApplication();

  if (isLoading) {
    return <p className="text-center mt-10">Cargando oferta...</p>;
  }

  if (!jobOffer) {
    return <p className="text-center mt-10">No se encontró la oferta</p>;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto space-y-6 px-4">
        <Link to="/developer-dashboard/search-job-offers">
          <div className="flex flex-row  items-center mb-10 gap-2">
            <ArrowLeft size={16} />
            <p>Volver</p>
          </div>
        </Link>
        {/* HEADER PRINCIPAL */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold">{jobOffer.position}</h1>
            <p className="text-gray-600 mt-1">{jobOffer.companyProfile.companyName}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge">{labelMap.contractType[jobOffer.contractType]}</span>
              <span className="badge">{labelMap.workMode[jobOffer.workMode]}</span>
              <span className="badge">{labelMap.experience[jobOffer.experienceLevel]}</span>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end">
            <p className="text-2xl font-bold text-green-600">
              {formatSalary(jobOffer.salary, jobOffer.currency)}
            </p>

            <button
              onClick={() => jobOffer && mutate(jobOffer.id)}
              disabled={!jobOffer || isPending}
              className="mt-4 cursor-pointer bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-xl font-semibold"
            >
              {isPending ? "Aplicando..." : "Aplicar ahora"}
            </button>
          </div>
        </div>

        {/* INFO RÁPIDA */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">Experiencia</p>
            <p className="font-semibold">{jobOffer.minExperienceYears} años</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">Educación</p>
            <p className="font-semibold">{jobOffer.minEducation}</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">Edad</p>
            <p className="font-semibold">
              {jobOffer.minAge} - {jobOffer.maxAge}
            </p>
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Descripción del puesto</h2>
          <p className="text-gray-700 whitespace-pre-line">{jobOffer.description}</p>
        </div>

        {/* SKILLS & LANGUAGES */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Habilidades</h2>
            <p className="text-gray-700">{jobOffer.requiredSkills}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Idiomas</h2>
            <p className="text-gray-700">{jobOffer.requiredLanguages}</p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Estado: {jobOffer.status}</span>
          <button className="text-blue-600 hover:underline">Reportar oferta</button>
        </div>
      </div>
    </div>
  );
};
