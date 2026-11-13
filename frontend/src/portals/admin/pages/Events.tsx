import React, { useState } from 'react';
import { Search, Calendar, Check, X, Eye, AlertCircle } from 'lucide-react';
import { PageHeader, Badge, Button, Input } from '@/shared/components';
import { useEvents } from '@/shared/hooks/useApi';
import { formatDate } from '@/shared/utils/formatters';

export const Events: React.FC = () => {
  const { data: events } = useEvents();
  const [search, setSearch] = useState('');

  const filtered = (events || []).filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.organizerName.toLowerCase().includes(search.toLowerCase()) ||
      e.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Event Oversight"
        description="Review, approve, or suspend event listings across all college clubs and faculties."
        breadcrumbs={[{ label: 'Admin Command', href: '/admin/dashboard' }, { label: 'Events' }]}
      />

      <div className="w-full sm:w-96">
        <Input
          placeholder="Filter events or clubs..."
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
                <th className="px-6 py-4">Event Title</th>
                <th className="px-6 py-4">Organizer</th>
                <th className="px-6 py-4">Event Date</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Seats Reserved</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Moderation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map((evt) => (
                <tr key={evt.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white">{evt.title}</div>
                    <div className="text-slate-400 text-[11px] truncate max-w-xs">{evt.venue}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{evt.organizerName}</td>
                  <td className="px-6 py-4 text-slate-400">{formatDate(evt.date)}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-800 text-blue-300 border border-slate-700">
                      {evt.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono">
                    <span className="text-white font-bold">{evt.totalSeats - evt.availableSeats}</span>
                    <span className="text-slate-500"> / {evt.totalSeats}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800">
                      {evt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Button size="sm" variant="ghost" className="h-7 text-xs px-2 text-emerald-400 hover:bg-emerald-950">
                        <Check className="h-3.5 w-3.5" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 text-xs px-2 text-rose-400 hover:bg-rose-950">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </div>
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

