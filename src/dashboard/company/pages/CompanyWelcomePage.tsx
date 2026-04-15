import { FeatureCard } from "../../../components/custom/FeatureCard";

export const CompanyWelcomePage = () => {
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
      </div>
    </div>
  );
};
