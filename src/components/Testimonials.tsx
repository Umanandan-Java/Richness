/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn, Testimonial } from "./ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "ANU provided the perfect ecosystem for my research in Nano-biotechnology. The advanced instrumentation labs are truly world-class.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Dr. Sarah Jenkins",
    role: "Research Scholar (Biotech)",
  },
  {
    text: "The placement cell's partnership with global tech firms helped me secure a role at a Silicon Valley giant before I even graduated.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rahul Sharma",
    role: "Alumni (B.Tech CSE)",
  },
  {
    text: "Studying Buddhist Philosophy along the Krishna river, where Acharya Nagarjuna himself once taught, was a transformative experience.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Elena Rodriguez",
    role: "International Scholar",
  },
  {
    text: "The university's focus on character building alongside academic rigor has shaped me into a socially responsible citizen.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aditya Varma",
    role: "Student President",
  },
  {
    text: "As a parent, I am impressed by the safety and the multi-continental dining facilities provided in the international hostels.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Mrs. Lakshmi Rao",
    role: "Parent of Scholar",
  },
  {
    text: "The Pharmacy department's collaboration with Hyderabad's drug industry provided me with invaluable hands-on clinical exposure.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Priyanka Reddy",
    role: "Doctor of Pharmacy",
  },
  {
    text: "ANU's library is an architectural and intellectual sanctuary. I spent most of my PhD days exploring its vast digital archives.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Prof. David Miller",
    role: "Visiting Faculty",
  },
  {
    text: "The startup incubation cell at ANU helped me turn my agribusiness sensor project into a registered national utility model.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sneha Kapur",
    role: "Young Innovator",
  },
  {
    text: "The synthetic athletic track and indoor arenas at ANU are the best in the state. They supported my journey to national levels.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Karthik Raja",
    role: "National Athlete",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-bg-cream py-16 md:py-24 relative overflow-hidden" id="testimonials-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-extrabold uppercase tracking-[4px] text-anu-gold-dark">
            Community Voices
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-anu-blue md:text-5xl">
            Student & Alumni Stories
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-anu-gold" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink/65">
            Discover how Acharya Nagarjuna University is shaping the future through the lived experiences of our researchers, alumni, and global scholars.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
