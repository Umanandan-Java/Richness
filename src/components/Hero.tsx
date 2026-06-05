/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Trophy, Play } from "lucide-react";
import heroCampusImg from "../assets/images/anu_hero_campus_1779356718140.jpg";

interface HeroProps {
  onExploreAdmissions: () => void;
  onOpenVirtualTour: () => void;
  onOpenJubilee?: () => void;
}

export default function Hero({ onExploreAdmissions, onOpenVirtualTour, onOpenJubilee }: HeroProps) {
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.11, delayChildren: 0.1 },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[50vh] pt-0 lg:pt-0 flex items-start bg-bg-cream overflow-hidden" id="hero-section">
      {/* Absolute Decorative Premium Pattern background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-4 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C5A059 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[400px]">
          
          {/* Hero Content Left */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-start py-4 lg:py-6 text-center lg:text-left"
          >
            {/* Interactive Golden Jubilee Celebratory Prompt */}
            {onOpenJubilee && (
              <motion.div
                variants={textItem}
                onClick={onOpenJubilee}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500/10 hover:from-amber-500/15 via-amber-500/2 to-transparent border border-anu-gold/45 p-1.5 pl-3 pr-4 rounded-full cursor-pointer hover:border-anu-gold transition-all hover:-translate-y-0.5 group mb-6 max-w-max select-none shadow-[0_4px_12px_rgba(230,170,40,0.06)] scale-95 origin-left"
              >
                <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-[#9a3412] text-[#fffdeb] font-serif font-extrabold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                  50th Golden Jubilee (1976 – 2026)
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#694e0f] group-hover:text-anu-blue flex items-center gap-1">
                  Explore Archive stories & Speeches <span className="text-anu-gold group-hover:translate-x-1.5 transition-transform">→</span>
                </span>
              </motion.div>
            )}

            <motion.div variants={textItem} className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="w-6 h-[1px] bg-anu-gold hidden lg:inline-block" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-anu-gold-dark">
                Established 1976
              </span>
              <span className="bg-anu-blue/5 text-anu-blue border border-anu-blue/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-anu-gold" /> NAAC A grade
              </span>
            </motion.div>

            <motion.h1 variants={textItem} className="font-serif text-[42px] sm:text-6xl lg:text-[56px] leading-[1.02] text-anu-blue font-bold tracking-tight mb-6">
              Where Ancient Wisdom <br />
              <span className="relative inline-block text-anu-blue-light italic font-normal pr-3">
                Meets Modern Science.
                <span className="absolute bottom-2 left-0 w-full h-[5px] bg-gradient-to-r from-anu-gold via-anu-gold/60 to-transparent opacity-50 -z-10 rounded-full" />
              </span>
            </motion.h1>

            <motion.p variants={textItem} className="font-sans text-base sm:text-lg text-ink/80 leading-relaxed font-light mb-8 max-w-lg mx-auto lg:mx-0 border-l-[3px] border-anu-gold/45 pl-5 text-left">
              Nurturing generations of scholars through a tradition of rigorous academic inquiry, cultural synthesis, and groundbreaking technological research in the historic, vibrant lands of Guntur & Vijayawada.
            </motion.p>

            <motion.div variants={textItem} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <button
                onClick={onExploreAdmissions}
                id="hero-explore-btn"
                className="w-full sm:w-auto bg-anu-gold hover:bg-anu-gold-dark text-anu-blue px-10 py-5 text-sm font-extrabold uppercase tracking-widest transition-all hover:shadow-[0_14px_30px_rgba(0,33,71,0.2)] rounded-sm active:scale-95 cursor-pointer border border-anu-blue/10"
              >
                Apply Now - 2026-27
              </button>
              
              <button
                onClick={onOpenVirtualTour}
                id="hero-tour-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-anu-blue hover:text-anu-gold text-xs font-bold uppercase tracking-widest transition-colors py-3 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full border border-anu-blue/20 group-hover:border-anu-gold flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                Watch Campus Tour
              </button>
            </motion.div>
            
            {/* Embedded Mini Badges */}
            <motion.div variants={textItem} className="mt-12 pt-8 border-t border-ink/8 flex flex-wrap justify-center lg:justify-start gap-6 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-anu-gold animate-pulse shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink/65">Global Alumni Net</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-anu-gold shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink/65">PhD Elite Research faculty</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-anu-gold shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink/65">Interdisciplinary cell</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Graphic Right (Prestige Oval Frame & Vertical Tag) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-6 relative flex items-start justify-center py-4 lg:py-6 bg-anu-blue/5 lg:bg-transparent rounded-lg lg:rounded-none"
          >
            {/* Vertical Prestigious Tag (Traditional vertical orientation on large screens) */}
            <div className="hidden xl:block absolute right-[-10px] top-24 writing-mode-vertical-rl text-[10px] tracking-[5px] uppercase font-bold text-anu-gold/60 select-none">
              SHAPING THE CONSCIOUSNESS OF TOMORROW
            </div>

            {/* Architectural Double-Layered Frame */}
            <div className="relative group">
              {/* Outer decorative astronomical sphere compass border */}
              <div className="absolute -inset-5 border border-dashed border-anu-gold/35 rounded-[130px] sm:rounded-[155px] pointer-events-none animate-[spin_120s_linear_infinite] opacity-60" />
              
              {/* Secondary offset absolute layout boundary */}
              <div className="absolute -inset-2.5 border border-anu-gold/20 rounded-[125px] sm:rounded-[145px] pointer-events-none group-hover:scale-105 transition-transform duration-1000" />

              {/* Oval Frame styled precisely per Recipe 12 */}
              <div 
                className="relative w-[240px] sm:w-[280px] h-[320px] sm:h-[380px] border-2 border-anu-gold rounded-[120px] sm:rounded-[140px] overflow-hidden bg-anu-blue select-none z-10 transition-transform duration-1000 group-hover:scale-[1.015] shadow-2xl"
                id="hero-oval-frame"
              >
                {/* Back Drop pattern inside the mask */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-90 group-hover:mix-blend-normal transition-all duration-[1200ms] group-hover:scale-110"
                  role="img"
                  aria-label="Acharya Nagarjuna University campus landscape"
                  initial={{ filter: "blur(8px)", scale: 1.04 }}
                  animate={{ filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{
                    backgroundImage: `url(${heroCampusImg})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anu-blue-dark/65 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Behind-Oval decorative glowing sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-anu-gold/15 blur-3xl pointer-events-none" />

            {/* Luxury Floating Card */}
            <div className="absolute bottom-4 sm:bottom-12 -left-2 sm:left-4 bg-white/95 backdrop-blur-md p-5 border-l-4 border-anu-gold shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-sm max-w-[210px] sm:max-w-[230px] z-20 group">
              <div className="flex gap-2.5 items-center mb-1">
                <Trophy className="w-5 h-5 text-anu-gold shrink-0 animate-[anu-float_3.4s_ease-in-out_infinite]" />
                <h4 className="font-serif text-lg sm:text-xl text-anu-blue font-bold leading-tight">
                  Grade "A"
                </h4>
              </div>
              <p className="text-[10px] tracking-wider uppercase font-extrabold text-ink/50 leading-none">
                NAAC Accredited
              </p>
              <div className="h-[1px] bg-ink/10 my-2" />
              <p className="text-[10px] leading-relaxed text-ink/70">
                Top-tier score reflecting pristine research and quality learning environments.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
