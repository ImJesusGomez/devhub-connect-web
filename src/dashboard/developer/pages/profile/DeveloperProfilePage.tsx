import { useGetProfile } from "@/hooks/useGetProfile";
import { useHasDeveloperProfile } from "../../hooks/useHasDeveloperProfile";
import { useGetDeveloperProfile } from "../../hooks/useGetDeveloperProfile";
import { Link } from "react-router";

export const DeveloperProfilePage = () => {
  const { data: user } = useGetProfile();

  const { data: hasProfile, isLoading: loadingHas } = useHasDeveloperProfile(user?.id || "");

  const shouldFetchProfile = hasProfile === true;

  const { data: profile, isLoading: loadingProfile } = useGetDeveloperProfile(user?.id || "");

  const isLoading = loadingHas || (shouldFetchProfile && loadingProfile);

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-gray-500 animate-pulse">
        Cargando perfil...
      </div>
    );
  }

  if (hasProfile === false) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-semibold">Aún no tienes perfil</h2>
        <p className="text-gray-500 max-w-md">
          Crea tu perfil para empezar a destacar y aplicar a oportunidades.
        </p>
        <Link
          to="/developer-dashboard/create-profile"
          className="px-6 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 transition"
        >
          Crear perfil
        </Link>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-gray-500">
        No se pudo cargar el perfil
      </div>
    );
  }

  return (
    <div className="max-w-6xl px-6 py-10 space-y-8">
      {/* HEADER */}
      <div className="rounded-3xl bg-linear-to-r from-indigo-600 via-purple-600 to-slate-900 text-white p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Perfil de Desarrollador</h1>
            <p className="text-white/70 mt-2 max-w-2xl">{profile.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge>{formatLevel(profile.level)}</Badge>
            <Badge>{formatAvailability(profile.availability)}</Badge>
            <Badge>{formatWorkMode(profile.preferredWorkMode)}</Badge>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Información profesional">
          <Info label="Tech Stack" value={profile.techStack} />
          <Info label="Experiencia" value={`${profile.yearsOfExperience} años`} />
          <Info label="Nivel" value={formatLevel(profile.level)} />
        </Card>

        <Card title="Preferencias laborales">
          <Info label="Modalidad" value={formatWorkMode(profile.preferredWorkMode)} />
          <Info label="Disponibilidad" value={formatAvailability(profile.availability)} />
        </Card>
      </div>

      <div className="flex justify-end">
        <Link
          to="/developer-dashboard/edit-profile"
          className="px-5 py-2 rounded-xl border hover:bg-gray-100 transition text-sm"
        >
          Editar perfil
        </Link>
      </div>
    </div>
  );
};

/* ---------------- UI COMPONENTS ---------------- */

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {children}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b last:border-b-0">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-gray-900 font-medium text-sm">{value || "—"}</span>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm backdrop-blur">
      {children}
    </span>
  );
}

/* ---------------- FORMATTERS ---------------- */

const formatLevel = (level?: string) => {
  switch (level) {
    case "INTERN":
      return "Intern";
    case "JUNIOR":
      return "Junior";
    case "MID_LEVEL":
      return "Mid Level";
    case "SENIOR":
      return "Senior";
    case "LEAD":
      return "Lead";
    default:
      return "-";
  }
};

const formatWorkMode = (mode?: string) => {
  switch (mode) {
    case "REMOTE":
      return "Remoto";
    case "ONSITE":
      return "Presencial";
    case "HYBRID":
      return "Híbrido";
    default:
      return "-";
  }
};

const formatAvailability = (availability?: string) => {
  switch (availability) {
    case "AVAILABLE":
      return "Disponible";
    case "EMPLOYED":
      return "Empleado";
    default:
      return "-";
  }
};
