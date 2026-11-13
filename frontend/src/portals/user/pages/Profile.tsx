import React from 'react';
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  IdCard,
  TrendingUp,
  Shield,
  Bell,
  Palette,
  Lock,
  Save,
  Camera,
  AlertCircle,
} from 'lucide-react';

// ── Demo profile data ────────────────────────────────────────────────
interface ProfileField {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const personalFields: ProfileField[] = [
  { label: 'Full Name', value: 'Aarav Sharma', icon: <User className="h-4 w-4" /> },
  { label: 'Email Address', value: 'aarav.sharma@university.ac.in', icon: <Mail className="h-4 w-4" /> },
  { label: 'Phone Number', value: '+91 98765 43210', icon: <Phone className="h-4 w-4" /> },
];

interface AcademicField {
  label: string;
  value: string;
  verified: boolean;
  icon: React.ReactNode;
}

const academicFields: AcademicField[] = [
  { label: 'University', value: 'Not verified', verified: false, icon: <GraduationCap className="h-4 w-4" /> },
  { label: 'Student ID', value: 'Not verified', verified: false, icon: <IdCard className="h-4 w-4" /> },
  { label: 'CGPA', value: 'Not verified', verified: false, icon: <TrendingUp className="h-4 w-4" /> },
];

interface SettingItem {
  label: string;
  description: string;
  icon: React.ReactNode;
}

const accountSettings: SettingItem[] = [
  { label: 'Notifications', description: 'Manage email and push notification preferences', icon: <Bell className="h-5 w-5" /> },
  { label: 'Appearance', description: 'Theme, language, and display settings', icon: <Palette className="h-5 w-5" /> },
  { label: 'Security', description: 'Password, two-factor authentication, and sessions', icon: <Lock className="h-5 w-5" /> },
  { label: 'Privacy', description: 'Data sharing, visibility, and account deletion', icon: <Shield className="h-5 w-5" /> },
];

// ── Component ────────────────────────────────────────────────────────
const Profile: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">My Profile</h1>
        <p className="mt-1 text-gray-500">Manage your personal information and account settings.</p>
      </div>

      {/* ── Profile Card ────────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-3xl font-bold text-white shadow-md">
              AS
            </div>
            <button className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white shadow-sm transition hover:bg-indigo-700">
              <Camera className="h-4 w-4" />
            </button>
          </div>

          {/* Name & role */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-900">Aarav Sharma</h2>
            <p className="text-sm text-gray-500">aarav.sharma@university.ac.in</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                <User className="h-3 w-3" /> Student
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                <AlertCircle className="h-3 w-3" /> Unverified
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-100" />

        {/* Personal fields */}
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Personal Information
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personalFields.map((field) => (
            <div key={field.label}>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-600">
                {field.icon} {field.label}
              </label>
              <input
                type="text"
                defaultValue={field.value}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Academic Info ────────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Academic Information
          </h3>
          <a
            href="/user/verification"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Verify Now →
          </a>
        </div>

        <div className="mb-4 flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
          <p>
            Your academic credentials have not been verified yet. Complete verification to unlock
            CGPA-based discounts and exclusive student perks.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {academicFields.map((field) => (
            <div key={field.label}>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-600">
                {field.icon} {field.label}
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5">
                <span className="text-sm text-gray-400 italic">{field.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Account Settings ────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Account Settings
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {accountSettings.map((setting) => (
            <button
              key={setting.label}
              disabled
              className="flex items-start gap-4 rounded-xl border border-gray-100 p-4 text-left transition hover:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                {setting.icon}
              </div>
              <div>
                <p className="font-medium text-gray-800">{setting.label}</p>
                <p className="mt-0.5 text-sm text-gray-500">{setting.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Save Button ─────────────────────────────────────────────── */}
      <div className="flex justify-end">
        <button
          disabled
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white opacity-50 cursor-not-allowed shadow-sm"
        >
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
