import { useState } from "react";
import { useGetDevelopers } from "@/hooks/useGetDevelopers";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { DevelopersTable } from "../../components/DevelopersTable";
import { PaginationControls } from "@/components/custom/PaginationControls";

export const FindDevelopersPage = () => {
  const [page, setPage] = useState(0);
  const [techStack, setTechStack] = useState("");
  const debouncedTechStack = useDebounce(techStack, 400);

  const { data, isLoading } = useGetDevelopers({
    page,
    size: 10,
    techStack: debouncedTechStack || undefined,
  });

  const handleSearch = (value: string) => {
    setTechStack(value);
    setPage(0);
  };

  return (
    <div className="space-y-4 p-6">
      <Input
        placeholder="Buscar por tech stack..."
        value={techStack}
        onChange={(e) => handleSearch(e.target.value)}
        className="max-w-sm"
      />

      <DevelopersTable developers={data?.content ?? []} isLoading={isLoading} />

      {data && (
        <PaginationControls
          currentPage={data.number}
          totalPages={data.totalPages}
          isFirst={data.first}
          isLast={data.last}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};
