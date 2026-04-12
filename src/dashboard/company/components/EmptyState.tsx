import { Link } from "react-router";

export const EmptyState = () => {
  return (
    <div className="border border-dashed border-gray-300 rounded-2xl p-10 text-center">
      <h3 className="text-lg font-semibold text-gray-900">No tienes ofertas aún</h3>
      <p className="text-gray-600 text-sm mt-2">
        Crea tu primera oferta de trabajo para empezar a recibir candidatos.
      </p>

      <Link
        to="/company-dashboard/create-job-offer"
        className="inline-block mt-4 px-5 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
      >
        Crear primera oferta
      </Link>
    </div>
  );
};
