import { WithoutProfile } from "@/components/custom/WithoutProfile";
import { useGetCompanyProfileByUser } from "../../hooks/useGetCompanyProfileByUser";
import { useHasCompanyProfile } from "../../hooks/useHasCompanyProfile";
import { Link } from "react-router";

export const CompanyProfilePage = () => {
  const { data: hasProfile, isLoading: loadingHas } = useHasCompanyProfile();

  const shouldFetchProfile = hasProfile === true;

  const { data: profile, isLoading: loadingProfile } =
    useGetCompanyProfileByUser(shouldFetchProfile);

  const isLoading = loadingHas || (shouldFetchProfile && loadingProfile);

  const sizeLabel: Record<string, string> = {
    MICRO: "Microempresa",
    SMALL: "Pequeña empresa",
    MEDIUM: "Mediana empresa",
    LARGE: "Gran empresa",
    ENTERPRISE: "Corporación",
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (hasProfile === false) {
    return <WithoutProfile profileType="Empresa" to="/company-dashboard/create-profile" />;
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
      <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-700 text-white p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{profile.companyName}</h1>
            <p className="text-white/70 mt-2 max-w-2xl">{profile.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge>{sizeLabel[profile.size]}</Badge>
            <Badge>{profile.country}</Badge>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Información de la empresa">
          <Info label="Nombre" value={profile.companyName} />
          <Info label="RFC / Tax ID" value={profile.taxId} />
          <Info label="Website" value={profile.website} />
          <Info label="Tamaño" value={sizeLabel[profile.size]} />
        </Card>

        <Card title="Ubicación">
          <Info label="País" value={profile.country} />
          <Info label="Estado" value={profile.state} />
          <Info label="Ciudad" value={profile.city} />
        </Card>
      </div>

      <Card title="Cuenta asociada">
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-900">Email:</span> {profile.user.email}
        </p>
      </Card>

      <div className="flex justify-end">
        <Link
          to={`/company-dashboard/edit-profile/${profile.id}`}
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
