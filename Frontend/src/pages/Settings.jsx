import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Smartphone,
  Globe,
  HardDrive,
  Trash2,
  Palette,
  Sun,
  Moon,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

function SectionCard({ title, icon, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        {icon}
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ToggleRow({ label, desc, checked, onChange }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl p-3 hover:bg-slate-50">
      <div>
        <p className="text-sm font-medium text-slate-900">{label}</p>
        {desc && <p className="text-xs text-slate-500">{desc}</p>}
      </div>
      <label className="relative inline-flex cursor-pointer items-center select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
          aria-label={label}
        />
        <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600" />
        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
      </label>
    </div>
  );
}

export default function Settings() {
  const [theme, setTheme] = useState("system");
  const [showOnline, setShowOnline] = useState(true);
  const [dmRequests, setDmRequests] = useState(true);
  const [twoFA, setTwoFA] = useState(true);
  const [pushNoti, setPushNoti] = useState(true);
  const [emailNoti, setEmailNoti] = useState(false);
  const [soundNoti, setSoundNoti] = useState(true);
  const [saveMedia, setSaveMedia] = useState(true);
  const [meteredMode, setMeteredMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white px-4 pt-24 pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-sky-600" />
            <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
          </div>
          <Link
            to="/profile"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Back to profile
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <SectionCard
              title="Appearance"
              icon={<Palette className="h-5 w-5 text-sky-600" />}
            >
              <form
                className="grid gap-3 sm:grid-cols-3"
                onSubmit={(e) => e.preventDefault()}
              >
                {[
                  { id: "system", label: "System" },
                  { id: "light", label: "Light" },
                  { id: "dark", label: "Dark" },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    htmlFor={`theme-${opt.id}`}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 ${
                      theme === opt.id
                        ? "border-sky-500 ring-2 ring-sky-200"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {opt.id === "light" && <Sun className="h-4 w-4 text-sky-600" />}
                      {opt.id === "dark" && <Moon className="h-4 w-4 text-slate-700" />}
                      {opt.id === "system" && <Globe className="h-4 w-4 text-slate-700" />}
                      <span className="text-sm text-slate-800">{opt.label}</span>
                    </div>
                    <input
                      id={`theme-${opt.id}`}
                      type="radio"
                      name="theme"
                      value={opt.id}
                      checked={theme === opt.id}
                      onChange={() => setTheme(opt.id)}
                      className="h-4 w-4"
                    />
                  </label>
                ))}
              </form>
            </SectionCard>

            <SectionCard
              title="Privacy & Safety"
              icon={<Shield className="h-5 w-5 text-sky-600" />}
            >
              <div className="divide-y divide-slate-200">
                <ToggleRow
                  label="Show online status"
                  desc="Allow others to see when you're active."
                  checked={showOnline}
                  onChange={() => setShowOnline((v) => !v)}
                />
                <ToggleRow
                  label="Allow message requests"
                  desc="People who aren't in your contacts can send requests."
                  checked={dmRequests}
                  onChange={() => setDmRequests((v) => !v)}
                />
                <ToggleRow
                  label="Two‑factor authentication"
                  desc="Add an extra layer of security on login."
                  checked={twoFA}
                  onChange={() => setTwoFA((v) => !v)}
                />
              </div>
            </SectionCard>

            <SectionCard title="Notifications" icon={<Bell className="h-5 w-5 text-sky-600" />}>
              <div className="divide-y divide-slate-200">
                <ToggleRow
                  label="Push notifications"
                  desc="Get alerts for new messages and mentions."
                  checked={pushNoti}
                  onChange={() => setPushNoti((v) => !v)}
                />
                <ToggleRow
                  label="Email notifications"
                  desc="Receive email summaries for missed activity."
                  checked={emailNoti}
                  onChange={() => setEmailNoti((v) => !v)}
                />
                <ToggleRow
                  label="Sound"
                  desc="Play a sound for incoming messages."
                  checked={soundNoti}
                  onChange={() => setSoundNoti((v) => !v)}
                />
              </div>
            </SectionCard>
          </div>

          <div className="space-y-6">
            <SectionCard title="Devices" icon={<Smartphone className="h-5 w-5 text-sky-600" />}>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center justify-between rounded-lg border border-slate-200 p-2">
                  <div className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-slate-500" /> iPhone 15 • Delhi • 2h ago</div>
                  <button type="button" className="rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100">Sign out</button>
                </li>
                <li className="flex items-center justify-between rounded-lg border border-slate-200 p-2">
                  <div className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-slate-500" /> Pixel 8 • Mumbai • 3d ago</div>
                  <button type="button" className="rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100">Sign out</button>
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="Language & Region" icon={<Globe className="h-5 w-5 text-sky-600" />}>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Language</span>
                  <select className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1">
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>हिन्दी (Hindi)</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-slate-700">Time zone</span>
                  <select className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1">
                    <option>Asia/Kolkata (IST)</option>
                    <option>UTC</option>
                  </select>
                </label>
              </form>
            </SectionCard>

            <SectionCard title="Data & Storage" icon={<HardDrive className="h-5 w-5 text-sky-600" />}>
              <div className="divide-y divide-slate-200">
                <ToggleRow
                  label="Auto‑save media"
                  desc="Photos and videos save to your device automatically."
                  checked={saveMedia}
                  onChange={() => setSaveMedia((v) => !v)}
                />
                <ToggleRow
                  label="Metered connection mode"
                  desc="Reduce data usage on slow or limited networks."
                  checked={meteredMode}
                  onChange={() => setMeteredMode((v) => !v)}
                />
                <div className="flex items-center justify-between p-3">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Export data</p>
                    <p className="text-xs text-slate-500">Get a copy of your messages and contacts via email.</p>
                  </div>
                  <button type="button" className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                    Request export
                  </button>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Contact & Support" icon={<Mail className="h-5 w-5 text-sky-600" />}>
              <p className="text-sm text-slate-700">Need help with your account or privacy? Reach us at <a className="text-sky-700 underline" href="mailto:help@echoe.app">help@echoe.app</a>.</p>
            </SectionCard>

            <SectionCard title="Danger zone" icon={<Trash2 className="h-5 w-5 text-red-600" />}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-slate-700">Delete your account and all associated data. This action cannot be undone.</p>
                <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-200 transition hover:bg-red-100">
                  <Trash2 className="h-4 w-4" />
                  Delete account
                </button>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
