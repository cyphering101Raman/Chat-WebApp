import React from 'react'

export default function Testimonial({ quote, author, role }) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <blockquote className="text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-slate-500">
        <span className="font-medium text-slate-700">{author}</span> · {role}
      </figcaption>
    </figure>
  );
}