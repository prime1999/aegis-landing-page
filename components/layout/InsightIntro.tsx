"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const InsightIntro = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return;
    }

    const bars = sectionElement.querySelectorAll("[data-bar]");
    const paragraph = sectionElement.querySelector("[data-copy]");
    const cta = sectionElement.querySelector("[data-cta]");

    const context = gsap.context(() => {
      gsap.set(bars, { x: -48, opacity: 0 });
      gsap.set(paragraph, { x: -24, opacity: 0 });
      gsap.set(cta, { y: 20, opacity: 0 });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline.to(bars, {
        x: 0,
        opacity: 1,
        delay: 1,
        duration: 0.6,
        stagger: 0.14,
      });

      timeline.to(
        paragraph,
        {
          x: 0,
          delay: 1.6,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.05",
      );

      timeline.to(
        cta,
        {
          y: 0,
          delay: 1.6,
          opacity: 1,
          duration: 0.9,
        },
        "+=0.15",
      );
    }, sectionElement);

    return () => context.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="h-14 w-2 bg-cyan-800" data-bar />
          <div className="h-14 w-1.5 bg-cyan-800" data-bar />
          <div className="h-14 w-1 bg-cyan-800" data-bar />
        </div>
        <div>
          <p data-copy className="w-32 font-geist-mono font-semibold text-xs">
            Personalized Web3 insights powered by your wallet activity.
          </p>
        </div>
      </div>
      <Link
        href="https://new-aegis.vercel.app/"
        target="_blank"
        data-cta
        className="inline-block bg-cyan-800 text-white font-geist-mono text-xs px-4 py-2 rounded-full mt-2 cursor-pointer duration-500 hover:bg-cyan-900 transition-colors"
        id="link"
      >
        -- Get Started --
      </Link>
    </div>
  );
};

export default InsightIntro;
