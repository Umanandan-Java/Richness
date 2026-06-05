import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumb?: BreadcrumbItem[];
  stats?: Array<{ label: string; value: string }>;
  actions?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  stats,
  actions,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("bg-navy text-white py-14", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-xs text-gold/80 uppercase tracking-[0.24em] mb-4">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={`${item.label}-${index}`}>
                {item.href && !item.isCurrent ? (
                  <a href={item.href} className="hover:text-gold transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span className={cn(item.isCurrent ? "text-white font-semibold" : "text-gold")}>{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && <ChevronRight size={12} className="text-gold/70" />}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="max-w-4xl">
          {eyebrow && <p className="text-ani-gold mb-2 text-xs uppercase tracking-[0.32em] font-semibold text-gold/80">{eyebrow}</p>}
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">{description}</p>
          {actions && <div className="mt-8">{actions}</div>}
        </div>

        {stats && stats.length > 0 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-sm border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-gray-300 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
