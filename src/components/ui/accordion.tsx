"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

export type QA = { q: string; a: string };

/** Acordeón propio (sin shadcn/base-ui) — evita los pitfalls de props filtradas al DOM. */
export function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b-[0.5px] border-black/10">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-[#0071e3]"
            >
              <span className="text-[18px] font-[400] tracking-[-0.01em] text-[#0f1012]">{item.q}</span>
              <Plus
                className={`size-5 shrink-0 text-[#0071e3] transition-transform duration-300 ease-[var(--ease-expo)] ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-[16px] leading-relaxed text-[#5e5e5e]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
