import { HomeLayout } from "@/home/layout/HomeLayout";
import { HomePage } from "@/home/pages/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
