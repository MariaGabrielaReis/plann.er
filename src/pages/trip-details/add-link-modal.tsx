import { Link2, Tag, X } from "lucide-react";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";

import { Button } from "../../components/button";
import { api } from "../../lib/axios";

type AddLinkModalProps = {
  closeAddLinkModal: () => void;
};

export function AddLinkModal({ closeAddLinkModal }: AddLinkModalProps) {
  const { tripId } = useParams();

  async function addLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const title = data.get("title")?.toString();
    const url = data.get("url")?.toString();

    await api.post(`/trips/${tripId}/links`, { title, url });

    window.document.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-md py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Adicionar link</h2>
            <button onClick={closeAddLinkModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar os links.
          </p>
        </div>

        <form onSubmit={addLink} className="space-y-2">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="title"
              placeholder="Título do link"
              className="bg-transparent text-md placeholder-zinc-400 flex-1 outline-none"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Link2 className="size-5 text-zinc-400" />
            <input
              name="url"
              placeholder="URL do link"
              className="bg-transparent text-md placeholder-zinc-400 flex-1 outline-none"
            />
          </div>

          <Button type="submit" size="full">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  );
}
