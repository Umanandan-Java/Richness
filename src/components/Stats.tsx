/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { animate, useInView } from "motion/react";
import { Award, BookOpen, Users, HelpCircle, CheckCircle2 } from "lucide-react";

interface StatDetails {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  icon: any;
  info: string;
}

function AnimatedStatValue({ stat }: { stat: StatDetails }) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  React.useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(0, stat.numericValue, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (!ref.current) return;
        ref.current.textContent = `${Math.round(latest).toLocaleString()}${stat.suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, stat.numericValue, stat.suffix]);

  return <span ref={ref}>0{stat.suffix}</span>;
}

export default function Stats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const statsList: StatDetails[] = [
    {
      value: "450+",
      numericValue: 450,
      suffix: "+",
      label: "Affiliated Colleges",
      icon: BookOpen,
      info: "Catering to a student body of over 1.2 Lakh across three coastal districts of Andhra Pradesh."
    },
    {
      value: "2,500+",
      numericValue: 2500,
      suffix: "+",
      label: "Research Scholars",
      icon: Users,
      info: "Engaged in pioneering doctoral papers, patented innovations, and international academic collaborations."
    },
    {
      value: "60+",
      numericValue: 60,
      suffix: "+",
      label: "Diverse Courses",
      icon: Award,
      info: "Tailored multi-disciplinary pathways from Buddhist philosophy to deep nanotechnology and clinical pharmacy."
    },
    {
      value: "100%",
      numericValue: 100,
      suffix: "%",
      label: "Placement Support",
      icon: CheckCircle2,
      info: "Facilitated by an active local campus placement cell partnering with TCS, Dr. Reddy's Labs, and Wipro."
    }
  ];

  return (
    <section className="bg-white border-t border-b border-ink/8 py-8 md:py-0 md:h-32 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 divide-y divide-x-0 md:divide-y-0 md:divide-x divide-ink/8">
        {statsList.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              id={`stat-item-${idx}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col justify-center px-6 md:px-8 lg:px-12 py-6 md:py-0 group relative cursor-help transition-all duration-300 hover:bg-bg-cream/40"
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="font-serif text-3xl md:text-3xl lg:text-4xl text-anu-blue font-bold tracking-tight">
                  <AnimatedStatValue stat={stat} />
                </span>
                <Icon className="w-4 h-4 text-anu-gold/75 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-anu-gold">
                {stat.label}
              </span>
              
              {/* Premium Hover Floating Toolkit */}
              {hoveredIndex === idx && (
                <div className="absolute left-4 right-4 -top-24 md:-top-28 bg-anu-blue text-white p-3.5 shadow-xl border-l-[3px] border-anu-gold rounded-sm z-30 text-[11px] leading-relaxed transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
                  <div className="font-bold text-anu-gold uppercase tracking-widest text-[9px] mb-1">
                    Verified Metric Detail
                  </div>
                  <p className="font-medium text-white/90">{stat.info}</p>
                  <div className="absolute bottom-[-6px] left-10 w-3 h-3 bg-anu-blue rotate-45 border-r border-b border-white/5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
