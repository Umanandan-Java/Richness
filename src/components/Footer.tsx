/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Landmark, Phone, Mail, MapPin, Globe, Compass, ArrowUpRight } from "lucide-react";
import { navigateTo } from "./PortalLink";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const linksSchema = [
    {
      title: "University Portals",
      links: [
        { label: "Academic Profile", tab: "hero" },
        { label: "Faculties catalog", tab: "courses" },
        { label: "Admissions Counselor", tab: "admissions" },
        { label: "Innovations Showcase", tab: "research" },
        { label: "Campus Life blueprints", tab: "campus" }
      ]
    },
    {
      title: "Statutory bodies",
      links: [
        { label: "UGC Approved list" },
        { label: "Pharmacy Council of India (PCI)" },
        { label: "AICTE technological sanctions" },
        { label: "NCTE educational metrics" },
        { label: "AP State Council of Higher Education" }
      ]
    },
    {
      title: "Institutional cells",
      links: [
        { label: "Notices & Results", href: "/notices" },
        { label: "International Student Relations", href: "/international" },
        { label: "Alumni Network", href: "/alumni" },
        { label: "Placements Cell", href: "/placements" },
        { label: "Research Guidance Panel", href: "/research" }
      ]
    }
  ];

  return (
    <footer className="bg-anu-blue text-white border-t-2 border-anu-gold/80" id="anu-website-footer">
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Logo & coordinates information block (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white text-anu-blue flex items-center justify-center font-serif font-bold text-base rounded-sm border border-anu-gold">
                A
              </div>
              <div>
                <h4 className="font-serif font-extrabold text-sm sm:text-base tracking-wide text-white leading-none">
                  ACHARYA NAGARJUNA
                </h4>
                <p className="font-sans text-[10px] tracking-widest uppercase text-anu-gold mt-1">
                  UNIVERSITY | ANDHRA PRADESH
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Established in 1976 by the President of India on the Guntur-Vijayawada highway corridor, ANU stands as Andhra Pradesh’s beacon for high-level education, multi-disciplinary research, and global innovation.
            </p>

            <div className="space-y-3.5 pt-3">
              <div className="flex items-start gap-2.5 text-xs text-white/85">
                <MapPin className="w-4 h-4 text-anu-gold shrink-0 mt-0.5" />
                <span>Nagarjuna Nagar, Namburu, Guntur - Vijayawada Highway, Pin-522510, Andhra Pradesh, India.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/85">
                <Phone className="w-4 h-4 text-anu-gold shrink-0" />
                <span>+91 863 2293189 / +91 863 2293378</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/85">
                <Mail className="w-4 h-4 text-anu-gold shrink-0" />
                <span className="hover:text-anu-gold transition-colors">registrar@anu.ac.in</span>
              </div>
            </div>
          </div>

          {/* Links structure (Center/Right Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {linksSchema.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-4">
                <h5 className="font-serif text-xs font-bold uppercase tracking-[2.5px] text-anu-gold">
                  {group.title}
                </h5>
                <ul className="space-y-2.5 text-xs text-white/60">
                  {group.links.map((link, idx) => (
                    <li key={idx}>
                      {link.tab ? (
                        <button
                          onClick={() => setActiveTab(link.tab as string)}
                          className="hover:text-white hover:underline transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-anu-gold opacity-55" />
                        </button>
                      ) : link.href ? (
                        <button
                          onClick={() => navigateTo(link.href as string)}
                          className="hover:text-white hover:underline transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-anu-gold opacity-55" />
                        </button>
                      ) : (
                        <span className="hover:text-white transition-colors cursor-pointer block">{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Middle Footer: Regulatory compliance banner logos */}
      <div className="border-t border-white/10 bg-[#00142b] py-6 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
            Institutional Endorsements & Accreditations
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-[10px] font-extrabold tracking-wider text-white/60 uppercase">
            <span className="hover:text-anu-gold cursor-pointer transition-colors">UGC Approved</span>
            <span>•</span>
            <span className="hover:text-anu-gold cursor-pointer transition-colors">NAAC GRADE 'A'</span>
            <span>•</span>
            <span className="hover:text-anu-gold cursor-pointer transition-colors">NIRF RANKED</span>
            <span>•</span>
            <span className="hover:text-anu-gold cursor-pointer transition-colors">AICTE SANCTIONED</span>
          </div>
        </div>
      </div>

      {/* Lower Footer copyright row */}
      <div className="border-t border-white/5 bg-[#001024] py-6 text-center text-[10px] sm:text-xs text-white/55 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p>© {currentYear} Acharya Nagarjuna University, Andhra Pradesh. All rights reserved globally.</p>
          <div className="flex gap-4 tracking-normal text-[11px] font-mono font-bold text-anu-gold">
            <span>Lat: 16.3756° N</span>
            <span>|</span>
            <span>Lon: 80.5284° E</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
