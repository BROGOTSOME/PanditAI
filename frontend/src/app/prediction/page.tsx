"use client";
import { useEffect, useState } from "react";
import { FaUserAstronaut, FaHeartbeat, FaMoneyBill, FaBriefcase, FaHeart, FaMagic } from "react-icons/fa";

type CategoryKey =
  | "personality"
  | "health"
  | "money"
  | "career"
  | "love"
  | "miscellaneous";
import type { ReactNode } from "react";

const categories: { key: CategoryKey; title: string; icon: ReactNode }[] = [
{ key: "personality", title: "Personality", icon: <FaUserAstronaut size={48} /> },
  { key: "health", title: "Health", icon: <FaHeartbeat size={48} /> },
  { key: "money", title: "Money", icon: <FaMoneyBill size={48} /> },
  { key: "career", title: "Career", icon: <FaBriefcase size={48} /> },
  { key: "love", title: "Love", icon: <FaHeart size={48} /> },
 { key: "miscellaneous", title: "Miscellaneous", icon: <FaMagic size={48} /> },
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
    <div className="min-h-screen relative overflow-hidden bg-[#05030d] text-white font-serif">
      {/* Navbar */}
      {/* <nav className="w-full p-6 flex justify-center z-20 relative">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] via-[#ffd700] to-[#ff8c42] animate-pulse">
          PanditAI
        </h1>
      </nav> */}    
      {/* Navbar */}
<nav className="w-full fixed top-0 left-0 z-30 backdrop-blur-xl bg-black/40 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* Logo */}
    <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c42] via-[#ffd700] to-[#ff8c42]">
      PanditAI
    </h1>

    {/* Links */}
    <ul className="hidden md:flex gap-8 text-sm tracking-widest text-white/80">
      <li className="hover:text-white transition cursor-pointer">Home</li>
      <li className="hover:text-white transition cursor-pointer">About</li>
      <li className="hover:text-white transition cursor-pointer">Services</li>
      <li className="hover:text-white transition cursor-pointer">Predictions</li>
      <li className="hover:text-white transition cursor-pointer">Contact</li>
    </ul>
  </div>
</nav>


      {/* Cosmic background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2b1d5a,_transparent_60%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#0f766e,_transparent_55%)] opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        {!activeCard ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
            {categories.map((cat) => (
              <div key={cat.key} onClick={() => setActiveCard(cat.key)} className="group cursor-pointer">
                <div className="h-64 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.25)] flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(168,85,247,0.45)]">
                  <div className="mb-4 opacity-90">{cat.icon}</div>
                  <div className="text-xl tracking-widest">{cat.title}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl w-full animate-fadeInScale">
            <div className="rounded-[2.5rem] p-10 backdrop-blur-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
              <h2 className="text-4xl font-serif text-center mb-6 tracking-wider">
                {categories.find((c) => c.key === activeCard)?.title}
              </h2>
              <p className="text-lg leading-relaxed text-center opacity-90 whitespace-pre-line">
                {finalData[activeCard]}
              </p>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setActiveCard(null)}
                  className="px-8 py-3 rounded-full bg-white/10 border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
                >
                  ← Return to Oracles
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Thunder Sweep */}
      <div className="absolute bottom-16 left-0 w-full h-[2px] overflow-hidden">
        <div className="thunder-line" />
      </div>

      {/* Quote */}
      {showQuote && (
        <div className="absolute bottom-6 w-full text-center px-4 animate-fadeIn">
          <p className="text-sm tracking-wide text-white/70">
            Time is an unstoppable force. PanditAI helps you navigate its currents rather than fight them.
          </p>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .thunder-line {
          width: 120%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff, #a855f7, #ffffff, transparent);
          animation: thunder 2s ease-in-out forwards;
        }
        @keyframes thunder {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0%); opacity: 1; }
        }
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
