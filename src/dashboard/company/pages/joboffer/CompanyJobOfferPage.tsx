import { useGetApplications } from "@/hooks/useGetApplications";
import { useGetJobOfferById } from "@/hooks/useGetJobOfferById";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { useUpdateStatusApplication } from "../../hooks/useUpdateStatusApplication";
import { ContactDialog } from "../../components/ContactDialog";

const formatSalary = (salary: number, currency: string) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
  }).format(salary);
};

const statusConfig = (status: string) => {
  switch (status) {
    case "APPLIED":
      return { label: "Postulado", className: "bg-blue-100 text-blue-600" };
    case "UNDER_REVIEW":
      return { label: "En revisión", className: "bg-yellow-100 text-yellow-600" };
    case "OFFER":
      return { label: "Oferta", className: "bg-purple-100 text-purple-600" };
    case "HIRED":
      return { label: "Contratado", className: "bg-green-100 text-green-600" };
    case "REJECTED":
      return { label: "Rechazado", className: "bg-red-100 text-red-600" };
    default:
      return { label: status, className: "bg-gray-100 text-gray-600" };
  }
};

export const CompanyJobOffePage = () => {
  const { id } = useParams();

  const { data: jobOffer, isLoading } = useGetJobOfferById(id!);

  const { data: applications } = useGetApplications({
    jobOfferId: jobOffer?.id,
  });

  const updateStatus = useUpdateStatusApplication();

  if (isLoading) {
    return <p className="text-center mt-10">Cargando oferta...</p>;
  }

  if (!jobOffer) {
    return <p className="text-center mt-10">No se encontró la oferta</p>;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {/* BACK */}
        <Link to="/company-dashboard/job-offers">
          <div className="flex items-center gap-2 mb-4">
            <ArrowLeft size={16} />
            <p>Volver</p>
          </div>
        </Link>

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 🧾 OFERTA */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h1 className="text-3xl font-bold">{jobOffer.position}</h1>
              <p className="text-gray-600">{jobOffer.companyProfile.companyName}</p>

              <p className="text-2xl font-bold text-green-600 mt-4">
                {formatSalary(jobOffer.salary, jobOffer.currency)}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-lg font-semibold mb-2">Descripción</h2>
              <p className="text-gray-700 whitespace-pre-line">{jobOffer.description}</p>
            </div>
          </div>

          {/* 👥 APLICACIONES */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Candidatos</h2>

            {!applications?.content.length && (
              <p className="text-gray-500 text-sm">No hay aplicaciones aún</p>
            )}

            {applications?.content.map((app) => {
              const status = statusConfig(app.status);

              return (
                <div
                  key={app.id}
                  className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition space-y-4 border"
                >
                  {/* 🔝 HEADER */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-semibold text-lg">
                          {app.developerProfile?.user?.firstName}{" "}
                          {app.developerProfile?.user?.lastName}
                        </p>

                        <p className="text-sm text-gray-500">Desarrollador</p>

                        <p className="text-xs text-gray-400">
                          {app.developerProfile?.developerEmail}
                        </p>
                      </div>
                    </div>

                    {/* STATUS */}
                    <span className={`text-xs px-3 py-1 rounded-full ${status.className}`}>
                      {status.label}
                    </span>
                  </div>

                  {/* 🧠 INFO */}
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {app.developerProfile?.description || "Sin descripción"}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {app.developerProfile?.techStack
                        ?.split(",")
                        .slice(0, 4)
                        .map((skill: string) => (
                          <span key={skill} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {skill.trim()}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="inline-block">
                    {/* CONTACTAR (ahora como botón real) */}
                    <ContactDialog dev={app.developerProfile} />
                  </div>
                  {/* ✉️ CONTACT + ACTIONS */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    {/* STATUS ACTIONS */}
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => updateStatus.mutate({ id: app.id, status: "UNDER_REVIEW" })}
                        className="text-xs px-2 py-1 bg-yellow-100 rounded hover:bg-yellow-200"
                      >
                        Revisar
                      </button>

                      <button
                        onClick={() => updateStatus.mutate({ id: app.id, status: "OFFER" })}
                        className="text-xs px-2 py-1 bg-purple-100 rounded hover:bg-purple-200"
                      >
                        Ofertar
                      </button>

                      <button
                        onClick={() => updateStatus.mutate({ id: app.id, status: "HIRED" })}
                        className="text-xs px-2 py-1 bg-green-100 rounded hover:bg-green-200"
                      >
                        Contratar
                      </button>

                      <button
                        onClick={() => updateStatus.mutate({ id: app.id, status: "REJECTED" })}
                        className="text-xs px-2 py-1 bg-red-100 rounded hover:bg-red-200"
                      >
                        Rechazar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
