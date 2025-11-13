import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import illustration from "@/assets/register-illustration.png";

const RegisterPage = () => {
  const navigate = useNavigate();

  // ⭐ STATES
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ⭐ REGISTER HANDLER
  const handleRegister = async () => {
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/path/auth/register",
        {
          username,
          email,
          password,
        }
      );

      alert("Registration Successful!");
      navigate("/login");

    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Registration failed. Try again."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF7F0] flex flex-col justify-center items-center p-6">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold text-[#5C4B3B] mb-10">
        Create Your Account
      </h1>

      {/* IMAGE + FORM WRAPPER */}
      <div className="bg-white/60 backdrop-blur-md border border-[#EADFC8] shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 max-w-4xl">

        {/* ⭐ LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={illustration}
            alt="Register Illustration"
            className="w-[90%] drop-shadow-lg rounded-xl"
          />
        </div>

        {/* ⭐ RIGHT FORM */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          {/* ERROR */}
          {error && (
            <p className="text-red-500 bg-red-100 py-2 px-3 rounded-lg text-sm">
              {error}
            </p>
          )}

          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/70 focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/70 focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/70 focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* BUTTON */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="mt-4 bg-gradient-to-r from-[#D4AF37] to-[#B9962E] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

          <p className="text-[#A68B6F] text-sm text-center md:text-left">
            Already have an account?{" "}
            <span
              className="text-[#D4AF37] font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
