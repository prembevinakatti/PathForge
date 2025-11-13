import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import illustration from "@/assets/login-illustration.png";

const LoginPage = () => {
  const navigate = useNavigate();

  // ⭐ STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ⭐ LOGIN HANDLER
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:3000/api/path/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      alert("Login Successful!");
      navigate("/home"); // redirect to home/dashboard
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF7F0] flex flex-col justify-center items-center p-6">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold text-[#5C4B3B] mb-10">
        Welcome Back
      </h1>

      {/* CARD */}
      <div className="bg-white/60 backdrop-blur-md border border-[#EADFC8] shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 max-w-4xl">
        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={illustration}
            alt="Login Illustration"
            className="w-[85%] drop-shadow-lg rounded-xl"
          />
        </div>

        {/* FORM */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* ERROR */}
          {error && (
            <p className="text-red-500 bg-red-100 py-2 px-3 rounded-lg text-sm">
              {error}
            </p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/70 
                       focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg border border-[#D4AF37]/40 bg-white/70 
                       focus:outline-none focus:border-[#D4AF37] text-[#5C4B3B]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="mt-4 bg-gradient-to-r from-[#D4AF37] to-[#B9962E] 
                       text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-[#A68B6F] text-sm mt-2 text-center md:text-left">
            Don't have an account?{" "}
            <span
              className="text-[#D4AF37] font-semibold cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
