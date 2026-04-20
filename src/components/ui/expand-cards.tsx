"use client";

import { useState } from "react";

interface CardItem {
  label?: string;
  value: string;
}

interface CardSection {
  title: string;
  accent: string;
  items: CardItem[] | string[];
}

const content: CardSection[] = [
  {
    title: "What You Get",
    accent: "#22d3ee",
    items: [
      { label: "Strategy", value: "A clear, actionable plan" },
      { label: "Planning", value: "The right tools chosen for you" },
      { label: "Development", value: "A fast, working product" },
      { label: "Optimization", value: "Support to keep you growing" }
    ]
  },
  {
    title: "Typical Timeline",
    accent: "#f472b6",
    items: [
      { label: "Strategy", value: "2–5 Days" },
      { label: "Planning", value: "5–10 Days" },
      { label: "Development", value: "2–6 Weeks" },
      { label: "Optimization", value: "Ongoing" }
    ]
  },
  {
    title: "How We Work",
    accent: "#10b981",
    items: [
      "We keep you in the loop weekly",
      "You'll always know what's next",
      "No hidden fees or surprises",
      "We won't ever go silent on you"
    ]
  },
  {
    title: "Why This Works",
    accent: "#fb923c",
    items: [
      { label: "Method", value: "We follow a proven method" },
      { label: "Logic", value: "No guessing—we use real data" },
      { label: "Future", value: "Built to handle future growth" },
      { label: "Focus", value: "Our focus is strictly your ROI" }
    ]
  }
];

const ExpandOnHover = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="w-full py-6 md:py-12">
      {/* Desktop: horizontal expand layout */}
      <div className="hidden lg:flex w-full items-center justify-center gap-2 transition-all duration-500 ease-in-out" style={{ minHeight: '500px' }}>
        {content.map((section, idx) => {
          const isExpanded = idx === expandedIndex;
          return (
            <div
              key={idx}
              className="relative cursor-pointer overflow-hidden rounded-[32px] transition-all duration-500 ease-in-out border border-white/10"
              style={{
                width: isExpanded ? "40%" : "15%",
                minWidth: isExpanded ? "350px" : "120px",
                height: "500px",
                background: isExpanded
                  ? `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)`
                  : "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                borderColor: isExpanded ? section.accent : "rgba(255,255,255,0.1)"
              }}
              onMouseEnter={() => setExpandedIndex(idx)}
            >
              {isExpanded && (
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 opacity-20 blur-3xl pointer-events-none"
                  style={{ background: section.accent }}
                />
              )}
              <div className="relative z-10 p-8 h-full flex flex-col items-start overflow-hidden">
                <h4
                  className={`font-black uppercase tracking-tighter transition-all duration-500 whitespace-nowrap mb-8 ${
                    isExpanded ? "text-4xl opacity-100" : "text-xl opacity-30 rotate-90 mt-28 origin-left translate-x-12"
                  }`}
                  style={{ color: isExpanded ? section.accent : "#fff" }}
                >
                  {section.title}
                </h4>
                {isExpanded && (
                  <div className="w-full space-y-6 animate-in fade-in slide-in-from-left duration-700">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex flex-col border-b border-white/5 pb-4">
                        {typeof item === "string" ? (
                          <div className="flex items-start gap-3">
                            <span className="text-[#10b981] font-black mt-1">✔</span>
                            <span className="text-lg text-white font-bold leading-tight">{item}</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-[0.65rem] font-bold opacity-40 uppercase tracking-widest mb-1">{item.label}</span>
                            <span className="text-xl text-white font-black leading-tight">{item.value}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {!isExpanded && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-6xl font-black opacity-5" style={{ color: section.accent }}>0{idx + 1}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: accordion layout */}
      <div className="flex lg:hidden flex-col gap-3 w-full">
        {content.map((section, idx) => {
          const isExpanded = idx === expandedIndex;
          return (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border transition-all duration-300"
              style={{
                background: isExpanded
                  ? `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)`
                  : "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                borderColor: isExpanded ? section.accent : "rgba(255,255,255,0.1)"
              }}
            >
              {/* Accordion header */}
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
              >
                <span className="font-black uppercase tracking-tight text-lg" style={{ color: isExpanded ? section.accent : "#fff" }}>
                  {section.title}
                </span>
                <span className="text-xl font-bold transition-transform duration-300" style={{ color: section.accent, transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>

              {/* Accordion body */}
              {isExpanded && (
                <div className="px-5 pb-5 space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex flex-col border-b border-white/5 pb-3">
                      {typeof item === "string" ? (
                        <div className="flex items-start gap-3">
                          <span className="text-[#10b981] font-black mt-0.5">✔</span>
                          <span className="text-base text-white font-bold leading-tight">{item}</span>
                        </div>
                      ) : (
                        <>
                          <span className="text-[0.6rem] font-bold opacity-40 uppercase tracking-widest mb-1">{item.label}</span>
                          <span className="text-lg text-white font-black leading-tight">{item.value}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandOnHover;
