import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

// --------------------------------------------------------
// ⭐ PF LOGO with GOLD SHINE ANIMATION
// --------------------------------------------------------
const Logo = () => (
  <div className="relative flex items-center gap-2 overflow-hidden">
    <div
      className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B9962E] 
         flex items-center justify-center shadow-md relative overflow-hidden"
    >
      <span className="text-white font-extrabold text-base z-10">PF</span>

      <motion.div
        initial={{ x: -40 }}
        animate={{ x: 60 }}
        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-0 left-0 w-6 h-full bg-white/40 rotate-12 blur-[1px]"
      />
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

  // --------------------------------------------------------
  // ⭐ API CALL TO GENERATE ROADMAP
  // --------------------------------------------------------
  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/path/roadmap/generate",
        { prompt },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const roadmap = res.data.roadmap;

      // Navigate to result page with roadmap
      navigate("/result", {
        state: {
          prompt,
          roadmap,
        },
      });
    } catch (error) {
      console.log("Error generating roadmap:", error);
      alert("Failed to generate roadmap. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute right-0 top-0 w-[550px] h-[550px] bg-gradient-to-br from-[#F5E7C3] to-[#D4AF37] opacity-20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37] to-[#F5E7C3] opacity-10 blur-3xl rounded-full pointer-events-none" />

      {/* AI CIRCUIT MESH */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="circuit"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 0 V30 H40 V60 H70"
            stroke="#C9A959"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* FLOATING ICONS */}
      {["💡", "⚡", "✨", "📘", "🧠", "🧩", "⚙️", "📈"].map((icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: i * 0.4 }}
          className="absolute text-3xl select-none pointer-events-none"
          style={{ left: `${10 + i * 11}%`, top: `${20 + (i % 4) * 15}%` }}
        >
          {icon}
        </motion.div>
      ))}

      {/* NAVBAR */}
      <nav className="w-full bg-white/60 backdrop-blur-lg border-b border-[#EADFC8] px-10 py-4 flex justify-between items-center z-50">
        <Logo />
      </nav>

      {/* HERO SECTION */}
      <div className="flex flex-col items-center pt-28 px-6 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold text-[#5C4B3B] leading-[1.2] drop-shadow-sm"
        >
          Your Career Roadmap,
          <br />
          <span className="text-[#D4AF37]">Crafted by AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-[#6C5B4C] max-w-2xl text-lg"
        >
          Enter your dream role and let AI forge a 6-month roadmap that
          accelerates your skills & career.
        </motion.p>

        {/* INPUT CARD */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/60 backdrop-blur-xl border border-[#EADFC8] shadow-xl rounded-2xl p-10 flex flex-col gap-8 max-w-xl w-full mt-16"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your dream role (e.g., MERN Developer)"
            className="w-full px-5 py-4 rounded-lg border border-[#D4AF37]/40 bg-white/80 
                      focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B] shadow-sm"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B9962E] 
                       text-white font-semibold py-4 rounded-lg hover:opacity-90 transition shadow-lg text-lg"
          >
            {loading ? "Generating..." : "Generate Roadmap"}
          </button>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-white/50 backdrop-blur-lg border-t border-[#EADFC8] mt-20 py-4 text-center text-[#8B7760] text-sm z-10">
        © {new Date().getFullYear()} PathForge — AI Roadmap Generator
      </footer>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex flex-col items-center justify-center 
              bg-[#020202]/95 backdrop-blur-2xl z-[999999] overflow-hidden"
        >
          {/* ====================================================== */}
          {/*       1️⃣ QUANTUM GRID (Procedural AI Flow Grid)       */}
          {/* ====================================================== */}
          <svg
            className="absolute inset-0 opacity-[0.12]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="quantumGrid"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 60 H120 M60 0 V120"
                stroke="#D4AF37"
                strokeWidth="0.4"
                className="opacity-30"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#quantumGrid)" />
          </svg>

          {/* ====================================================== */}
          {/*          2️⃣ FLOATING HOLOGRAM GLYPHS                   */}
          {/* ====================================================== */}
          {[..."⚛️🧠✨⚡🔮📡🌐🧩"].map((glyph, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.3 }}
              className="absolute text-4xl"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 5) * 12}%`,
              }}
            >
              {glyph}
            </motion.div>
          ))}

          {/* ====================================================== */}
          {/*         3️⃣ 4-LAYER HOLOGRAPHIC ROTATION RINGS          */}
          {/* ====================================================== */}
          <div className="relative w-[500px] h-[500px]">
            {/* OUTER RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[6px] border-[#F7E7AF]/20 rounded-full blur-[1px]"
            />

            {/* SECOND RING */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 border-[3px] border-[#D4AF37]/40 rounded-full"
            />

            {/* THIRD RING ( hologram dashed lines ) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-20 border-[3px] border-dashed border-[#E8C97A]/50 rounded-full"
            />

            {/* INNER CORE */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-40 bg-[#D4AF37]/40 rounded-full blur-2xl shadow-[0_0_50px_#D4AF37]"
            />

            {/* CORE PARTICLE */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="absolute top-1/2 left-1/2 w-14 h-14 
                   -translate-x-1/2 -translate-y-1/2
                   bg-gradient-to-br from-[#FFD97A] to-[#D4AF37] rounded-full shadow-[0_0_30px_#FFD97A]"
            />
          </div>

          {/* ====================================================== */}
          {/*         4️⃣ FLOATING PARTICLES (Neural Sparks)          */}
          {/* ====================================================== */}
          {[...Array(70)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -140, 0],
                opacity: [0, 1, 0],
                scale: [0.3, 1.8, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + Math.random() * 2,
                delay: i * 0.06,
              }}
              className="absolute w-[3px] h-[3px] bg-[#FFD97A] rounded-full shadow-[0_0_10px_#FFD97A]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* ====================================================== */}
          {/*     5️⃣ 3D FLOATING CUBE (Generative AI Brain)          */}
          {/* ====================================================== */}
          <motion.div
            animate={{ rotateY: 360, rotateX: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="mt-10 w-32 h-32 bg-gradient-to-br from-[#D4AF37] to-[#8f6f19] 
                 shadow-[0_0_40px_#D4AF37] rounded-xl opacity-70 transform-gpu"
          />

          {/* ====================================================== */}
          {/*           6️⃣ AI TERMINAL STATUS TEXT                    */}
          {/* ====================================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.p
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="text-3xl text-[#F7D57A] font-extrabold tracking-[0.25em]"
            >
              BUILDING ROADMAP…
            </motion.p>

            <motion.p
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
              className="text-sm text-[#cfcfcf] mt-4"
            >
              • Parsing expertise layers • Building knowledge lattice •
              Generating 24-week mastery pipeline • Optimizing learning curve
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 260 }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="h-[3px] mx-auto mt-4 bg-gradient-to-r from-[#D4AF37] to-[#F5D98E] rounded-full shadow-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
