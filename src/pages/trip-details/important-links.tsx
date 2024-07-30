import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do hotel
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200 hover:underline"
            >
              http://localhost:5173/trips/2123424242323425352525525235235235252342535253245
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <button className="bg-zinc-800 w-full text-zinc-200 rounded px-5 h-10 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
        <Plus className="size-5" />
        Adicionar novo link
      </button>
    </div>
  );
}
