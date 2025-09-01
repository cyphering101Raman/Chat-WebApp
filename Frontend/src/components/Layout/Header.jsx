import React, { useState } from "react";
import { Menu, X, Sun, Moon, Settings, LogIn, LogOut, User } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../index.js";

import toast from "react-hot-toast";

import { useAuthStore } from "../../store/authStore.js";

export default function Header() {
  const { authUser, userStatus, logout } = useAuthStore();
  console.log("Atore Zustand: ", authUser);
  console.log("Status Zustand: ", userStatus);

  const isAuth = userStatus === "authenticated" && !!authUser;

  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const centerLinks = [
    { name: "Features", hash: "#features" },
    { name: "About", hash: "#about" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop (≥ md) */}
        <div className="hidden md:grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Center: Features + About (always route to Home + hash) */}
          <div className="flex items-center justify-center gap-4">
            {centerLinks.map((link) => (
              <Link
                key={link.hash}
                to={{ pathname: "/", hash: link.hash }}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Utilities */}
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsDark((s) => !s)}
              aria-label="Toggle theme"
              className="rounded-md p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {isAuth ? (
              <>
                <NavLink to="/profile" className="px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </NavLink>
                <NavLink to="/settings" aria-label="Settings" className="rounded-md p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                  <Settings className="h-5 w-5" />
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-red-600 text-white hover:bg-red-700"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm border border-blue-600 text-blue-600 hover:bg-blue-50">
                  <LogIn className="h-4 w-4" />
                  Login
                </NavLink>
                <NavLink to="/signup" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* Mobile (< md): logo left, menu button right */}
        <div className="md:hidden flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <div className="flex items-center justify-center gap-4">
                {centerLinks.map((link) => (
                  <Link
                    key={link.hash}
                    to={{ pathname: "/", hash: link.hash }}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-base text-gray-600 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsDark((s) => !s)}
                  aria-label="Toggle theme"
                  className="rounded-md p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                {isAuth ? (
                  <>
                    <NavLink to="/profile" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-md text-base text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Profile
                    </NavLink>
                    <NavLink to="/settings" onClick={() => setIsMenuOpen(false)} aria-label="Settings" className="rounded-md p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                      <Settings className="h-5 w-5" />
                    </NavLink>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-base bg-red-600 text-white hover:bg-red-700"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </button>

                  </>
                ) : (
                  <>
                    <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-base border border-blue-600 text-blue-600 hover:bg-blue-50">
                      <LogIn className="h-4 w-4" />
                      Login
                    </NavLink>
                    <NavLink to="/signup" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-base bg-blue-600 text-white hover:bg-blue-700">
                      Sign Up
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
