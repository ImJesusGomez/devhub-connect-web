import { NavImage } from "./NavImage";
import { Navbar } from "./Navbar";

export const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-blue-900 via-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col gap-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Logo + descripción */}
          <div className="flex flex-col gap-3 max-w-sm">
            <NavImage />
            <p className="text-sm text-blue-200">
              Conectando desarrolladores con empresas a través de talento real, proyectos y
              oportunidades.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <Navbar />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-blue-400/30" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200 gap-4">
          <p>© 2026 DevHub Connect</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition">
              Términos
            </a>
            <a href="#" className="hover:text-white transition">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
