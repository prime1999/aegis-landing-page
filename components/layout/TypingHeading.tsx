"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const headingLines = ["Meet Aegis, Your Personal", "AI Analyst for Web3."];

const TypingHeading = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const headingElement = headingRef.current;

    if (!headingElement) {
      return;
    }

    const characters = headingElement.querySelectorAll("[data-char]");
    const caret = headingElement.querySelector("[data-caret]");

    const context = gsap.context(() => {
      gsap.set(characters, { opacity: 0, y: 10 });

      gsap.to(characters, {
        opacity: 1,
        y: 0,
        duration: 0.01,
        stagger: 0.045,
        ease: "none",
      });

      if (caret) {
        gsap.to(caret, {
          opacity: 0,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });
      }
    }, headingElement);

    return () => context.revert();
  }, []);

  return (
    <h1
      ref={headingRef}
      className="text-2xl md:text-4xl lg:text-5xl text-center font-bold font-jura text-cyan-900 z-100"
      aria-label={headingLines.join(" ")}
    >
      <span className="sr-only">
        Meet Aegis, Your Personal AI Analyst for Web3.
      </span>
      <span aria-hidden="true" className="inline-flex flex-col items-center">
        {headingLines.map((line, lineIndex) => (
          <span key={line} className="block whitespace-nowrap">
            {Array.from(line).map((character, characterIndex) => (
              <span
                key={`${lineIndex}-${characterIndex}`}
                data-char
                className="inline-block"
              >
                {character === " " ? "\u00A0" : character}
              </span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  );
};

export default TypingHeading;
