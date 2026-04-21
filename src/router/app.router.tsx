import { AuthLayout } from "@/auth/layout/AuthLayout";
import { LoginPage } from "@/auth/pages/login/LoginPage";
import { SignupPage } from "@/auth/pages/signup/SignupPage";
import { CompanyLayout } from "@/dashboard/company/layouts/CompanyLayout";
import { CreateJobOfferPage } from "@/dashboard/company/pages/joboffer/CreateJobOfferPage";
import { JobOffersPage } from "@/dashboard/company/pages/joboffer/JobOffersPage";
import { CompanyProfilePage } from "@/dashboard/company/pages/profile/CompanyProfilePage";
import { CreateCompanyProfilePage } from "@/dashboard/company/pages/profile/CreateCompanyProfilePage";
import { DeveloperLayout } from "@/dashboard/developer/layouts/DeveloperLayout";
import { HomeLayout } from "@/home/layout/HomeLayout";
import { HomePage } from "@/home/pages/HomePage";
import { createBrowserRouter } from "react-router";
import { CreateDeveloperProfilePage } from "@/dashboard/developer/pages/profile/CreateDeveloperProfilePage";
import { DeveloperUserPage } from "@/dashboard/developer/pages/profile/DeveloperUserPage";
import { DeveloperProfilePage } from "@/dashboard/developer/pages/profile/DeveloperProfilePage";
import { CompanyWelcomePage } from "@/dashboard/company/pages/CompanyWelcomePage";
import { CompanyUserPage } from "@/dashboard/company/pages/profile/CompanyUserPage";
import { DeveloperWelcomePage } from "@/dashboard/developer/pages/DeveloperWelcomePage";
import { FindDevelopersPage } from "@/dashboard/company/pages/developers/FindDevelopersPage";
import { SearchJobOffersPage } from "@/dashboard/developer/pages/joboffers/SearchJobOffersPage";
import { UpdateDeveloperProfilePage } from "@/dashboard/developer/pages/profile/UpdateDeveloperProfilePage";
import { UpdateCompanyProfilePage } from "@/dashboard/company/pages/profile/UpdateCompanyProfilePage";
import { JobOfferPage } from "@/dashboard/developer/pages/joboffers/JobOfferPage";

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
        element: <CompanyWelcomePage />,
      },
      {
        path: "profile",
        element: <CompanyProfilePage />,
      },
      {
        path: "create-profile",
        element: <CreateCompanyProfilePage />,
      },
      {
        path: "edit-profile/:id",
        element: <UpdateCompanyProfilePage />,
      },
      {
        path: "user",
        element: <CompanyUserPage />,
      },
      {
        path: "job-offers",
        element: <JobOffersPage />,
      },
      {
        path: "create-job-offer",
        element: <CreateJobOfferPage />,
      },
      {
        path: "find-developers",
        element: <FindDevelopersPage />,
      },
    ],
  },
  {
    path: "/developer-dashboard",
    element: <DeveloperLayout />,
    children: [
      {
        index: true,
        element: <DeveloperWelcomePage />,
      },
      {
        path: "profile",
        element: <DeveloperProfilePage />,
      },
      {
        path: "create-profile",
        element: <CreateDeveloperProfilePage />,
      },
      {
        path: "edit-profile/:id",
        element: <UpdateDeveloperProfilePage />,
      },
      {
        path: "user",
        element: <DeveloperUserPage />,
      },
      {
        path: "search-job-offers",
        element: <SearchJobOffersPage />,
      },
      {
        path: "search-job-offers/:id",
        element: <JobOfferPage />,
      },
    ],
  },
]);
