import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const demoAdminEmail = "admin@email.com";
  const demoAdminPassword = "admin123";

  const demoUserEmail = "user@email.com";
  const demoUserPassword = "user123";

  const demoDriverEmail = "driver@email.com";
  const demoDriverPassword = "driver123";

  const handleLogin = (e) => {
    e.preventDefault();

    // demo login validation to make sure how system works
    if (email === demoAdminEmail && password === demoAdminPassword) {
      navigate("/admin");
    } else if (email === demoUserEmail && password === demoUserPassword) {
      navigate("/placedorder");
    } else if (email === demoDriverEmail && password === demoDriverPassword) {
      navigate("/Driver");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(/uploads/orderNow_bg.png)" }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl">
          <h1 className="text-center font-extrabold text-3xl text-orange-600 mb-6">
            Register
          </h1>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label className="text-white/80 text-sm">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border-2 border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/80 text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="rounded-xl border-2 border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
              <a className="text-orange-300 hover:text-orange-200" href="#">
                Forgot Password?
              </a>
              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-black transition"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-white/70">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-300 hover:text-orange-200">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

