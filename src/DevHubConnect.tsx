import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";

import { useGetProfile } from "./hooks/useGetProfile";
import { router } from "./router/app.router";

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();

export const DevHubConnect = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider></TooltipProvider>
        <Toaster />
        <AppContent />
      </QueryClientProvider>
    </>
  );
};

const AppContent = () => {
  useGetProfile();

  return <RouterProvider router={router} />;
};
