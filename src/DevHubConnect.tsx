import { RouterProvider } from "react-router";
import { router } from "./router/app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetProfile } from "./hooks/useGetProfile";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export const DevHubConnect = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
