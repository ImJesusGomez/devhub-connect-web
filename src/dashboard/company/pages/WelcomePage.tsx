import { DontHaveProfile } from "../components/DontHaveProfile";
import { useHasCompanyProfile } from "../hooks/useHasCompanyProfile";

export const WelcomePage = () => {
  const { data: hasProfile, isLoading } = useHasCompanyProfile();

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="min-h-screen  px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* HERO */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Bienvenido!!</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Administra tu perfil de empresa, publica vacantes y conecta con desarrolladores desde un
            solo lugar.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Publica vacantes"
            desc="Crea ofertas de trabajo y encuentra talento rápidamente."
          />
          <FeatureCard
            title="Gestiona tu empresa"
            desc="Controla tu perfil, información y visibilidad."
          />
          <FeatureCard
            title="Conecta desarrolladores"
            desc="Accede a perfiles de desarrolladores en minutos."
          />
        </div>

        {/* ALERT / PROFILE STATE */}
        {!hasProfile && (
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <DontHaveProfile />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------- UI COMPONENTS ---------------- */

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </div>
  );
}
