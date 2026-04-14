import type { User } from "./user.interface";

export interface DeveloperProfile {
  id: string;
  techStack: string;
  yearsOfExperience: number;
  level: Level;
  preferredWorkMode: PreferredWorkMode;
  description: string;
  availability: Availability;
  user: User;
}

export type Level = "INTERN" | "JUNIOR" | "MID_LEVEL" | "SENIOR" | "LEAD";
export type PreferredWorkMode = "REMOTE" | "ONSITE" | "HYBRID";
export type Availability = "AVAILABLE" | "EMPLOYED";
