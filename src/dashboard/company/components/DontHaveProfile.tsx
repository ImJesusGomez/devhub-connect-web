import { Link } from "react-router";

export const DontHaveProfile = () => {
  return (
    <div className="p-4 mb-4 text-sm text-red-700 rounded-md bg-red-100 w-fit">
      <span className="font-bold">¡Espera!</span> Aún no has creado tu cuenta como empresa. Crea una
      dando click{" "}
      <Link to="/company-dashboard/create-profile" className="underline font-bold">
        aquí
      </Link>
    </div>
  );
};
