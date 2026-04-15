import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
  onPageChange: (page: number) => void;
}

export const PaginationControls = ({
  currentPage,
  totalPages,
  isFirst,
  isLast,
  onPageChange,
}: Props) => {
  if (totalPages <= 1) return null;

  // Genera páginas visibles: siempre muestra primera, última y ±1 alrededor de la actual
  const getVisiblePages = () => {
    const pages: (number | "ellipsis")[] = [];
    const range = (from: number, to: number) =>
      Array.from({ length: to - from + 1 }, (_, i) => from + i);

    if (totalPages <= 7) return range(0, totalPages - 1);

    pages.push(0);
    if (currentPage > 2) pages.push("ellipsis");
    pages.push(...range(Math.max(1, currentPage - 1), Math.min(totalPages - 2, currentPage + 1)));
    if (currentPage < totalPages - 3) pages.push("ellipsis");
    pages.push(totalPages - 1);

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => !isFirst && onPageChange(currentPage - 1)}
            aria-disabled={isFirst}
            className={isFirst ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>

        {getVisiblePages().map((page, idx) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => onPageChange(page)}
                className="cursor-pointer"
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => !isLast && onPageChange(currentPage + 1)}
            aria-disabled={isLast}
            className={isLast ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
