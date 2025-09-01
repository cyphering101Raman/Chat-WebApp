import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'

import toast from 'react-hot-toast'
import { useAuthStore } from "../store/authStore.js";

export default function Signup() {

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { signup, isAuthLoading } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signupHandler = async (userData) => {
    try {
      console.log(userData);

      const user = await signup(userData)
      toast.success(`Signed up successfully. Welcome, ${user?.fullName || 'user'}!`,
        {
          duration: 3000,
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-sky-50 to-white px-4 pt-20 pb-10">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Sign up for <span className="text-sky-600">Echoe</span>
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit(signupHandler)}>
          {/* Full Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Your name"
                disabled={isAuthLoading}
                className="w-full rounded-xl border border-slate-300 pl-10 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1"
                {...register('fullName', {
                  required: "Full name is required"
                })}
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>


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
              <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                    message: "At least 6 chars"
                  }
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                disabled={isAuthLoading}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 text-slate-500 hover:text-slate-700 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Re-enter Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 h-5 w-5 text-slate-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                disabled={isAuthLoading}
                className="w-full rounded-xl border border-slate-300 pl-10 pr-10 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1"
                {...register("confirmPassword", {
                  validate: value => value === watch("password") || "Passwords do not match"
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                disabled={isAuthLoading}
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                className="absolute right-3 text-slate-500 hover:text-slate-700 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
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
                Creating account…
              </span>
            ) : (
              "Sign up"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account? {" "}
          <Link to="/login" className="text-sky-600 hover:underline font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
