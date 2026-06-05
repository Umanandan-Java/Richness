import React from "react";
import { motion } from "motion/react";
import { Award, Building2, CalendarDays, GraduationCap } from "lucide-react";

const rankingItems = [
  { label: "NAAC Accreditation", value: "A+ Grade", detail: "3.46 score shown in project data", icon: Award },
  { label: "Established", value: "1976", detail: "Act 43 of 1976 institutional reference", icon: CalendarDays },
  { label: "Campus", value: "300 Acres", detail: "Main academic campus footprint", icon: Building2 },
  { label: "Academic Reach", value: "450+", detail: "Affiliated colleges shown in project data", icon: GraduationCap },
];

export default function Rankings() {
  return (
    <section className="bg-anu-blue py-14 text-white border-y border-anu-gold/35" id="rankings-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[4px] text-anu-gold">
              Institutional Standing
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight md:text-4xl">
              Recognised Academic Scale, Built Over Five Decades
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/72">
              Key public-facing metrics are displayed from the project information supplied for the landing page redesign.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {rankingItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="anu-lux-card border border-white/10 bg-white/7 p-5 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Icon className="h-5 w-5 text-anu-gold" />
                    <span className="text-[9px] font-extrabold uppercase tracking-[3px] text-white/45">
                      {item.label}
                    </span>
                  </div>
                  <strong className="font-serif text-2xl font-bold text-white">{item.value}</strong>
                  <p className="mt-2 text-xs leading-relaxed text-white/62">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
