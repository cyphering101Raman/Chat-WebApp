import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useAuthStore } from "../store/authStore.js";
import { Link } from "react-router-dom";

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const {login, isAuthLoading, authUser} = useAuthStore();
  console.log("Store Auth User:", authUser);
  

  const loginHandler = async (userData) => {
    try {
      const user = await login(userData);
      toast.success(`Logged in successfully. Welcome back, ${user?.fullName || 'user'}!`, {
          duration: 3000,
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-sky-50 to-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Login to <span className="text-sky-600">Echoe</span>
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit(loginHandler)}>
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 h-5 w-5 text-slate-400" />
              <input
                type="email"
                placeholder="you@example.com"
                disabled={isAuthLoading}
                className="w-full rounded-xl border border-slate-300 pl-10 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Invalid email"
                  }
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}

          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 h-5 w-5 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                disabled={isAuthLoading}
                className="w-full rounded-xl border border-slate-300 pl-10 pr-10 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "At least 6 characters"
                  }
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                disabled={isAuthLoading}
                className="absolute right-3 text-slate-500 hover:text-slate-700"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}

          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isAuthLoading}
            aria-busy={isAuthLoading}
            className="w-full rounded-xl bg-sky-600 py-2 font-semibold text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isAuthLoading ? (
              <span className="inline-flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Logging in…
              </span>
            ) : (
              "Log in"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-sky-600 hover:underline font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
