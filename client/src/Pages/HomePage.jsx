import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// --------------------------------------------------------
// ⭐ PF LOGO with GOLD SHINE ANIMATION
// --------------------------------------------------------
const Logo = () => (
  <div className="relative flex items-center gap-2 overflow-hidden">
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B9962E] 
         flex items-center justify-center shadow-md relative overflow-hidden">
      <span className="text-white font-extrabold text-base z-10">PF</span>

      {/* Gold Shine Effect */}
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

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/result", { state: { prompt } });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col relative overflow-hidden">

      {/* ⭐ GOLD ABSTRACT PATTERN (Top Right) */}
      <div className="absolute right-0 top-0 w-[550px] h-[550px] bg-gradient-to-br 
                      from-[#F5E7C3] to-[#D4AF37] opacity-20 blur-3xl rounded-full pointer-events-none" />

      {/* ⭐ GOLD ABSTRACT PATTERN (Bottom Left) */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-br 
                      from-[#D4AF37] to-[#F5E7C3] opacity-10 blur-3xl rounded-full pointer-events-none" />

      {/* ⭐ AI CIRCUIT MESH */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
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

      {/* ⭐ FLOATING MINIMAL ICONS */}
      {["💡", "⚡", "✨", "📘", "🧠", "🧩", "⚙️", "📈"].map((icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -20, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, delay: i * 0.4 }}
          className="absolute text-3xl select-none pointer-events-none"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 4) * 15}%`,
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* ⭐ ANIMATED WAVE BACKGROUND */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute bottom-0 left-0 w-full h-[200px] opacity-30 pointer-events-none"
      >
        <svg viewBox="0 0 1440 320">
          <path
            fill="#D4AF37"
            d="M0,224L60,197.3C120,171,240,117,360,128C480,139,600,213,720,218.7C840,224,960,160,1080,160C1200,160,1320,224,1380,256L1440,288L1440,0L0,0Z"
          />
        </svg>
      </motion.div>

      {/* ⭐ NAVBAR */}
      <nav className="w-full bg-white/60 backdrop-blur-lg border-b border-[#EADFC8] px-10 py-4 flex justify-between items-center z-50">
        <Logo />
        <div className="flex gap-6 items-center text-[#8B7760] font-medium">
          <a className="hover:text-[#5C4B3B] cursor-pointer">Home</a>
          <a className="hover:text-[#5C4B3B] cursor-pointer">About</a>
          <button className="px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B9962E] text-white rounded-lg shadow-md hover:opacity-90">
            Login
          </button>
        </div>
      </nav>

      {/* ⭐ HERO SECTION */}
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
          Enter your dream role and let AI forge a 6-month roadmap that accelerates
          your skills & career.
        </motion.p>

        {/* ⭐ Input Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/60 backdrop-blur-xl border border-[#EADFC8] shadow-xl 
                     rounded-2xl p-10 flex flex-col gap-8 max-w-xl w-full mt-16"
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
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B9962E] 
                       text-white font-semibold py-4 rounded-lg hover:opacity-90 transition shadow-lg text-lg"
          >
            Generate Roadmap
          </button>
        </motion.div>
      </div>

      {/* ⭐ FOOTER */}
      <footer className="w-full bg-white/50 backdrop-blur-lg border-t border-[#EADFC8] mt-20 py-4 text-center text-[#8B7760] text-sm z-10">
        © {new Date().getFullYear()} PathForge — AI Roadmap Generator
      </footer>

      {/* ********************************************************************** */}
      {/* ⭐ SUPER PREMIUM AI LOADING ANIMATION */}
      {/* ********************************************************************** */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#000]/50 backdrop-blur-xl flex flex-col items-center justify-center z-[999]"
        >
          {/* Floating gold particles */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0, 1, 0],
                y: [-10, -120, -10],
                scale: [0.3, 1.2, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="absolute w-2 h-2 rounded-full bg-[#D4AF37]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Neural Network Loader */}
          <motion.svg
            width="260"
            height="260"
            viewBox="0 0 200 200"
            className="mb-10 opacity-90"
          >
            {/* Pulsing Nodes */}
            {[30, 70, 110, 150].map((x, i) =>
              [40, 90, 140].map((y, j) => (
                <motion.circle
                  key={`${i}-${j}`}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#D4AF37"
                  animate={{ scale: [0.8, 1.4, 0.8] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: (i + j) * 0.2,
                  }}
                />
              ))
            )}

            {/* Connecting Lines */}
            {[30, 70, 110].map((x1, i) =>
              [40, 90, 140].map((y1, j) =>
                [70, 110, 150].map((x2, k) =>
                  [90, 140].map((y2, l) => (
                    <motion.line
                      key={`${i}-${j}-${k}-${l}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#E8C97A"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: (i + j + k + l) * 0.15,
                      }}
                    />
                    )
                  )
                )
              )
            )}
          </motion.svg>

          {/* Loading Text */}
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="text-2xl text-white font-semibold drop-shadow-lg tracking-wide"
          >
            Creating your roadmap…
          </motion.p>

          {/* Gold shimmer underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            className="h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#F5D98E] rounded-full mt-4 shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
