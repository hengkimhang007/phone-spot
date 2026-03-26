import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserLarge, FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-3 shadow-md">
            <FaUserLarge size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Phone<span className="text-yellow-400">Shop</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            {isRegister ? "Create your account" : "Welcome back"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {isRegister && (
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-3 focus-within:border-yellow-400 transition">
                <FaUserLarge size={14} className="text-gray-400" />
                <input
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="flex-1 text-sm outline-none bg-transparent"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-3 focus-within:border-yellow-400 transition">
              <span className="text-gray-400 text-sm">@</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="flex-1 text-sm outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-3 focus-within:border-yellow-400 transition">
              <FaLock size={14} className="text-gray-400" />
              <input
                name="password"
                type={showPass ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="flex-1 text-sm outline-none bg-transparent"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="text-gray-400 hover:text-yellow-400 transition">
                {showPass ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
              </button>
            </div>
          </div>

          {!isRegister && (
            <div className="text-right">
              <span className="text-xs text-yellow-500 hover:underline cursor-pointer">Forgot password?</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold transition shadow-md mt-2"
          >
            {isRegister ? "Register" : "Login"}
          </button>

        </form>

        {/* Toggle */}
        <p className="text-center text-sm text-gray-400 mt-6">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-yellow-500 font-semibold hover:underline"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>

      </motion.div>
    </div>
  );
}

