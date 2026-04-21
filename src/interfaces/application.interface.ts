import type { JobOfferSummary } from "./job-offer-summary.interface";

export interface Application {
  id: string;
  status: string;
  applicationDate: Date;
  jobOffer: JobOfferSummary;
}
