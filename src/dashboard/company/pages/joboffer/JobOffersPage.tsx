import { useState } from "react";
import { Link } from "react-router";
import { useGetCompanyProfileByUser } from "../../hooks/useGetCompanyProfileByUser";
import { useGetJobOffers } from "@/hooks/useGetJobOffers";
import { useDebounce } from "@/hooks/useDebounce";
import { EmptyState } from "../../components/EmptyState";
import { JobCard } from "../../components/JobCard";
import type { JobOffer } from "@/interfaces/job-offer.interface";
import { useHasCompanyProfile } from "../../hooks/useHasCompanyProfile";
import { WithoutProfile } from "@/components/custom/WithoutProfile";

export const JobOffersPage = () => {
  const { data: hasProfile } = useHasCompanyProfile();
  const { data: companyProfile } = useGetCompanyProfileByUser();

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const { data: jobOffers, isLoading } = useGetJobOffers({
    companyProfileId: companyProfile?.id,
    position: debouncedSearch || undefined,
  });

  const jobs = jobOffers?.content ?? [];

  return !hasProfile ? (
    <WithoutProfile profileType="Empresa" to="/company-dashboard/create-profile" />
  ) : (
    <div className="max-w-6xl px-6 py-10 space-y-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Ofertas de trabajo</h1>
          <p className="text-gray-600 text-sm">Busca y administra tus vacantes</p>
        </div>

        <Link
          to="/company-dashboard/create-job-offer"
          className="px-5 py-2 rounded-xl bg-gray-900 text-white"
        >
          + Crear oferta
        </Link>
      </div>

      {/* SEARCH */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Buscar por posición..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      {/* LOADING */}
      {isLoading && <div className="text-gray-500 text-sm">Buscando...</div>}

      {/* LIST */}
      {jobs.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job: JobOffer) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};
