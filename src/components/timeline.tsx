"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { CheckIcon } from "@/components/icons";
import { formatDate, formatRange, formatShort, type IntegrationEvent } from "@/content/integration";

/**
 * Frise chronologique scrollable.
 * Le trait bleu se remplit au rythme du scroll : c'est l'indicateur de
 * progression demandé, et il reste piloté par les données de integration.ts.
 */
export function Timeline({ events }: { events: IntegrationEvent[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);
  const reduceMotion = useReducedMotion();

  // Les images arrivent après le premier rendu : on remesure à chaque
  // changement de taille plutôt qu'une seule fois au montage.
  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const observer = new ResizeObserver(([entry]) => {
      setTrackHeight(entry.contentRect.height);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const beamHeight = useTransform(smoothProgress, [0, 1], [0, trackHeight]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      {/* Rail complet, en gris clair */}
      <div
        aria-hidden="true"
        className="absolute left-8 top-14 w-0.5 rounded-full bg-line sm:left-10 sm:top-20"
        style={{ height: trackHeight }}
      >
        <motion.div
          className="w-0.5 rounded-full bg-linear-to-b from-electric-600 to-electric-300"
          style={{ height: reduceMotion ? trackHeight : beamHeight }}
        />
      </div>

      <ol ref={trackRef} className="relative space-y-12 sm:space-y-16">
        {events.map((event, index) => (
          <TimelineItem key={event.slug} event={event} index={index} />
        ))}
      </ol>
    </div>
  );
}

function TimelineItem({ event, index }: { event: IntegrationEvent; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      id={event.slug}
      className="relative pl-14 sm:pl-20"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Pastille sur le rail */}
      <span
        aria-hidden="true"
        className={`absolute left-[1.375rem] top-1.5 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-white sm:left-[2.375rem] ${
          event.highlight ? "bg-electric-600" : "bg-navy-900"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-white" />
      </span>

      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 font-heading text-sm font-semibold ${
            event.highlight
              ? "bg-electric-600 text-white"
              : "bg-electric-100 text-electric-700"
          }`}
        >
          Jour {index + 1} - {formatShort(event)}
        </span>
        {/* first-letter et non capitalize : "7 Septembre" serait une faute. */}
        <span className="text-sm text-muted first-letter:uppercase">
          {event.endDate ? formatRange(event) : formatDate(event.date)}
        </span>
      </div>

      <h2 className="mt-3 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
        {event.title}
      </h2>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">{event.summary}</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
        <ul className="space-y-2">
          {event.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-sm leading-relaxed text-ink">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-electric-600" />
              {detail}
            </li>
          ))}
        </ul>

        {event.image && (
          <div className="relative h-44 w-full overflow-hidden rounded-2xl sm:h-40 sm:w-64">
            <Image
              src={event.image}
              alt=""
              fill
              sizes="(min-width: 640px) 16rem, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </motion.li>
  );
}
