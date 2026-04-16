import type { User } from "./user.interface";

export interface CompanyProfile {
  id: string;
  companyName: string;
  description: string;
  taxId: string;
  country: string;
  state: string;
  city: string;
  website: string;
  companyEmail: string;
  size: Size;
  user: User;
}

export type Size = "MICRO" | "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE";
