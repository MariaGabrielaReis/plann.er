import { CheckCircle, CircleDashed, UserCog } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { InviteGuestsModal } from "../create-trip/invite-guests-modal";

type Participant = {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
};

export function Guests() {
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(({ data }) => {
      setParticipants(data.participants),
        setEmailsToInvite(
          data.participants.map(
            (participant: Participant) => participant.email,
          ),
        );
    });
  }, [tripId]);

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  async function inviteNewGuest(email: string) {
    await api.post(`/trips/${tripId}/invites`, { email });
  }

  function closeGuestsModal() {
    const newGuestsEmails = emailsToInvite.filter(
      invited =>
        !participants
          .map((participant: Participant) => participant.email)
          .includes(invited),
    );
    newGuestsEmails.map(email => inviteNewGuest(email));

    window.document.location.reload();
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) return;
    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite([...emailsToInvite, email]);
    event.currentTarget.reset();
  }

  function removeEmailFromInvite(emailToRemove: string) {
    setEmailsToInvite(
      emailsToInvite.filter(invited => invited !== emailToRemove),
    );
  }

  async function confirmGuest(guest: Participant) {
    await api.patch(`/participants/${guest.id}/confirm`);
    window.document.location.reload();
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>

            {participant.is_confirmed ? (
              <CheckCircle className="size-5 text-green-400 shrink-0" />
            ) : (
              <CircleDashed
                className="size-5 text-zinc-400 shrink-0 cursor-pointer"
                onClick={() => confirmGuest(participant)}
              />
            )}
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full" onClick={openGuestsModal}>
        <UserCog className="size-5" />
        Adicionar convidados
      </Button>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}
    </div>
  );
}
