import React from 'react';
import { UserCheck, Clock, Users, ArrowUpRight } from 'lucide-react';
import { PageHeader, StatCard, EmptyState } from '@/shared/components';

export const Attendance: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Gate Attendance Overview"
        description="Live monitoring of campus venue admissions, turnstile check-ins, and crowd density."
        breadcrumbs={[{ label: 'Admin Command', href: '/admin/dashboard' }, { label: 'Attendance' }]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Check-ins Today" value="482" icon={UserCheck} colorVariant="emerald" description="Across 4 active gates" />
        <StatCard label="Live Events" value="3" icon={Clock} colorVariant="blue" description="Currently in session" />
        <StatCard label="Average Gate Flow" value="14 / min" icon={Users} colorVariant="purple" description="Sub-second scan time" />
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
        <h3 className="font-bold text-base text-white mb-2">Active Gate Status</h3>
        <p className="text-xs text-slate-400 mb-6">Real-time gate telemetry for active events.</p>

        <div className="space-y-4">
          {[
            { gate: 'Anna Auditorium — North Gate', event: 'Technovate 2025 Flagship Hackathon', count: 284, cap: 500, percent: 56 },
            { gate: 'Open Air Theatre — Main Gate', event: 'Raag Classical Music Night', count: 142, cap: 1200, percent: 12 },
            { gate: 'Indoor Stadium — Gate 2', event: 'RoboWars Arena Qualifying', count: 56, cap: 800, percent: 7 },
          ].map((item) => (
            <div key={item.gate} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.gate}</h4>
                  <p className="text-xs text-slate-400">{item.event}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono font-bold text-blue-400">{item.count}</span>
                  <span className="text-xs text-slate-400"> / {item.cap} admitted</span>
                </div>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

