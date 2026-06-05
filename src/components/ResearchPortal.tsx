/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { PUBLICATIONS } from "../data";
import { Award, Search, BookOpen, Fingerprint, Star, Layers, Activity, Dna, Cpu, Pill, Compass, FlaskConical } from "lucide-react";
import researchComplexImg from "../assets/images/anu_research_complex_1779356756899.png";

interface ResearchPortalProps {
  hideScholarExplorer?: boolean;
}

export default function ResearchPortal({ hideScholarExplorer = false }: ResearchPortalProps) {
  const [researchQuery, setResearchQuery] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  // Get all unique tags from publication mock database
  const allTags = useMemo(() => {
    const set = new Set<string>();
    PUBLICATIONS.forEach(pub => {
      pub.tags.forEach(t => set.add(t));
    });
    return Array.from(set);
  }, []);

  // Filter papers
  const filteredPapers = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const matchesQuery = 
        pub.title.toLowerCase().includes(researchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(researchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(researchQuery.toLowerCase()) ||
        pub.significance.toLowerCase().includes(researchQuery.toLowerCase());
      
      const matchesTag = selectedTag === "all" || pub.tags.includes(selectedTag);

      return matchesQuery && matchesTag;
    });
  }, [researchQuery, selectedTag]);

  // Premium patented portfolio
  const patentsList = [
    {
      num: "IN-2025-AP01",
      title: "Bio-compatible Polymeric Microspheres for Guided Drug Delivery Protocol",
      inventor: "Prof. Dr. A. Prameela Rani (Dept. of Pharmaceutical Sciences)",
      status: "Patent Granted (UGC Cell)",
      desc: "An innovative drug carrier derived from native flora of the Krishna River valley, multiplying target cancer tissue assimilation by 4.2x while neutralizing healthy cellular exposure metrics."
    },
    {
      num: "IN-2024-AP09",
      title: "Multi-modal Agribusiness Risk Assessor with Dynamic Soil and Weather Feedback Cycles",
      inventor: "Prof. Dr. R. Siva Rama Prasad (Dept. of Business Administration)",
      status: "Utility Model Registered",
      desc: "A sub-surface sensor algorithm measuring moisture variances, instantly mapping them to localized credit insurance pools optimized for regional cooperative banks."
    }
  ];

  return (
    <section className="bg-bg-cream py-16 md:py-24" id="research-and-publications-portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-anu-gold-dark block mb-3">
              02 - Scholarly Frontiers
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-anu-blue font-bold tracking-tight">
              Research, Metaphysics & Local Innovations
            </h2>
          </div>
          <p className="text-ink/70 leading-relaxed text-sm md:text-base lg:border-l lg:border-anu-gold/45 lg:pl-6">
            From molecular nanotechnology in our central labs to classic Buddhist ethics along the Krishna valley, ANU scholars map the future of scientific inquiry.
          </p>
        </div>

        {/* Visual background section using generated research center image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-anu-blue text-white rounded-sm overflow-hidden border border-anu-gold/30">
          
          {/* Left Text details */}
          <div className="lg:col-span-6 p-8 md:p-12 space-y-6">
            <span className="text-[9px] font-bold uppercase tracking-[4px] text-anu-gold bg-white/10 px-3 py-1">
              Patents Overview & Core Stats
            </span>
            <h3 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight">
              A High-Impact Knowledge Pipeline
            </h3>
            <p className="text-white/80 leading-relaxed text-xs md:text-sm">
              ANU hosts multi-disciplinary research initiatives funded by elite departments of the Government of India. Our central instrumentation labs contain molecular sequencing, imaging arrays, and advanced edge-AI chips supporting 2,500+ active scholars.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-anu-gold font-serif text-2xl font-bold">14+</div>
                <div className="text-[9px] uppercase tracking-wider text-white/50 font-bold mt-1">National Patents</div>
              </div>
              <div>
                <div className="text-anu-gold font-serif text-2xl font-bold">₹82M+</div>
                <div className="text-[9px] uppercase tracking-wider text-white/50 font-bold mt-1">Research Funding</div>
              </div>
              <div>
                <div className="text-anu-gold font-serif text-2xl font-bold">4.8k+</div>
                <div className="text-[9px] uppercase tracking-wider text-white/50 font-bold mt-1">H-Index Citations</div>
              </div>
            </div>
          </div>

          {/* Right Visual Image - Loads custom-engineered asset */}
          <div className="lg:col-span-6 h-full min-h-[320px] relative select-none">
            <img
              src={researchComplexImg}
              alt="Acharya Nagarjuna University research complex and advanced academic facilities"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-101"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-anu-blue/40 to-transparent pointer-events-none" />
          </div>

        </div>

        {/* Dynamic Publication Scholar Search and tags explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Filter & Search Dashboard (Left 4 cols) - Hidden if hideScholarExplorer is true */}
          {!hideScholarExplorer && (
            <div className="lg:col-span-4 bg-white p-6 md:p-8 border border-ink/8 shadow-sm rounded-sm">
              <h4 className="font-serif text-base text-anu-blue font-bold mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-anu-gold shrink-0" />
                <span>Scholar DB Explorer</span>
              </h4>
              <p className="text-[11px] text-ink/75 leading-relaxed mb-6">
                Search peer-reviewed publications published by active ANU scholars in high-impact journals (IEEE, Nature, Elsevier).
              </p>

              {/* Keyword Search */}
              <div className="space-y-2 mb-6">
                <label className="text-[10px] font-bold uppercase tracking-wider text-anu-gold block">
                  Search By Query Keyword:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Nanotech, Cancer, Crops..."
                    value={researchQuery}
                    onChange={(e) => setResearchQuery(e.target.value)}
                    className="w-full bg-bg-cream border border-ink/10 pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-anu-gold rounded-sm placeholder:text-ink/30"
                  />
                  <Search className="w-3.5 h-3.5 text-ink/30 absolute left-3 top-3" />
                </div>
              </div>

              {/* Tags checkboxes picker */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-anu-gold block">
                  Filter Research Category:
                </label>

                <div className="flex flex-wrap lg:flex-col gap-1.5">
                  <button
                    onClick={() => setSelectedTag("all")}
                    className={`text-left px-3 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-colors ${
                      selectedTag === "all"
                        ? "bg-anu-blue text-white"
                        : "bg-bg-cream text-ink/70 hover:bg-ink/5"
                    }`}
                  >
                    All Domains ({PUBLICATIONS.length})
                  </button>
                  {allTags.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTag(t)}
                      className={`text-left px-3 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-colors ${
                        selectedTag === t
                          ? "bg-anu-blue text-white"
                          : "bg-bg-cream text-ink/70 hover:bg-ink/5"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Publication matched grid list (Right 8 or 12 cols) */}
          <div className={`${hideScholarExplorer ? 'lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-0' : 'lg:col-span-8 space-y-6'}`}>
            {filteredPapers.length === 0 ? (
              <div className="bg-white p-8 border border-ink/8 text-center rounded-sm">
                <p className="text-xs text-ink/60 italic">No publications match your terms. Try using different filtering tags.</p>
              </div>
            ) : (
              filteredPapers.map((pub) => {
                // Determine icon based on departmentId
                const getIcon = (id: string) => {
                  switch(id) {
                    case 'biotech': return <Dna className="w-8 h-8 opacity-[0.08]" />;
                    case 'ece': return <Cpu className="w-8 h-8 opacity-[0.08]" />;
                    case 'bpharm': return <Pill className="w-8 h-8 opacity-[0.08]" />;
                    case 'buddhist': return <Compass className="w-8 h-8 opacity-[0.08]" />;
                    default: return <FlaskConical className="w-8 h-8 opacity-[0.08]" />;
                  }
                };

                return (
                  <div 
                    key={pub.id} 
                    id={`pub-${pub.id}`}
                    className={`group relative bg-white p-8 border border-anu-gold/20 rounded-sm hover:shadow-[0_30px_60px_rgba(197,160,89,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between ${!hideScholarExplorer ? 'border-l-4 border-anu-gold' : ''}`}
                  >
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 p-4 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                      {getIcon(pub.departmentId || '')}
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[3px] text-anu-gold-dark mb-4 block">
                        {pub.year} • {pub.journal}
                      </span>
                      
                      <h5 className="font-serif text-xl md:text-2xl text-anu-blue font-bold leading-tight mb-4 group-hover:text-anu-gold-dark transition-colors duration-300">
                        {pub.title}
                      </h5>

                      <p className="font-serif text-sm italic text-ink/75 leading-relaxed mb-8 border-l-2 border-anu-gold/30 pl-4 py-1">
                        {pub.significance}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-ink/10 flex justify-between items-end flex-wrap gap-4">
                      <div className="space-y-1">
                        <div className="text-[9px] font-bold uppercase tracking-widest text-ink/40">
                          Lead Investigation
                        </div>
                        <div className="text-[11px] font-bold text-anu-blue uppercase tracking-wider">
                          {pub.authors}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {pub.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[8px] font-bold text-anu-gold-dark bg-anu-gold/5 border border-anu-gold/15 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Faint Bottom Accent */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-anu-gold/0 via-anu-gold/40 to-anu-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                );
              })
            )}
          </div>

        </div>

        

      </div>
    </section>
  );
}
