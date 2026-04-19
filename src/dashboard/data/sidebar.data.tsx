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
      url: "/company-dashboard/job-offers",
      icon: <BriefcaseBusiness />,
    },
  ],
  developers: [
    {
      title: "Buscar Desarrolladores",
      url: "/company-dashboard/find-developers",
      icon: <UserSearch />,
    },
  ],
};

export const developerData = {
  profiles: [
    {
      title: "Perfil de Desarrollador",
      url: "/developer-dashboard/profile",
      icon: <Building2 />,
      isActive: true,
    },
    {
      title: "Perfil de Usuario",
      url: "/developer-dashboard/user",
      icon: <BotIcon />,
    },
  ],
  joboffers: [
    {
      title: "Buscar Ofertas Laborales",
      url: "/developer-dashboard/search-job-offers",
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
