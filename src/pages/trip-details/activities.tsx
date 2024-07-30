import { CircleCheck } from "lucide-react";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 7</span>
          <span className="text-sm text-zinc-500">Sexta</span>
        </div>
        <p className="text-zinc-500">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 8</span>
          <span className="text-sm text-zinc-500">Sábado</span>
        </div>

        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-lg shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-teal-300" />
            <span className="text-zinc-100">Academia em casal</span>
            <span className="text-zinc-400 text-sm ml-auto">08:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
