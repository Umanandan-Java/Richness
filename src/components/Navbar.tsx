/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GraduationCap, Award, BookOpen, Menu, X, Landmark, Compass, Bell, FileText, Briefcase, Phone, ChevronDown, CreditCard, Ticket, BarChart3, FileCheck, CalendarDays, ShieldCheck } from "lucide-react";
import anuEmblem from "../assets/logo-anu.png";
import { navigateTo } from "./PortalLink";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { id: "hero", label: "The University", icon: Landmark },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "admissions", label: "Admissions Wizard", icon: GraduationCap },
    { id: "research", label: "Research & Innovation", icon: Award },
    { id: "campus", label: "Campus Life Guide", icon: Compass },
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
      <nav className="relative left-0 right-0 h-[var(--nav-h)] bg-bg-cream/95 border-b border-ink/8 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <div 
          onClick={() => setActiveTab("hero")}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <img
  src={anuEmblem}
  alt="Acharya Nagarjuna University emblem"
  className={`
    transition-all
    duration-300
    group-hover:rotate-3
    h-16
    w-16
  `}
/>
          <div>
            <h1 className="font-serif font-extrabold text-base sm:text-lg tracking-sm text-anu-blue leading-none">
              ACHARYA NAGARJUNA
            </h1>
            <p className="font-sans text-[10px] tracking-[2px] uppercase text-anu-gold font-bold mt-1">
              University 
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-4 py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 rounded-sm ${
                  isActive 
                    ? "text-anu-blue bg-anu-gold/10 font-bold" 
                    : "text-ink/80 hover:text-anu-blue hover:bg-ink/5"
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
            onClick={() => setActiveTab("admissions")}
            className="ml-4 bg-anu-blue hover:bg-anu-blue-light text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 border border-anu-gold/45 shadow-lg active:scale-95 transition-all text-center rounded-sm"
            id="nav-apply-btn"
          >
            Apply Online
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
            
            <button
              onClick={() => {
                setActiveTab("admissions");
                setIsOpen(false);
              }}
              className="w-full bg-anu-blue text-white text-xs font-bold uppercase tracking-widest py-4 border border-anu-gold text-center rounded-sm transition-transform hover:scale-[1.02]"
              id="mobile-apply-btn"
            >
              Apply Online
            </button>
          </div>
        </div>
      )}
      </nav>
    </header>

  );

  if (!isMounted) return null;

  return createPortal(headerEl, document.body);
}
