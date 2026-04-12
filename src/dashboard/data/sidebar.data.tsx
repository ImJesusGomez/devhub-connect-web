import { BotIcon, BriefcaseBusiness, Building2, FileText, UserSearch } from "lucide-react";

export const companyData = {
  profiles: [
    {
      title: "Perfil de Empresa",
      url: "/company-dashboard/profile",
      icon: <Building2 />,
      isActive: true,
    },
    {
      title: "Perfil de Usuario",
      url: "/company-dashboard/user",
      icon: <BotIcon />,
    },
  ],
  joboffers: [
    {
      title: "Mis Ofertas Laborales",
      url: "#",
      icon: <BriefcaseBusiness />,
    },
  ],
  developers: [
    {
      title: "Buscar Desarrolladores",
      url: "#",
      icon: <UserSearch />,
    },
  ],
};

export const developerData = {
  profiles: [
    {
      title: "Perfil de Desarrollador",
      url: "#",
      icon: <Building2 />,
      isActive: true,
    },
    {
      title: "Perfil de Usuario",
      url: "#",
      icon: <BotIcon />,
    },
  ],
  joboffers: [
    {
      title: "Buscar Ofertas Laborales",
      url: "#",
      icon: <BriefcaseBusiness />,
    },
  ],
  applications: [
    {
      title: "Mis Solicitudes",
      url: "#",
      icon: <FileText />,
    },
  ],
};
