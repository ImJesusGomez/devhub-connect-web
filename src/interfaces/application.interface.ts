import type { JobOfferSummary } from "./job-offer-summary.interface";

export interface Application {
  id: string;
  status: StatusApplication;
  applicationDate: Date;
  jobOffer: JobOfferSummary;
}

export type StatusApplication =
  | "APPLIED"
  | "UNDER_REVIEW"
  | "OFFER"
  | "HIRED"
  | "REJECTED"
  | "WITHDRAWN";
