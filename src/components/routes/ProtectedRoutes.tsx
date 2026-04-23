import { useAuthStore } from "@/store/auth.store";
import { Navigate, useLocation } from "react-router";
import type { PropsWithChildren } from "react";

interface ProtectedRouteProps extends PropsWithChildren {
  allowedRoles?: string[]; // Si no se envía, solo chequea que esté autenticado
}

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { accessToken, user } = useAuthStore();
  const location = useLocation();

  // 1. ¿Está autenticado?
  if (!accessToken) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // 2. ¿Tiene el rol necesario?
  if (allowedRoles) {
    const hasRole = user?.roles.some((role) => allowedRoles.includes(role.name));

    if (!hasRole) {
      return <Navigate to="/auth/login" replace />;
    }
  }

  return <>{children}</>;
};
