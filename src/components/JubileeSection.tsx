import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Sparkles,
  Trophy,
  History,
  CalendarDays,
  Volume2,
  BookmarkCheck,
  Compass,
  Milestone,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Mic,
  Clapperboard,
  Waves
} from "lucide-react";
import type { CSSProperties } from "react";

interface JubileeSectionProps {
  onGoBackHome: () => void;
}

export default function JubileeSection({ onGoBackHome }: JubileeSectionProps) {
  const [heroComplete, setHeroComplete] = useState(false);
  const [activeTab, setActiveTab] = useState<"history" | "speeches" | "programs">("history");

  return (
    <div
      className="min-h-screen pb-24"
      style={{
        background:
          "radial-gradient(1200px 700px at 50% -10%, #fffaeb 0%, #fdf6e1 55%, #f5e9c4 100%)",
        color: "#3a2a08",
      }}
    >
      {/* ── Scroll hero — the scroll unfurls right here on load ── */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-12 pt-12 text-center md:pt-16">
        <JubileeScrollHero onComplete={() => setHeroComplete(true)} />
      </section>

      {/* ── Main Dynamic Archive Center ── */}
      <section
        id="archive-center"
        className="mx-auto max-w-5xl px-4 sm:px-6 transition-all duration-700 space-y-12"
        style={{
          opacity: heroComplete ? 1 : 0,
          transform: heroComplete ? "translateY(0)" : "translateY(18px)",
          pointerEvents: heroComplete ? "auto" : "none",
        }}
      >
        {/* Quick Horizontal Milestone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              year: "1976",
              title: "Foundation Stone Declared",
              body: "Established as the prestigious Nagarjuna University via AP Legislative Act, elevating regional research corridors.",
              borderColor: "border-anu-gold/30",
              bgColor: "bg-white/60",
            },
            {
              year: "2000",
              title: "Silver Jubilee Integration",
              body: "Completed 25 years of massive expansion into engineering sciences, modern pharma research cells, and digital library facilities.",
              borderColor: "border-anu-gold/30",
              bgColor: "bg-white/60",
            },
            {
              year: "2026",
              title: "The Golden Jubilee",
              body: "Celebrating 50 years of shaping regional intelligence, academic credentials, and globally accredited state placements.",
              borderColor: "border-anu-gold/60 ring-2 ring-anu-gold/10",
              bgColor: "bg-gradient-to-br from-amber-50 to-white",
            },
          ].map((m) => (
            <div
              key={m.year}
              className={`rounded-sm border p-5 backdrop-blur-sm shadow-xs ${m.borderColor} ${m.bgColor}`}
            >
              <span
                className="font-serif text-3xl font-extrabold"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg,#d97706 0%,#fb923c 60%,#b45309 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {m.year}
              </span>
              <h3 className="mt-2 text-sm font-bold text-[#2a1d05] uppercase tracking-wide font-serif">
                {m.title}
              </h3>
              <p className="mt-2 text-xs text-[#5a4310]/85 leading-relaxed font-sans">
                {m.body}
              </p>
            </div>
          ))}
        </div>

        {/* Jubilee Dynamic Sub-Tabs Panel */}
        <div className="bg-white border border-[#E2CE9C]/60 rounded-sm shadow-md overflow-hidden">
          {/* Navigation Tab Header */}
          <div className="bg-anu-blue text-white p-2.5 flex flex-wrap gap-1.5 border-b border-anu-gold/30">
            {[
              { id: "history", label: "The Golden Heritage", icon: History },
              { id: "speeches", label: "Archival Speeches & Stories", icon: Volume2 },
              { id: "programs", label: "Anniversary Festivities Held", icon: CalendarDays },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? "bg-anu-gold text-white shadow-md font-bold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white animate-spin duration-1000" : "text-anu-gold"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
            {/* TAB 1: HISTORY */}
            {activeTab === "history" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-anu-gold/10 border border-anu-gold/25 text-anu-gold rounded-sm shrink-0">
                    <History className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-anu-blue">
                      Fifty Years of Academic Excellence (1976 – 2026)
                    </h4>
                    <p className="text-xs text-ink/75 leading-relaxed mt-1 font-sans">
                      Born in the historical capital region of Andhra Pradesh, Acharya Nagarjuna University is named after the illustrious 2nd-century Mahayana Buddhist philosopher Acharya Nagarjuna, who established a premier monastic university on the alluvial banks of the Krishna River.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-ink/8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3 font-sans">
                    <h5 className="text-[11px] font-bold text-anu-gold tracking-widest uppercase">The Ancient Catalyst</h5>
                    <p className="text-xs text-ink/80 leading-relaxed">
                      Our modern institution was inaugurated on August 19, 1976, to carry forward that historical mantle of rigorous scholastic reasoning, scientific enquiry, and dynamic global connectivity. Initially starting with ten postgraduate programs, the university has now blossomed to accommodate over six autonomous constituent engineering, science, physical education, and pharmaceutical colleges.
                    </p>
                  </div>
                  <div className="space-y-3 font-sans">
                    <h5 className="text-[11px] font-bold text-anu-gold tracking-widest uppercase">Global Scientific Prominence</h5>
                    <p className="text-xs text-ink/80 leading-relaxed">
                      Today, Acharya Nagarjuna University coordinates instruction seamlessly for hundreds of affiliated model colleges in Guntur and Bapatla. Hosting over 8,000 active researchers, leading patents in chemical formulation and digital networking, and with global alumni heading enterprises from Silicon Valley to Hyderabad, we represent half a century of unbroken dedication to regional and nationwide intellectual growth.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-bg-cream/40 rounded-sm border border-anu-gold/20 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <BookmarkCheck className="w-5 h-5 text-anu-gold" />
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-anu-blue font-sans block">Accreditation Elite</span>
                      <span className="text-[11px] text-[#5a4310] font-sans font-medium">Ranked directly within Tier-1 elite universities with National Assessment Grade "A"</span>
                    </div>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-wider text-anu-blue hover:text-anu-gold underline flex items-center gap-1 font-sans">
                    View NAAC Charter Certificate <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: SPEECHES & STORIES */}
            {activeTab === "speeches" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-anu-gold/10 border border-anu-gold/25 text-anu-gold rounded-sm shrink-0">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-anu-blue">
                      Golden Anniversary Addresses & Retrospectives
                    </h4>
                    <p className="text-xs text-ink/75 leading-relaxed mt-1 font-sans">
                      Read inspirational extracts from the speeches delivered by our founding chancellors, scientists, and alumni, recorded in the central archives during our golden jubilee.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-ink/8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Speech 1 */}
                  <div className="bg-bg-cream/35 p-5 border border-ink/6 hover:border-anu-gold/30 rounded-sm relative transition-all">
                    <span className="absolute top-4 right-4 text-[9px] font-bold text-anu-gold border border-anu-gold/20 bg-white px-2 py-0.5 rounded-sm">
                      Jan 2026 Keynote
                    </span>
                    <h5 className="font-serif text-sm font-bold text-anu-blue leading-tight mb-1 pr-16">
                      "Reimagining the Monastic Scholastic Legacy"
                    </h5>
                    <p className="text-[9px] font-extrabold uppercase text-ink/40 tracking-wider font-sans mb-3 block">
                      Delivered by Prof. K. Bayapa Reddy, Vice-Chancellor
                    </p>
                    <p className="text-xs text-ink/75 leading-relaxed italic border-l-2 border-anu-gold pl-3 mb-3 font-sans">
                      "Nagarjuna in ancient times did not just teach theology—he taught metallurgy, astronomical coordinate systems, and systemic logic. As we step across our 50th year, our CSE labs, AI centers, and modern pharmaceutical clean corridors are the digital monasteries of the 21st century. We hold the light."
                    </p>
                  </div>

                  {/* Speech 2 */}
                  <div className="bg-bg-cream/35 p-5 border border-ink/6 hover:border-anu-gold/30 rounded-sm relative transition-all">
                    <span className="absolute top-4 right-4 text-[9px] font-bold text-anu-gold border border-anu-gold/20 bg-white px-2 py-0.5 rounded-sm">
                      Alumni Address
                    </span>
                    <h5 className="font-serif text-sm font-bold text-anu-blue leading-tight mb-1 pr-16">
                      "From Namburu NH-16 to Silicon Valley Nodes"
                    </h5>
                    <p className="text-[9px] font-extrabold uppercase text-ink/40 tracking-wider font-sans mb-3 block">
                      By Dr. S. Mallikharjuna Rao (Class of 1982, Intel VP)
                    </p>
                    <p className="text-xs text-ink/75 leading-relaxed italic border-l-2 border-anu-gold pl-3 mb-3 font-sans">
                      "I remember walking down the dust track of Guntur in 1980 when the library was just a conceptual sketch. This soil gave us the grit to compete globally. Our university alumni network is now 150,000 strong. Fifty years in, we return of our bounty to support our upcoming incubators."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: PROGRAMS & EVENTS HELD */}
            {activeTab === "programs" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-anu-gold/10 border border-anu-gold/25 text-anu-gold rounded-sm shrink-0">
                    <CalendarDays className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-anu-blue">
                      Schedules & Ceremonies Held for the Occasion
                    </h4>
                    <p className="text-xs text-ink/75 leading-relaxed mt-1 font-sans">
                      Review the historical programs and prestigious convocations hosted in the newly commissioned Golden Jubilee Seminar Hall over university corridors.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-ink/8" />

                <div className="space-y-4">
                  {[
                    {
                      time: "January 14, 2026 - Morning",
                      title: "The Golden Jubilee Flag Unveiling & Inauguration Ceremony",
                      details: "Led by the Honorable Governor of Andhra Pradesh at the Central Lawn. Conferred the President's Scholastic Gold Star medals on top researchers.",
                      venue: "Central Lawn Promenade & Stadium Block",
                    },
                    {
                      time: "February 12-14, 2026 - Concurrently",
                      title: "Sino-Indian & Regional Scientific Research Synergies Summit",
                      details: "Multidisciplinary presentations covering computational physics, nanotechnology in medicine, and deep learning algorithms in agriculture.",
                      venue: "Siemens Center of Tech & Seminar Hall",
                    },
                    {
                      time: "March 20, 2026 - Evening",
                      title: "Golden Jubilee Alumni Alignment Meet & Cultural Heritage Gala",
                      details: "Bridges state ministries and corporate sponsors to inaugurate the newly funded ₹50 Lakhs Student Entrepreneurship Incubator.",
                      venue: "Regional Auditorium Promenade Corridor",
                    },
                  ].map((prog, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-bg-cream/25 border border-ink/8 rounded-sm hover:border-anu-gold/25 transition-all flex flex-col md:flex-row gap-4 items-start font-sans"
                    >
                      <div className="md:w-52 shrink-0 space-y-1.5">
                        <span className="text-[10px] font-bold text-anu-gold flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          {prog.time}
                        </span>
                        <div className="text-[10px] font-bold text-anu-blue bg-anu-blue/5 px-2 py-0.5 rounded-sm inline-block uppercase border border-anu-blue/10">
                          {prog.venue}
                        </div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <h5 className="font-serif text-xs md:text-sm font-bold text-anu-blue">
                          {prog.title}
                        </h5>
                        <p className="text-xs text-ink/70 leading-relaxed">
                          {prog.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Closing Golden Call to Action Card */}
        <div className="relative overflow-hidden bg-[#2a1d05] text-white p-8 border border-anu-gold rounded-sm shadow-xl text-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #C5A059 1px, transparent 0)",
              backgroundSize: "16px 16px"
            }}
          />
          <h4 className="font-serif text-xl md:text-2xl text-anu-gold font-bold mb-3 relative z-10">
            Support the Next Fifty Years of ANU Innovation
          </h4>
          <p className="text-xs text-white/80 max-w-xl mx-auto leading-relaxed mb-6 font-sans relative z-10">
            Join the Golden Jubilee Academic Scholarship Fund to empower meritorious rural scholars, fund dynamic doctoral fellows, and expand research instrumentation laboratories.
          </p>
          <div className="flex justify-center gap-3 relative z-10 font-sans">
            <button
              onClick={onGoBackHome}
              className="bg-anu-gold hover:bg-anu-gold-dark text-white px-5 py-2.5 text-2xs font-extrabold uppercase tracking-widest transition-all rounded-sm shadow-md"
            >
              Return to Home Portal
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 text-2xs font-extrabold uppercase tracking-widest transition-all rounded-sm">
              Contribute to Scholarship Fund
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Inline scroll hero — unfurls on mount, stays on page
───────────────────────────────────────────────────────────── */
type Phase = "idle" | "expanding" | "unfurling" | "revealed";

const jubileeCelebrationPieces = Array.from({ length: 64 }, (_, i) => {
  const colors = [
    "#8a6a14",
    "#2a1d05",
    "#f5d77a",
    "#f97316",
    "#b45309",
    "#ffedd5",
  ];
  const shapes = ["rect", "circle", "streamer"] as const;
  return {
    id: i,
    color: colors[i % colors.length],
    delay: (i % 20) * 120 + Math.floor(i / 20) * 220,
    duration: 4800 + (i % 10) * 260,
    left: 2 + ((i * 19) % 96),
    drift: ((i % 13) - 6) * 10,
    size: 5 + (i % 5) * 2,
    rotation: (i * 41) % 360,
    shape: shapes[i % shapes.length],
  };
});

function JubileeCelebrationFall() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[min(650px,100vh)] overflow-hidden"
    >
      <style>{`
        @keyframes jh-confetti-fall {
          0% {
            opacity: 0;
            transform: translate3d(0, -16vh, 0) rotate(0deg);
          }
          8% {
            opacity: 1;
          }
          78% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--jh-drift), 112vh, 0) rotate(760deg);
          }
        }
      `}</style>

      {jubileeCelebrationPieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute top-0 block"
          style={
            {
              left: `${piece.left}%`,
              width: piece.shape === "streamer" ? piece.size * 0.55 : piece.size,
              height: piece.shape === "streamer" ? piece.size * 3.4 : piece.size * 1.35,
              borderRadius:
                piece.shape === "circle"
                  ? "999px"
                  : piece.shape === "streamer"
                    ? "999px"
                    : "2px",
              background:
                piece.shape === "streamer"
                  ? `linear-gradient(180deg, ${piece.color}, transparent)`
                  : piece.color,
              boxShadow:
                piece.color === "#111827" || piece.color === "#1f2937"
                  ? "0 0 0 1px rgba(255,244,194,0.14)"
                  : "0 0 12px rgba(245,215,122,0.4)",
              opacity: 0,
              transform: `rotate(${piece.rotation}deg)`,
              animation: `jh-confetti-fall ${piece.duration}ms cubic-bezier(0.2,0.7,0.2,1) ${piece.delay}ms 1 forwards`,
              "--jh-drift": `${piece.drift}vw`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function JubileeScrollHero({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");

  /* Auto-start on mount */
  useEffect(() => {
    const t = setTimeout(() => setPhase("expanding"), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase === "expanding") {
      const t = setTimeout(() => setPhase("unfurling"), 600);
      return () => clearTimeout(t);
    }
    if (phase === "unfurling") {
      const t = setTimeout(() => {
        setPhase("revealed");
        onComplete?.();
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  const isOpen = phase !== "idle";
  const isUnfurled = phase === "unfurling" || phase === "revealed";
  const showText = phase === "revealed";

  return (
    <>
      <style>{`
        @keyframes jh-shine-slow {
          0%{left:-60%} 100%{left:130%}
        }
        @keyframes jh-shine {
          0%{left:-60%} 100%{left:130%}
        }
        @keyframes jh-float {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)}
        }
        @keyframes jh-below-in {
          0%{opacity:0;transform:translateY(20px)}
          100%{opacity:1;transform:translateY(0)}
        }
      `}</style>

      {isOpen && <JubileeCelebrationFall />}

      <div
        style={{
          width: "100%",
          maxWidth: 900,
          height: "300px",
          transform: isOpen ? "scaleX(1)" : "scaleX(0.15)",
          opacity: isOpen ? 1 : 0,
          transition: "transform 1400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease-out",
          position: "relative",
          zIndex: 20,
        }}
      >
        <ScrollCanvas unfurled={isUnfurled} showText={showText} />
      </div>

      {showText && (
        <div
          className="mx-auto mt-6 text-center max-w-2xl"
          style={{
            animation: "jh-below-in 800ms cubic-bezier(0.22,1,0.36,1) 150ms both",
          }}
        >
          <p className="text-xs md:text-sm font-medium tracking-wide text-[#5a4310]/85 uppercase">
            Celebrating fifty years of academic excellence, research, and global impacts
          </p>
        </div>
      )}
    </>
  );
}

function ScrollCanvas({
  unfurled,
  showText,
}: {
  unfurled: boolean;
  showText: boolean;
}) {
  const ROD_W = 44;
  return (
    <div className="relative h-full w-full">
      {/* ── Parchment ── */}
      <div
        className="absolute inset-y-1 overflow-hidden"
        style={{
          left: ROD_W - 8,
          right: ROD_W - 8,
          transform: unfurled ? "scaleX(1)" : "scaleX(0.02)",
          transformOrigin: "center",
          transition: "transform 1800ms cubic-bezier(0.16, 1, 0.3, 1)",
          background:
            "radial-gradient(130% 150% at 50% 50%, #9e1a1a 0%, #820e0e 55%, #590808 100%)",
          boxShadow:
            "inset 0 0 60px rgba(0,0,0,0.45), inset 0 0 90px rgba(255,190,100,0.08), 0 30px 60px -20px rgba(80,10,10,0.5)",
          borderTop: "2px solid rgba(212,175,55,0.65)",
          borderBottom: "2px solid rgba(212,175,55,0.65)",
        }}
      >
        {/* ── Ornate gold borders inside ── */}
        <OrnateGoldBorder />

        {/* ── Shine effects ── */}
        {unfurled && (
          <span className="pointer-events-none absolute inset-0 overflow-hidden">
            <span
              className="absolute -inset-y-4 w-[55%]"
              style={{
                left: "-60%",
                background:
                  "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.85) 50%, transparent 65%)",
                animation: "jh-shine-slow 1600ms cubic-bezier(0.22,1,0.36,1) 100ms 1 forwards",
                mixBlendMode: "screen",
                filter: "blur(2px)",
              }}
            />
          </span>
        )}

        {/* ── Scroll Text content ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="font-serif text-[10px] uppercase tracking-[0.4em] text-[#f5d77a]">
            Honouring the Legacy
          </p>
          <h1
            className="mt-1 font-serif font-extrabold leading-none tracking-tight select-none"
            style={{
              fontSize: "clamp(34px, 6.5vw, 68px)",
              backgroundImage:
                "linear-gradient(135deg,#fff7c0 0%,#f5d060 25%,#e8b820 50%,#f5d060 75%,#fff7c0 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 2px 0 rgba(70,30,5,0.65)) drop-shadow(0 0 14px rgba(255,190,70,0.3))",
            }}
          >
            50 Years
          </h1>
          <p className="mt-1 font-serif italic text-base md:text-2xl text-[#ffe9a8]">
            Golden Jubilee Celebration
          </p>
          <div className="mt-2 h-px w-20 bg-gradient-to-r from-transparent via-[#f5d77a] to-transparent" />
          <p className="mt-2 font-bold uppercase tracking-[0.25em] text-[8px] md:text-xs text-[#fff4d1]">
            Acharya Nagarjuna University
          </p>
          <p className="mt-0.5 text-[8px] md:text-2xs tracking-[0.45em] text-[#f5d77a]">
            1976 — 2026
          </p>
        </div>

        {showText && (
          <span className="pointer-events-none absolute inset-0 overflow-hidden">
            <span
              className="absolute inset-y-0 -left-1/3 w-1/2"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                animation: "jh-shine 7s cubic-bezier(0.22,1,0.36,1) 0.4s infinite",
                mixBlendMode: "screen",
              }}
            />
          </span>
        )}
      </div>

      {/* Rods */}
      <OrnateRod side="left" width={ROD_W} unfurled={unfurled} />
      <OrnateRod side="right" width={ROD_W} unfurled={unfurled} />
    </div>
  );
}

function OrnateGoldBorder() {
  const W = 880;
  const H = 300;
  return (
    <svg
      aria-hidden
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      viewBox={`0 0 ${W} ${H}`}
    >
      <rect x="14" y="14" width={W - 28} height={H - 28} fill="none" stroke="rgba(255,220,80,0.65)" strokeWidth="1.2" />
      <rect x="22" y="22" width={W - 44} height={H - 44} fill="none" stroke="rgba(255,220,80,0.35)" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Corner Rosettes */}
      {[
        [14, 14], [W - 32, 14], [14, H - 32], [W - 32, H - 32]
      ].map(([x, y], idx) => (
        <g key={idx} transform={`translate(${x + 9},${y + 9})`}>
          <circle r="8" fill="rgba(60,20,5,0.7)" stroke="rgba(255,220,80,0.8)" strokeWidth="0.9" />
          <circle r="3" fill="rgba(255,210,60,0.8)" />
        </g>
      ))}
      {/* Center Top Crest */}
      <path d={`M ${W / 2 - 20} 14 L ${W / 2} 4 L ${W / 2 + 20} 14 Z`} fill="rgba(255,210,60,0.4)" stroke="rgba(255,220,80,0.8)" strokeWidth="0.8" />
    </svg>
  );
}

function OrnateRod({
  side,
  width,
  unfurled,
}: {
  side: "left" | "right";
  width: number;
  unfurled: boolean;
}) {
  const offset = unfurled ? 0 : `calc(50% - ${width - 1}px)`;
  const bodyW = width - 6;

  return (
    <div
      className="absolute top-0"
      style={{
        width,
        height: "100%",
        [side]: offset as unknown as string,
        transition: `${side} 1400ms cubic-bezier(0.22, 1, 0.36, 1)`,
        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.35))",
      }}
    >
      {/* Top sphere finial */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: -22,
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 25%, #ffedd5, #fb923c 55%, #9a3412 100%)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      />
      {/* Body */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          width: bodyW,
          height: "100%",
          borderRadius: bodyW / 2,
          background:
            "linear-gradient(90deg,#241000 0%,#5a3e0a 15%,#cc9d3d 40%,#ffeb99 50%,#cc9d3d 60%,#5a3e0a 85%,#241000 100%)",
          boxShadow: "0 0 0 1px rgba(255,240,180,0.25), inset 0 0 8px rgba(80,50,5,0.4)",
        }}
      />
      {/* Bottom sphere finial */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: -22,
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 25%, #ffedd5, #fb923c 55%, #9a3412 100%)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      />
    </div>
  );
}
