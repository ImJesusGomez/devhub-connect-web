import { useGetApplications } from "@/hooks/useGetApplications";
import { useGetDeveloperProfileByUser } from "../../hooks/useGetDeveloperProfileByUser";
import type { StatusApplication } from "@/interfaces/application.interface";

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

const statusConfig = (status: StatusApplication) => {
  switch (status) {
    case "APPLIED":
      return {
        label: "Postulado",
        className: "text-blue-600 bg-blue-100",
      };
    case "UNDER_REVIEW":
      return {
        label: "En revisión",
        className: "text-yellow-600 bg-yellow-100",
      };
    case "OFFER":
      return {
        label: "Oferta recibida",
        className: "text-purple-600 bg-purple-100",
      };
    case "HIRED":
      return {
        label: "Contratado",
        className: "text-green-600 bg-green-100",
      };
    case "REJECTED":
      return {
        label: "Rechazado",
        className: "text-red-600 bg-red-100",
      };
    case "WITHDRAWN":
      return {
        label: "Retirado",
        className: "text-gray-600 bg-gray-200",
      };
    default:
      return {
        label: status,
        className: "text-gray-600 bg-gray-100",
      };
  }
};

const statusOrder: Record<string, number> = {
  OFFER: 1,
  UNDER_REVIEW: 2,
  APPLIED: 3,
  HIRED: 4,
  REJECTED: 5,
  WITHDRAWN: 6,
};

export const DeveloperApplications = () => {
  const { data: profile, isLoading: profileLoading } = useGetDeveloperProfileByUser();

  const { data: applications, isLoading: applicationsLoading } = useGetApplications({
    developerProfileId: profile?.id,
  });

  if (profileLoading || applicationsLoading) {
    return <p className="p-6">Cargando aplicaciones...</p>;
  }

  const sortedApplications = [...(applications?.content || [])].sort(
    (a, b) => statusOrder[a.status] - statusOrder[b.status],
  );

  if (!sortedApplications.length) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Mis Aplicaciones</h1>
        <p className="text-gray-500">Aún no has aplicado a ningún trabajo 🚀</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mis Aplicaciones</h1>

      <div className="grid gap-4">
        {sortedApplications.map((application) => {
          const status = statusConfig(application.status);

          return (
            <div
              key={application.id}
              className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">{application.jobOffer.position}</h2>

                <span className={`px-3 py-1 text-xs rounded-full ${status.className}`}>
                  {status.label}
                </span>
              </div>

              <p className="text-sm text-gray-500">
                Aplicado el: {formatDate(application.applicationDate)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
