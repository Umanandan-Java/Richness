/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { LEADERSHIP, TIMELINE } from "../data";
import { Landmark, Award, ArrowUpRight, Compass, Users } from "lucide-react";

export default function UniversityOverview() {
  const [activeLeader, setActiveLeader] = useState<number>(0);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState<number>(TIMELINE.length - 1);

  const currentLeader = LEADERSHIP[activeLeader];

  return (
    <section className="bg-bg-cream py-12 md:py-16" id="university-overview-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elite Section Title */}
        <div className="mb-10 md:mb-12 max-w-4xl">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-anu-gold-dark block mb-3">
            01 - Institutional Genesis
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-anu-blue font-bold tracking-tight mb-4">
            Embodying Noble Wisdom
          </h2>
          <div className="w-20 h-0.5 bg-anu-gold" />
          <p className="mt-4 max-w-2xl text-ink/70 leading-relaxed text-sm md:text-base">
            Named after Acharya Nagarjuna—the legendary 2nd-century formulation pioneer and chief philosopher of Buddhism—the university synthesizes absolute scientific truth with human ethics.
          </p>
        </div>

        {/* Traditional Grid: Legacy Text Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 md:mb-16">
          
          {/* Legacy Summary Card (Left Side) - Architecturally Elevated with double hair-lines */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.03)] border-t-[4px] border-anu-gold rounded-sm relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(197,160,89,0.08)] transition-all duration-500">
            {/* Corner hairline brackets for a precise, luxurious editorial finish */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-anu-gold/30" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-anu-gold/30" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-anu-gold/30" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-anu-gold/30" />
            
            <h3 className="font-serif text-2xl md:text-3xl text-anu-blue font-bold mb-4 leading-tight tracking-tight">
              Our Vision & Legacy
            </h3>
            
            <div className="max-w-[75ch] space-y-4 text-sm text-ink/80 leading-relaxed font-light">
              <p>
                Acharya Nagarjuna University has completed over five decades of landmark academic stewardship. Sprawled across a lush campus on the Guntur-Vijayawada national highway, the university serves as the primary academic nursery for Andhra Pradesh’s coastal belt.
              </p>
              <div className="border-l-[3px] border-anu-gold pl-5 py-2.5 my-6 italic text-ink/85 bg-anu-gold/5 font-serif text-sm relative">
                <span className="absolute left-1.5 top-[-10px] text-4xl text-anu-gold/25 font-serif select-none">“</span>
                "We cultivate minds equipped to solve complex modern paradigms while retaining their local ethical values and societal focus."
              </div>
              <p>
                Host to over 39 academic departments on the main campus, we draw research funding from elite national councils like DST, UGC, CSIR, and DBT. Under the leadership of modern educationists, we continue to upgrade our technology hubs while retaining a profound research ecosystem that bridges global parameters.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-ink/8">
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-anu-blue font-serif text-2xl font-bold">1976</div>
                <div className="text-[10px] uppercase tracking-wider text-anu-gold-dark font-bold mt-1">Established</div>
              </div>
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-anu-blue font-serif text-2xl font-bold">Grade 'A'</div>
                <div className="text-[10px] uppercase tracking-wider text-anu-gold-dark font-bold mt-1">NAAC Rating</div>
              </div>
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-anu-blue font-serif text-2xl font-bold">15+</div>
                <div className="text-[10px] uppercase tracking-wider text-anu-gold-dark font-bold mt-1">Nations Enrolled</div>
              </div>
            </div>
          </div>

          {/* Interactive Leadership Messages (Right Side) */}
          <div className="lg:col-span-5 flex flex-col h-full justify-between">
            <div className="bg-white/70 backdrop-blur-md p-5 rounded-sm border border-ink/5">
              <h4 className="font-serif text-xs font-bold uppercase tracking-[3px] text-anu-gold-dark mb-4">
                Chancellery & Leadership Messages
              </h4>
              
              {/* Leader Picker Tabs */}
              <div className="flex gap-4 border-b border-ink/8 pb-4 mb-4" id="leadership-tabs">
                {LEADERSHIP.map((leader, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLeader(index)}
                    className={`pb-2 text-xs font-extrabold uppercase tracking-widest border-b-2 transition-all ${
                      activeLeader === index
                        ? "border-anu-gold text-anu-blue font-bold"
                        : "border-transparent text-ink/40 hover:text-ink/85"
                    }`}
                  >
                    {leader.role}
                  </button>
                ))}
              </div>

              {/* Dynamic message content */}
              <div className="transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start mt-2">
                <div className="relative shrink-0">
                  <img
                    src={currentLeader.photoUrl}
                    alt={currentLeader.name}
                    className="w-32 h-40 sm:w-40 sm:h-48 rounded-sm object-cover border border-anu-gold/30 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 w-full h-full border border-anu-gold/10 -z-10 rounded-sm" />
                </div>
                
                <div className="flex-1 pt-1">
                  <div className="mb-4">
                    <h5 className="font-serif text-xl text-anu-blue font-bold leading-tight mb-1.5">
                      {currentLeader.name}
                    </h5>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-anu-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-anu-gold-dark block">
                        {currentLeader.role} of ANU
                      </span>
                    </div>
                  </div>

                  <blockquote className="font-serif text-[13px] md:text-sm italic text-ink/90 leading-relaxed mb-4 border-l-2 border-anu-gold/40 pl-4 py-1">
                    "{currentLeader.quote}"
                  </blockquote>

                  <p className="text-xs text-ink/70 leading-relaxed font-light">
                    {currentLeader.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Legacy Timeline Slider */}
        <div className="bg-anu-blue text-white p-6 md:p-8 shadow-2xl relative overflow-hidden rounded-sm border border-anu-gold/30">
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-anu-gold-dark">
                  Golden Milestones
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mt-1">
                  Timeline of Academic Excellence
                </h3>
              </div>
              <div className="bg-white/10 px-3.5 py-1.5 rounded-sm text-xs font-mono font-bold tracking-wider text-anu-gold-light">
                Currently Viewing: {TIMELINE[activeTimelineIdx].year}
              </div>
            </div>

            {/* Core Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[160px]">
              
              {/* Year Scroller List (Left Side) */}
              <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-white/10 pr-0 lg:pr-6">
                {TIMELINE.map((evt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTimelineIdx(idx)}
                    className={`px-4 py-3 text-left shrink-0 rounded-sm text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-between ${
                      activeTimelineIdx === idx
                        ? "bg-anu-gold text-anu-blue font-bold shadow-lg translate-x-1 border-l-4 border-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{evt.year} - {evt.tag}</span>
                    <span className="text-[9px] opacity-70 ml-2">➔</span>
                  </button>
                ))}
              </div>

              {/* Node Year details (Right Side with dynamic text) */}
              <div className="lg:col-span-8 bg-anu-blue-dark/50 p-6 md:p-8 rounded-sm border border-white/5 relative">
                <span className="text-[9px] font-bold uppercase tracking-[3px] text-anu-gold bg-anu-gold/10 px-2.5 py-1 rounded-full">
                  Historic Era Highlight
                </span>
                <h4 className="font-serif text-xl md:text-2xl text-white font-bold mt-4 mb-3">
                  {TIMELINE[activeTimelineIdx].title}
                </h4>
                <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                  {TIMELINE[activeTimelineIdx].description}
                </p>
              </div>

            </div>
          </div>

          {/* Decorative faint background watermark */}
          <div className="absolute right-[-40px] bottom-[-20px] font-serif text-[180px] font-extrabold text-white/5 select-none pointer-events-none">
            ANU
          </div>
        </div>

      </div>
    </section>
  );
}
