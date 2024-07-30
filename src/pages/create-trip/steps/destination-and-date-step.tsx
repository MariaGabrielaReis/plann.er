import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

type DestinationAndDateStepProps = {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
};

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
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
  );
}
