import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Target, Code, Rocket, Star, Award } from "lucide-react";

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
      icon: <CheckCircle size={28} className="text-[#D4AF37]" />,
      desc: "Build strong foundations to prepare for advanced concepts.",
      items: ["HTML & CSS Basics", "JavaScript Basics", "2 Mini Projects"],
    },
    {
      month: "Month 2 — Core Skills",
      icon: <Target size={28} className="text-[#D4AF37]" />,
      desc: "Master React essentials and component-driven development.",
      items: ["React Components", "Hooks & State", "Dashboard UI Project"],
    },
    {
      month: "Month 3 — Backend Basics",
      icon: <Code size={28} className="text-[#D4AF37]" />,
      desc: "Build your first backend and connect to a database.",
      items: ["Node.js + Express", "MongoDB Basics", "OAuth Login"],
    },
    {
      month: "Month 4 — Full Stack",
      icon: <Code size={28} className="text-[#D4AF37]" />,
      desc: "Integrate frontend + backend into one powerful application.",
      items: ["Frontend + Backend Merge", "Authentication", "CRUD Operations"],
    },
    {
      month: "Month 5 — Advanced Concepts",
      icon: <Target size={28} className="text-[#D4AF37]" />,
      desc: "Learn advanced tools and deploy your project online.",
      items: ["Redux / Zustand", "Advanced APIs", "Deployment"],
    },
    {
      month: "Month 6 — Final Project",
      icon: <Rocket size={28} className="text-[#D4AF37]" />,
      desc: "Build a complete production-ready full-stack application.",
      items: ["MERN App", "Performance Optimization", "Portfolio Prep"],
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

      {/* -------------------------------------------------------- */}
      {/* ⭐ HERO SECTION + SUMMARY CARD */}
      {/* -------------------------------------------------------- */}
      <div className="p-10 flex flex-col items-center">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-[#5C4B3B] mb-3 text-center drop-shadow-sm"
        >
          Your AI-Crafted Roadmap  
        </motion.h1>

        <p className="text-[#8B7760] text-lg mb-8">
          Tailored roadmap for: <span className="text-[#D4AF37] font-bold">{prompt}</span>
        </p>

        {/* SUMMARY CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 border border-[#EADFC8] rounded-2xl shadow-xl px-8 py-6 max-w-3xl w-full grid md:grid-cols-3 gap-6 text-center backdrop-blur-md"
        >
          <div>
            <Star className="text-[#D4AF37] mx-auto mb-2" size={30} />
            <p className="text-xl font-bold text-[#5C4B3B]">Difficulty</p>
            <p className="text-[#8B7760]">Intermediate</p>
          </div>

          <div>
            <Award className="text-[#D4AF37] mx-auto mb-2" size={30} />
            <p className="text-xl font-bold text-[#5C4B3B]">Duration</p>
            <p className="text-[#8B7760]">6 Months</p>
          </div>

          <div>
            <Rocket className="text-[#D4AF37] mx-auto mb-2" size={30} />
            <p className="text-xl font-bold text-[#5C4B3B]">Outcome</p>
            <p className="text-[#8B7760]">Job-Ready Skills</p>
          </div>
        </motion.div>

      </div>

      {/* -------------------------------------------------------- */}
      {/* ⭐ ADVANCED VERTICAL TIMELINE */}
      {/* -------------------------------------------------------- */}
      <div className="relative max-w-4xl w-full mx-auto px-10 mt-10 pb-16">

        {/* GOLD LINE WITH PULSING DOTS */}
        <div className="absolute left-8 top-0 bottom-0">
          <div className="h-full w-1 bg-gradient-to-b from-[#D4AF37] to-[#B9962E] rounded-full"></div>

          {/* PULSING DOTS */}
          <div className="absolute top-5 -left-1 w-4 h-4 bg-[#D4AF37] rounded-full animate-ping"></div>
          <div className="absolute top-1/2 -left-1 w-4 h-4 bg-[#D4AF37] rounded-full animate-ping"></div>
          <div className="absolute bottom-5 -left-1 w-4 h-4 bg-[#D4AF37] rounded-full animate-ping"></div>
        </div>

        <div className="space-y-12 ml-20">

          {timeline.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/80 border border-[#EADFC8] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition backdrop-blur-xl group"
            >
              {/* ICON */}
              <div className="absolute -left-20 top-6 bg-white shadow-lg border border-[#EADFC8] p-4 rounded-full group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-extrabold text-[#5C4B3B] group-hover:text-[#D4AF37] transition mb-2">
                {step.month}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#8B7760] mb-4 italic group-hover:translate-x-1 transition">
                {step.desc}
              </p>

              {/* TASK LIST */}
              <ul className="list-disc ml-6 text-[#6C5B4C]">
                {step.items.map((item, i) => (
                  <li key={i} className="mb-1 hover:text-[#D4AF37] transition">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

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
