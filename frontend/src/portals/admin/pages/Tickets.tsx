import React, { useState } from 'react';
import { Search, Ticket, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { PageHeader, Badge, Button, Input, StatCard } from '@/shared/components';
import { formatCurrency } from '@/shared/utils/formatters';

interface DemoTicketRow {
  ticketId: string;
  userName: string;
  eventTitle: string;
  price: number;
  purchaseDate: string;
  status: 'active' | 'used' | 'cancelled';
}

const demoTickets: DemoTicketRow[] = [
  { ticketId: 'TKT-TEC-001', userName: 'Aarav Sharma', eventTitle: 'Technovate 2025 — Flagship Hackathon', price: 140, purchaseDate: '2025-02-10', status: 'active' },
  { ticketId: 'TKT-RAA-002', userName: 'Diya Patel', eventTitle: 'Raag — Classical Music Night', price: 150, purchaseDate: '2025-02-11', status: 'used' },
  { ticketId: 'TKT-ROB-003', userName: 'Rohan Verma', eventTitle: 'RoboWars — Ultimate Bot Battle', price: 350, purchaseDate: '2025-02-12', status: 'active' },
  { ticketId: 'TKT-MOO-004', userName: 'Sneha Reddy', eventTitle: 'Mood Indigo — Stand-Up Comedy Night', price: 350, purchaseDate: '2025-02-14', status: 'active' },
  { ticketId: 'TKT-TEC-005', userName: 'Kabir Mehta', eventTitle: 'Technovate 2025 — Flagship Hackathon', price: 200, purchaseDate: '2025-02-15', status: 'cancelled' },
];

export const Tickets: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = demoTickets.filter(
    (t) =>
      t.ticketId.toLowerCase().includes(search.toLowerCase()) ||
      t.userName.toLowerCase().includes(search.toLowerCase()) ||
      t.eventTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Ticket Management"
        description="Monitor system-wide pass allocations, check-in validations, and refunds."
        breadcrumbs={[{ label: 'Admin Command', href: '/admin/dashboard' }, { label: 'Tickets' }]}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Issued" value="3,892" icon={Ticket} colorVariant="indigo" description="All-time passes" />
        <StatCard label="Active Passes" value="3,120" icon={Clock} colorVariant="emerald" description="Awaiting gate check-in" />
        <StatCard label="Scanned" value="684" icon={CheckCircle2} colorVariant="blue" description="Completed attendance" />
        <StatCard label="Refunded / Cancelled" value="88" icon={XCircle} colorVariant="rose" description="Cancelled tickets" />
      </div>

      <div className="w-full sm:w-96">
        <Input
          placeholder="Search ticket ID or student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<Search className="h-4 w-4" />}
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
        />
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Ticket ID</th>
                <th className="px-6 py-4">Attendee</th>
                <th className="px-6 py-4">Event</th>
                <th className="px-6 py-4">Paid</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map((t) => (
                <tr key={t.ticketId} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-blue-400">{t.ticketId}</td>
                  <td className="px-6 py-4 font-semibold text-white">{t.userName}</td>
                  <td className="px-6 py-4 text-slate-300 truncate max-w-xs">{t.eventTitle}</td>
                  <td className="px-6 py-4 font-bold text-slate-100">{formatCurrency(t.price)}</td>
                  <td className="px-6 py-4 text-slate-400">{t.purchaseDate}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                        t.status === 'active'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : t.status === 'used'
                          ? 'bg-blue-950 text-blue-400 border border-blue-800'
                          : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

