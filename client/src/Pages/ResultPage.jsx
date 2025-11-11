import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Target, Code, Rocket, Star, Award, ChevronDown, ChevronUp } from "lucide-react";

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

  // --------------------------------------------------------
  // ⭐ MONTH + WEEK DATA
  // --------------------------------------------------------
  const timeline = [
    {
      month: "Month 1 — Fundamentals",
      icon: <CheckCircle size={28} className="text-[#D4AF37]" />,
      desc: "Build strong foundations to prepare for advanced concepts.",
      items: ["HTML & CSS Basics", "JavaScript Basics", "2 Mini Projects"],
      weeks: [
        { title: "Week 1", tasks: ["Learn HTML structure", "Basic CSS styling", "Responsive layouts"] },
        { title: "Week 2", tasks: ["JavaScript syntax", "Variables & loops", "Mini JS exercises"] },
        { title: "Week 3", tasks: ["DOM manipulation", "Events & forms", "Build interactive page"] },
        { title: "Week 4", tasks: ["2 Mini Projects", "Personal website", "Submit for review"] },
      ],
    },
    {
      month: "Month 2 — React Core",
      icon: <Target size={28} className="text-[#D4AF37]" />,
      desc: "Master React essentials and component-driven development.",
      items: ["React Components", "Hooks & State", "Dashboard UI Project"],
      weeks: [
        { title: "Week 1", tasks: ["JSX basics", "Functional components"] },
        { title: "Week 2", tasks: ["useState & useEffect", "Dynamic rendering"] },
        { title: "Week 3", tasks: ["Routing with React Router", "Forms & validation"] },
        { title: "Week 4", tasks: ["UI Project — Dashboard", "Deploy to Netlify"] },
      ],
    },
    {
      month: "Month 3 — Backend Basics",
      icon: <Code size={28} className="text-[#D4AF37]" />,
      desc: "Build your first backend and connect to a database.",
      items: ["Node.js + Express", "MongoDB Basics", "OAuth Login"],
      weeks: [
        { title: "Week 1", tasks: ["Setup Node.js", "Hello world server"] },
        { title: "Week 2", tasks: ["Express routes", "Middleware basics"] },
        { title: "Week 3", tasks: ["MongoDB CRUD", "Postman testing"] },
        { title: "Week 4", tasks: ["OAuth Login integration", "Mini API project"] },
      ],
    },
    {
      month: "Month 4 — Full Stack Integration",
      icon: <Code size={28} className="text-[#D4AF37]" />,
      desc: "Integrate frontend + backend into one powerful application.",
      items: ["Frontend + Backend Merge", "Authentication", "CRUD Operations"],
      weeks: [
        { title: "Week 1", tasks: ["Connect React with Node.js"] },
        { title: "Week 2", tasks: ["JWT Authentication setup"] },
        { title: "Week 3", tasks: ["Full CRUD integration", "Protected routes"] },
        { title: "Week 4", tasks: ["Final bug fixes", "Full stack project deploy"] },
      ],
    },
    {
      month: "Month 5 — Advanced Concepts",
      icon: <Target size={28} className="text-[#D4AF37]" />,
      desc: "Learn advanced tools and deploy your project online.",
      items: ["Redux / Zustand", "Advanced APIs", "Deployment"],
      weeks: [
        { title: "Week 1", tasks: ["State management with Redux"] },
        { title: "Week 2", tasks: ["API optimization", "Throttling & caching"] },
        { title: "Week 3", tasks: ["Performance tuning", "Lighthouse checks"] },
        { title: "Week 4", tasks: ["Deployment on Render/Vercel"] },
      ],
    },
    {
      month: "Month 6 — Final Project",
      icon: <Rocket size={28} className="text-[#D4AF37]" />,
      desc: "Build a complete production-ready full-stack application.",
      items: ["MERN App", "Performance Optimization", "Portfolio Prep"],
      weeks: [
        { title: "Week 1", tasks: ["Plan your app idea", "Setup repo & structure"] },
        { title: "Week 2", tasks: ["Frontend & backend connection", "Major features"] },
        { title: "Week 3", tasks: ["UI/UX polish", "Bug testing"] },
        { title: "Week 4", tasks: ["Deploy app", "Add to portfolio", "Presentation"] },
      ],
    },
  ];

  const [expandedMonth, setExpandedMonth] = useState(null);

  // --------------------------------------------------------
  // ⭐ PAGE CONTENT
  // --------------------------------------------------------
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

              {/* HEADER */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-extrabold text-[#5C4B3B] group-hover:text-[#D4AF37] transition mb-2">
                  {step.month}
                </h3>
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
              <p className="text-[#8B7760] mb-4 italic group-hover:translate-x-1 transition">
                {step.desc}
              </p>

              {/* TASKS */}
              <ul className="list-disc ml-6 text-[#6C5B4C] mb-4">
                {step.items.map((item, i) => (
                  <li key={i} className="mb-1 hover:text-[#D4AF37] transition">
                    {item}
                  </li>
                ))}
              </ul>

              {/* WEEKLY EXPAND */}
              <AnimatePresence>
                {expandedMonth === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 border-t border-[#EADFC8] pt-4 grid gap-3"
                  >
                    {step.weeks.map((week, wIndex) => (
                      <div
                        key={wIndex}
                        className="p-4 bg-[#FAF7F0]/80 rounded-xl border border-[#EADFC8] shadow-sm"
                      >
                        <h4 className="text-lg font-bold text-[#5C4B3B] mb-1">
                          {week.title}
                        </h4>
                        <ul className="list-disc ml-6 text-[#6C5B4C]">
                          {week.tasks.map((task, tIndex) => (
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
      <footer className="w-full bg-white/50 backdrop-blur-lg border-t border-[#EADFC8] mt-10 py-4 px-10 text-center text-[#8B7760] text-sm">
        © {new Date().getFullYear()} PathForge — AI Roadmap Generator
      </footer>
    </div>
  );
};

export default ResultPage;
