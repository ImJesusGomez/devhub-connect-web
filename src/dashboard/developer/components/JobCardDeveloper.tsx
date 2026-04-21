import type { JobOffer } from "@/interfaces/job-offer.interface";
import { Link } from "react-router";

export const JobCardDeveloper = ({ job }: { job: JobOffer }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">{job.position}</h3>

      <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="font-medium text-gray-900">${job.salary ?? "—"}</span>
      </div>

      <div className="flex justify-end">
        <Link
          to={`/developer-dashboard/search-job-offers/${job.id}`}
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          Ver detalles →
        </Link>
      </div>
    </div>
  );
};
