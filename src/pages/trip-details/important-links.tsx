import { Link2, Plus } from "lucide-react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { AddLinkModal } from "./add-link-modal";

type Link = {
  id: string;
  title: string;
  url: string;
};

export function ImportantLinks() {
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const { tripId } = useParams();
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then(response => setLinks(response.data.links));
  }, [tripId]);

  function openAddLinkModal() {
    setIsAddLinkModalOpen(true);
  }

  function closeAddLinkModal() {
    setIsAddLinkModalOpen(false);
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        {links.map(link => (
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {link.title}
              </span>
              <a
                href={link.url}
                className="block text-xs text-zinc-400 truncate hover:text-zinc-200 hover:underline"
              >
                {link.url}
              </a>
            </div>
            <Link2 className="size-5 text-zinc-400 shrink-0" />
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full" onClick={openAddLinkModal}>
        <Plus className="size-5" />
        Adicionar novo link
      </Button>

      {isAddLinkModalOpen && (
        <AddLinkModal closeAddLinkModal={closeAddLinkModal} />
      )}
    </div>
  );
}
