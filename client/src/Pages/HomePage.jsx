import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "@/assets/home-illustration.png";
import { motion } from "framer-motion";

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

const HomePage = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/result", { state: { prompt } });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col items-center">

      {/* ------------------------------------------------------------------ */}
      {/* ⭐ NAVBAR */}
      {/* ------------------------------------------------------------------ */}

      <nav className="w-full bg-white/60 backdrop-blur-lg border-b border-[#EADFC8] px-10 py-4 flex justify-between items-center">
        <Logo />

        <div className="flex gap-6 items-center text-[#8B7760] font-medium">
          <a className="hover:text-[#5C4B3B] transition">Home</a>
          <a className="hover:text-[#5C4B3B] transition">Features</a>
          <a className="hover:text-[#5C4B3B] transition">About</a>
          <button className="px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B9962E] text-white rounded-lg shadow-md hover:opacity-90">
            Login
          </button>
        </div>
      </nav>

      {/* ------------------------------------------------------------------ */}
      {/* ⭐ HERO SECTION (Image + Input) */}
      {/* ------------------------------------------------------------------ */}

      <div className="flex flex-col items-center pt-20 px-6">

        <h1 className="text-5xl font-extrabold text-[#5C4B3B] text-center leading-[1.2] drop-shadow-sm">
          Your Career Roadmap,<br />
          <span className="text-[#D4AF37]">Crafted by AI.</span>
        </h1>

        <p className="mt-3 text-[#6C5B4C] max-w-2xl text-center text-lg">
          Enter any dream role — MERN Developer, UX Designer, Blockchain Engineer.
          Let AI forge your perfect 6-month learning path.
        </p>

        {/* CARD */}
        <div className="bg-white/60 backdrop-blur-xl border border-[#EADFC8] shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl mt-14">

          {/* ⭐ LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={illustration}
              alt="Roadmap Illustration"
              className="w-[90%] drop-shadow-xl rounded-xl"
            />
          </motion.div>

          {/* ⭐ RIGHT INPUT */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">

            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your dream role (e.g. MERN Developer)"
              className="w-full px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/80 
                     focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B] shadow-sm"
            />

            {/* ⭐ Button with loading animation */}
            <button
              onClick={handleGenerate}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B9962E] 
                     text-white font-semibold py-3 rounded-lg hover:opacity-90 transition shadow-lg"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  {/* GOLD LOADING ANIMATION */}
                  <div className="w-6 h-6 border-4 border-[#F1D98A] border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </div>
              ) : (
                "Generate Roadmap"
              )}
            </button>

          </div>

        </div>

      </div>

      {/* ------------------------------------------------------------------ */}
      {/* ⭐ FEATURE SECTION */}
      {/* ------------------------------------------------------------------ */}

      <section className="mt-28 px-10 max-w-6xl w-full grid md:grid-cols-3 gap-10">

        {[
          {
            title: "AI-Tailored Learning",
            desc: "Roadmaps built exactly for your dream job using smart AI.",
          },
          {
            title: "Weekly Milestones",
            desc: "Structured, step-by-step progress checkpoints.",
          },
          {
            title: "Skill-based Recommendations",
            desc: "Learn only what matters — no unnecessary extra topics.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 bg-white/70 border border-[#EADFC8] rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-[#5C4B3B] mb-2">{item.title}</h3>
            <p className="text-[#6C5B4C]">{item.desc}</p>
          </div>
        ))}

      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ⭐ FOOTER */}
      {/* ------------------------------------------------------------------ */}

      <footer className="w-full bg-white/50 backdrop-blur-lg border-t border-[#EADFC8] mt-20 py-4 px-10 text-center text-[#8B7760] text-sm">
        © {new Date().getFullYear()} PathForge — AI Roadmap Generator
      </footer>

    </div>
  );
};

export default HomePage;
