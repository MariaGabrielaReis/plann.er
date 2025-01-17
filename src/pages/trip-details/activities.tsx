import { format, isAfter } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, CircleDashed } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/axios";

type Activity = {
  date: string;
  activities: { id: string; title: string; occurs_at: string }[];
};

export function Activities() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<Activity[]>([]);

  const today = new Date().toString();

  useEffect(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then(response => setActivities(response.data.activities));
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map(activityDay => (
        <div key={activityDay.date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">
              Dia {format(activityDay.date, "d")}
            </span>
            <span className="text-sm text-zinc-500">
              {format(activityDay.date, "EEEE", { locale: ptBR })}
            </span>
          </div>

          {activityDay.activities.length > 0 ? (
            <>
              {activityDay.activities.map(activity => (
                <div key={activity.id} className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-lg shadow-shape flex items-center gap-3">
                    {isAfter(activity.occurs_at, today) ? (
                      <CircleDashed className="size-5 text-zinc-400" />
                    ) : (
                      <CheckCircle className="size-5 text-green-400" />
                    )}

                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="text-zinc-400 text-sm ml-auto">
                      {format(activity.occurs_at, "HH:mm")}
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="text-zinc-500">
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
