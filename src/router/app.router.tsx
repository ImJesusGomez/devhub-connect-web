import { AuthLayout } from "@/auth/layout/AuthLayout";
import { LoginPage } from "@/auth/pages/login/LoginPage";
import { SignupPage } from "@/auth/pages/signup/SignupPage";
import { CompanyLayout } from "@/dashboard/company/layouts/CompanyLayout";
import { WelcomePage } from "@/dashboard/company/pages/WelcomePage";
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
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/company-dashboard",
    element: <CompanyLayout />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
    ],
  },
]);
