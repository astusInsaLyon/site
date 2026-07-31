"use client";

import type { ReactNode } from "react";
import { useRef, useState, type MouseEvent } from "react";

/**
 * Carte avec un halo qui suit le curseur.
 *
 * La position est ecrite dans une variable CSS plutot que dans le style du
 * gradient : le navigateur ne recompose que le calque du halo au lieu de
 * reconstruire la regle background a chaque mouvement de souris.
 *
 * Effet purement decoratif, sans equivalent au clavier ni au toucher : le halo
 * n'apporte aucune information, seul l'etat de survol change.
 */
export function SpotlightCard({
  children,
  className = "",
  glow = "rgb(31 107 255 / 0.18)",
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`group/spot relative isolate overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${glow}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
