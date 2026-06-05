/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FACILITIES } from "../data";
import { CampusFacility } from "../types";
import { Compass, Sparkles, Building2, MapPin, Eye, CheckCircle2 } from "lucide-react";

export default function VirtualCampus() {
  const [selectedFacilityId, setSelectedFacilityId] = useState<string>(FACILITIES[0].id);

  // Find active facility structure
  const activeFacility = FACILITIES.find((f) => f.id === selectedFacilityId) || FACILITIES[0];

  return (
    <section className="bg-bg-cream py-16 md:py-24" id="campus-virtual-guide-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-anu-gold-dark block mb-3">
            Elite Environments
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-anu-blue font-bold tracking-tight mb-4">
            Campus Life & Virtual Estate Guide
          </h2>
          <div className="w-16 h-0.5 bg-anu-gold mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto text-ink/70 leading-relaxed text-sm md:text-base">
            Take an automated crawl through Acharya Nagarjuna University’s physical assets, including international halls, massive libraries, and local stadiums.
          </p>
        </div>

        {/* Master layout panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Facilities Selector and description (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-xs font-bold uppercase tracking-[3px] text-anu-gold mb-4">
              Select Luxury Amenities
            </h3>

            {/* Flat Picker layout list */}
            <div className="space-y-2.5">
              {FACILITIES.map((fac) => {
                const isSelected = selectedFacilityId === fac.id;
                return (
                  <button
                    key={fac.id}
                    id={`facility-btn-${fac.id}`}
                    onClick={() => setSelectedFacilityId(fac.id)}
                    className={`w-full text-left p-4 border rounded-sm transition-all duration-350 flex items-center justify-between group ${
                      isSelected
                        ? "bg-anu-blue text-white border-anu-gold shadow-md"
                        : "bg-white text-ink border-ink/8 hover:border-anu-gold/40 hover:bg-bg-cream/40"
                    }`}
                  >
                    <div>
                      <div className="font-serif text-xs font-bold">{fac.name}</div>
                      <span className={`text-[9px] font-mono tracking-widest uppercase mt-1 block ${isSelected ? "text-anu-gold" : "text-ink/50"}`}>
                        {fac.category} Arena
                      </span>
                    </div>
                    <Eye className={`w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isSelected ? "text-anu-gold opacity-100" : "text-ink/30"}`} />
                  </button>
                );
              })}
            </div>

            {/* Dynamic Card showcasing specific detailed info */}
            <div className="bg-white p-6 border border-ink/8 rounded-sm shadow-sm">
              <span className="text-[9px] font-bold uppercase tracking-widest text-anu-gold bg-anu-gold/10 px-2.5 py-1 rounded-sm">
                Facility Specifications
              </span>
              <h4 className="font-serif text-base text-anu-blue font-bold mt-4 mb-2.5">
                {activeFacility.name}
              </h4>
              <p className="text-xs text-ink/75 leading-relaxed mb-6">
                {activeFacility.description}
              </p>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-anu-gold block">
                  Exemplary features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeFacility.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-ink/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-anu-gold shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Luxury visual display container load (Right 7 Col) */}
          <div className="lg:col-span-7 bg-white p-3 border border-ink/8 shadow-md rounded-sm select-none">
            <div className="aspect-[4/3] w-full relative overflow-hidden bg-anu-blue-dark">
              <img
                src={activeFacility.imageUrl}
                alt={activeFacility.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anu-blue-dark/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1.5 border-l-[3px] border-anu-gold rounded-sm shadow-md">
                <span className="text-[8px] tracking-wider uppercase font-extrabold text-ink/50 leading-none block">
                  Interactive Preview
                </span>
                <span className="font-serif text-xs font-bold text-anu-blue mt-0.5 block">
                  {activeFacility.name}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Mock Campus Map - Namburu NH16 highway representation */}
        <div className="bg-anu-blue-dark text-white p-8 md:p-12 shadow-xl rounded-sm relative overflow-hidden border border-anu-gold/30">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Guide left layout description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-white/10 text-anu-gold px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider rounded-sm">
                <MapPin className="w-3.5 h-3.5" /> Strategic Guntur-Vijayawada Corridor
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                The Geographic Advantage
              </h3>
              <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                Spanning 450+ acres of lush landscape along National Highway 16, Acharya Nagarjuna University sits at the epicenter of Andhra Pradesh’s industrial and educational growth. 
              </p>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-anu-gold/20 flex items-center justify-center shrink-0">
                    <Compass className="w-3.5 h-3.5 text-anu-gold" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-white">Supreme Connectivity</h5>
                    <p className="text-[11px] text-white/50 mt-1">Directly accessible via NH-16 with dedicated bus bays and rail-link proximity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-anu-gold/20 flex items-center justify-center shrink-0">
                    <Building2 className="w-3.5 h-3.5 text-anu-gold" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-white">Integrated Infrastructure</h5>
                    <p className="text-[11px] text-white/50 mt-1">Hosting 39 academic blocks, 5 hostels, and 3 regional sports complexes in a single ecosystem.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-anu-gold/5 border border-anu-gold/20 rounded-sm">
                <p className="text-[10px] text-anu-gold font-bold uppercase tracking-widest">Global Coordinate Marker</p>
                <div className="text-white font-mono text-[11px] mt-1">
                  16.3763° N, 80.5251° E • Nagarjuna Nagar
                </div>
              </div>
            </div>

            {/* Real Google Maps Integration (Right 7 Col) */}
            <div className="lg:col-span-7 border border-white/20 rounded-sm relative aspect-[16/9] w-full shadow-2xl overflow-hidden group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.9534077232784!2d80.52513677507204!3d16.3763356843485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f437274e79ab%3A0x92aff133741cd6de!2sAcharya%20Nagarjuna%20University%20(ANU)!5e0!3m2!1sen!2sin!4v1780391692224!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.1) brightness(0.9)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ANU Google Maps Location"
              />
              
              {/* Decorative Frame Overlay */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-anu-blue-dark/20 group-hover:border-anu-blue-dark/10 transition-all duration-700" />
              
              {/* Map Title corner flag */}
              <div className="p-3 bg-anu-blue-dark border-b border-l border-anu-gold/30 absolute top-0 right-0 rounded-bl text-[8px] uppercase tracking-widest font-bold text-anu-gold z-10">
                Live Geographic Coordinates
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
