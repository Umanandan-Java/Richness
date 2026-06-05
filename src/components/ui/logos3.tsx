/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [],
  className,
}: Logos3Props) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center text-center mb-8">
        <h3 className="font-serif text-xl text-anu-blue font-bold tracking-tight">
          {heading}
        </h3>
        <div className="w-12 h-0.5 bg-anu-gold mt-2" />
      </div>
      <div className="relative mx-auto flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="mx-4 flex shrink-0 items-center justify-center bg-white/50 backdrop-blur-sm border border-anu-gold/10 px-6 py-4 rounded-sm hover:border-anu-gold/30 transition-all duration-300">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className || "h-8 w-auto grayscale hover:grayscale-0 transition-all duration-500"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-cream to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export { Logos3 };
