/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap, Building, FileText, CheckCircle, Flame, Users, ArrowUpRight, CheckSquare } from "lucide-react";
import { Logos3, Logo } from "@/components/ui/logos3";

export default function CareerExcellence() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [skillsChecked, setSkillsChecked] = useState<Record<string, boolean>>({
    gpa: false,
    internship: false,
    aptitude: false,
    resume: false,
    mockInterview: false,
  });

  const recruiterLogos: Logo[] = [
    { id: "1", description: "Dr. Reddy's", image: "https://www.drreddys.com/etc.clientlibs/drreddys/clientlibs/clientlib-site/resources/resources/images/logo.png" },
    { id: "2", description: "TCS", image: "https://www.tcs.com/content/dam/tcs/images/logo/tcs-logo-1.svg" },
    { id: "3", description: "Infosys", image: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-jpeg.png" },
    { id: "4", description: "Cognizant", image: "https://www.cognizant.com/content/dam/cognizant_dotcom/en_us/dotcom/images/cognizant-logo-white.svg" },
    { id: "5", description: "Wipro", image: "https://www.wipro.com/content/dam/nexus/en/brand/images/wipro-logo-new-og-502x263.jpg" },
    { id: "6", description: "Accenture", image: "https://www.accenture.com/content/dam/accenture/final/images/icons/accenture-logo.svg" },
    { id: "7", description: "ICICI Bank", image: "https://www.icicibank.com/assets/images/logo.png" },
  ];

  const recruiters = [
    { name: "Dr. Reddy's Laboratories", sector: "Pharma", location: "Hyderabad", tier: "Core Recruiter" },
    { name: "Tata Consultancy Services (TCS)", sector: "Tech", location: "Guntur / Vijayawada", tier: "Mass Recruiter" },
    { name: "Divi's Laboratories", sector: "Pharma", location: "Vizag", tier: "Core Recruiter" },
    { name: "Infosys", sector: "Tech", location: "Bangalore", tier: "Principal Partner" },
    { name: "Hetero Drugs", sector: "Pharma", location: "Hyderabad", tier: "Core Recruiter" },
    { name: "Cognizant (CTS)", sector: "Tech", location: "Chennai", tier: "Principal Partner" },
    { name: "Aurobindo Pharma", sector: "Pharma", location: "Hyderabad", tier: "Core Recruiter" },
    { name: "Accenture", sector: "Tech", location: "Hyderabad", tier: "Elite Partner" },
    { name: "ICICI Bank", sector: "Finance", location: "Vijayawada", tier: "Banking Partner" },
    { name: "Wipro", sector: "Tech", location: "Bangalore", tier: "Mass Recruiter" },
  ];

  const statistics = [
    { title: "Overall Placements", value: "96%", detail: "In major professional fields", accentColor: "text-anu-blue" },
    { title: "Highest Package Offered", value: "₹18.5 LPA", detail: "By Multi-national Silicon Valley firm", accentColor: "text-anu-gold" },
    { title: "Average CTC", value: "₹5.2 LPA", detail: "Across Engineering & Management", accentColor: "text-anu-blue-light" },
    { title: "Pharma & Biotech Placements", value: "100%", detail: "NIRF ranking advantage outcomes", accentColor: "text-[#2e7d32]" },
  ];

  const careerResources = [
    {
      icon: Briefcase,
      title: "Placement Training Cell",
      desc: "Daily training modules covering quantitative aptitude, advanced data structures, and interpersonal mock challenges starting from the 3rd year.",
    },
    {
      icon: Users,
      title: "Global Alumni Mentorship",
      desc: "Connect directly with 12,000+ ANU graduates currently working in elite roles across USA, Europe, and leading metro cities in India.",
    },
    {
      icon: Building,
      title: "Nagarjuna Startup Incubator (NSC)",
      desc: "Got a business concept? Receive up to ₹5,00,000 in early-stage seed grants, free cloud infrastructure, and deep counseling from startup legal cells.",
    },
    {
      icon: FileText,
      title: "Resume Audit Desk",
      desc: "Get your profile rated or reviewed by HR professionals to align your CV with dynamic tech keywords and pharmacopeia compliance rules.",
    },
  ];

  const filteredRecruiters = selectedIndustry === "all" 
    ? recruiters 
    : recruiters.filter(r => r.sector.toLowerCase() === selectedIndustry.toLowerCase());

  // Industry Readiness Score calculator
  const checkedCount = Object.values(skillsChecked).filter(Boolean).length;
  const scorePercentage = (checkedCount / 5) * 100;

  const handleCheckboxChange = (key: string) => {
    setSkillsChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="bg-bg-cream py-16 md:py-24 border-t border-ink/5" id="career-excellence-portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-anu-gold-dark block mb-3">
              03 - Corporate Alliances
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-anu-blue font-bold tracking-tight">
              Career Excellence & Placements Hub
            </h2>
          </div>
          <p className="text-ink/70 leading-relaxed text-sm md:text-base lg:border-l lg:border-anu-gold/45 lg:pl-6">
            Acharya Nagarjuna University connects top scholars directly with leading global conglomerates, state pharmaceutical giants, and digital technology corporations.
          </p>
        </div>

        {/* Dynamic Placement Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="anu-lux-card bg-white p-6 border-b-4 border-l border-r border-t border-ink/8 border-b-anu-gold shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm"
            >
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-ink/50 mb-2">
                {stat.title}
              </h4>
              <div className={`font-serif text-3xl md:text-4xl font-extrabold ${stat.accentColor}`}>
                {stat.value}
              </div>
              <p className="text-xs text-ink/75 mt-2 leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Recruiter Showcase (Marquee) */}
        <div className="mb-16">
          <Logos3 
            heading="Strategic Recruitment Partners"
            logos={recruiterLogos}
            className="bg-white/40 backdrop-blur-sm border border-anu-gold/10 p-10 rounded-sm shadow-sm"
          />
        </div>

        {/* Career Readiness & Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column Left: Interactive Readiness Check (5 cols) */}
          <div className="lg:col-span-5 bg-anu-blue text-white p-8 rounded-sm shadow-xl relative overflow-hidden border border-anu-gold/30">
            {/* Background decorative ring */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-white/5 rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-anu-gold animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-[3px] text-anu-gold">Readiness Index</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-4">
                Corporate Benchmark Audit
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-8">
                Verify your real-time recruitment probability based on ANU's elite placement protocol.
              </p>
            </div>

            {/* Checklist elements */}
            <div className="space-y-4 mb-10 relative z-10">
              {Object.entries(skillsChecked).map(([key, checked]) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer select-none group">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${checked ? 'bg-anu-gold border-anu-gold' : 'border-white/30 group-hover:border-white'}`}>
                    {checked && <CheckSquare className="w-3 h-3 text-anu-blue fill-current" />}
                  </div>
                  <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={() => handleCheckboxChange(key)}
                    className="hidden"
                  />
                  <span className={`text-xs transition-colors ${checked ? 'text-white font-bold' : 'text-white/60'}`}>
                    {key === 'gpa' && "Academic consistency (CGPA > 7.5 threshold)"}
                    {key === 'internship' && "100+ Hours Industrial internship completed"}
                    {key === 'aptitude' && "Aptitude & Logical reasoning training passed"}
                    {key === 'resume' && "Resume uploaded & vetted by dynamic HR tools"}
                    {key === 'mockInterview' && "2 core mock interviews on tech/pharma passed"}
                  </span>
                </label>
              ))}
            </div>

            <div className="relative z-10 bg-white/5 border border-white/10 p-6 rounded-sm text-center backdrop-blur-sm">
              <div className="text-5xl font-serif font-extrabold text-white mb-2">
                {scorePercentage}%
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${scorePercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-anu-gold"
                />
              </div>
              <p className="text-[10px] text-white/60 uppercase tracking-widest font-bold">
                Benchmark Score
              </p>
            </div>
          </div>

          {/* Column Right: Strategic Resources (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {careerResources.map((resource, idx) => (
              <div key={idx} className="group bg-white p-6 border border-ink/5 rounded-sm hover:border-anu-gold/30 transition-all duration-500 shadow-sm hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-anu-blue/5 border border-anu-blue/10 flex items-center justify-center mb-4 group-hover:bg-anu-blue group-hover:text-white transition-all duration-300">
                  <resource.icon className="w-5 h-5 text-anu-gold" />
                </div>
                <h4 className="font-serif text-base font-bold text-anu-blue mb-2 group-hover:text-anu-gold transition-colors">
                  {resource.title}
                </h4>
                <p className="text-xs leading-relaxed text-ink/70 font-light">
                  {resource.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
