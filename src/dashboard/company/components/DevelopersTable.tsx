import type { DeveloperProfile } from "@/interfaces/developer-profile.interface";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useGetCompanyProfile } from "../hooks/useGetCompanyProfile";
import { ContactDialog } from "./ContactDialog";

const LEVEL_LABEL: Record<string, string> = {
  INTERN: "Intern",
  JUNIOR: "Junior",
  MID_LEVEL: "Mid",
  SENIOR: "Senior",
  LEAD: "Lead",
};

interface Props {
  developers: DeveloperProfile[];
  isLoading: boolean;
}

export const DevelopersTable = ({ developers, isLoading }: Props) => {
  const { data: profile } = useGetCompanyProfile();

  if (!profile) return null;

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Tech Stack</TableHead>
          <TableHead>Nivel</TableHead>
          <TableHead>Experiencia</TableHead>
          <TableHead>Modalidad</TableHead>
          <TableHead>Disponibilidad</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {developers.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center text-muted-foreground py-10">
              No se encontraron desarrolladores.
            </TableCell>
          </TableRow>
        ) : (
          developers.map((dev) => (
            <TableRow key={dev.id}>
              <TableCell className="font-medium">
                {dev.user.firstName} {dev.user.lastName}
              </TableCell>
              <TableCell>{dev.techStack}</TableCell>
              <TableCell>
                <Badge variant="outline">{LEVEL_LABEL[dev.level]}</Badge>
              </TableCell>
              <TableCell>{dev.yearsOfExperience} años</TableCell>
              <TableCell>{dev.preferredWorkMode}</TableCell>
              <TableCell>
                <Badge variant={dev.availability === "AVAILABLE" ? "default" : "secondary"}>
                  {dev.availability === "AVAILABLE" ? "Disponible" : "Empleado"}
                </Badge>
              </TableCell>
              <TableCell>
                <ContactDialog dev={dev} />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};
