import React, { useState } from 'react';
import {
  Ticket,
  QrCode,
  Calendar,
  MapPin,
  Search,
  ArrowRight,
  Filter,
} from 'lucide-react';

// ── Types ────────────────────────────────────────────────────────────
type TicketFilter = 'All' | 'Active' | 'Used' | 'Expired';

const filters: TicketFilter[] = ['All', 'Active', 'Used', 'Expired'];

const filterColors: Record<TicketFilter, { active: string; inactive: string }> = {
  All: { active: 'bg-indigo-600 text-white', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
  Active: { active: 'bg-emerald-600 text-white', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
  Used: { active: 'bg-amber-600 text-white', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
  Expired: { active: 'bg-red-600 text-white', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
};

// ── Component ────────────────────────────────────────────────────────
const Tickets: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<TicketFilter>('All');

  return (
    <div className="space-y-8">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">My Tickets</h1>
        <p className="mt-1 text-gray-500">View and manage all your event tickets in one place.</p>
      </div>

      {/* ── Tab Filters ─────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <Filter className="h-4 w-4 shrink-0 text-gray-400" />
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${
              activeFilter === f ? filterColors[f].active : filterColors[f].inactive
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Empty State ─────────────────────────────────────────────── */}
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-20 text-center shadow-sm">
        {/* Illustration-style icon */}
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50">
            <Ticket className="h-12 w-12 text-indigo-400" />
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 shadow-sm">
            <QrCode className="h-5 w-5 text-violet-500" />
          </div>
        </div>

        <h2 className="mt-6 text-xl font-semibold text-gray-800">No tickets yet</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Book an event to get your first digital ticket! Each ticket comes with a unique QR code for
          contactless entry.
        </p>

        <a
          href="/user/events"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
        >
          <Search className="h-4 w-4" />
          Browse Events
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* ── What to Expect (info cards) ─────────────────────────────── */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">What Your Ticket Includes</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <QrCode className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Unique QR Code</h3>
            <p className="mt-1 text-sm text-gray-500">
              Every ticket has a scannable QR code for instant, contactless check-in at the venue.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <Calendar className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Event Details</h3>
            <p className="mt-1 text-sm text-gray-500">
              Date, time, venue, and seat information — everything you need at a glance.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Venue Navigation</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get directions and venue details so you never miss your event.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
