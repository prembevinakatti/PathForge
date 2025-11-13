import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Target, Code, Rocket, ChevronDown, ChevronUp } from "lucide-react";

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
  const roadmap = location.state?.roadmap?.roadmap || []; 
  // roadmap.roadmap because backend returns {roadmap: {...}} inside message

  const [expandedMonth, setExpandedMonth] = useState(null);

  // ICON SET (repeatable)
  const icons = [
    <CheckCircle size={28} className="text-[#D4AF37]" />,
    <Target size={28} className="text-[#D4AF37]" />,
    <Code size={28} className="text-[#D4AF37]" />,
    <Rocket size={28} className="text-[#D4AF37]" />,
    <Target size={28} className="text-[#D4AF37]" />,
    <Rocket size={28} className="text-[#D4AF37]" />,
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col">

      {/* ⭐ NAVBAR */}
      <nav className="w-full bg-white/60 backdrop-blur-md border-b border-[#EADFC8] px-10 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-6 items-center text-[#8B7760] font-medium">
          <a className="hover:text-[#5C4B3B] transition">Home</a>
          <a className="hover:text-[#5C4B3B] transition">Roadmaps</a>
          <a className="hover:text-[#5C4B3B] transition">About</a>
        </div>
      </nav>

      {/* ⭐ HERO */}
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
      </div>

      {/* ⭐ TIMELINE */}
      <div className="relative max-w-4xl w-full mx-auto px-10 mt-6 pb-16">
        <div className="space-y-10">

          {roadmap.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/80 border border-[#EADFC8] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition backdrop-blur-xl group"
            >

              {/* ICON */}
              <div className="absolute -left-20 top-6 bg-white shadow-lg border border-[#EADFC8] p-4 rounded-full group-hover:scale-110 transition">
                {icons[index % icons.length]}
              </div>

              {/* HEADER */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-extrabold text-[#5C4B3B] group-hover:text-[#D4AF37] transition mb-2">
                  {step.month}
                </h3>

                {/* TOGGLE BUTTON */}
                <button
                  onClick={() => setExpandedMonth(expandedMonth === index ? null : index)}
                  className="text-[#D4AF37] hover:text-[#5C4B3B] transition flex items-center gap-2"
                >
                  {expandedMonth === index ? (
                    <>
                      <ChevronUp size={18} /> Hide Plan
                    </>
                  ) : (
                    <>
                      <ChevronDown size={18} /> View Weekly Plan
                    </>
                  )}
                </button>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[#8B7760] mb-4 italic">{step.desc}</p>

              {/* MONTH TASKS */}
              <ul className="list-disc ml-6 text-[#6C5B4C] mb-4">
                {step.items?.map((item, i) => (
                  <li key={i} className="mb-1 hover:text-[#D4AF37] transition">{item}</li>
                ))}
              </ul>

              {/* WEEKLY EXPAND SECTION */}
              <AnimatePresence>
                {expandedMonth === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 border-t border-[#EADFC8] pt-4 grid gap-3"
                  >
                    {step.weeks?.map((week, wIndex) => (
                      <div
                        key={wIndex}
                        className="p-4 bg-[#FAF7F0]/80 rounded-xl border border-[#EADFC8] shadow-sm"
                      >
                        <h4 className="text-lg font-bold text-[#5C4B3B] mb-1">
                          {week.title}
                        </h4>
                        <ul className="list-disc ml-6 text-[#6C5B4C]">
                          {week.tasks?.map((task, tIndex) => (
                            <li key={tIndex} className="hover:text-[#D4AF37] transition">
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ⭐ FOOTER */}
      <footer className="w-full bg-white/50 backdrop-blur-lg border-t border-[#EADFC8] mt-10 py-4 text-center text-[#8B7760] text-sm">
        © {new Date().getFullYear()} PathForge — AI Roadmap Generator
      </footer>
    </div>
  );
};

export default ResultPage;
