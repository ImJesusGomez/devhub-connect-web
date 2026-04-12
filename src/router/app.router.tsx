import { AuthLayout } from "@/auth/layout/AuthLayout";
import { LoginPage } from "@/auth/pages/login/LoginPage";
import { SignupPage } from "@/auth/pages/signup/SignupPage";
import { CompanyLayout } from "@/dashboard/company/layouts/CompanyLayout";
import { CreateJobOfferPage } from "@/dashboard/company/pages/joboffer/CreateJobOfferPage";
import { JobOffersPage } from "@/dashboard/company/pages/joboffer/JobOffersPage";
import { CompanyProfilePage } from "@/dashboard/company/pages/profile/CompanyProfilePage";
import { CreateProfileFormPage } from "@/dashboard/company/pages/profile/CreateProfileFormPage";
import { UserProfile } from "@/dashboard/company/pages/profile/UserProfile";
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
      {
        path: "profile",
        element: <CompanyProfilePage />,
      },
      {
        path: "create-profile",
        element: <CreateProfileFormPage />,
      },
      {
        path: "user",
        element: <UserProfile />,
      },
      {
        path: "job-offers",
        element: <JobOffersPage />,
      },
      {
        path: "create-job-offer",
        element: <CreateJobOfferPage />,
      },
    ],
  },
]);
