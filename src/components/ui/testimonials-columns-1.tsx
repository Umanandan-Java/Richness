/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 md:p-9 rounded-2xl border border-anu-gold/20 bg-white shadow-xl shadow-anu-blue/5 max-w-[320px] w-full group hover:border-anu-gold transition-colors duration-500" 
                  key={i}
                >
                  <div className="font-serif text-ink/80 text-[13px] leading-relaxed mb-6">"{text}"</div>
                  <div className="flex items-center gap-3.5 mt-5 border-t border-ink/5 pt-5">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full object-cover border-2 border-anu-gold/30 shadow-sm"
                    />
                    <div className="flex flex-col">
                      <div className="font-serif font-bold text-anu-blue text-[13.5px] tracking-tight leading-none mb-1.5">{name}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-anu-gold-dark opacity-80 leading-none">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
