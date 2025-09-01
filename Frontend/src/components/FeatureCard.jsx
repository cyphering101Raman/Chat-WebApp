import React from 'react'

export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 inline-flex rounded-xl bg-sky-50 p-2 text-sky-700 ring-1 ring-sky-100">
        {icon}
      </div>
      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}