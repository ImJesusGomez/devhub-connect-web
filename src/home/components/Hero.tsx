export const Hero = () => {
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 bg-[url('/hero.gif')] bg-cover bg-center ">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      {/* Contenido */}
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-lg mx-auto text-center xl:max-w-3xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            El mejor sitio para buscar empleo como{" "}
            <span className="text-cyan-300">&lt;Programador/&gt;</span>
          </h1>

          <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
            DevHubConnect es la plataforma donde programadores y empresas se conectan de forma
            directa, sin intermediarios.
          </p>

          {/* Stats */}
          <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-24 gap-x-6">
            <div>
              <p className="text-4xl font-bold text-white">+2,000</p>
              <p className="mt-2 text-sm font-medium text-gray-300">Programadores registrados</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-white">+100</p>
              <p className="mt-2 text-sm font-medium text-gray-300">
                Ofertas laborales a la semana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
