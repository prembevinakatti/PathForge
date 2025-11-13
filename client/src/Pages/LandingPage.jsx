import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Layers, Target } from "lucide-react";
import illustration from "@/assets/landing-illustration.png"; // ⭐ Your uploaded image
import { useNavigate } from "react-router-dom";

// --------------------------------------------------------
// ⭐ PREMIUM PF LOGO (Gold + Clean)
// --------------------------------------------------------
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B9962E] flex items-center justify-center shadow-md">
      <span className="text-white font-extrabold text-base tracking-widest">
        PF
      </span>
    </div>

    <span className="text-2xl font-bold tracking-wider text-[#5C4B3B]">
      Path<span className="text-[#D4AF37]">Forge</span>
    </span>
  </div>
);

// --------------------------------------------------------
// ⭐ Floating Gold Sparks
// --------------------------------------------------------
const Spark = ({ delay, left }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: [0, 1, 0], y: [-10, -40, -10] }}
    transition={{ repeat: Infinity, duration: 3, delay }}
    className="absolute w-2 h-2 rounded-full bg-[#D4AF37]"
    style={{ left }}
  />
);

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#FAF7F0] text-[#5C4B3B] flex flex-col relative overflow-hidden">
      {/* ⭐ ULTRA SOFT SPARK EFFECTS */}
      <Spark delay={0.2} left="20%" />
      <Spark delay={0.6} left="50%" />
      <Spark delay={1.0} left="80%" />
      <Spark delay={1.4} left="35%" />

      {/* ⭐ GOLD GLOW */}
      <div className="absolute top-10 left-0 w-[250px] h-[250px] bg-gradient-to-br from-[#D4AF37]/25 to-transparent blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-gradient-to-tl from-[#B9962E]/20 to-transparent blur-[80px]" />

      {/* -------------------------------------------------------- */}
      {/* ⭐ SMALL NAVBAR */}
      {/* -------------------------------------------------------- */}
      <nav className="relative z-10 w-full py-3 px-10 flex justify-between items-center bg-white/40 backdrop-blur-md border-b border-[#EADFC8]">
        <Logo />
      </nav>

      {/* -------------------------------------------------------- */}
      {/* ⭐ HERO SECTION + YOUR IMAGE */}
      {/* -------------------------------------------------------- */}
      <main className="relative z-10 px-10 mt-20 flex flex-col md:flex-row items-center justify-between gap-14 max-w-6xl mx-auto text-center md:text-left">
        {/* ⭐ LEFT SIDE TEXT */}
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-extrabold leading-tight drop-shadow-sm"
            style={{
              background: "linear-gradient(90deg, #5C4B3B, #D4AF37, #5C4B3B)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Forge Your Future
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-semibold mt-3 text-[#D4AF37] drop-shadow-md"
          >
            With AI-Crafted Career Roadmaps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-[#4E3F33] max-w-xl text-lg drop-shadow-sm"
          >
            PathForge creates personalized 6-month learning paths with
            milestones, skills, and curated resources to guide your career
            toward your dream role.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={() => navigate("/login")}
            className="mt-10 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B9962E] 
                       hover:opacity-90 text-xl rounded-xl text-white font-semibold 
                       flex items-center gap-2 shadow-lg"
          >
            Generate My Roadmap
            <ArrowRight />
          </motion.button>
        </div>

        {/* ⭐ RIGHT SIDE IMAGE (Your Provided Image) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={illustration}
            alt="PathForge Illustration"
            className="w-[90%] md:w-[85%] drop-shadow-xl rounded-xl"
          />
        </motion.div>
      </main>

      {/* -------------------------------------------------------- */}
      {/* ⭐ GOLD GLASS FEATURE CARDS */}
      {/* -------------------------------------------------------- */}
      <section className="relative z-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto pb-24 px-10">
        {[
          {
            icon: Compass,
            title: "AI-Generated Path",
            desc: "Instant personalized roadmaps based on your goals.",
          },
          {
            icon: Layers,
            title: "Weekly Milestones",
            desc: "Structured checkpoints designed for real progress.",
          },
          {
            icon: Target,
            title: "Skill-Focused Learning",
            desc: "Learn exactly what your dream job requires.",
          },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06 }}
            className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/30 shadow-2xl border border-transparent"
            style={{
              borderImage:
                "linear-gradient(135deg, #D4AF37 0%, #B9962E 100%) 1",
            }}
          >
            <Icon className="text-[#D4AF37] w-14 h-14 mb-4 drop-shadow-sm" />
            <h3 className="text-2xl font-bold text-[#5C4B3B] mb-2 drop-shadow-sm">
              {title}
            </h3>
            <p className="text-[#4E3F33] drop-shadow-sm">{desc}</p>
          </motion.div>
        ))}
      </section>

      {/* -------------------------------------------------------- */}
      {/* ⭐ SMALL FOOTER */}
      {/* -------------------------------------------------------- */}
      <footer className="relative z-10 bg-white/40 py-2 px-10 border-t border-[#EADFC8] text-xs backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo />
          <p className="text-[#A68B6F]">
            © {new Date().getFullYear()} PathForge
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
