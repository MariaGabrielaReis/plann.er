import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  UserCog,
} from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Paris, France</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">7 a 21 de novembro</span>
          </div>

          <div className="w-px h-4 bg-zinc-800" />

          <button className="bg-zinc-800 text-zinc-200 rounded px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local / data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button className="bg-teal-600 text-zinc-200 rounded px-5 py-2 font-medium flex items-center gap-2 hover:bg-teal-500">
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 7
                </span>
                <span className="text-sm text-zinc-500">Sexta</span>
              </div>
              <p className="text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 8
                </span>
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
        </div>

        <div className="w-80 space-y-6">
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

          <div className="w-full h-px bg-zinc-800" />

          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Wallace Felipe
                  </span>
                  <span className="block text-sm text-zinc-400 truncate">
                    wllc@email.com
                  </span>
                </div>
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              </div>
            </div>

            <button className="bg-zinc-800 w-full text-zinc-200 rounded px-5 h-10 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
              <UserCog className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
