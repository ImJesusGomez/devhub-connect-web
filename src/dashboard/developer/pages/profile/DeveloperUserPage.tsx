import { useGetProfile } from "@/hooks/useGetProfile";

export const DeveloperUserPage = () => {
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

/* ---------------- UI COMPONENTS ---------------- */

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {children}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b last:border-b-0">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-gray-900 font-medium text-sm">{value || "—"}</span>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm backdrop-blur">
      {children}
    </span>
  );
}

function Avatar({ name }: { name: string }) {
  const initial = name?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
      {initial}
    </div>
  );
}
