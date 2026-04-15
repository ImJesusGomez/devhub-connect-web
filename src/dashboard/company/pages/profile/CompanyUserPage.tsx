import { useGetProfile } from "@/hooks/useGetProfile";
import { Card } from "../../../../components/custom/Card";
import { Info } from "../../../../components/custom/Info";
import { Badge } from "../../../../components/custom/Badge";
import { Avatar } from "../../../../components/custom/Avatar";

export const CompanyUserPage = () => {
  const { data: user, isLoading } = useGetProfile();

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-gray-500">
        Cargando perfil...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-gray-500">
        No se pudo cargar el perfil
      </div>
    );
  }

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-4xl space-y-8">
        {/* HEADER */}
        <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-700 text-white p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar name={fullName} />

              <div>
                <h1 className="text-2xl font-bold">{fullName}</h1>
                <p className="text-white/70 text-sm">{user.email}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {user.roles?.map((role) => (
                <Badge key={role.name}>{role.name}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Información personal">
            <Info label="Nombre" value={user.firstName} />
            <Info label="Apellido" value={user.lastName} />
            <Info label="Email" value={user.email} />
          </Card>

          <Card title="Seguridad / Acceso">
            <Info label="Roles" value={user.roles?.map((r) => r.name).join(", ")} />
            <Info label="ID de usuario" value={user.id} />
          </Card>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end">
          <button className="px-5 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition">
            Editar perfil
          </button>
        </div>
      </div>
    </div>
  );
};
