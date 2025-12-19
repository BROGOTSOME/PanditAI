"use client";

import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaUserTie,
} from "react-icons/fa";

const team = [
  { name: "Aditya Sharma", phone: "", email: "", linkedin: "" },
  { name: "Prakhar Dwivedi", phone: "", email: "", linkedin: "" },
  { name: "Ishaan", phone: "", email: "", linkedin: "" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0b0f1a] text-white font-serif">
      

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#3b2f2f,_transparent_55%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#1a2a3a,_transparent_60%)] opacity-70" />

      {/* Main */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32">
        <h2 className="text-4xl tracking-widest mb-14 text-[#ff9f43]">Contact the Oracles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl p-8 backdrop-blur-2xl bg-white/5 border border-white/15 shadow-[0_0_35px_rgba(255,159,67,0.3)] hover:shadow-[0_0_55px_rgba(255,159,67,0.55)] transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 text-[#ff9f43]">
                  <FaUserTie size={36} />
                </div>

                <h3 className="text-2xl tracking-wide mb-6">{member.name}</h3>

                <div className="space-y-4 text-sm text-white/80">
                  <div className="flex items-center gap-3 justify-center">
                    <FaPhoneAlt className="text-[#ff9f43]" />
                    <span>{member.phone || "Coming Soon"}</span>
                  </div>

                  <div className="flex items-center gap-3 justify-center">
                    <FaEnvelope className="text-[#ff9f43]" />
                    <span>{member.email || "Coming Soon"}</span>
                  </div>

                  <div className="flex items-center gap-3 justify-center">
                    <FaLinkedin className="text-[#ff9f43]" />
                    <span>{member.linkedin || "Coming Soon"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="absolute bottom-6 w-full text-center px-4 animate-fadeIn">
        <p className="text-sm tracking-wide text-white/70">
          Behind every prediction stands a mind that dares to understand time.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
