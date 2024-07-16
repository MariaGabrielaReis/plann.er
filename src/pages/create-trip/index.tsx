import {
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
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

  function createTrip() {
    navigate("/trips/21");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                placeholder="Para onde você vai?"
                disabled={isGuestsInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                placeholder="Quando?"
                disabled={isGuestsInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>

            <div className="w-px h-4 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-200 rounded px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
              >
                Alterar local / data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="bg-teal-600 text-zinc-200 rounded px-5 py-2 font-medium flex items-center gap-2 hover:bg-teal-500"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
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

              <button
                onClick={openConfirmTripModal}
                className="bg-teal-600 text-zinc-200 rounded px-5 py-2 font-medium flex items-center gap-2 hover:bg-teal-500"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pelo plann.er você automaticamente concorda
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-md py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar criação de viagem
                </h2>
                <button onClick={closeConfirmTripModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para{" "}
                <span className="text-zinc-100">SP, Brasil</span>, nas datas de{" "}
                <span className="text-zinc-100">16 a 21 de julho de 2024</span>{" "}
                preencha seus dados abaixo:
              </p>
            </div>

            <form
              onSubmit={event => event.preventDefault()}
              className="space-y-2"
            >
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="size-5 text-zinc-400" />
                <input
                  name="name"
                  placeholder="Nome completo"
                  className="bg-transparent text-md placeholder-zinc-400 flex-1 outline-none"
                />
              </div>
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="size-5 text-zinc-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail pessoal"
                  className="bg-transparent text-md placeholder-zinc-400 flex-1 outline-none"
                />
              </div>

              <button
                type="submit"
                onClick={createTrip}
                className="w-full bg-teal-600 text-zinc-200 rounded px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-teal-500"
              >
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
