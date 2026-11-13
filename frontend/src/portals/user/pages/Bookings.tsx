import React from 'react';
import {
  ShoppingBag,
  Search,
  ArrowRight,
  Calendar,
  Ticket,
  IndianRupee,
  Activity,
  Settings2,
  ArrowUpDown,
} from 'lucide-react';

// ── Table headers ────────────────────────────────────────────────────
const tableHeaders = [
  { label: 'Event', icon: <ShoppingBag className="h-3.5 w-3.5" /> },
  { label: 'Date', icon: <Calendar className="h-3.5 w-3.5" /> },
  { label: 'Tickets', icon: <Ticket className="h-3.5 w-3.5" /> },
  { label: 'Amount', icon: <IndianRupee className="h-3.5 w-3.5" /> },
  { label: 'Status', icon: <Activity className="h-3.5 w-3.5" /> },
  { label: 'Actions', icon: <Settings2 className="h-3.5 w-3.5" /> },
];

// ── Component ────────────────────────────────────────────────────────
const Bookings: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">My Bookings</h1>
        <p className="mt-1 text-gray-500">Track all your event bookings and transaction history.</p>
      </div>

      {/* ── Filter / Sort Row ───────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            disabled
          />
        </div>

        {/* Sort placeholder */}
        <button
          disabled
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 opacity-60 cursor-not-allowed"
        >
          <ArrowUpDown className="h-4 w-4" />
          Sort by Date
        </button>
      </div>

      {/* ── Table ───────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Header row */}
        <div className="hidden border-b border-gray-100 bg-gray-50/70 md:block">
          <div className="grid grid-cols-6 px-6 py-3">
            {tableHeaders.map((h) => (
              <span
                key={h.label}
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                {h.icon}
                {h.label}
              </span>
            ))}
          </div>
        </div>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50">
              <ShoppingBag className="h-12 w-12 text-indigo-400" />
            </div>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-gray-800">No bookings yet</h2>
          <p className="mt-2 max-w-sm text-sm text-gray-500">
            Once you book an event, your booking details will appear here with full transaction history.
          </p>

          <a
            href="/user/events"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
          >
            Explore Events
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ── Booking Info Cards ──────────────────────────────────────── */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Booking Details Include</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Ticket className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Ticket Count</h3>
            <p className="mt-1 text-sm text-gray-500">
              See how many tickets you booked for each event at a glance.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <IndianRupee className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Payment Summary</h3>
            <p className="mt-1 text-sm text-gray-500">
              Complete amount breakdown including any CGPA discounts applied.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
              <Activity className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Live Status</h3>
            <p className="mt-1 text-sm text-gray-500">
              Real-time booking status — confirmed, pending, cancelled, or refunded.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookings;
