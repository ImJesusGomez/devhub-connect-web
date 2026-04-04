import { RouterProvider } from "react-router";
import { router } from "./router/app.router";

export const DevHubConnect = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
