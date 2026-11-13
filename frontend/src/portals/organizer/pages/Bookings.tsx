import React, { useState } from 'react';
import { Search, ShoppingBag, Download, CheckCircle2 } from 'lucide-react';
import { PageHeader, Button, Input, Badge } from '@/shared/components';
import { formatCurrency } from '@/shared/utils/formatters';

interface OrgBookingRow {
  id: string;
  attendee: string;
  email: string;
  event: string;
  passes: number;
  total: number;
  date: string;
  status: 'confirmed' | 'pending';
}

const demoOrgBookings: OrgBookingRow[] = [
  { id: 'BKG-091', attendee: 'Aarav Sharma', email: 'aarav.sharma21@vit.ac.in', event: 'Technovate 2025', passes: 1, total: 140, date: '2025-02-15 14:20', status: 'confirmed' },
  { id: 'BKG-092', attendee: 'Priya Sundar', email: 'priya.sundar@vit.ac.in', event: 'RoboWars Arena', passes: 2, total: 700, date: '2025-02-15 13:45', status: 'confirmed' },
  { id: 'BKG-093', attendee: 'Kunal Kapoor', email: 'kunal.k@vit.ac.in', event: 'Technovate 2025', passes: 1, total: 200, date: '2025-02-15 11:10', status: 'confirmed' },
  { id: 'BKG-094', attendee: 'Rhea Sen', email: 'rhea.sen@vit.ac.in', event: 'RoboWars Arena', passes: 1, total: 297, date: '2025-02-14 18:30', status: 'confirmed' },
  { id: 'BKG-095', attendee: 'Varun Nair', email: 'varun.n@vit.ac.in', event: 'Technovate 2025', passes: 1, total: 200, date: '2025-02-14 16:15', status: 'confirmed' },
];

export const Bookings: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = demoOrgBookings.filter(
    (b) =>
      b.attendee.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase()) ||
      b.event.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Event Bookings &amp; Sales"
        description="Real-time ledger of student registrations and payments for your club's events."
        breadcrumbs={[{ label: 'Organizer Hub', href: '/organizer/dashboard' }, { label: 'Bookings' }]}
        actions={
          <Button variant="outline" size="sm" leftIcon={<Download className="h-4 w-4" />}>
            Export CSV
          </Button>
        }
      />

      <div className="w-full sm:w-80">
        <Input
          placeholder="Search by attendee, booking ID, event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<Search className="h-4 w-4" />}
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Booking ID</th>
                <th className="px-6 py-4">Attendee Name</th>
                <th className="px-6 py-4">Event</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Amount Paid</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-purple-700">{b.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{b.attendee}</div>
                    <div className="text-slate-400 text-[11px]">{b.email}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800">{b.event}</td>
                  <td className="px-6 py-4 font-mono font-bold">{b.passes}</td>
                  <td className="px-6 py-4 font-bold text-slate-900">{formatCurrency(b.total)}</td>
                  <td className="px-6 py-4 text-slate-500">{b.date}</td>
                  <td className="px-6 py-4">
                    <Badge variant="success" size="sm">
                      {b.status.toUpperCase()}
                    </Badge>
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

