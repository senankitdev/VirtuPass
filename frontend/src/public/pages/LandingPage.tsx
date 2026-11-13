import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Ticket,
  GraduationCap,
  QrCode,
  Users,
  Building2,
  Calendar,
  Sparkles,
  Lock,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { Button, Card, Badge, EventCard, LoadingState } from '@/shared/components';
import { useEvents } from '@/shared/hooks/useApi';

export const LandingPage: React.FC = () => {
  const { data: events, isLoading } = useEvents();

  const previewEvents = events?.slice(0, 3) || [];

  return (
    <div className="space-y-24 pb-20">
      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 lg:pt-20">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-blue-500/20 blur-3xl rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Next-Gen College Fest Experience</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.1]">
            One Identity.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              One Verified Pass.
            </span>{' '}
            One Seamless Entry.
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover college events, verify your academic eligibility, unlock exclusive discounts, and enter events with secure digital tickets — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/events" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto text-base shadow-lg shadow-indigo-500/25 px-8"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Explore Events
              </Button>
            </Link>
            <Link to="/register" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base bg-white hover:bg-slate-50 border-slate-300 px-8"
              >
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Instant Gate QR Validation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>CGPA-Based Student Perks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>3 Dedicated Role Portals</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Portal Access Banner for Judges ─────────────────── */}
      <section id="portals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="mb-8">
            <Badge variant="purple" size="sm" className="mb-2">
              THREE DEDICATED PORTALS
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              One Unified System, Tailored For Every Role
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Explore the distinct portals designed for students, administrators, and event organizers. Each interface features dedicated navigation, permissions, and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Portal Card */}
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-6 flex flex-col justify-between hover:border-indigo-500 transition-all group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Student Portal
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Browse fests, verify academic credentials, view dynamic CGPA tier discounts, and store secure digital entry passes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-400">/user/*</span>
                <Link to="/user/dashboard">
                  <Button size="sm" variant="primary" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                    Enter Portal
                  </Button>
                </Link>
              </div>
            </div>

            {/* Organizer Portal Card */}
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-6 flex flex-col justify-between hover:border-purple-500 transition-all group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                  Organizer Portal
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Publish club events, configure seat inventories, track live booking revenues, and scan ticket QR codes at gates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-400">/organizer/*</span>
                <Link to="/organizer/dashboard">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                    Enter Portal
                  </Button>
                </Link>
              </div>
            </div>

            {/* Admin Portal Card */}
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-6 flex flex-col justify-between hover:border-blue-500 transition-all group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Admin Command
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Oversee campus-wide registrations, approve pending event submissions, inspect audit logs, and monitor security.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-400">/admin/*</span>
                <Link to="/admin/dashboard">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                    Enter Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. How VirtuPass Works ──────────────────────────────────── */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="info" size="sm" className="mb-2">
            STEP-BY-STEP WORKFLOW
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How VirtuPass Works
          </h2>
          <p className="mt-3 text-slate-600">
            A seamless bridge connecting college clubs, academic records, and fast-track event admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Create Your Profile',
              desc: 'Sign up with your college email and initiate your academic verification profile.',
              icon: Users,
            },
            {
              step: '02',
              title: 'Discover Events',
              desc: 'Browse flagship hackathons, battle of the bands, pro-shows, and tech workshops.',
              icon: Calendar,
            },
            {
              step: '03',
              title: 'Book with Discounts',
              desc: 'High CGPA holders unlock automatic scholarship discounts on ticket reservations.',
              icon: Ticket,
            },
            {
              step: '04',
              title: 'Instant QR Entry',
              desc: 'Display your fraud-proof dynamic ticket at venue gates for sub-second badge scan.',
              icon: QrCode,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-200">{item.step}</span>
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. Featured Events Section ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <Badge variant="purple" size="sm" className="mb-2">
              COLLEGE FEST HIGHLIGHTS
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Events
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Fetched live from the VirtuPass in-memory API data store.
            </p>
          </div>
          <Link to="/events">
            <Button
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              View All Events
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <LoadingState message="Loading events from backend..." />
        ) : previewEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">No events found in data store.</p>
          </div>
        )}
      </section>

      {/* ── 4. Academic Benefits & CGPA Section ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-12 shadow-xl border border-indigo-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-800/80 text-indigo-200 text-xs font-semibold mb-4 border border-indigo-700">
                <GraduationCap className="h-4 w-4 text-indigo-400" />
                <span>Academic Merit Recognition</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Academic Excellence Unlocks Exclusive Ticket Perks
              </h2>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                VirtuPass incentivizes academic dedication by providing verified tier discounts on college cultural and technical festivals. Connect your verified university ID to automatically claim discounts.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Dean's Honor Tier (CGPA 9.0+)</h4>
                    <p className="text-xs text-slate-400">Up to 30% instant scholarship discount on all premium festival tickets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Merit Scholars Tier (CGPA 8.0 - 8.9)</h4>
                    <p className="text-xs text-slate-400">15% discount and early access priority passes for headline performances.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Verified Student Pass</h4>
                    <p className="text-xs text-slate-400">Standard student discounted entry across all partner college events.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/user/verification">
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-500 text-white"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Check Your Eligibility
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Merit Showcase Card */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-500/30 flex items-center justify-center text-indigo-300 font-bold">
                    AS
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Aarav Sharma</h3>
                    <p className="text-xs text-indigo-300">Vellore Institute of Technology</p>
                  </div>
                </div>
                <Badge variant="success" size="sm">
                  VERIFIED
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-400">Cumulative GPA</span>
                  <div className="text-2xl font-black text-white mt-1">9.42</div>
                  <span className="text-[10px] text-emerald-400 font-semibold">Top 2% of Batch</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-400">Fest Privilege</span>
                  <div className="text-2xl font-black text-indigo-300 mt-1">30% OFF</div>
                  <span className="text-[10px] text-slate-300">Dean's List VIP</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-200 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>Verified via institutional single sign-on & academic registry sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Secure QR Entry & Anti-Fraud ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-xl max-w-md mx-auto relative z-10">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <Badge variant="info" size="sm">DIGITAL ENTRY PASS</Badge>
                  <h3 className="text-base font-bold text-slate-900 mt-1">Technovate 2025</h3>
                </div>
                <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Ticket className="h-4 w-4" />
                </div>
              </div>

              {/* QR representation */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200/60 mb-6">
                <div className="h-48 w-48 rounded-xl bg-white p-3 shadow-sm border border-slate-200 flex items-center justify-center">
                  <QrCode className="h-40 w-40 text-slate-900" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 mt-3 tracking-widest uppercase">
                  TKT-TEC-2025-9841
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Pass Holder</span>
                  <span className="font-semibold text-slate-800">Aarav Sharma</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Gate</span>
                  <span className="font-semibold text-slate-800">Anna Auditorium, Gate 3</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Validation</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Ready for Scan
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <Badge variant="success" size="sm">
              SEAMLESS GATE ADMISSION
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Anti-Scalping, Instant-Scan Digital Passes
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              No paper waste, no counterfeit tickets, and no 45-minute queues at registration desks. VirtuPass issues tamper-proof digital passes verified directly against the attendee's campus identity.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sub-Second Check-ins</h4>
                  <p className="text-xs text-slate-500">Organizers scan attendee QR codes with zero delay using the built-in Organizer Scanner.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Single-Entry Anti-Duplicate</h4>
                  <p className="text-xs text-slate-500">Once a pass is checked at the gate, it instantly marks as used in the in-memory store to block duplicate entries.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/organizer/scanner">
                <Button variant="outline" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Explore Gate Scanner Interface
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Why VirtuPass Section ─────────────────────────────────── */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="info" size="sm" className="mb-2">
            DESIGNED FOR CAMPUSES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Universities Choose VirtuPass
          </h2>
          <p className="mt-3 text-slate-600">
            A comprehensive ticketing architecture engineered for high-volume fest turnouts and rapid check-in flows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">High-Throughput Performance</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              In-memory state management enables microsecond lookup speeds, eliminating database locking during flash ticket releases.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Merit-Linked Privileges</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Integrate student CGPA criteria directly into ticket pricing to reward academic excellence during college festivities.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Triple-Portal Governance</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Clean separation of concerns: Students book, Organizers manage events and gates, and Admins supervise campus security.
            </p>
          </Card>
        </div>
      </section>

      {/* ── 7. Call To Action ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white p-10 sm:p-16 text-center shadow-xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready to Experience the Fest Revolution?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto">
            Get your verified ticket pass in seconds or register your club to host upcoming campus competitions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/events">
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-slate-100 px-8 font-bold shadow-lg"
              >
                Browse All Fest Events
              </Button>
            </Link>
            <Link to="/user/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/40 hover:bg-white/10 px-8"
              >
                Visit Student Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

