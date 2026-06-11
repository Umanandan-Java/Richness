/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Cpu, 
  Languages, 
  FileCheck, 
  Star, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle, 
  Download, 
  Users, 
  BookOpen, 
  ExternalLink, 
  Building, 
  ArrowRight,
  TrendingUp,
  MapPin,
  Vote,
  Award
} from "lucide-react";

interface PageProps {
  onBackToHome: () => void;
}

/* ==========================================================================
   1. INTERNAL QUALITY ASSURANCE CELL (IQAC)
   ========================================================================== */
export function IQACPage({ onBackToHome }: PageProps) {
  const [activeSubTab, setActiveSubTab] = useState<string>("aqar");

  const aqarFiles = [
    { year: "2024 - 2025", status: "Submitted (UGC Portal Active)", code: "AQAR_2024_SUBMITTED" },
    { year: "2023 - 2024", status: "Approved & Published", code: "AQAR_2023_APPROVED" },
    { year: "2022 - 2023", status: "Approved & Published", code: "AQAR_2022_APPROVED" },
    { year: "2021 - 2022", status: "Archived Cycle-3 Record", code: "AQAR_2021_ARCHIVED" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-ink/8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <button 
            onClick={onBackToHome}
            className="text-xs font-mono font-bold uppercase tracking-widest text-[#aa8540] hover:text-anu-blue flex items-center gap-1 mb-3 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Sanctuary</span>
          </button>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#002147] tracking-tight">
            Internal Quality Assurance Cell (IQAC)
          </h2>
          <p className="text-xs text-ink/65 mt-1 font-mono tracking-wider uppercase">
            ESTABLISHED UNDER UGC GUIDELINES • ACADEMIC QUALITY MONITORING BODY
          </p>
        </div>
        <div className="bg-anu-gold/10 border border-anu-gold/30 p-3 flex items-center gap-3 rounded-sm max-w-max">
          <ShieldCheck className="w-10 h-10 text-anu-gold shrink-0" />
          <div>
            <span className="text-[9px] font-mono uppercase font-bold text-anu-blue block leading-none">NAAC CGPA RATING</span>
            <span className="font-serif text-lg font-extrabold text-anu-blue block mt-0.5">3.82 / 4.00 Grade A+</span>
          </div>
        </div>
      </div>

      {/* Visual Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {[
          { label: "Annual AQARs", value: "100% Submitted", sub: "UGC compliant" },
          { label: "Pedagogical Audits", value: "Quarterly Scheduled", sub: "Across all departments" },
          { label: "Alumni Feedback", value: "94.2% Satisfaction", sub: "Annual corporate polls" },
          { label: "Teacher Appraisals", value: "Fully Digitized", sub: "Performance linked" }
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-ink/8 p-5 rounded-sm shadow-xs hover:border-anu-gold/50 transition-colors">
            <span className="text-[10px] font-mono tracking-wider text-ink/50 uppercase block">{stat.label}</span>
            <p className="text-xl font-bold font-serif text-anu-blue mt-1.5">{stat.value}</p>
            <p className="text-[11px] text-ink/60 mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Central content layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Left column navigation */}
        <div className="space-y-4">
          <div className="bg-bg-cream/40 border border-ink/8 p-5 space-y-3.5 rounded-sm">
            <h4 className="font-serif font-bold text-base text-anu-blue">Core Quality Mandates</h4>
            <div className="space-y-1">
              {[
                { id: "aqar", label: "Annual AQAR Submissions", desc: "UGC mandatory archives" },
                { id: "action", label: "Academic Action Reports", desc: "Curriculum adjustments" },
                { id: "feedback", label: "Student & Alumni Feedback", desc: "Democratic metric checks" },
                { id: "bench", label: "Global Institutional Benchmarks", desc: "QS & Times Higher indicators" },
              ].map((subTab) => (
                <button
                  key={subTab.id}
                  onClick={() => setActiveSubTab(subTab.id)}
                  className={`w-full text-left p-3 border rounded-xs transition-all flex flex-col cursor-pointer ${
                    activeSubTab === subTab.id 
                      ? "bg-anu-blue text-white border-anu-blue shadow-md" 
                      : "bg-white text-ink border-ink/8 hover:bg-bg-cream hover:border-anu-gold/30"
                  }`}
                >
                  <span className="text-xs font-bold leading-none">{subTab.label}</span>
                  <span className="text-[10px] text-current opacity-75 mt-1">{subTab.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-amber-50/50 border border-anu-gold/25 rounded-sm">
            <div className="flex gap-2 text-amber-800">
              <Sparkles className="w-5 h-5 shrink-0 mt-0.5 text-anu-gold" />
              <div>
                <h5 className="text-xs font-bold font-serif uppercase tracking-wider">Quality Policy Directive</h5>
                <p className="text-[11px] leading-relaxed mt-1 text-ink/75">
                  "To cultivate a self-sustaining ecosystem of standard assessment and instructional rigor across all constituent postgraduate centres in Guntur corridor."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column detailed display */}
        <div className="lg:col-span-2 bg-white border border-ink/8 p-6 md:p-8 rounded-sm shadow-sm space-y-6">
          {activeSubTab === "aqar" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 border-b border-ink/8 pb-3">
                <FileCheck className="w-5 h-5 text-anu-gold" />
                <h3 className="font-serif text-lg font-bold text-anu-blue">Annual Quality Assurance Reports</h3>
              </div>
              <p className="text-xs text-ink/75 leading-relaxed">
                As part of our commitment to the NAAC and the UGC, Acharya Nagarjuna University systematically compiles, reviews, and submits its Quality Assurance reports at the end of each academic session. This continuous index covers progress across all seven assessment criteria.
              </p>

              <div className="space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#aa8540] uppercase block">
                  SUBMITTED FILES & OFFICIAL TRANSMISSIONS
                </span>
                <div className="space-y-2">
                  {aqarFiles.map((file, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border border-ink/8 rounded-xs hover:bg-bg-cream/40 transition-colors">
                      <div>
                        <span className="text-xs font-bold text-anu-blue block">{file.year} Submission Record</span>
                        <span className="text-[10px] text-ink/50 mt-0.5 block font-mono">ID: {file.code} • verified secure gateway</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] bg-emerald-50 text-emerald-700 px-2 py-0.5 border border-emerald-100 rounded-sm font-mono font-semibold">
                          {file.status}
                        </span>
                        <button className="p-1 px-2.5 bg-bg-cream hover:bg-anu-gold/25 text-anu-blue hover:text-[#002147] border border-ink/8 hover:border-anu-gold/40 text-[10px] font-mono font-bold rounded-xs flex items-center gap-1 cursor-pointer transition-colors">
                          <Download className="w-3 h-3 text-anu-gold" /> Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSubTab === "action" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 border-b border-ink/8 pb-3">
                <CheckCircle className="w-5 h-5 text-anu-gold" />
                <h3 className="font-serif text-lg font-bold text-anu-blue">Academic Action Taken Reports</h3>
              </div>
              <p className="text-xs text-ink/75 leading-relaxed">
                Following feedback reviews and external advisory panels, the IQAC implements strict improvement agendas. All departmental boards of studies adjust credits and syllabus blocks to align outputs with real placement criteria.
              </p>

              <div className="p-4 bg-bg-cream/60 border border-ink/8 rounded-xs space-y-3.5">
                <h4 className="font-serif text-sm font-bold text-anu-blue">Key Actions Approved (Session 2025-26)</h4>
                <ul className="space-y-2.5 text-xs text-ink/80 list-disc pl-4 leading-relaxed">
                  <li><strong>Credit Restructuring:</strong> Standardized 12 core professional credits on advanced computing technologies, data platforms, and green engineering designs.</li>
                  <li><strong>Diagnostic Laboratories:</strong> Setup central instrument compliance registries across Biotechnology and Nanotech blocks to boost student paper publications.</li>
                  <li><strong>Mandatory Internships:</strong> Mandated a 12-week industrial internship framework for all Applied Science and Pharmacy PG divisions.</li>
                </ul>
              </div>
            </div>
          )}

          {activeSubTab === "feedback" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 border-b border-ink/8 pb-3">
                <Users className="w-5 h-5 text-anu-gold" />
                <h3 className="font-serif text-lg font-bold text-anu-blue">Democratic Student Feedback Loop</h3>
              </div>
              <p className="text-xs text-ink/75 leading-relaxed">
                The university hosts a secure, fully digitized double-blind student database to evaluate curriculum delivery, library accessibility, and lab resources. Reviews are analyzed automatically on central dashboards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-ink/8 p-3.5 rounded-xs bg-bg-cream/20">
                  <span className="text-[9px] text-[#aa8540] uppercase font-mono font-bold block">FACULTY RIGOR SCORE</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-serif font-extrabold text-anu-blue">94.8%</span>
                    <span className="text-[10px] text-emerald-600 font-bold">▲ (up 1.2%)</span>
                  </div>
                  <p className="text-[10.5px] text-ink/65 mt-1 leading-snug">Average student ratings on teaching methodology and structural syllabus clarity.</p>
                </div>
                <div className="border border-ink/8 p-3.5 rounded-xs bg-bg-cream/20">
                  <span className="text-[9px] text-[#aa8540] uppercase font-mono font-bold block">CAMPUS INFRASTRUCTURE INDEX</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-serif font-extrabold text-[#002147]">91.5%</span>
                    <span className="text-[10px] text-emerald-600 font-bold">▲ (up 0.8%)</span>
                  </div>
                  <p className="text-[10.5px] text-ink/65 mt-1 leading-snug">Expressed satisfaction with dynamic diagnostic audio centers, dorm facilities, and athletic rings.</p>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === "bench" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 border-b border-ink/8 pb-3">
                <Award className="w-5 h-5 text-anu-gold" />
                <h3 className="font-serif text-lg font-bold text-anu-blue">Global Institutional Benchmarks</h3>
              </div>
              <p className="text-xs text-ink/75 leading-relaxed">
                Acharya Nagarjuna University systematically charts standard institutional benchmarks alongside prominent peer research setups under the Times Higher Education (THE) Asia criteria.
              </p>
              
              <div className="p-4 border border-indigo-100 bg-indigo-50/20 rounded-xs space-y-3 leading-relaxed text-xs">
                <h5 className="font-serif font-bold text-indigo-950">Accredited Milestones & Certifications</h5>
                <ul className="space-y-2 list-none text-indigo-900/90 pl-1">
                  <li className="flex items-center gap-2">✔ UGC Category-I Graded University Status (Highest sovereign autonomy level).</li>
                  <li className="flex items-center gap-2">✔ Active partnerships with international labs in Japan, South Korea, and Germany.</li>
                  <li className="flex items-center gap-2">✔ ISO 9001:2015 institutional certificate representing rigorous system audits.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   2. INCUBATORS (Startup & Innovation Cell)
   ========================================================================== */
export function IncubatorsPage({ onBackToHome }: PageProps) {
  const [activeSegment, setActiveSegment] = useState<string>("overview");

  const portfolio = [
    { title: "Nagarjuna Agrotech Labs", sector: "Agri-Tech & Soil Diagnostics", fund: "₹10 Lakhs SEED", state: "Active In-Market" },
    { title: "Guntur AI Diagnostics", sector: "Biotech & Image Analytics", fund: "₹15 Lakhs Grant", state: "Clinical Evaluation Phase" },
    { title: "Mekong Electric Drones", sector: "Sovereign Logistics & Drones", fund: "₹7.5 Lakhs Seed", state: "Pilot Testing" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-ink/8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <button 
            onClick={onBackToHome}
            className="text-xs font-mono font-bold uppercase tracking-widest text-[#aa8540] hover:text-anu-blue flex items-center gap-1 mb-3 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Sanctuary</span>
          </button>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#002147] tracking-tight">
            Nagarjuna Startup & Innovation Cell
          </h2>
          <p className="text-xs text-ink/65 mt-1 font-mono tracking-wider uppercase">
            DST-SEED FUNDED BUSINESS INCUBANT LANDSCAPE • THE STARTUP PARK
          </p>
        </div>
        <div className="bg-[#aa8540]/10 border border-[#aa8540]/30 p-3 flex items-center gap-3 rounded-sm max-w-max">
          <Cpu className="w-10 h-10 text-anu-gold shrink-0" />
          <div>
            <span className="text-[9px] font-mono uppercase font-bold text-[#aa8540] block leading-none">DST SPONSORED</span>
            <span className="font-serif text-lg font-extrabold text-anu-blue block mt-0.5">28+ Active Startups</span>
          </div>
        </div>
      </div>

      {/* Visual Navigation Tabs */}
      <div className="flex border-b border-ink/8 gap-2 mt-8 overflow-x-auto scroller-hidden">
        {[
          { id: "overview", label: "Sandbox Platform Overview" },
          { id: "portfolio", label: "Active Venture Portfolio" },
          { id: "funding", label: "Seed Capital & Infrastructure" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSegment(tab.id)}
            className={`px-4 py-3 text-xs uppercase font-semibold tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeSegment === tab.id 
                ? "border-anu-gold text-anu-blue font-bold bg-[#fcfbf6]" 
                : "border-transparent text-ink/60 hover:text-ink hover:bg-bg-cream/30"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Display Grid Content */}
      {activeSegment === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 animate-in fade-in duration-200">
          <div className="space-y-5 leading-relaxed text-xs">
            <h3 className="font-serif text-xl font-bold text-anu-blue uppercase tracking-tight">
              Fueling Regional Technology Breakthroughs
            </h3>
            <p className="text-ink/85">
              The university's Incubation & Innovation Cell provides the physical logistics of high-performance computing, tissue diagnostics, pilot laboratory rooms, legal structures, and VC lobbies under state support schemes. 
            </p>
            <p className="text-ink/75">
              Our vision is to facilitate robust translation-phase research from patent registries to viable commercially auditable services, especially in rural-critical spheres (Agriculture, Biotech, Pharmaceutical devices).
            </p>

            <div className="p-4 bg-[#fdfcf7] border border-ink/8 rounded-sm space-y-3">
              <span className="text-[9px] font-mono tracking-widest text-[#aa8540] uppercase font-bold block">
                Sandbox Resources Available
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-ink/80 font-mono">
                <li>• 10G Optical fiber lines</li>
                <li>• High-performance compute pods</li>
                <li>• Biotechnology diagnostic rooms</li>
                <li>• Intellectual Property Counsel</li>
                <li>• Seed funding advisory</li>
                <li>• VC presentation halls</li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-sm border border-ink/8 overflow-hidden bg-bg-cream flex flex-col justify-between p-6">
            <div className="space-y-4">
              <span className="text-[10px] bg-anu-gold/15 text-anu-blue border border-anu-gold/30 px-3 py-1 uppercase font-mono font-bold rounded-full max-w-max">
                ACTIVE INCUBATION VENTURE CALL 2026-27
              </span>
              <h4 className="font-serif text-lg font-bold text-anu-blue">
                Submit Your Proposal to the Academic Steering Panel
              </h4>
              <p className="text-xs text-ink/70 leading-relaxed">
                Eligible PG students, researchers, alumni and external innovative minds in Andhra Pradesh can apply for co-working cabins, high-speed labs, and initial seed capital grants up to ₹15,00,000 per technology platform.
              </p>
            </div>
            
            <div className="pt-6 border-t border-ink/8 mt-6">
              <button className="bg-anu-blue hover:bg-[#002147] text-white text-[10px] font-bold uppercase tracking-widest py-3 px-5 border border-anu-gold/30 flex items-center gap-1.5 cursor-pointer shadow-md transition-all">
                <span>Request Guidelines & Pitch Template</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeSegment === "portfolio" && (
        <div className="mt-8 animate-in fade-in duration-200 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-ink/8 pb-3">
            <h3 className="font-serif text-lg font-bold text-anu-blue">Steered Ventures Portfolio</h3>
            <span className="text-xs text-ink/50 font-mono">Total Capitalized Assets: ₹1.2 Crores</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <div key={i} className="bg-white border border-ink/8 p-5 rounded-sm flex flex-col justify-between space-y-4 hover:border-anu-gold/60 hover:shadow-md transition-all">
                <div className="space-y-2">
                  <span className="text-[9px] bg-bg-cream border border-ink/10 px-2 py-0.5 rounded-sm font-mono text-ink/70 uppercase">
                    {item.sector}
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#002147] leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-ink/65 leading-relaxed">
                    Custom regional platform utilizing specialized diagnostics developed inside Nagarjuna research blocks.
                  </p>
                </div>
                <div className="border-t border-ink/8 pt-3 flex justify-between items-center text-[10px] font-bold font-mono">
                  <span className="text-anu-blue">{item.fund}</span>
                  <span className="text-emerald-600 uppercase">{item.state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSegment === "funding" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 animate-in fade-in duration-200">
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-serif text-lg font-bold text-anu-blue">Funding Alliances & Capital Distribution</h3>
            <p className="text-xs text-ink/80 leading-relaxed">
              Acharya Nagarjuna University partners with state technology commissions, venture consortiums, and national research committees to secure consistent prototype-phase and growth funds.
            </p>

            <div className="space-y-3">
              {[
                { agency: "DST (Department of Science & Technology, GoI)", type: "Prototype seed funding grant mechanism", limit: "Up to ₹15 Lakhs per project" },
                { agency: "AP Innovation Society (APIS)", type: "State co-working subsidy & marketing logistics", limit: "100% rental waiver" },
                { agency: "Sovereign Student Startup Fund", type: "Internal budget allocations for PG inventors", limit: "₹50 Lakhs pooled fund" }
              ].map((alliance, i) => (
                <div key={i} className="p-3.5 border border-ink/8 rounded-xs flex items-center justify-between text-xs hover:bg-[#fcfbf7]">
                  <div>
                    <h5 className="font-bold text-anu-blue">{alliance.agency}</h5>
                    <p className="text-ink/60 mt-0.5">{alliance.type}</p>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#aa8540]">{alliance.limit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#002147] text-white p-6 rounded-sm border border-anu-gold flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[8px] font-mono tracking-widest text-anu-gold uppercase font-bold block">
                ALUMNI MENTORSHIP BOARD
              </span>
              <h4 className="font-serif text-base font-bold">Access Elite Global Mentors</h4>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Connect directly with Acharya Nagarjuna University alumni working in executive management roles, engineering, or research across the USA, European Union, and Southeast Asia.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center text-[10px] font-mono">
              <span className="text-white/50">84 Active Advisors</span>
              <span className="text-anu-gold font-bold uppercase cursor-pointer hover:underline flex items-center gap-1">
                Directory portal <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   3. ENGLISH LANGUAGE CENTRE & ELECTORAL CLUB
   ========================================================================== */
export function ELCElectoralPage({ onBackToHome }: PageProps) {
  const [activePane, setActivePane] = useState<string>("elc");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-ink/8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <button 
            onClick={onBackToHome}
            className="text-xs font-mono font-bold uppercase tracking-widest text-[#aa8540] hover:text-anu-blue flex items-center gap-1 mb-3 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Sanctuary</span>
          </button>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#002147] tracking-tight">
            English Language & Electoral Literacy Club
          </h2>
          <p className="text-xs text-ink/65 mt-1 font-mono tracking-wider uppercase">
            COMPREHENSIVE GLOBAL COMPETENCY CENTRE • CONSTITUTION DECODER
          </p>
        </div>
        <div className="bg-[#002147]/5 border border-anu-gold/30 p-3 flex items-center gap-3 rounded-sm max-w-max">
          <Languages className="w-10 h-10 text-anu-gold shrink-0 animate-pulse" />
          <div>
            <span className="text-[9px] font-mono uppercase font-bold text-anu-blue block leading-none">COMMUNITY DIVISION</span>
            <span className="font-serif text-lg font-extrabold text-anu-blue block mt-0.5">ELC & ELC Compliance</span>
          </div>
        </div>
      </div>

      {/* Pane Buttons */}
      <div className="grid grid-cols-2 mt-8 border border-ink/8 rounded-sm overflow-hidden">
        <button
          onClick={() => setActivePane("elc")}
          className={`py-4 text-center border-r border-ink/8 transition-all font-serif font-bold text-sm cursor-pointer ${
            activePane === "elc" 
              ? "bg-[#002147] text-white" 
              : "bg-white text-ink hover:bg-bg-cream/45"
          }`}
        >
          <span className="block text-xs uppercase font-mono text-[#aa8540] mb-0.5 tracking-wider">01 • ADVANCED AUDIO HUB</span>
          English Language Centre (ELC)
        </button>
        <button
          onClick={() => setActivePane("electoral")}
          className={`py-4 text-center transition-all font-serif font-bold text-sm cursor-pointer ${
            activePane === "electoral" 
              ? "bg-[#002147] text-white" 
              : "bg-white text-ink hover:bg-bg-cream/45"
          }`}
        >
          <span className="block text-xs uppercase font-mono text-[#aa8540] mb-0.5 tracking-wider">02 • SOVEREIGN COMPLIANCE</span>
          Electoral Literacy Club (ELC)
        </button>
      </div>

      {/* ELC Pane: English Language Centre */}
      {activePane === "elc" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 animate-in fade-in duration-200">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-xl font-bold text-anu-blue">Mastering Global Linguistic Standards</h3>
            <p className="text-xs text-ink/80 leading-relaxed">
              Equipped with state-of-the-art diagnostics audio speech software, the English Language Centre assists rural and international master's scholars in aligning their scientific manuscripts, thesis defenses, corporate presentations, and conversational abilities with global standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-ink/8 p-4 rounded-sm space-y-2">
                <h4 className="font-serif text-sm font-bold text-anu-blue">Diagnostic Speech Cabinets</h4>
                <p className="text-[11px] text-ink/70 leading-relaxed">
                  60 dedicated user audio booths with high-fidelity studio microphones to practice accent modulation, phonetic transcripts and verbal exercises.
                </p>
              </div>
              <div className="border border-ink/8 p-4 rounded-sm space-y-2">
                <h4 className="font-serif text-sm font-bold text-anu-blue">Thesis Proofing Protocols</h4>
                <p className="text-[11px] text-ink/70 leading-relaxed">
                  Regular consultation hours to review manuscript structures, bibliographic parameters (APA/Chicago), and formal vocabulary before submission to global reviews.
                </p>
              </div>
            </div>

            <div className="p-4 bg-bg-cream/60 border border-ink/8 rounded-sm space-y-3">
              <h4 className="font-serif text-sm font-bold text-anu-blue">Weekly Laboratory Schedule</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10.5px] font-mono text-ink/75">
                <div>• Mon - Wed: Phonetics Analysis</div>
                <div>• Thu: Live Mock Group Debates</div>
                <div>• Fri: International Writing Lab</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-ink/8 p-5 rounded-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-widest text-[#aa8540] uppercase font-bold block">
                ELC ADMISSION RESOURCE
              </span>
              <h4 className="font-serif text-base font-bold text-anu-blue">Linguistic Assessment Kit</h4>
              <p className="text-xs text-ink/70 leading-relaxed">
                Download the standardized phonetic drills kit, writing modules, and diagnostic laboratory guides prepared by the university's linguistic division.
              </p>
            </div>
            
            <div className="pt-6 border-t border-ink/8 mt-6">
              <button className="w-full bg-white hover:bg-anu-blue text-anu-blue hover:text-white border border-anu-blue py-3 text-[10px] uppercase font-bold tracking-widest cursor-pointer transition-all flex items-center justify-center gap-1">
                <Download className="w-4 h-4 text-anu-gold" />
                <span>Linguistic_Kit_2026.pdf (4.1 MB)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Electoral Pane: Electoral Literacy Club */}
      {activePane === "electoral" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 animate-in fade-in duration-200">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-xl font-bold text-anu-blue">Promoting Democratic Values & Civic Duties</h3>
            <p className="text-xs text-ink/80 leading-relaxed">
              Mandated by the Election Commission of India and designed according to NAAC Criterion 7 values, the Electoral Literacy Club (ELC) coordinates continuous voter awareness camps, campus youth mock parliaments, registration clinics, and interactive constitutional workshops.
            </p>

            <div className="p-5 border border-ink/8 bg-bg-cream/40 rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-anu-blue">
                <Vote className="w-5 h-5 text-anu-gold" />
                <h4 className="font-serif text-sm font-bold">Key Activities & Democratic Events</h4>
              </div>
              <ul className="space-y-2 text-xs text-ink/80 leading-relaxed">
                <li><strong>Dynamic Voter Registration Clinics:</strong> Assisting eligible resident students in registering directly on the national electro portal to claim dynamic voter cards.</li>
                <li><strong>Constitutional Mock Congresses:</strong> Interactive mock chambers where scholars deliberate constitutional laws to foster a deep sense of national duty.</li>
                <li><strong>National Voters' Day (Jan 25):</strong> Massive student rallies, essay panels, and pledge assemblies encompassing all local hostels and departments.</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#002147] text-white p-5 rounded-sm border border-anu-gold flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center gap-2">
                <Vote className="w-5 h-5 text-anu-gold animate-bounce" />
                <span className="text-[9px] font-mono tracking-widest text-anu-gold uppercase font-bold block">
                  NATIONAL VOTER PLEDGE
                </span>
              </div>
              <p className="text-xs font-serif italic text-white/90">
                "We, the citizens of India, having solemn faith in democracy, hereby pledge to uphold the democratic traditions of our country and the dignity of free, fair and peaceful elections..."
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10 mt-6">
              <button className="w-full bg-white hover:bg-anu-gold text-anu-blue hover:text-white border border-anu-gold/40 py-3 text-[10px] uppercase font-bold tracking-widest cursor-pointer transition-all flex items-center justify-center gap-1.5">
                <span>Engage Electoral Club</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   4. SSR (Self Study Report)
   ========================================================================== */
export function SSRPage({ onBackToHome }: PageProps) {
  const [activeCriterion, setActiveCriterion] = useState<number | null>(null);

  const criteria = [
    { num: 1, title: "Curricular Aspects", detail: "Curricular planning, academic flexibility, syllabus feedback, and curriculum enlargement.", benchmark: "CGPA 3.84 scored" },
    { num: 2, title: "Teaching-Learning and Evaluation", detail: "Student enrollment rates, regional diversity, experimental learning systems, evaluation indicators.", benchmark: "CGPA 3.79 scored" },
    { num: 3, title: "Research, Innovations and Extension", detail: "Active funding grants, specialized Centres of Excellence, patents, published works, regional outreach.", benchmark: "CGPA 3.91 scored" },
    { num: 4, title: "Infrastructure and Learning Labs", detail: "Dr. B.R. Ambedkar library systems, computerized classrooms, sports arenas, digital studios.", benchmark: "CGPA 3.82 scored" },
    { num: 5, title: "Student Support and Progression", detail: "Sovereign state merit scholarships, placement cell records, sports awards, active student union.", benchmark: "CGPA 3.75 scored" },
    { num: 6, title: "Governance, Leadership and Management", detail: "Institutional vision, strategic plans, e-governance panels, financial audits and budgets.", benchmark: "CGPA 3.80 scored" },
    { num: 7, title: "Institutional Values and Best Practices", detail: "Solar grids, water recycling, botanical research, disabled-friendly campus, Electoral Literacy.", benchmark: "CGPA 3.95 scored" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-ink/8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <button 
            onClick={onBackToHome}
            className="text-xs font-mono font-bold uppercase tracking-widest text-[#aa8540] hover:text-anu-blue flex items-center gap-1 mb-3 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Sanctuary</span>
          </button>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#002147] tracking-tight">
            Self Study Report (SSR) - Cycle-4
          </h2>
          <p className="text-xs text-ink/65 mt-1 font-mono tracking-wider uppercase">
            CERTIFIED PORTFOLIO SUBMITTED TO NAAC • METRIC DISCLOSURE GATEWAY
          </p>
        </div>
        <div className="bg-anu-blue/5 border border-anu-gold/30 p-3 sm:p-4 rounded-sm flex items-center gap-3">
          <FileCheck className="w-8 h-8 text-anu-gold shrink-0" />
          <div className="text-xs font-mono">
            <span className="text-[#aa8540] uppercase font-bold block leading-none text-[8.5px]">LEDGER STATUS</span>
            <span className="font-bold text-anu-blue block mt-0.5">UGC Certified NAAC Full Upload</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Left explanation Column */}
        <div className="space-y-5 leading-relaxed text-xs">
          <h3 className="font-serif text-lg font-bold text-[#002147] uppercase">The Evaluation Blueprint</h3>
          <p className="text-ink/85">
            The Self Study Report (SSR) represents the comprehensive, absolute disclosure of the financial, operational, and intellectual assets of Acharya Nagarjuna University compiled over the past five semesters.
          </p>
          <p className="text-ink/75">
            This meticulously designed digital portfolio provides verifiable metrics across each assessment criterion to ensure absolute transparency as required by the National Assessment and Accreditation Council.
          </p>
          
          <div className="p-4 border border-ink/8 bg-bg-cream/40 rounded-sm space-y-4">
            <h4 className="font-serif text-sm font-bold text-anu-blue">Download Certified Document</h4>
            <div className="space-y-2">
              <button className="w-full bg-white hover:bg-anu-blue text-anu-blue hover:text-white border border-ink/8 hover:border-anu-gold text-[10.5px] uppercase font-bold tracking-widest py-3 px-4 rounded-xs transition-colors flex items-center justify-center gap-1 text-center cursor-pointer">
                <Download className="w-4 h-4 text-anu-gold" /> SSR_Full_Report.pdf (14.2 MB)
              </button>
              <button className="w-full bg-white hover:bg-anu-blue text-anu-blue hover:text-white border border-ink/8 hover:border-anu-gold text-[10.5px] uppercase font-bold tracking-widest py-3 px-4 rounded-xs transition-colors flex items-center justify-center gap-1 text-center cursor-pointer">
                <Download className="w-4 h-4 text-anu-gold" /> Institutional_Data_Index.xlsx (2.8 MB)
              </button>
            </div>
          </div>
        </div>

        {/* Right Criterion breakdown list */}
        <div className="lg:col-span-2 bg-white border border-ink/8 p-6 md:p-8 rounded-sm shadow-xs space-y-4">
          <div className="border-b border-ink/8 pb-3">
            <h3 className="font-serif text-lg font-bold text-anu-blue">Browse NAAC Criteria Metrics</h3>
            <p className="text-xs text-ink/50 mt-0.5">Click any criterion section to audit the exact qualitative audits.</p>
          </div>

          <div className="space-y-2">
            {criteria.map((item) => {
              const isSelected = activeCriterion === item.num;
              return (
                <div key={item.num} className="border border-ink/8 rounded-xs overflow-hidden">
                  <button
                    onClick={() => setActiveCriterion(isSelected ? null : item.num)}
                    className="w-full text-left p-4 bg-[#fcfbf6] hover:bg-[#fffdf9] flex justify-between items-center transition-all cursor-pointer"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-[#aa8540] uppercase font-bold block">CRITERION {item.num}</span>
                      <span className="font-serif text-sm font-bold text-[#002147] mt-0.5 block leading-snug">{item.title}</span>
                    </div>
                    <span className="text-xs text-anu-gold font-bold">
                      {isSelected ? "▲ Hide" : "▼ Audit Details"}
                    </span>
                  </button>
                  {isSelected && (
                    <div className="p-4 bg-white border-t border-ink/8 text-xs leading-relaxed text-ink/75 space-y-3 animate-in slide-in-from-top-1">
                      <p>{item.detail}</p>
                      <div className="flex justify-between items-center bg-bg-cream/40 p-2.5 rounded-xs border border-ink/5">
                        <span className="text-[10px] font-mono text-ink/50 uppercase font-bold">PROVEN STRATEGIC INDEX</span>
                        <span className="font-mono text-[10.5px] font-bold text-[#aa8540] bg-[#aa8540]/10 px-2.5 py-0.5 border border-[#aa8540]/25 rounded-md">
                          {item.benchmark}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   5. NIRF (National Institutional Ranking Framework)
   ========================================================================== */
export function NIRFPage({ onBackToHome }: PageProps) {
  const [activeSegment, setActiveSegment] = useState<string>("data");

  const rankData = [
    { year: "2025 Submission", overall: "Rank Band 101-150", pharmacy: "Rank 38", biotech: "Core Ranked Band" },
    { year: "2024 Submission", overall: "Rank Band 101-150", pharmacy: "Rank 42", biotech: "Core Ranked Band" },
    { year: "2023 Submission", overall: "Rank 98 overall", pharmacy: "Rank 45", biotech: "Core Ranked Band" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-ink/8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <button 
            onClick={onBackToHome}
            className="text-xs font-mono font-bold uppercase tracking-widest text-[#aa8540] hover:text-anu-blue flex items-center gap-1 mb-3 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Sanctuary</span>
          </button>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#002147] tracking-tight">
            NIRF Disclosures & Ranking Metrics
          </h2>
          <p className="text-xs text-ink/65 mt-1 font-mono tracking-wider uppercase">
            ANNUAL SUBMISSIONS TO THE MINISTRY OF EDUCATION • TRANSPARENCY PORTAL
          </p>
        </div>
        <div className="bg-anu-gold/10 border border-anu-gold/25 p-3 flex items-center gap-3 rounded-sm max-w-max">
          <Star className="w-10 h-10 text-anu-gold shrink-0 animate-bounce" />
          <div>
            <span className="text-[9px] font-mono uppercase font-bold text-anu-blue block leading-none">RANKING BODY</span>
            <span className="font-serif text-lg font-extrabold text-anu-[#002147] block mt-0.5">Ministry of Education</span>
          </div>
        </div>
      </div>

      {/* Segment Tabs */}
      <div className="flex border-b border-ink/8 gap-2 mt-8 overflow-x-auto scroller-hidden">
        {[
          { id: "data", label: "National Ranking Indices" },
          { id: "criteria", label: "MHRD Assessment Criteria" },
          { id: "downloads", label: "Certified Official Submissions" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSegment(tab.id)}
            className={`px-4 py-3 text-xs uppercase font-semibold tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeSegment === tab.id 
                ? "border-anu-gold text-anu-blue font-bold bg-[#fcfbf6]" 
                : "border-transparent text-ink/60 hover:text-ink hover:bg-bg-cream/30"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeSegment === "data" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 animate-in fade-in duration-200">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-lg font-bold text-anu-blue">Annual Submissions Chronology</h3>
            <p className="text-xs text-[#002147] leading-relaxed font-light">
              We provide fully audited registries submitted to the Ministry of Education, Government of India. Tracking graduation outcomes, regional outreach parameters, perception metrics, financial allocation and academic expenditures.
            </p>

            <div className="overflow-x-auto border border-ink/8 rounded-sm">
              <table className="w-full text-xs text-left text-ink border-collapse">
                <thead className="bg-bg-cream font-serif font-bold border-b border-ink/8 text-anu-blue text-[11px]">
                  <tr>
                    <th className="px-4 py-3">Academic Session</th>
                    <th className="px-4 py-3">Over-all Band</th>
                    <th className="px-4 py-3 font-serif">Pharmacy Rank</th>
                    <th className="px-4 py-3">Biotech Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/8 font-mono">
                  {rankData.map((row, index) => (
                    <tr key={index} className="hover:bg-[#fdfcf7]">
                      <td className="px-4 py-3 font-bold font-sans text-anu-blue">{row.year}</td>
                      <td className="px-4 py-3 text-ink">{row.overall}</td>
                      <td className="px-4 py-3 font-bold text-[#aa8540]">{row.pharmacy}</td>
                      <td className="px-4 py-3 text-emerald-600 font-semibold">{row.biotech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-ink/8 p-5 rounded-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-widest text-[#aa8540] uppercase font-bold block">
                NIRF OUTREACH INDEX
              </span>
              <h4 className="font-serif text-sm font-bold text-anu-blue">Elite Graduation Parameters</h4>
              <p className="text-[11.5px] text-ink/70 leading-relaxed font-light">
                Our submissions display 96.4% placement verification, standard student-faculty ratio benchmarks, and comprehensive active citation registries under national indexes.
              </p>
            </div>
            
            <div className="pt-5 border-t border-ink/8 mt-5 flex items-center justify-between text-[10px] font-mono font-bold">
              <span className="text-ink/50">Verified status</span>
              <span className="text-emerald-600 block">UGC REGISTERED ✔</span>
            </div>
          </div>
        </div>
      )}

      {activeSegment === "criteria" && (
        <div className="mt-8 animate-in fade-in duration-200">
          <h3 className="font-serif text-lg font-bold text-anu-blue mb-4">Five Pillars of NIRF Assessment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Teaching, Learning & Resources", desc: "Assesses faculty qualification levels, student strength, scholarship budgets, library resources.", code: "TLR" },
              { title: "Research & Professional Practice", desc: "Tracks active publications in high-citation indexes, registered patents, and project funding.", code: "RPC" },
              { title: "Graduation Outcomes", desc: "Evaluates standard semester pass ratios, student placement packages, Ph.D. completions.", code: "GO" },
              { title: "Outreach & Inclusivity", desc: "Measures regional enrollment variety, international students, disabled-friendly facilities.", code: "OI" },
              { title: "Perception & Reputation", desc: "Surveys key corporate partners, premier institutions, and regional academic feedback.", code: "PR" },
            ].map((pillar, i) => (
              <div key={i} className="border border-ink/8 p-4 rounded-sm hover:border-anu-gold/60 hover:shadow-xs transition-colors flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-[#aa8540] font-bold block">{pillar.code}</span>
                  <h4 className="font-serif text-xs font-bold text-anu-blue mt-1 leading-snug">{pillar.title}</h4>
                  <p className="text-[10.5px] text-ink/75 leading-relaxed mt-2">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSegment === "downloads" && (
        <div className="mt-8 animate-in fade-in duration-200 max-w-3xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-anu-blue">Certified Ministry of Education Submissions</h3>
          <p className="text-xs text-ink/70">
            Audit standard filings downloaded directly from Ministry of Education servers.
          </p>

          <div className="space-y-2.5">
            {[
              { title: "NIRF 2025 Full Institutional Submission", size: "4.8 MB", date: "Jan 12, 2025" },
              { title: "NIRF 2024 Full Institutional Submission", size: "4.5 MB", date: "Jan 10, 2024" },
              { title: "NIRF 2023 Full Institutional Submission", size: "4.2 MB", date: "Jan 08, 2023" },
            ].map((doc, i) => (
              <div key={i} className="flex justify-between items-center p-3.5 border border-ink/8 rounded-xs bg-[#fdfcf7] hover:bg-white transition-colors">
                <div>
                  <h5 className="text-xs font-bold text-anu-blue block leading-tight">{doc.title}</h5>
                  <span className="text-[10px] text-ink/50 block font-mono mt-0.5">Submitted On: {doc.date} • SHA-256 Verified Ledger</span>
                </div>
                <button className="flex items-center gap-1 p-2 bg-[#002147] hover:bg-[#002147]/90 text-white font-mono text-[9px] tracking-wider uppercase font-bold rounded-xs cursor-pointer transition-colors">
                  <Download className="w-3.5 h-3.5 text-anu-gold" /> {doc.size}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
