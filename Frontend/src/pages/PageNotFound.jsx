import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white via-sky-50 to-white px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">
          <AlertTriangle className="h-10 w-10 text-sky-600" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">404</h1>
        <p className="mt-2 text-lg text-slate-600">Oops! Page not found.</p>
        <p className="mt-1 text-sm text-slate-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
