import React from "react";
import illustration from "@/assets/login-illustration.png"; // ⭐ Your image

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#FAF7F0] flex flex-col justify-center items-center p-6">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold text-[#5C4B3B] mb-10">
        Welcome Back
      </h1>

      {/* IMAGE + FORM WRAPPER */}
      <div className="bg-white/60 backdrop-blur-md border border-[#EADFC8] shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 max-w-4xl">

        {/* ⭐ LEFT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={illustration}
            alt="Login Illustration"
            className="w-[85%] drop-shadow-lg rounded-xl"
          />
        </div>

        {/* ⭐ RIGHT SIDE FORM */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/70 focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B]"
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/70 focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B]"
          />

          <button className="mt-4 bg-gradient-to-r from-[#D4AF37] to-[#B9962E] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition">
            Login
          </button>

          <p className="text-[#A68B6F] text-sm mt-2 text-center md:text-left">
            Don't have an account? <span className="text-[#D4AF37] font-semibold cursor-pointer">Register</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
