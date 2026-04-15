import { FeatureCard } from "@/components/custom/FeatureCard";

export const DeveloperWelcomePage = () => {
  return (
    <div className="min-h-screen  px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* HERO */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Bienvenido!!</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Administra tu perfil de desarrollador, aplica a vacantes y conecta con empresas desde un
            solo lugar.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Crea tu perfil"
            desc="Crea tu perfil de desarrollador y conecta con empresas rápidamente."
          />
          <FeatureCard
            title="Contratación inmediata"
            desc="Encuentra trabajo más rápido que en cualquier otro lugar."
          />
          <FeatureCard
            title="Conecta con las mejores empresas tecnológicas"
            desc="Las empresas top en tecnología usan esta plataforma."
          />
        </div>
      </div>
    </div>
  );
};
