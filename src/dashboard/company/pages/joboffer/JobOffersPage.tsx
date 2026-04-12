import { Link } from "react-router";

export const JobOffersPage = () => {
  return (
    <div>
      <Link to={"/company-dashboard/create-job-offer"}>Crear oferta</Link>
    </div>
  );
};
