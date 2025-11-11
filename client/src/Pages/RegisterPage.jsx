import React from "react";
import illustration from "@/assets/register-illustration.png"; // ⭐ Your image

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#FAF7F0] flex flex-col justify-center items-center p-6">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold text-[#5C4B3B] mb-10">
        Create Your Account
      </h1>

      {/* IMAGE + FORM WRAPPER */}
      <div className="bg-white/60 backdrop-blur-md border border-[#EADFC8] shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 max-w-4xl">

        {/* ⭐ LEFT SIDE IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={illustration}
            alt="Register Illustration"
            className="w-[90%] drop-shadow-lg rounded-xl"
          />
        </div>

        {/* ⭐ RIGHT SIDE SIMPLE FORM */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/70 focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B]"
          />
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

          {/* BUTTON */}
          <button className="mt-4 bg-gradient-to-r from-[#D4AF37] to-[#B9962E] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition">
            Register
          </button>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
