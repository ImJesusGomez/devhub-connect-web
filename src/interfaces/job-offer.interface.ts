import type { CompanyProfile } from "./company-profile.interface";

export interface JobOffer {
  id: string;
  position: string;
  salary: number;
  currency: string;
  contractType: ContractType;
  workMode: WorkMode;
  description: string;
  experienceLevel: ExperienceLevel;
  minEducation: string;
  minExperienceYears: number;
  requiredSkills: string;
  requiredLanguages: string;
  minAge: number;
  maxAge: number;
  status: string;
  companyProfile: CompanyProfile;
}

export type ContractType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "FREELANCE"
  | "TEMPORARY"
  | "INTERNSHIP";

export type WorkMode = "REMOTE" | "ONSITE" | "HYBRID";

export type ExperienceLevel = "INTERN" | "JUNIOR" | "MID_LEVEL" | "SENIOR" | "LEAD";

export type Status = "ACTIVE" | "CLOSED" | "PAUSED" | "DRAFT";
