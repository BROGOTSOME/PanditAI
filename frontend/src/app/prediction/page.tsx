"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaUserAstronaut,
  FaHeartbeat,
  FaMoneyBill,
  FaBriefcase,
  FaHeart,
  FaMagic,
} from "react-icons/fa";
import type { ReactNode } from "react";

type CategoryKey =
  | "personality"
  | "health"
  | "money"
  | "career"
  | "love"
  | "miscellaneous";

const categories: { key: CategoryKey; title: string; icon: ReactNode }[] = [
  { key: "personality", title: "Personality", icon: <FaUserAstronaut size={46} /> },
  { key: "health", title: "Health", icon: <FaHeartbeat size={46} /> },
  { key: "money", title: "Money", icon: <FaMoneyBill size={46} /> },
  { key: "career", title: "Career", icon: <FaBriefcase size={46} /> },
  { key: "love", title: "Love", icon: <FaHeart size={46} /> },
  { key: "miscellaneous", title: "Miscellaneous", icon: <FaMagic size={46} /> },
];

export default function PredictionPage() {
  const [activeCard, setActiveCard] = useState<CategoryKey | null>(null);
  const [data, setData] = useState<Record<string, string>>({});
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem("prediction");
    if (cached) setData(JSON.parse(cached));

    const timer = setTimeout(() => setShowQuote(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const placeholder: Record<CategoryKey, string> = {
    personality: "The cosmos remains silent for now.",
    health: "The cosmos remains silent for now.",
    money: "The cosmos remains silent for now.",
    career: "The cosmos remains silent for now.",
    love: "The cosmos remains silent for now.",
    miscellaneous: "The cosmos remains silent for now.",
  };

  const finalData = Object.keys(data).length ? data : placeholder;

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0b0f1a] text-white font-serif">
    

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#3b2f2f,_transparent_55%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#1a2a3a,_transparent_60%)] opacity-70" />

      {/* Main */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-24">
        {!activeCard ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
            {categories.map((cat) => (
              <div
                key={cat.key}
                onClick={() => setActiveCard(cat.key)}
                className="group cursor-pointer"
              >
                <div className="h-64 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/15 shadow-[0_0_30px_rgba(255,159,67,0.25)] flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(255,159,67,0.45)]">
                  <div className="mb-4 opacity-90 text-[#ff9f43]">{cat.icon}</div>
                  <div className="text-xl tracking-widest">{cat.title}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl w-full animate-fadeInScale">
            <div className="rounded-[2.5rem] p-10 backdrop-blur-2xl bg-white/5 border border-white/20 shadow-[0_0_60px_rgba(255,159,67,0.4)]">
              <h2 className="text-4xl text-center mb-6 tracking-wider text-[#ff9f43]">
                {categories.find((c) => c.key === activeCard)?.title}
              </h2>
              <p className="text-lg leading-relaxed text-center opacity-90 whitespace-pre-line">
                {finalData[activeCard]}
              </p>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setActiveCard(null)}
                  className="px-8 py-3 rounded-full bg-[#ff9f43] text-black hover:bg-[#ff7a18] transition"
                >
                  ← Return to Oracles
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quote */}
      {showQuote && (
        <div className="absolute bottom-6 w-full text-center px-4 animate-fadeIn">
          <p className="text-sm tracking-wide text-white/70">
            Time is an unstoppable force. PanditAI helps you navigate its currents.
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 0.6s ease-out; }
      `}</style>
    </div>
  );
}
