"use client";

import { useSyncExternalStore } from "react";

/**
 * Compte a rebours jusqu'au premier jour de l'integration.
 *
 * Le site est genere statiquement : la date du build et celle de la visite
 * n'ont rien a voir, l'heure ne peut donc venir que du client. On passe par
 * useSyncExternalStore plutot que par un effet qui appelle setState :
 * l'instantane du serveur vaut 0, celui du client aussi tant que personne ne
 * s'est abonne, donc le premier rendu est identique des deux cotes et
 * l'hydratation ne signale aucun ecart. Les vrais chiffres arrivent juste
 * apres l'abonnement.
 */

/** Horloge partagee : un seul setInterval pour tous les comptes a rebours. */
let now = 0;
let timer: ReturnType<typeof setInterval> | undefined;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);

  if (timer === undefined) {
    now = Date.now();
    timer = setInterval(() => {
      now = Date.now();
      for (const notify of listeners) notify();
    }, 1000);
  }
  // Le premier abonne declenche le passage du placeholder aux vrais chiffres.
  listener();

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

const getSnapshot = () => now;
const getServerSnapshot = () => 0;

export function Countdown({ date, label }: { date: string; label: string }) {
  /** Minuit heure de Paris le jour J. En septembre, la France est a UTC+2. */
  const target = Date.parse(`${date}T00:00:00+02:00`);
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const delta = current === 0 ? null : target - current;

  // La date est passee : le compte a rebours n'a plus rien a dire.
  if (delta !== null && delta <= 0) return null;

  const units =
    delta === null
      ? [
          { suffix: "j", full: "jours" },
          { suffix: "h", full: "heures" },
          { suffix: "min", full: "minutes" },
          { suffix: "s", full: "secondes" },
        ].map((unit) => ({ ...unit, value: null as number | null }))
      : [
          { suffix: "j", full: "jours", value: Math.floor(delta / 86_400_000) },
          { suffix: "h", full: "heures", value: Math.floor(delta / 3_600_000) % 24 },
          { suffix: "min", full: "minutes", value: Math.floor(delta / 60_000) % 60 },
          { suffix: "s", full: "secondes", value: Math.floor(delta / 1000) % 60 },
        ];

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
      <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-electric-300">
        {label}
      </p>
      <div className="flex items-end gap-4 sm:gap-6">
        {units.map((unit) => (
          <div key={unit.full} className="flex items-baseline gap-1">
            <span className="tabular font-heading text-3xl font-bold leading-none text-white sm:text-4xl">
              {unit.value === null ? "--" : String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-electric-100/70" aria-hidden="true">
              {unit.suffix}
            </span>
            <span className="sr-only">{unit.full}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
