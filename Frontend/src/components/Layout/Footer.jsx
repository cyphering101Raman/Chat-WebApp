import React from "react";
import { Github, Twitter, Mail } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../index.js";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex flex-col items-start gap-2">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Internal navigation */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
            <Link to={{ pathname: "/", hash: "#features" }} className="hover:text-slate-900">
              Features
            </Link>
            <Link to={{ pathname: "/", hash: "#about" }} className="hover:text-slate-900">
              About
            </Link>
            <Link to={{ pathname: "/", hash: "#testimonials" }} className="hover:text-slate-900">
              Testimonials
            </Link>
            <NavLink to="#privacy" className="hover:text-slate-900">
              Privacy
            </NavLink>
            <NavLink to="#terms" className="hover:text-slate-900">
              Terms
            </NavLink>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              <Twitter className="h-5 w-5" />
            </Link>

            <Link
              to="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              <Github className="h-5 w-5" />
            </Link>

            <Link
              to="mailto:hello@example.com"
              aria-label="Email"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

        </div>

        {/* Rights reserved line */}
        <div className="mt-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Echoe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
