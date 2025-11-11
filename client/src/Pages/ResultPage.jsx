import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Target, Code, Rocket } from "lucide-react";

// --------------------------------------------------------
// ⭐ PF LOGO
// --------------------------------------------------------
const Logo = () => (
  <div className="flex items-center gap-1">
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B9962E] flex items-center justify-center shadow-md">
      <span className="text-white font-extrabold text-base">PF</span>
    </div>
    <span className="text-xl font-bold text-[#5C4B3B]">
      Path<span className="text-[#D4AF37]">Forge</span>
    </span>
  </div>
);

const ResultPage = () => {
  const location = useLocation();
  const prompt = location.state?.prompt || "Your Role";

  const timeline = [
    {
      month: "Month 1 — Fundamentals",
      icon: <CheckCircle size={30} className="text-[#D4AF37]" />,
      items: ["Basics of HTML & CSS", "JavaScript foundations", "Build 2 mini projects"],
    },
    {
      month: "Month 2 — Core Skills",
      icon: <Target size={30} className="text-[#D4AF37]" />,
      items: ["React Components", "Hooks & State Management", "Mini Project: Dashboard UI"],
    },
    {
      month: "Month 3 — Backend Basics",
      icon: <Code size={30} className="text-[#D4AF37]" />,
      items: ["Node.js + Express.js", "MongoDB Basics", "OAuth Login"],
    },
    {
      month: "Month 4 — Full Stack",
      icon: <Code size={30} className="text-[#D4AF37]" />,
      items: ["Connect Frontend + Backend", "Authentication", "CRUD Operations"],
    },
    {
      month: "Month 5 — Advanced Concepts",
      icon: <Target size={30} className="text-[#D4AF37]" />,
      items: ["Redux / Zustand", "Advanced APIs", "Deployment"],
    },
    {
      month: "Month 6 — Final Project",
      icon: <Rocket size={30} className="text-[#D4AF37]" />,
      items: ["Build MERN App", "Optimize Performance", "Portfolio Preparation"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col">

      {/* -------------------------------------------------------- */}
      {/* ⭐ NAVBAR */}
      {/* -------------------------------------------------------- */}
      <nav className="w-full bg-white/60 backdrop-blur-md border-b border-[#EADFC8] px-10 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-6 items-center text-[#8B7760] font-medium">
          <a className="hover:text-[#5C4B3B] transition">Home</a>
          <a className="hover:text-[#5C4B3B] transition">Roadmaps</a>
          <a className="hover:text-[#5C4B3B] transition">About</a>
        </div>
      </nav>

      <div className="flex flex-col items-center p-10">
        <h1 className="text-4xl font-extrabold text-[#5C4B3B] mb-6">
          Roadmap for: <span className="text-[#D4AF37]">{prompt}</span>
        </h1>

        {/* -------------------------------------------------------- */}
        {/* ⭐ VERTICAL TIMELINE */}
        {/* -------------------------------------------------------- */}
        <div className="relative max-w-3xl w-full mt-8">

          {/* GOLD DOTTED LINE */}
          <div className="absolute left-6 top-0 bottom-0 border-l-4 border-dotted border-[#D4AF37]/60"></div>

          <div className="space-y-10 ml-12">

            {timeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="relative p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-[#EADFC8] hover:shadow-2xl transition group"
              >
                {/* ICON */}
                <div className="absolute -left-14 top-4 bg-white p-3 rounded-full shadow-md border border-[#EADFC8] group-hover:scale-110 transition">
                  {step.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#5C4B3B] mb-3 group-hover:text-[#D4AF37] transition">
                  {step.month}
                </h3>

                {/* LIST */}
                <ul className="list-disc ml-6 text-[#6C5B4C] group-hover:ml-7 transition">
                  {step.items.map((item, i) => (
                    <li key={i} className="hover:text-[#D4AF37] transition">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* -------------------------------------------------------- */}
      {/* ⭐ FOOTER */}
      {/* -------------------------------------------------------- */}
      <footer className="w-full bg-white/50 backdrop-blur-lg border-t border-[#EADFC8] mt-10 py-4 px-10 text-center text-[#8B7760] text-sm">
        © {new Date().getFullYear()} PathForge — AI Roadmap Generator
      </footer>
    </div>
  );
};

export default ResultPage;
