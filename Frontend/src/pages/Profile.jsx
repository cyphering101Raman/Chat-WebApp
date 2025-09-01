import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Edit2,
  Camera,
  Shield,
  Lock,
  KeyRound,
  Smartphone,
  Laptop,
  Globe,
  Bell,
  Eye,
  EyeOff,
  LogOut,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [showPwd, setShowPwd] = useState(false);
  const [showNewPwd, setShowNewPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [twoFA, setTwoFA] = useState(true);
  const [online, setOnline] = useState(true);
  const [dmInvite, setDmInvite] = useState(false);
  const [mentionsOnly, setMentionsOnly] = useState(true);
  const [pushNoti, setPushNoti] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white px-4 pt-24 pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="absolute -top-32 right-6 h-64 w-64 rounded-full bg-sky-100 blur-3xl" aria-hidden="true" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-sky-600 text-white shadow">
                <User className="h-9 w-9" />
                <button className="absolute -bottom-2 -right-2 grid h-9 w-9 place-items-center rounded-xl border border-white bg-white text-slate-700 shadow hover:bg-slate-50">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Priya Sharma</h1>
                <p className="text-sm text-slate-600">@priya • Product Manager</p>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
                  <span className={`h-2 w-2 rounded-full ${online ? "bg-emerald-500" : "bg-slate-300"}`} />
                  {online ? "Online" : "Offline"}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                <Edit2 className="h-4 w-4" />
                Edit profile
              </button>
              <Link
                to="/logout"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Account</h2>
              <form className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Display name</span>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <input className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-3 text-sm text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1" defaultValue="Priya Sharma" />
                  </div>
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Username</span>
                  <input className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1" defaultValue="priya" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <input type="email" className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-3 text-sm text-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1" defaultValue="priya@example.com" readOnly />
                  </div>
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Phone</span>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                    <input className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-3 text-sm text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1" placeholder="Optional" />
                  </div>
                </label>
                <label className="sm:col-span-2 block">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Bio</span>
                  <textarea rows={3} className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1" placeholder="Say a little about yourself" />
                </label>
                <div className="sm:col-span-2">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700" type="submit">Save changes</button>
                </div>
              </form>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Security</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <form className="space-y-4">
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-slate-700">Current password</span>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                      <input type={showPwd ? "text" : "password"} className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-10 text-sm text-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1" placeholder="••••••••" />
                      <button type="button" className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-700" onClick={() => setShowPwd((v) => !v)}>
                        {showPwd ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-slate-700">New password</span>
                    <div className="relative">
                      <KeyRound className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                      <input type={showNewPwd ? "text" : "password"} className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-10 text-sm text-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1" placeholder="••••••••" />
                      <button type="button" className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-700" onClick={() => setShowNewPwd((v) => !v)}>
                        {showNewPwd ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-slate-700">Confirm new password</span>
                    <div className="relative">
                      <KeyRound className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                      <input type={showConfirmPwd ? "text" : "password"} className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-10 text-sm text-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1" placeholder="••••••••" />
                      <button type="button" className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-700" onClick={() => setShowConfirmPwd((v) => !v)}>
                        {showConfirmPwd ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </label>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">Update password</button>
                </form>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-sky-600" />
                        <p className="text-sm font-semibold text-slate-900">Two‑factor authentication</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" checked={twoFA} onChange={() => setTwoFA((v) => !v)} className="peer sr-only" />
                        <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600" />
                        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
                      </label>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">Protect your account with an extra step on login.</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-sky-600" />
                      <p className="text-sm font-semibold text-slate-900">Active sessions</p>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center justify-between rounded-lg border border-slate-200 p-2">
                        <div className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-slate-500" /> iPhone 15 • Delhi • 2h ago</div>
                        <button className="rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100">Sign out</button>
                      </li>
                      <li className="flex items-center justify-between rounded-lg border border-slate-200 p-2">
                        <div className="flex items-center gap-2"><Laptop className="h-4 w-4 text-slate-500" /> MacBook Pro • Gurgaon • now</div>
                        <button className="rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100">Sign out</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Privacy & Safety</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span>Require invite to DM</span>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" checked={dmInvite} onChange={() => setDmInvite((v) => !v)} className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600" />
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
                  </label>
                </li>
                <li className="flex items-center justify-between">
                  <span>Show online status</span>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" checked={online} onChange={() => setOnline((v) => !v)} className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600" />
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
                  </label>
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Notifications</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span>Push notifications</span>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" checked={pushNoti} onChange={() => setPushNoti((v) => !v)} className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600" />
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
                  </label>
                </li>
                <li className="flex items-center justify-between">
                  <span>Email digest</span>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" checked={emailDigest} onChange={() => setEmailDigest((v) => !v)} className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600" />
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
                  </label>
                </li>
                <li className="flex items-center justify-between">
                  <span>Mentions only</span>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" checked={mentionsOnly} onChange={() => setMentionsOnly((v) => !v)} className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600" />
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
                  </label>
                </li>
              </ul>
            </section>

            {/* Delete Account Section */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-lg font-semibold text-slate-900">Danger zone</h2>
              <button className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-200 transition hover:bg-red-100">
                <Trash2 className="h-4 w-4" />
                Delete account
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
