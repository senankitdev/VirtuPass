import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  CalendarCheck,
  Clock,
  Ticket,
  IndianRupee,
  Plus,
  QrCode,
  ArrowRight,
  TrendingUp,
  Users,
  Building2,
} from 'lucide-react';
import { PageHeader, StatCard, Card, Button, Badge, EventCard } from '@/shared/components';
import { useEvents } from '@/shared/hooks/useApi';

export const Dashboard: React.FC = () => {
  const { data: events } = useEvents();
  const myEvents = (events || []).filter((e) => e.organizerId === 'org-001').slice(0, 2);

  return (
    <div className="space-y-8">
      {/* ── Welcome Banner ────────────────────────────────────────── */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <Badge variant="purple" size="sm" className="mb-3 bg-white/20 text-white border-white/20">
            EVENT ORGANIZER HUB
          </Badge>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Welcome back, VIT Technical Board!
          </h1>
          <p className="mt-2 text-purple-100 text-sm leading-relaxed">
            Manage your club registrations, view real-time ticket sales, monitor live turnstile attendance, and launch new festival competitions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/organizer/events/new">
              <Button
                size="sm"
                className="bg-white text-purple-800 hover:bg-slate-100 font-semibold"
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Create New Event
              </Button>
            </Link>
            <Link to="/organizer/scanner">
              <Button
                size="sm"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10"
                leftIcon={<QrCode className="h-4 w-4" />}
              >
                Launch Gate Scanner
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Stats Grid ────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Events"
          value="12"
          icon={Calendar}
          colorVariant="purple"
          trend={{ value: '+2 this month', direction: 'up' }}
        />
        <StatCard
          label="Published"
          value="8"
          icon={CalendarCheck}
          colorVariant="emerald"
          description="Active for registration"
        />
        <StatCard
          label="Tickets Sold"
          value="847"
          icon={Ticket}
          colorVariant="indigo"
          trend={{ value: '+14% vs last fest', direction: 'up' }}
        />
        <StatCard
          label="Total Revenue"
          value="₹1,23,400"
          icon={IndianRupee}
          colorVariant="amber"
          description="Gross booking receipts"
        />
      </div>

      {/* ── My Upcoming Events ────────────────────────────────────── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">My Active Events</h2>
            <p className="text-xs text-slate-500">Live listings managed by your organization</p>
          </div>
          <Link to="/organizer/events">
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Manage All (12)
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </div>

      {/* ── Recent Bookings Feed ──────────────────────────────────── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Recent Attendee Bookings</h2>
            <p className="text-xs text-slate-500">Latest ticket purchases for your club events</p>
          </div>
          <Link to="/organizer/bookings">
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
              View All Bookings
            </Button>
          </Link>
        </div>

        <Card className="divide-y divide-slate-100 border-slate-200">
          {[
            { id: 'bkg-101', name: 'Aarav Sharma', event: 'Technovate 2025', date: '2025-02-15 14:20', amount: '₹140', discount: '30% Merit' },
            { id: 'bkg-102', name: 'Priya Sundar', event: 'RoboWars Arena', date: '2025-02-15 13:45', amount: '₹350', discount: 'Standard' },
            { id: 'bkg-103', name: 'Kunal Kapoor', event: 'Technovate 2025', date: '2025-02-15 11:10', amount: '₹200', discount: 'Standard' },
            { id: 'bkg-104', name: 'Rhea Sen', event: 'RoboWars Arena', date: '2025-02-14 18:30', amount: '₹297', discount: '15% Merit' },
          ].map((item) => (
            <div key={item.id} className="p-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-50 text-purple-700 font-bold flex items-center justify-center">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{item.name}</div>
                  <div className="text-slate-500">{item.event} • <span className="font-mono text-purple-600 font-semibold">{item.discount}</span></div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-slate-900">{item.amount}</div>
                <div className="text-slate-400 text-[11px]">{item.date}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

