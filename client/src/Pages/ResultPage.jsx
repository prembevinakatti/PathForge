import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Target, Code, Rocket, Star, Award, Share2, FileDown } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// --------------------------------------------------------
// ⭐ PF LOGO
// --------------------------------------------------------
const Logo = () => (
  <div className="flex items-center gap-2">
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
  const [selectedNode, setSelectedNode] = useState(null);

  // --------------------------------------------------------
  // ⭐ ROADMAP DATA
  // --------------------------------------------------------
  const roadmap = [
    {
      month: "Month 1 — Fundamentals",
      icon: <CheckCircle size={26} className="text-[#D4AF37]" />,
      desc: "Begin with essential foundations that prepare you for advanced stages.",
      tasks: ["HTML + CSS basics", "JavaScript basics", "Mini Projects"],
    },
    {
      month: "Month 2 — React Core",
      icon: <Target size={26} className="text-[#D4AF37]" />,
      desc: "Learn component-driven UI development & modern hooks.",
      tasks: ["Components", "Hooks", "State Mgmt"],
    },
    {
      month: "Month 3 — Backend Basics",
      icon: <Code size={26} className="text-[#D4AF37]" />,
      desc: "Build your backend & APIs with Node.js, Express, and MongoDB.",
      tasks: ["Node.js", "Express", "MongoDB"],
    },
    {
      month: "Month 4 — Full Stack",
      icon: <Code size={26} className="text-[#D4AF37]" />,
      desc: "Integrate frontend + backend with authentication & routing.",
      tasks: ["Integrations", "Auth System", "CRUD"],
    },
    {
      month: "Month 5 — Advanced",
      icon: <Target size={26} className="text-[#D4AF37]" />,
      desc: "Learn state management, deployment & advanced APIs.",
      tasks: ["Redux / Zustand", "Deployment", "Advanced APIs"],
    },
    {
      month: "Month 6 — Final Project",
      icon: <Rocket size={26} className="text-[#D4AF37]" />,
      desc: "Build a complete production-level MERN application.",
      tasks: ["MERN Project", "Optimization", "Portfolio"],
    },
  ];

  // --------------------------------------------------------
  // ⭐ SHARE LINK
  // --------------------------------------------------------
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("✅ Roadmap link copied!");
  };

  // --------------------------------------------------------
  // ⭐ PDF EXPORT
  // --------------------------------------------------------
  const handlePDF = async () => {
    const element = document.getElementById("roadmapTree");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`${prompt}_Roadmap.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col">

      {/* ⭐ NAVBAR */}
      <nav className="w-full bg-white/60 backdrop-blur-md border-b border-[#EADFC8] px-10 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-6 items-center text-[#8B7760] font-medium">
          <button onClick={handleShare} className="hover:text-[#5C4B3B] flex items-center gap-2">
            <Share2 size={18} /> Share
          </button>
          <button onClick={handlePDF} className="hover:text-[#5C4B3B] flex items-center gap-2">
            <FileDown size={18} /> Download PDF
          </button>
        </div>
      </nav>

      {/* ⭐ HERO SECTION */}
      <div className="p-10 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-[#5C4B3B]">Your Roadmap Tree</h1>
        <p className="mt-2 text-lg text-[#8B7760]">
          For: <span className="text-[#D4AF37] font-bold">{prompt}</span>
        </p>
      </div>

      {/* ******************************************************************** */}
      {/* ⭐ ROADMAP TREE SECTION WITH CONNECTORS + ANIMATION + CLICK EXPAND */}
      {/* ******************************************************************** */}
      <div id="roadmapTree" className="relative max-w-6xl mx-auto px-10 pb-20">

        {/* Center Progress Bar */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 w-2 bg-gradient-to-b from-[#D4AF37] to-[#B9962E] rounded-full shadow-lg"
        />

        {/* All Nodes */}
        <div className="space-y-24">

          {roadmap.map((step, index) => {
            const left = index % 2 === 0; // Alternate sides

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: left ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className={`relative flex ${left ? "justify-start" : "justify-end"}`}
              >
                {/* Curved Connector Line */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute top-8 left-1/2 -z-10"
                >
                  <svg width="300" height="80">
                    <path
                      d={left ? "M150 40 Q 0 0 0 40" : "M150 40 Q 300 0 300 40"}
                      stroke="#D4AF37"
                      strokeWidth="3"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* Node Card */}
                <div
                  onClick={() => setSelectedNode(step)}
                  className="w-[350px] bg-white/80 border border-[#EADFC8] rounded-2xl shadow-xl p-6 cursor-pointer hover:scale-[1.03] transition backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3 mb-3">{step.icon}
                    <h3 className="text-xl font-bold text-[#5C4B3B]">{step.month}</h3>
                  </div>

                  <ul className="list-disc ml-6 text-[#6C5B4C]">
                    {step.tasks.map((t, i) => (
                      <li key={i} className="hover:text-[#D4AF37] transition">{t}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>

      {/* ******************************************************************** */}
      {/* ⭐ MODAL — NODE DETAILS EXPAND ON CLICK */}
      {/* ******************************************************************** */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="bg-white/90 border border-[#D4AF37] p-10 rounded-2xl shadow-xl max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-[#5C4B3B] mb-3">{selectedNode.month}</h2>
              <p className="text-[#8B7760] italic mb-4">{selectedNode.desc}</p>
              <ul className="list-disc ml-6 text-[#6C5B4C]">
                {selectedNode.tasks.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedNode(null)}
                className="mt-6 bg-[#D4AF37] text-white px-5 py-2 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full bg-white/50 backdrop-blur-lg border-t border-[#EADFC8] py-4 px-10 text-center text-[#8B7760] text-sm">
        © {new Date().getFullYear()} PathForge — AI Roadmap Generator
      </footer>
    </div>
  );
};

export default ResultPage;
