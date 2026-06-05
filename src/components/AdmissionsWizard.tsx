/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { FACULTIES } from "../data";
import { Department } from "../types";
import { Calculator, CheckCircle2, DollarSign, ArrowRight, UserCheck, Compass, Sparkles, BookOpen } from "lucide-react";

export default function AdmissionsWizard() {
  // Wizard States
  const [degreeStream, setDegreeStream] = useState<string>("mpc");
  const [selectedDeptId, setSelectedDeptId] = useState<string>("");
  const [hasHostel, setHasHostel] = useState<boolean>(false);
  const [hasBus, setHasBus] = useState<boolean>(false);
  const [meritScore, setMeritScore] = useState<string>("none"); // none, 80-90, 90-95, 95plus

  // Applied State
  const [applicantName, setApplicantName] = useState<string>("");
  const [applicantEmail, setApplicantEmail] = useState<string>("");
  const [applicantPhone, setApplicantPhone] = useState<string>("");
  const [applicationSuccess, setApplicationSuccess] = useState<boolean>(false);
  const [generatedId, setGeneratedId] = useState<string>("");

  // Determine eligible departments based on streams
  const matchedDepts = useMemo(() => {
    const list: Department[] = [];
    FACULTIES.forEach((fac) => {
      fac.departments.forEach((dept) => {
        const titleLower = dept.name.toLowerCase();
        const descLower = dept.description.toLowerCase();
        const eligLower = dept.eligibility.toLowerCase();

        if (degreeStream === "mpc") {
          // Engineering, Pharmacy, Biotech fits MPC
          if (fac.id === "engg_tech" || fac.id === "pharm_sci" || dept.id === "biotech") {
            list.push(dept);
          }
        } else if (degreeStream === "bipc") {
          // Pharmacy, Clinical Doctorate, Biotech fits BiPC
          if (fac.id === "pharm_sci" || dept.id === "biotech") {
            list.push(dept);
          }
        } else if (degreeStream === "graduate_science") {
          // Master courses in Science, Nanotech
          if (dept.degrees.some(d => d.startsWith("M.Sc") || d.startsWith("Ph.D")) && fac.id === "nat_sci") {
            list.push(dept);
          }
        } else if (degreeStream === "graduate_all") {
          // MBA, Commerce, Journalism, Buddhist studies
          if (fac.id === "comm_mgmt" || fac.id === "humanities_soc") {
            list.push(dept);
          }
        }
      });
    });
    return list;
  }, [degreeStream]);

  // Set default selected department on stream alteration safely
  React.useEffect(() => {
    if (matchedDepts.length > 0) {
      setSelectedDeptId(matchedDepts[0].id);
    } else {
      setSelectedDeptId("");
    }
  }, [matchedDepts]);

  // Find currently selected Department model
  const selectedDeptModel = useMemo(() => {
    for (const fac of FACULTIES) {
      const found = fac.departments.find(d => d.id === selectedDeptId);
      if (found) return found;
    }
    return null;
  }, [selectedDeptId]);

  // Fee calculation formulas
  const calculations = useMemo(() => {
    if (!selectedDeptModel) return { baseTuition: 0, livingHostel: 0, busCharge: 0, scholarship: 0, grandTotal: 0 };

    const baseTuition = selectedDeptModel.tuitionPerYearINR;
    const livingHostel = hasHostel ? 150000 : 0;
    const busCharge = hasBus ? 24000 : 0;

    let scholarshipRatio = 0;
    if (meritScore === "80-90") scholarshipRatio = 0.15; // 15% discount
    else if (meritScore === "90-95") scholarshipRatio = 0.35; // 35% discount
    else if (meritScore === "95plus") scholarshipRatio = 0.50; // 50% discount

    const scholarship = Math.round(baseTuition * scholarshipRatio);
    const grandTotal = (baseTuition + livingHostel + busCharge) - scholarship;

    return {
      baseTuition,
      livingHostel,
      busCharge,
      scholarship,
      grandTotal
    };
  }, [selectedDeptModel, hasHostel, hasBus, meritScore]);

  // Handle mock submission
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !selectedDeptModel) return;

    // Generate random premium registration ticket number representation
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `AP/ANU-2026-X${randomSuffix}`;
    setGeneratedId(code);
    setApplicationSuccess(true);
  };

  const handleReset = () => {
    setApplicantName("");
    setApplicantEmail("");
    setApplicantPhone("");
    setApplicationSuccess(false);
  };

  return (
    <section className="bg-bg-cream py-16 md:py-24" id="admissions-wizard-and-planner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-anu-gold block mb-3">
            Enrollment Gate
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-anu-blue font-bold tracking-tight mb-4">
            Interactive Admissions Portal & Fee Planner
          </h2>
          <div className="w-16 h-0.5 bg-anu-gold mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto text-ink/70 leading-relaxed text-sm md:text-base">
            Assess course compatibility instantly, structure your custom financial schedule, and file an online admission ticket.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Eligibility & Valuation Segment (Left Col) */}
          <div className="lg:col-span-4 bg-white p-6 md:p-8 border border-ink/8 shadow-sm rounded-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-anu-blue/10 text-anu-blue rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h3 className="font-serif text-lg text-anu-blue font-bold">
                Your Academic Foundation
              </h3>
            </div>

            {/* Step 1: Qualification level */}
            <div className="space-y-4 mb-8">
              <label className="text-[10px] font-bold uppercase tracking-wider text-anu-gold block">
                Select Your Present Qualification Stream:
              </label>
              
              <div className="space-y-2.5">
                {[
                  { id: "mpc", label: "Intermediate / 12th Grade (MPC Math/Phy/Chem)" },
                  { id: "bipc", label: "Intermediate / 12th Grade (BiPC Bio/Phy/Chem)" },
                  { id: "graduate_science", label: "Graduate Degree in Natural Sciences" },
                  { id: "graduate_all", label: "Graduate Degree (Any Stream / Arts / Commerce)" }
                ].map((stream) => (
                  <label 
                    key={stream.id}
                    className={`flex items-start gap-3 p-3 border rounded-sm cursor-pointer transition-all ${
                      degreeStream === stream.id 
                        ? "bg-anu-blue/5 border-anu-gold text-anu-blue" 
                        : "bg-bg-cream/50 border-ink/10 hover:bg-ink/5"
                    }`}
                  >
                    <input
                      type="radio"
                      name="qualificationStream"
                      checked={degreeStream === stream.id}
                      onChange={() => setDegreeStream(stream.id)}
                      className="mt-1 h-3.5 w-3.5 text-anu-blue border-ink/10 cursor-pointer focus:ring-0"
                    />
                    <span className="text-xs font-semibold leading-tight">{stream.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 2: Course Match outputs */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-wider text-anu-gold block">
                Matching Flagship Departments ({matchedDepts.length}):
              </label>

              {matchedDepts.length === 0 ? (
                <p className="text-xs text-ink/50 italic">No compatible streams matched.</p>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {matchedDepts.map((dept) => {
                    const isSelected = selectedDeptId === dept.id;
                    return (
                      <div
                        key={dept.id}
                        onClick={() => setSelectedDeptId(dept.id)}
                        className={`p-3 border rounded-sm cursor-pointer transition-all ${
                          isSelected 
                            ? "bg-anu-blue text-white border-anu-gold shadow-md" 
                            : "bg-bg-cream/40 border-ink/8 hover:bg-ink/5"
                        }`}
                      >
                        <div className="font-serif text-xs font-bold">{dept.name}</div>
                        <div className={`text-[10px] mt-1 ${isSelected ? "text-anu-gold" : "text-ink/65"}`}>
                          Conferred: {dept.degrees.join(" / ")}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Living cost & Tuition Calculator (Center Col) */}
          <div className="lg:col-span-4 bg-white p-6 md:p-8 border border-ink/8 shadow-sm rounded-sm relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-anu-blue/10 text-anu-blue rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h3 className="font-serif text-lg text-anu-blue font-bold">
                Tuition & Campus Cost Planner
              </h3>
            </div>

            {selectedDeptModel ? (
              <div className="space-y-6">
                
                {/* Selected Department Overview */}
                <div className="bg-bg-cream/70 p-3.5 rounded-sm border-l-2 border-anu-gold text-xs">
                  <div className="font-bold text-anu-blue mb-1">Cost Core: {selectedDeptModel.name}</div>
                  <div className="text-[10px] text-ink/75">
                    Course Span: <span className="font-bold">{selectedDeptModel.durationYears} Years</span> • Standard tuition: ₹{selectedDeptModel.tuitionPerYearINR.toLocaleString()}/Year
                  </div>
                </div>

                {/* merit scholarship dropdown selection */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-anu-gold block">
                    Institutional Merit Scholarship:
                  </label>
                  <select
                    value={meritScore}
                    onChange={(e) => setMeritScore(e.target.value)}
                    className="w-full bg-bg-cream border border-ink/10 px-3 py-2.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-anu-gold rounded-sm cursor-pointer"
                  >
                    <option value="none">No Academic merit discount</option>
                    <option value="80-90">Intermediate Score 80% to 90% (15% Course Waiver)</option>
                    <option value="90-95">Intermediate Score 90% to 95% (35% Course Waiver)</option>
                    <option value="95plus">Intermediate Elite Score 95%+ (50% Tuition Waiver)</option>
                  </select>
                </div>

                {/* Checkbox additions */}
                <div className="space-y-3 pt-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-anu-gold block">
                    Lodging & Auxiliary services:
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-bg-cream/40 border border-ink/6 rounded-sm cursor-pointer hover:bg-ink/5">
                    <input
                      type="checkbox"
                      checked={hasHostel}
                      onChange={() => setHasHostel(!hasHostel)}
                      className="h-4 w-4 text-anu-blue border-ink/10 focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-bold text-anu-blue leading-none">Premium Campus Hostel Lodging</div>
                      <span className="text-[9px] text-ink/60 mt-1 block">AC single-suite with food (₹1,50,000/Yr)</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-bg-cream/40 border border-ink/6 rounded-sm cursor-pointer hover:bg-ink/5">
                    <input
                      type="checkbox"
                      checked={hasBus}
                      onChange={() => setHasBus(!hasBus)}
                      className="h-4 w-4 text-anu-blue border-ink/10 focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-bold text-anu-blue leading-none">Guntur-Vijayawada Highway Bus</div>
                      <span className="text-[9px] text-ink/60 mt-1 block">Luxury shuttle corridor route (₹24,000/Yr)</span>
                    </div>
                  </label>
                </div>

                {/* Calculation breakdown summary */}
                <div className="bg-anu-blue text-white p-5 rounded-sm border-t-2 border-anu-gold shadow-md">
                  <div className="font-serif text-[10px] text-white/50 uppercase tracking-widest leading-none mb-3">
                    Calculated Annual Billing Outline (Estimated)
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-white/70">Academic Tuition Fee</span>
                      <span>₹{calculations.baseTuition.toLocaleString()}</span>
                    </div>

                    {calculations.scholarship > 0 && (
                      <div className="flex justify-between text-teal-300 font-bold">
                        <span>Scholarship Credit (-)</span>
                        <span>- ₹{calculations.scholarship.toLocaleString()}</span>
                      </div>
                    )}

                    {hasHostel && (
                      <div className="flex justify-between">
                        <span className="text-white/70">AC Lodge & Mess Room</span>
                        <span>₹1,50,000</span>
                      </div>
                    )}

                    {hasBus && (
                      <div className="flex justify-between">
                        <span className="text-white/70">Highway Corridor Shuttle</span>
                        <span>₹24,000</span>
                      </div>
                    )}

                    <div className="h-[1px] bg-white/10 my-2.5" />

                    <div className="flex justify-between items-baseline font-bold">
                      <span className="text-white/95 text-xs font-serif uppercase tracking-wider">Per Year Total</span>
                      <span className="text-[#DFB265] text-lg sm:text-xl font-serif">
                        ₹{calculations.grandTotal.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between text-[10px] text-white/60 pt-1">
                      <span>Full Degree ({selectedDeptModel?.durationYears} Years)</span>
                      <span>₹{(calculations.grandTotal * (selectedDeptModel?.durationYears || 1)).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <p className="text-xs text-ink/50 italic">Please select qualification stream and matches first.</p>
            )}
          </div>

          {/* Secure Online Application Dossier (Right Col) */}
          <div className="lg:col-span-4 bg-white p-6 md:p-8 border border-ink/8 shadow-sm rounded-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-anu-blue/10 text-anu-blue rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h3 className="font-serif text-lg text-anu-blue font-bold">
                Apply & Track Admission Code
              </h3>
            </div>

            {applicationSuccess ? (
              <div className="p-4 bg-bg-cream border-t-2 border-anu-gold rounded-sm text-center animate-in fade-in zoom-in-95 duration-200">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <h4 className="font-serif text-lg text-anu-blue font-bold mb-1">
                  Application Success!
                </h4>
                <p className="text-[9px] uppercase tracking-wider text-anu-gold font-extrabold mb-3">
                  Verification Code Docket Inwarded
                </p>

                <div className="bg-anu-blue text-[#E2CE9C] font-mono text-xs font-extrabold py-2 px-3 tracking-widest rounded-sm mb-4">
                  {generatedId}
                </div>

                <div className="text-[11px] text-ink/75 leading-relaxed text-left space-y-2 mb-6">
                  <p><strong>Candidate:</strong> {applicantName}</p>
                  <p><strong>Proposed Major:</strong> {selectedDeptModel?.name}</p>
                  <p><strong>Estimated First Installment:</strong> ₹{calculations.grandTotal ? Math.round(calculations.grandTotal / 2).toLocaleString() : 0}</p>
                  <div className="h-[1px] bg-ink/5 my-2" />
                  <p className="text-[10px] text-ink/60">An email has been transmitted with verification rules. Please carry original marks sheets and the state counseling allotment slip back in Guntur for validation checks.</p>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full bg-white border border-ink/15 hover:border-anu-blue text-[10px] font-bold uppercase tracking-wider text-ink py-2 px-4 transition-colors"
                >
                  File another ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <p className="text-[11px] text-ink/65 leading-relaxed mb-4">
                  Submit this digital voucher to lock in your scholarship estimates and reserve counseling assistance at ANU's central office.
                </p>

                <div>
                  <label className="text-[9px] font-extrabold uppercase tracking-widest text-anu-gold block mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Enter full name according to SSC memo"
                    className="w-full bg-bg-cream border border-ink/10 p-2.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-anu-gold rounded-sm"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-extrabold uppercase tracking-widest text-anu-gold block mb-1">
                    Your Active Email:
                  </label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="w-full bg-bg-cream border border-ink/10 p-2.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-anu-gold rounded-sm"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-extrabold uppercase tracking-widest text-anu-gold block mb-1">
                    Phone / Contact Number:
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-bg-cream border border-ink/10 p-2.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-anu-gold rounded-sm"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    id="submit-admissions-ticket"
                    disabled={!selectedDeptModel}
                    className="w-full bg-anu-blue hover:bg-anu-blue-light disabled:bg-ink/20 disabled:cursor-not-allowed text-white text-[11px] font-bold uppercase tracking-widest py-3.5 border border-anu-gold/40 shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
                  >
                    <span>Submit Application Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
