import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
type InviteGuestsModalProps = {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvite: (email: string) => void;
};

export function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-md py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map(email => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button onClick={() => removeEmailFromInvite(email)}>
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 pl-3.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <AtSign className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="bg-transparent text-md placeholder-zinc-400 flex-1 outline-none"
          />
          <button
            type="submit"
            className="bg-teal-600 text-zinc-200 rounded px-5 py-2 font-medium flex items-center gap-2 hover:bg-teal-500"
          >
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
