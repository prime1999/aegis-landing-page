"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Brain, ChartBar, Newspaper, Scan } from "lucide-react";

const featureItems = [
  {
    icon: Scan,
    text: "Scans through your wallet activities.",
  },
  {
    icon: ChartBar,
    text: "Analyzes the scanned wallet activity.",
  },
  {
    icon: Newspaper,
    text: "Get Updates based on your wallet activity.",
  },
  {
    icon: Brain,
    text: "Provides AI explanations and recommendations.",
  },
];

const FeatureStack = () => {
  const stackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stackElement = stackRef.current;

    if (!stackElement) {
      return;
    }

    const cards = stackElement.querySelectorAll("[data-stack-item]");

    const context = gsap.context(() => {
      gsap.set(cards, { y: -36, opacity: 0 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        delay: 2,
        duration: 1,
        stagger: 0.16,
        ease: "power3.out",
      });
    }, stackElement);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={stackRef}
      className="flex flex-col items-center justify-center gap-4"
    >
      {featureItems.map(({ icon: Icon, text }) => (
        <div
          key={text}
          data-stack-item
          className="flex items-center gap-2 backdrop-blur-4xl shadow-md rounded-lg p-4"
        >
          <Icon size={18} className="text-cyan-800" />
          <p className="font-geist-mono text-xs font-semibold mt-1">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureStack;
