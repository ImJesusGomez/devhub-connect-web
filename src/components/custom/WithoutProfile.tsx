import { Link } from "react-router";

interface Props {
  profileType: string;
  to: string;
}

export const WithoutProfile = ({ profileType, to }: Props) => {
  return (
    <div className="p-4 mb-4 text-sm text-red-700 rounded-md bg-red-100 w-fit mx-auto">
      <span className="font-bold">¡Espera!</span> Aún no has creado tu cuenta como {profileType}.
      Crea una dando click{" "}
      <Link to={to} className="underline font-bold">
        aquí
      </Link>
    </div>
  );
};
