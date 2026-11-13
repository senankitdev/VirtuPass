import { useState } from 'react';
import {
  Users,
  Building2,
  Calendar,
  Ticket,
  Clock,
  IndianRupee,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  UserPlus,
  CalendarCheck,
  ShieldCheck,
  BarChart3,
  FileText,
  Settings,
} from 'lucide-react';

// ── Demo data ──────────────────────────────────────────────────────────

interface StatCardData {
  title: string;
  value: string;
  icon: React.ElementType;
  trend: 'up' | 'down';
  trendValue: string;
  color: string;
}

const stats: StatCardData[] = [
  { title: 'Total Users', value: '1,247', icon: Users, trend: 'up', trendValue: '+12.5%', color: 'text-blue-400' },
  { title: 'Total Organizers', value: '38', icon: Building2, trend: 'up', trendValue: '+4.2%', color: 'text-violet-400' },
  { title: 'Total Events', value: '156', icon: Calendar, trend: 'up', trendValue: '+8.1%', color: 'text-emerald-400' },
  { title: 'Tickets Sold', value: '3,892', icon: Ticket, trend: 'up', trendValue: '+18.3%', color: 'text-amber-400' },
  { title: 'Pending Approvals', value: '12', icon: Clock, trend: 'down', trendValue: '-3', color: 'text-orange-400' },
  { title: 'Revenue', value: '₹4,85,600', icon: IndianRupee, trend: 'up', trendValue: '+22.7%', color: 'text-green-400' },
];

interface PendingEvent {
  id: string;
  title: string;
  organizer: string;
  date: string;
  category: string;
  requestedOn: string;
}

const pendingEvents: PendingEvent[] = [
  { id: 'pe-1', title: 'Techno Blitz 2026', organizer: 'IEEE VIT Chapter', date: '2026-12-15', category: 'Technical', requestedOn: '2 hours ago' },
  { id: 'pe-2', title: 'Nrityanjali Dance Fest', organizer: 'Cultural Committee', date: '2026-12-20', category: 'Cultural', requestedOn: '5 hours ago' },
  { id: 'pe-3', title: 'Startup Pitch Arena', organizer: 'E-Cell VIT', date: '2027-01-10', category: 'Workshop', requestedOn: '1 day ago' },
];

interface RevenueMonth {
  month: string;
  amount: number;
}

const revenueData: RevenueMonth[] = [
  { month: 'Jul', amount: 42000 },
  { month: 'Aug', amount: 58000 },
  { month: 'Sep', amount: 71000 },
  { month: 'Oct', amount: 89000 },
  { month: 'Nov', amount: 105000 },
  { month: 'Dec', amount: 120600 },
];

const maxRevenue = Math.max(...revenueData.map((r) => r.amount));

interface ActivityItem {
  id: string;
  icon: React.ElementType;
  text: string;
  time: string;
  color: string;
}

const recentActivity: ActivityItem[] = [
  { id: 'a1', icon: UserPlus, text: 'Priya Sharma registered as a new user', time: '5 min ago', color: 'text-blue-400' },
  { id: 'a2', icon: CalendarCheck, text: 'Event "Mood Indigo Jr." approved by admin', time: '18 min ago', color: 'text-green-400' },
  { id: 'a3', icon: ShieldCheck, text: 'Organizer "TechSoc VIT" verified', time: '42 min ago', color: 'text-violet-400' },
  { id: 'a4', icon: Ticket, text: '15 tickets booked for "Code Sprint 3.0"', time: '1 hr ago', color: 'text-amber-400' },
  { id: 'a5', icon: Activity, text: 'System health check completed — all OK', time: '2 hr ago', color: 'text-emerald-400' },
  { id: 'a6', icon: XCircle, text: 'Event "Unnamed Fest" rejected — missing details', time: '3 hr ago', color: 'text-red-400' },
];

// ── Component ──────────────────────────────────────────────────────────

export default function Dashboard() {
  const [, setApprovalAction] = useState<{ id: string; action: 'approve' | 'reject' } | null>(null);

  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleApproval = (id: string, action: 'approve' | 'reject') => {
    setApprovalAction({ id, action });
    // Non-functional — demo only
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <p className="mt-1 text-slate-400">{today}</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition hover:border-slate-600"
            >
              <div className="flex items-center justify-between">
                <Icon className={`h-5 w-5 ${s.color}`} />
                <span
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    s.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {s.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {s.trendValue}
                </span>
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">{s.value}</p>
              <p className="mt-1 text-xs text-slate-400">{s.title}</p>
            </div>
          );
        })}
      </div>

      {/* Pending Approvals + Revenue */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Pending Event Approvals */}
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">Pending Event Approvals</h2>
          <div className="space-y-4">
            {pendingEvents.map((evt) => (
              <div
                key={evt.id}
                className="flex flex-col gap-3 rounded-lg border border-slate-700 bg-slate-900 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-white">{evt.title}</p>
                  <p className="text-sm text-slate-400">
                    {evt.organizer} · {evt.category} · {evt.date}
                  </p>
                  <p className="text-xs text-slate-500">Requested {evt.requestedOn}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApproval(evt.id, 'approve')}
                    className="inline-flex items-center gap-1 rounded-lg bg-green-600/20 px-3 py-1.5 text-sm font-medium text-green-400 transition hover:bg-green-600/30"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Approve
                  </button>
                  <button
                    onClick={() => handleApproval(evt.id, 'reject')}
                    className="inline-flex items-center gap-1 rounded-lg bg-red-600/20 px-3 py-1.5 text-sm font-medium text-red-400 transition hover:bg-red-600/30"
                  >
                    <XCircle className="h-4 w-4" /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Overview — bar chart via divs */}
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">Revenue Overview</h2>
          <div className="flex items-end gap-3" style={{ height: 180 }}>
            {revenueData.map((r) => {
              const pct = (r.amount / maxRevenue) * 100;
              return (
                <div key={r.month} className="flex flex-1 flex-col items-center gap-1">
                  <span className="text-xs text-slate-400">₹{(r.amount / 1000).toFixed(0)}k</span>
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-violet-500 transition-all"
                    style={{ height: `${pct}%`, minHeight: 4 }}
                  />
                  <span className="text-xs text-slate-500">{r.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity + Quick Actions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold text-white">Recent Platform Activity</h2>
          <ul className="divide-y divide-slate-700">
            {recentActivity.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                  <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${item.color}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-200">{item.text}</p>
                    <p className="text-xs text-slate-500">{item.time}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">Quick Actions</h2>
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-500 hover:text-white">
              <Users className="h-5 w-5 text-blue-400" /> Manage Users
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-500 hover:text-white">
              <Calendar className="h-5 w-5 text-emerald-400" /> Review Events
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-500 hover:text-white">
              <BarChart3 className="h-5 w-5 text-violet-400" /> View Reports
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-500 hover:text-white">
              <FileText className="h-5 w-5 text-amber-400" /> Audit Log
            </button>
            <button className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-500 hover:text-white">
              <Settings className="h-5 w-5 text-slate-400" /> Platform Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
