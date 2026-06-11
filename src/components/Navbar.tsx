/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Award,
  BookOpen,
  Compass,
  Cpu,
  Bell,
  Briefcase,
  CalendarDays,
  ChevronDown,
  CreditCard,
  FileCheck,
  FileText,
  Globe2,
  LayoutGrid,
  Landmark,
  Menu,
  Phone,
  BarChart3,
  ShieldCheck,
  Star,
  Ticket,
  Vote,
  X,
} from "lucide-react";
import anuEmblem from "../assets/logo-anu.png";
import { navigateTo } from "./PortalLink";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAccreditationStrip, setShowAccreditationStrip] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { id: "hero", label: "The University", icon: Landmark },
    { id: "courses", label: "Faculties & Courses", icon: BookOpen },
    { id: "research", label: "Research & Innovation", icon: Award },
    { id: "campus", label: "Campus Life Guide", icon: Compass },
    { id: "international", label: "International Student Cell", icon: Globe2 },
  ];

  const accreditationItems = [
    { id: "iqac", label: "IQAC", icon: ShieldCheck },
    { id: "incubators", label: "Incubators", icon: Cpu },
    { id: "elc", label: "ELC & Electoral Club", icon: Vote },
    { id: "ssr", label: "SSR", icon: FileCheck },
    { id: "nirf", label: "NIRF", icon: Star },
  ];

  const essentialLinks = [
    { label: "Notices", href: "/notices", icon: Bell },
    { label: "Colleges", href: "/colleges", icon: Landmark },
    { label: "Placements", href: "/placements", icon: Briefcase },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  const quickLinks = [
    { label: "Exam Fee Payment", href: "/notices", icon: CreditCard },
    { label: "Hall Ticket Download", href: "/notices", icon: Ticket },
    { label: "Results Portal", href: "/notices", icon: BarChart3 },
    { label: "Revaluation / Recounting", href: "/notices", icon: FileCheck },
    { label: "Timetables", href: "/notices", icon: CalendarDays },
    { label: "Transcript Request", href: "/notices", icon: FileText },
    { label: "Anti-Ragging Cell", href: "/contact", icon: ShieldCheck },
  ];

  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const syncHeaderStripHeight = () => {
      const isDesktop = window.matchMedia("(min-width: 1280px)").matches;
      const stripHeight = showAccreditationStrip && isDesktop ? "3rem" : "0rem";
      document.documentElement.style.setProperty("--acc-strip-h", stripHeight);
    };

    syncHeaderStripHeight();

    window.addEventListener("resize", syncHeaderStripHeight);
    return () => {
      window.removeEventListener("resize", syncHeaderStripHeight);
      document.documentElement.style.setProperty("--acc-strip-h", "0rem");
    };
  }, [showAccreditationStrip]);

  const headerEl = (
    <header className="fixed top-0 left-0 right-0 w-screen">
      <div className="relative z-[60] h-7 bg-anu-blue border-b border-anu-gold/20">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-3">
          <div className="nav-essential-links flex min-w-0 items-center gap-1.5 overflow-x-auto text-[10px] font-bold uppercase tracking-wider text-white/85 sm:gap-2">
            {essentialLinks.map(({ label, href, icon: Icon }) => (
              <button
                key={href}
                onClick={() => navigateTo(href)}
                className="inline-flex shrink-0 items-center gap-1 rounded-sm px-2 py-1 hover:bg-white/10 hover:text-anu-gold transition-colors"
              >
                <Icon className="h-3 w-3 opacity-70" />
                {label}
              </button>
            ))}
          </div>
          <div className="group relative hidden sm:flex h-full items-center">
            <button className="inline-flex h-full items-center gap-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-anu-gold hover:text-white transition-colors">
              <FileText className="h-3 w-3" />
              Quick Links
              <ChevronDown className="h-3 w-3" />
            </button>
            <div className="pointer-events-none absolute right-0 top-full w-64 translate-y-1 border border-anu-gold/20 bg-bg-cream text-ink opacity-0 shadow-xl transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="border-b border-ink/10 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[1.8px] text-anu-blue">
                Student Services
              </div>
              <div className="grid">
                {quickLinks.map(({ label, href, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => navigateTo(href)}
                    className="flex items-center gap-2 px-3 py-2 text-left text-[11px] font-semibold text-ink/75 hover:bg-anu-gold/10 hover:text-anu-blue transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 text-anu-gold" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="relative left-0 right-0 bg-bg-cream/95 border-b border-black/15 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-[var(--nav-h)] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-5">
        {/* Logo and Brand */}
        <div 
          onClick={() => {
            setShowAccreditationStrip(false);
            setActiveTab("hero");
          }}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <img
            src={anuEmblem}
            alt="Acharya Nagarjuna University emblem"
            className="h-16 w-16 transition-all duration-300 group-hover:rotate-3"
          />
          <div>
            <h1 className="font-serif font-extrabold text-base sm:text-lg tracking-tight text-anu-blue leading-none">
              ACHARYA NAGARJUNA
            </h1>
            <p className="font-sans text-[10px] tracking-[2px] uppercase text-anu-gold font-bold mt-1">
              University | Guntur - Vijayawada
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-stretch gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                onClick={() => {
                  setShowAccreditationStrip(false);
                  setActiveTab(item.id);
                }}
                className={`relative min-w-[7.8rem] px-4 py-2.5 text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 rounded-sm text-center leading-tight ${
                  isActive 
                    ? "text-anu-blue bg-[#f5f0e4] border border-anu-gold/40 font-bold shadow-sm" 
                    : "text-ink/80 hover:text-anu-blue hover:bg-ink/5 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-anu-gold animate-pulse" : "text-ink/50"}`} />
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-anu-gold rounded-full" />
                )}
              </button>
            );
          })}
          
          <button 
            onClick={() => setShowAccreditationStrip((prev) => !prev)}
            className={`ml-4 min-w-[12rem] px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest border shadow-lg active:scale-95 transition-all text-center rounded-sm flex items-center justify-center gap-2 ${
              showAccreditationStrip || ["iqac", "incubators", "elc", "ssr", "nirf"].includes(activeTab)
                ? "bg-[#fbfaf6] text-anu-blue border-black/85"
                : "bg-anu-blue text-white border-anu-gold/45 hover:bg-anu-blue-light"
            }`}
            id="nav-apply-btn"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-anu-gold" />
            Accreditation Board
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center xl:hidden">
          <button
            ref={menuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-anu-blue rounded-md focus:outline-none focus:ring-2 focus:ring-anu-gold/50"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {showAccreditationStrip && (
        <div className="hidden xl:block border-b border-anu-gold/35 bg-[#fbfaf6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[3rem] flex items-center justify-center gap-4 overflow-x-auto">
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[4px] text-anu-gold">
              Accreditation:
            </span>
            <div className="flex items-center justify-center gap-2.5 min-w-0">
              {accreditationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                    }}
                    className={`shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[1.8px] transition-all ${
                      isActive
                        ? "border-anu-gold bg-white text-anu-blue shadow-sm"
                        : "border-transparent bg-transparent text-ink/70 hover:border-anu-gold/30 hover:bg-white hover:text-anu-blue"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 text-anu-gold" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="absolute top-full left-0 right-0 z-40 border-b border-ink/10 bg-bg-cream shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 xl:hidden"
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-tab-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-3 transition-colors ${
                    isActive 
                      ? "bg-anu-blue text-white" 
                      : "text-ink/85 hover:bg-ink/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-anu-gold" : "text-ink/60"}`} />
                  {item.label}
                </button>
              );
            })}

            <div className="pt-2 border-t border-ink/8">
              <div className="px-1 pb-2 text-[10px] font-bold uppercase tracking-[3px] text-anu-gold">
                Accreditation Board
              </div>
              <div className="grid grid-cols-1 gap-2">
                {accreditationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-3 transition-colors ${
                        isActive 
                          ? "bg-[#002147] text-white" 
                          : "text-ink/85 hover:bg-ink/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-anu-gold" : "text-ink/60"}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      </nav>
    </header>

  );

  if (!isMounted) return null;

  return createPortal(headerEl, document.body);
}
