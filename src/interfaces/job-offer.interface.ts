import type { CompanyProfile } from "./company-profile.interface";

export interface JobOffer {
  id: string;
  position: string;
  salary: number;
  currency: string;
  contractType: string;
  workMode: string;
  description: string;
  experienceLevel: string;
  minEducation: string;
  minExperienceYears: number;
  requiredSkills: string;
  requiredLanguages: string;
  minAge: number;
  maxAge: number;
  status: string;
  companyProfile: CompanyProfile;
}
