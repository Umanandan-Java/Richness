import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Newspaper,
  Send,
  Sparkles,
} from "lucide-react";
import { colleges, schools } from "../data/collegesData";
import { navigateTo } from "./PortalLink";

const admissionsSteps = [
  "Choose a college and programme stream",
  "Confirm eligibility and entrance route",
  "Submit documents for counselling review",
];

const newsItems = [
  {
    tag: "Research",
    date: "Jun 04",
    title: "Science and pharmacy teams expand interdisciplinary lab work",
    text: "The research pipeline connects ANU College of Sciences and Pharmaceutical Sciences with funded scholar projects.",
  },
  {
    tag: "Academics",
    date: "May 28",
    title: "College-wise programme planning opens for the new cycle",
    text: "Engineering, sciences, arts, law, pharmacy, architecture and sports streams continue coordinated academic advising.",
  },
  {
    tag: "Placements",
    date: "May 19",
    title: "Placement preparation desk aligns students with sector pathways",
    text: "Career readiness sessions support students moving into technology, pharma, finance, design and public-sector tracks.",
  },
];

const eventItems = [
  { date: "Jun 18", title: "Admissions counselling orientation", location: "Main Campus" },
  { date: "Jun 25", title: "Research methodology workshop", location: "Central labs" },
  { date: "Jul 02", title: "Placement readiness bootcamp", location: "Training cell" },
];

export function AcademicProgramsSection() {
  return (
    <section className="bg-white py-12 md:py-16 border-y border-ink/8" id="academic-programs-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[4px] text-anu-gold-dark">
              <GraduationCap className="h-3.5 w-3.5" />
              Academic Programs
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-anu-blue md:text-5xl">
              Six Colleges, One Connected Academic Pathway
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ink/70 lg:border-l lg:border-anu-gold/45 lg:pl-6">
            Explore the university through its college families, from engineering and sciences to law, pharmacy, architecture and sports sciences.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {colleges.map((college, index) => {
            const Icon = college.icon;
            const school = schools.find((item) => item.id === college.id);
            const programmes = school?.programmes.slice(0, 3) ?? [];

            return (
              <article
                key={college.id}
                className="group flex min-h-[245px] flex-col overflow-hidden rounded-sm border border-ink/8 bg-bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-anu-gold/55 hover:shadow-xl"
              >
                <div className="relative h-24 overflow-hidden bg-anu-blue">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-full w-full object-cover opacity-75 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-95 group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anu-blue/80 via-anu-blue/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-anu-gold/45 bg-white/10 text-anu-gold backdrop-blur">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="absolute bottom-3 left-4 text-[8px] font-extrabold uppercase tracking-[2.5px] text-anu-gold">
                    College {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-base font-bold leading-tight text-anu-blue">{college.name}</h3>
                  <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[1.8px] text-anu-gold-dark">{college.tagline}</p>
                  <p className="mt-3 text-[11px] leading-relaxed text-ink/70">{college.details}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {programmes.map((programme) => (
                      <span key={programme} className="border border-anu-gold/20 bg-white px-2 py-0.5 text-[9px] font-bold text-ink/65">
                        {programme}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo(`/college/${college.id}`)}
                    className="mt-auto inline-flex items-center gap-2 pt-4 text-[9px] font-extrabold uppercase tracking-widest text-anu-blue transition-colors hover:text-anu-gold-dark"
                  >
                    View College <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function NewsEventsSection() {
  return (
    <section className="bg-bg-cream py-16 md:py-24 border-t border-ink/5" id="news-events-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[4px] text-anu-gold-dark">
              <Newspaper className="h-3.5 w-3.5" />
              News & Upcoming Events
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-anu-blue md:text-5xl">
              What Is Happening Across Campus
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
              A concise view of academic updates, research activity, placement preparation and student-facing events.
            </p>
          </div>

          <div className="border border-anu-gold/25 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[3px] text-anu-gold-dark">
              <CalendarDays className="h-3.5 w-3.5" />
              Upcoming Events
            </div>
            <div className="space-y-3">
              {eventItems.map((event) => (
                <div key={event.title} className="grid grid-cols-[4rem_1fr] gap-3 border-t border-ink/8 pt-3 first:border-t-0 first:pt-0">
                  <span className="font-mono text-[10px] font-bold uppercase text-anu-blue">{event.date}</span>
                  <div>
                    <p className="text-xs font-bold text-ink">{event.title}</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink/45">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="group border border-ink/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-anu-gold/55 hover:shadow-xl">
              <div className="mb-10 flex items-center justify-between gap-3">
                <span className="rounded-full bg-anu-gold/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-anu-gold-dark">
                  {item.tag}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase text-ink/45">{item.date}</span>
              </div>
              <h3 className="font-serif text-xl font-bold leading-tight text-anu-blue">{item.title}</h3>
              <p className="mt-4 min-h-[4.5rem] text-xs leading-relaxed text-ink/70">{item.text}</p>
              <button
                type="button"
                onClick={() => navigateTo("/news")}
                className="mt-6 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-anu-blue transition-colors hover:text-anu-gold-dark"
              >
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdmissionsSnapshotSection({ onApply }: { onApply: () => void }) {
  return (
    <section className="bg-white py-16 md:py-24 border-y border-ink/8" id="admissions-snapshot-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-sm border border-anu-gold/30 bg-anu-blue p-8 text-white shadow-xl">
            <div className="absolute right-[-3rem] top-[-3rem] h-44 w-44 rounded-full border-[18px] border-white/5" />
            <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[3px] text-anu-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Admissions Snapshot
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
              Start With the Right College, Then Build the Right Route
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75">
              Use the admissions desk to compare programme families, verify eligibility and move into counselling without losing track of documents or timelines.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["6", "College families"],
                ["UG-PG-Ph.D", "Study levels"],
                ["2026-27", "Admission cycle"],
              ].map(([value, label]) => (
                <div key={label} className="border border-white/10 bg-white/7 p-4">
                  <strong className="block font-serif text-2xl text-anu-gold">{value}</strong>
                  <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-widest text-white/55">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between border border-ink/8 bg-bg-cream p-6 shadow-sm">
            <div>
              <div className="mb-5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[3px] text-anu-gold-dark">
                <Landmark className="h-3.5 w-3.5" />
                Counselling Checklist
              </div>
              <div className="space-y-4">
                {admissionsSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 border-b border-ink/8 pb-4 last:border-b-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-white text-[10px] font-extrabold text-anu-blue shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-anu-blue">{step}</p>
                      <p className="mt-1 text-xs leading-relaxed text-ink/60">
                        {index === 0 && "Compare the six ANU colleges by discipline, facilities and career direction."}
                        {index === 1 && "Map your admission route for UG, PG or doctoral study before submitting details."}
                        {index === 2 && "Keep certificates, entrance details and contact information ready for review."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="flex items-center gap-2 text-xs font-bold text-ink/65">
                <CheckCircle2 className="h-4 w-4 text-anu-gold" />
                Programme guidance, counselling flow and enquiry capture in one place.
              </div>
              <button
                type="button"
                onClick={onApply}
                className="inline-flex items-center justify-center gap-2 bg-anu-blue px-6 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-anu-blue-light"
              >
                Apply Now <Send className="h-3.5 w-3.5 text-anu-gold" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 border border-anu-gold/20 bg-white px-4 py-3 text-xs font-semibold text-ink/65">
          <Bell className="h-4 w-4 shrink-0 text-anu-gold" />
          Admissions Open for 2026-27 across ANU college streams. Final seat and eligibility decisions remain with official counselling notices.
        </div>
      </div>
    </section>
  );
}
