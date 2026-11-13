import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Sparkles,
  Ticket,
  Calendar,
  ShoppingBag,
  Award,
  ArrowRight,
  ShieldAlert,
  Clock,
  QrCode,
  Lock,
} from 'lucide-react';
import {
  PageHeader,
  StatCard,
  Card,
  Button,
  Badge,
  EventCard,
  EmptyState,
} from '@/shared/components';
import { useEvents } from '@/shared/hooks/useApi';

export const Dashboard: React.FC = () => {
  const { data: events } = useEvents();
  const upcomingEvents = events?.slice(0, 3) || [];

  // Determine time-of-day greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="space-y-8">
      {/* ── Welcome Header ────────────────────────────────────────── */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-800 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <Badge variant="purple" size="sm" className="mb-3 bg-white/20 text-white border-white/20">
            STUDENT ATTENDEE PORTAL
          </Badge>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {greeting}, Aarav Sharma!
          </h1>
          <p className="mt-2 text-indigo-100 text-sm leading-relaxed">
            Welcome to your college fest hub. Discover flagship hackathons, claim academic merit discounts, and view your digital entrance passes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/user/events">
              <Button
                size="sm"
                className="bg-white text-indigo-700 hover:bg-slate-100 font-semibold"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Browse Fest Events
              </Button>
            </Link>
            <Link to="/user/verification">
              <Button
                size="sm"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Verify College Identity
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Academic Verification & CGPA Cards ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Verification Status Card */}
        <Card className="p-6 border-slate-200">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Academic Verification</h3>
                <p className="text-xs text-slate-500">Vellore Institute of Technology</p>
              </div>
            </div>
            <Badge variant="warning">NOT VERIFIED</Badge>
          </div>

          <p className="mt-4 text-xs text-slate-600 leading-relaxed">
            Verify your institutional email and student roll number to unlock campus-exclusive ticket pricing and eligibility for premium events.
          </p>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Takes &lt; 2 minutes</span>
            <Link to="/user/verification">
              <Button size="sm" variant="primary">
                Complete Verification
              </Button>
            </Link>
          </div>
        </Card>

        {/* CGPA Discount Status */}
        <Card className="p-6 border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50/30">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Merit Discount Status</h3>
                <p className="text-xs text-slate-500">CGPA Scholarship Tier</p>
              </div>
            </div>
            <Badge variant="default" className="flex items-center gap-1">
              <Lock className="h-3 w-3" /> LOCKED
            </Badge>
          </div>

          <p className="mt-4 text-xs text-slate-600 leading-relaxed">
            Students with CGPA 8.5+ unlock up to 30% off all fest tickets. Verify your academic record to calculate your personalized waiver.
          </p>

          <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-indigo-600">Up to 30% Waiver</span>
            <Link to="/user/verification">
              <Button size="sm" variant="outline">
                Unlock Discounts
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* ── Ticket Summary Stats ───────────────────────────────────── */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Pass &amp; Ticket Summary</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total Passes"
            value="0"
            icon={Ticket}
            colorVariant="indigo"
            description="All acquired tickets"
          />
          <StatCard
            label="Active Passes"
            value="0"
            icon={Sparkles}
            colorVariant="emerald"
            description="Ready for gate scan"
          />
          <StatCard
            label="Used Passes"
            value="0"
            icon={Clock}
            colorVariant="purple"
            description="Checked-in at venue"
          />
          <StatCard
            label="Expired Passes"
            value="0"
            icon={ShoppingBag}
            colorVariant="rose"
            description="Past event dates"
          />
        </div>
      </div>

      {/* ── Upcoming Events ────────────────────────────────────────── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Recommended For You</h2>
            <p className="text-xs text-slate-500">Upcoming festivals and competitions on campus</p>
          </div>
          <Link to="/user/events">
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </div>

      {/* ── Recent Bookings ────────────────────────────────────────── */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Bookings</h2>
        <EmptyState
          icon={ShoppingBag}
          title="No bookings yet"
          description="You haven't reserved any event tickets yet. Explore the campus fest lineup to grab your first digital pass!"
          action={{
            label: 'Explore Events',
            href: '/user/events',
          }}
        />
      </div>

      {/* ── Quick Actions Footer ───────────────────────────────────── */}
      <Card className="p-6 bg-slate-900 text-white border-slate-800">
        <h3 className="font-bold text-base mb-2">Student Fast-Track Shortcuts</h3>
        <p className="text-xs text-slate-400 mb-4">Quickly jump to essential festival workflows</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link to="/user/events">
            <Button variant="outline" size="sm" className="w-full text-slate-200 border-slate-700 bg-slate-800 hover:bg-slate-700">
              Browse Events
            </Button>
          </Link>
          <Link to="/user/verification">
            <Button variant="outline" size="sm" className="w-full text-slate-200 border-slate-700 bg-slate-800 hover:bg-slate-700">
              Academic ID
            </Button>
          </Link>
          <Link to="/user/tickets">
            <Button variant="outline" size="sm" className="w-full text-slate-200 border-slate-700 bg-slate-800 hover:bg-slate-700">
              My Passes
            </Button>
          </Link>
          <Link to="/user/profile">
            <Button variant="outline" size="sm" className="w-full text-slate-200 border-slate-700 bg-slate-800 hover:bg-slate-700">
              Student Profile
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

