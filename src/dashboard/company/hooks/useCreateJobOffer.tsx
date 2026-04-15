import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobOfferAction } from "../actions/create-job-offer.action";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export const useCreateJobOffer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["createJobOffer"],
    mutationFn: createJobOfferAction,
    onSuccess: () => {
      // Mostramos un mensaje de éxito
      toast.success("Oferta Laboral creada con éxito.");

      // Navegamos
      navigate("/company-dashboard/job-offers");

      // Invalidamos unos queries
      queryClient.invalidateQueries({
        queryKey: ["getJobOffers"],
      });
    },
    onError: () => {
      // Mostramos un mensaje de error
      toast.error("No se pudo crear la oferta laboral");
    },
  });
};
