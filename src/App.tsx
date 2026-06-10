/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Rankings from "./components/Rankings";
import UniversityOverview from "./components/UniversityOverview";
import CollegesSection from "./components/CollegesSection";
import AdmissionsWizard from "./components/AdmissionsWizard";
import ResearchPortal from "./components/ResearchPortal";
import VirtualCampus from "./components/VirtualCampus";
import CareerExcellence from "./components/CareerExcellence";
import Testimonials from "./components/Testimonials";
import JubileeSection from "./components/JubileeSection";
import Footer from "./components/Footer";
import MotionReveal from "./components/MotionReveal";
import { AcademicProgramsSection, AdmissionsSnapshotSection, NewsEventsSection } from "./components/HomeSections";
import { Award, Landmark, MapPin, X, GraduationCap, Compass, Volume2, Sparkles, Play, ChevronLeft, ChevronRight, Home as HomeIcon } from "lucide-react";
import { navigateTo } from "./components/PortalLink";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import College from "./pages/College";
import Colleges from "./pages/Colleges";
import Contact from "./pages/Contact";
import Department from "./pages/Department";
import FacultyProfile from "./pages/Faculty";
import Hostel from "./pages/Hostel";
import International from "./pages/International";
import Library from "./pages/Library";
import NewsEvents from "./pages/News";
import Notices from "./pages/Notices";
import Placements from "./pages/Placements";
import Programs from "./pages/Programs";
import Research from "./pages/Research";
import Sports from "./pages/Sports";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [showVideoTour, setShowVideoTour] = useState<boolean>(false);
  const [audioPlayed, setAudioPlayed] = useState<boolean>(false);
  const [path, setPath] = useState(window.location.pathname);

  // Handle active video toggle
  const handleOpenTour = () => setShowVideoTour(true);
  const handleCloseTour = () => setShowVideoTour(false);

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname);
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  const routedPage = useMemo(() => {
    if (path === "/about") return <About />;
    if (path === "/alumni") return <Alumni />;
    if (path === "/college" || path.startsWith("/college/")) return <College />;
    if (path === "/colleges") return <Colleges />;
    if (path === "/contact") return <Contact />;
    if (path === "/department" || path.startsWith("/department/")) return <Department />;
    if (path === "/faculty" || path.startsWith("/faculty/")) return <FacultyProfile />;
    if (path === "/hostel") return <Hostel />;
    if (path === "/international") return <International />;
    if (path === "/library") return <Library />;
    if (path === "/news") return <NewsEvents />;
    if (path === "/notices") return <Notices />;
    if (path === "/placements") return <Placements />;
    if (path === "/programs") return <Programs />;
    if (path === "/courses") return <CollegesSection onTriggerAdmissions={() => setActiveTab("admissions")} />;
    if (path === "/research-portal" || path === "/research") return <Research />;
    if (path === "/sports") return <Sports />;
    return null;
  }, [path]);

  const routeTitle = useMemo(() => {
    if (path === "/about") return "About Acharya Nagarjuna University";
    if (path === "/alumni") return "Alumni Network";
    if (path === "/college" || path.startsWith("/college/")) return "College of Engineering & Technology";
    if (path === "/colleges") return "Colleges & Schools";
    if (path === "/contact") return "Contact Us";
    if (path === "/department" || path.startsWith("/department/")) return "Department of Computer Science & Engineering";
    if (path === "/faculty" || path.startsWith("/faculty/")) return "Faculty Profile";
    if (path === "/hostel") return "Hostel & Accommodation";
    if (path === "/international") return "International Students";
    if (path === "/library") return "Central Library";
    if (path === "/news") return "News & Events";
    if (path === "/notices") return "Notices & Notifications";
    if (path === "/placements") return "Placements & Careers";
    if (path === "/programs") return "Programs Offered";
    if (path === "/courses") return "Courses Offered";
    if (path === "/research-portal" || path === "/research") return "Research & Innovation";
    if (path === "/sports") return "Sports & Physical Education";
    return "Information";
  }, [path]);

  const handleSetActiveTab = (tab: string) => {
    if (window.location.pathname !== "/") {
      navigateTo("/");
      setTimeout(() => setActiveTab(tab), 0);
      return;
    }
    setActiveTab(tab);
  };

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div
      className="min-h-screen bg-bg-cream text-ink font-sans flex flex-col justify-between"
      id="app-root"
    >

      {/* Top Level Nav Bar */}
      <Navbar
        activeTab={routedPage ? "" : activeTab}
        setActiveTab={handleSetActiveTab}
      />
      {!routedPage && <div className="h-[calc(var(--cur-header-h)+var(--nav-bottom-gap))]" />}

      {/* Fixed Breadcrumb Bar - positioned outside animations */}
      {routedPage && isMounted && createPortal(
        <div className="portal-breadcrumb-bar">
          <div className="portal-breadcrumb-inner">
            <button type="button" onClick={() => navigateTo("/")} className="portal-home-link">
              <HomeIcon className="h-3.5 w-3.5" />
              Home
            </button>
            <ChevronRight className="h-3 w-3 text-ink/35" />
            <span className="portal-current-page">{routeTitle}</span>
          </div>
        </div>,
        document.body
      )}
      
      {/* Content wrapper with paddings for fixed header */}
      <main className="flex-1">
        {routedPage ? (
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="portal-page"
          >
            {routedPage}
          </motion.div>
        ) : (
        <AnimatePresence mode="wait">
          {activeTab === "hero" && (
            <motion.div
              key="hero-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Core visual hero section */}
              <Hero 
                onExploreAdmissions={() => setActiveTab("admissions")} 
                onOpenVirtualTour={handleOpenTour} 
                onOpenJubilee={() => setActiveTab("jubilee")}
              />
              {/* Prominent high-fidelity stats panel */}
              <MotionReveal delay={0.03}>
                <Stats />
              </MotionReveal>

              {/* Institutional accreditation and ranking signal band */}
              <MotionReveal delay={0.06}>
                <Rankings />
              </MotionReveal>
              {/* Full details, messages and historic legacies (Vision, Mission & foundations) */}
              <MotionReveal delay={0.08}>
                <UniversityOverview />
              </MotionReveal>

              {/* College-wise academic programs using the six provided college details */}
              <MotionReveal delay={0.09}>
                <AcademicProgramsSection />
              </MotionReveal>

              {/* Research highlights and scholarly frontiers ("Research thing") */}
              <MotionReveal delay={0.1}>
                <ResearchPortal hideScholarExplorer={true} />
              </MotionReveal>

              {/* Academic career and placement alliance ("career excellence") */}
              <MotionReveal delay={0.12}>
                <CareerExcellence />
              </MotionReveal>

              {/* Campus updates and upcoming academic events */}
              <MotionReveal delay={0.13}>
                <NewsEventsSection />
              </MotionReveal>

              {/* Student and alumni credibility stories */}
              <MotionReveal delay={0.14}>
                <Testimonials />
              </MotionReveal>

              {/* Campus facilities and lifestyle guide ("life at anu") */}
              <MotionReveal delay={0.16}>
                <VirtualCampus />
              </MotionReveal>

              {/* Admissions snapshot before the final conversion CTA */}
              <MotionReveal delay={0.17}>
                <AdmissionsSnapshotSection onApply={() => setActiveTab("admissions")} />
              </MotionReveal>

              {/* Direct Admission Promo Call To Action section */}
              <MotionReveal delay={0.18}>
                <section className="bg-anu-blue text-white py-14 border-t border-b border-anu-gold/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #C5A059 1px, transparent 0)`,
                    backgroundSize: "20px 20px"
                  }}
                />
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-5">
                  <span className="text-[10px] font-bold uppercase tracking-[4px] text-anu-gold bg-white/10 px-3.5 py-1.5 rounded-sm">
                    Admission Opportunities 2026-27
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl text-white font-bold max-w-2xl mx-auto leading-tight">
                    Embark on Your Global Scientific Odyssey
                  </h3>
                  <p className="text-white/80 max-w-xl mx-auto text-xs md:text-sm">
                    Leverage our state merit scholarships, 100% industrial placement record, and advanced research instrumentation cells in Guntur.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveTab("admissions")}
                      className="bg-white hover:bg-anu-gold text-anu-blue hover:text-white px-7 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all focus:ring-2 focus:ring-anu-gold"
                    >
                      Begin Verification Assessment
                    </button>
                  </div>
                </div>
                </section>
              </MotionReveal>
            </motion.div>
          )}

          {activeTab === "courses" && (
            <motion.div
              key="courses-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
            >
              <CollegesSection onTriggerAdmissions={() => setActiveTab("admissions")} />
            </motion.div>
          )}

          {activeTab === "admissions" && (
            <motion.div
              key="admissions-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
            >
              <AdmissionsWizard />
            </motion.div>
          )}

          {activeTab === "research" && (
            <motion.div
              key="research-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
            >
              <ResearchPortal />
            </motion.div>
          )}

          {activeTab === "campus" && (
            <motion.div
              key="campus-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
            >
              <VirtualCampus />
            </motion.div>
          )}

          {activeTab === "jubilee" && (
            <motion.div
              key="jubilee-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
            >
              <JubileeSection onGoBackHome={() => setActiveTab("hero")} />
            </motion.div>
          )}
        </AnimatePresence>
        )}
      </main>

      {/* World Class Footer component */}
      <Footer setActiveTab={handleSetActiveTab} />

      {/* Virtual Cinema Modal overlay for premium tour */}
      <AnimatePresence>
        {showVideoTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#001229]/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            id="virtual-tour-modal"
          >
            <div className="bg-bg-cream text-ink max-w-4xl w-full border border-anu-gold shadow-2xl relative rounded-sm overflow-hidden animate-in zoom-in-95 duration-300">
              {/* Header inside modal */}
              <div className="bg-anu-blue p-5 flex justify-between items-center text-white border-b border-anu-gold/40">
                <div className="flex items-center gap-2.5">
                  <Compass className="w-5 h-5 text-anu-gold animate-spin duration-1000" />
                  <div>
                    <h3 className="font-serif font-bold text-base leading-none">
                      Acharya Nagarjuna University Virtual Broadcast
                    </h3>
                    <span className="text-[9px] uppercase tracking-wider text-anu-gold font-extrabold mt-0.5 block">
                      Live Aerial & Library Cinematic Preview
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCloseTour}
                  className="text-white/60 hover:text-white p-1"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video screen area */}
              <div className="aspect-video w-full bg-black relative flex items-center justify-center select-none group">
                <iframe
                  title="Acharya Nagarjuna University Cinematic campus tour drone"
                  className="w-full h-full absolute inset-0"
                  src="https://www.youtube.com/embed/S2p-y2sY_Z8?autoplay=1&mute=1&playlist=S2p-y2sY_Z8&loop=1&controls=0"
                  allow="autoplay; encrypted-media"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay visual mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating control message */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-baseline text-white">
                  <span className="text-[10px] text-white/50 tracking-wider uppercase font-mono bg-black/40 px-2 py-1">
                    Feed Source: Broadcast CCTV
                  </span>
                  <span className="text-[10px] text-anu-gold font-bold tracking-wider uppercase">
                    1080p Ultra High-Def
                  </span>
                </div>
              </div>

              {/* Bottom explanatory block */}
              <div className="p-6 md:p-8 space-y-4">
                <p className="text-xs text-ink/80 leading-relaxed">
                  You are witnessing live cinematic drone perspectives gliding over the Dr. B.R. Ambedkar Central Library Dome, our lush manicured campus gardens, regional stadium complexes, and clean research offices located right on National Highway 16, Namburu.
                </p>
                
                <div className="flex justify-between items-center pt-3 border-t border-ink/8 flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-ink/65 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-anu-gold" />
                    <span>Namburu Corridor, Andhra Pradesh</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={handleCloseTour}
                      className="bg-anu-blue text-white hover:bg-anu-blue-light text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-colors duration-150"
                    >
                      Close Stream
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
