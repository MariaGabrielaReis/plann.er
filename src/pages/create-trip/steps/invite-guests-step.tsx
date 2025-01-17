import { ArrowRight, UserRoundPlus } from "lucide-react";

import { Button } from "../../../components/button";

type InviteGuestsStepProps = {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
};

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded flex items-center shadow-shape gap-3">
      <button
        onClick={openGuestsModal}
        className="flex items-center justify-normal gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        <span className="bg-transparent text-lg text-zinc-400 outline-none">
          {emailsToInvite.length > 0
            ? `${emailsToInvite.length} pessoa(s) convidada(s)`
            : "Quem estará na viagem?"}
        </span>
      </button>

      <div className="w-px h-4 bg-zinc-800" />

      <Button onClick={openConfirmTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
