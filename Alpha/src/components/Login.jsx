import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight, AlertCircle } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const emailVerification = (email) => {
    const regexTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexTest.test(email)) {
      setEmailError("Email must include @");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }
    if (emailError) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    // If validation passes, navigate to AppPage
    navigate("/App");
  };

  return (
    <section className="min-h-screen bg-gradient-to-tl from-indigo-700 via-indigo-900 to-indigo-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8 gap-3">
          <img src={logo} alt="Alpha" />
          <span className="text-white text-4xl font-bold">Alpha</span>
        </div>

        <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            {isLogin ? "Welcome back" : "Create account"}
          </h2>
          <p className="text-purple-200 text-center mb-8">
            {isLogin
              ? "Log in to continue to Alpha"
              : "Sign up to get started with Alpha"}
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm text-purple-100 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                    size={20}
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/10 text-white placeholder-purple-300 rounded-xl py-3 px-10 border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm text-purple-100 ml-1">Email</label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => emailVerification(email)}
                  className="w-full bg-white/10 text-white placeholder-purple-300 rounded-xl py-3 px-10 border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-purple-100 ml-1">Password</label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                  size={20}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/10 text-white placeholder-purple-300 rounded-xl py-3 px-10 border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-center mt-1">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-purple-500/20">
              <span className="text-lg">
                {isLogin ? "Sign In" : "Create Account"}
              </span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-purple-200">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white hover:text-purple-300 font-medium transition-colors">
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-purple-300/70 text-sm justify-center">
            <AlertCircle size={16} />
            <span>Your data is protected with end-to-end encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
