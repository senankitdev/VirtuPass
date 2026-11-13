import React, { useState } from 'react';
import { ShieldAlert, Search, Filter, Terminal } from 'lucide-react';
import { PageHeader, Input, Badge } from '@/shared/components';

interface AuditEntry {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  details: string;
  ip: string;
  level: 'info' | 'warn' | 'security';
}

const demoAuditLogs: AuditEntry[] = [
  { id: 'aud-101', timestamp: '2025-02-16 10:45:12', actor: 'admin@virtupass.edu', action: 'EVENT_APPROVED', details: 'Approved "Technovate 2025" submitted by VIT Technical Board', ip: '10.87.12.4', level: 'info' },
  { id: 'aud-102', timestamp: '2025-02-16 10:22:04', actor: 'system-gate-agent', action: 'QR_SCANNED', details: 'Ticket TKT-TEC-001 scanned at Anna Auditorium North Gate', ip: '10.87.126.11', level: 'info' },
  { id: 'aud-103', timestamp: '2025-02-16 09:14:38', actor: 'admin@virtupass.edu', action: 'USER_SUSPENDED', details: 'Suspended student ID 21BCE0984 due to duplicate pass attempt', ip: '10.87.12.4', level: 'warn' },
  { id: 'aud-104', timestamp: '2025-02-16 08:30:19', actor: 'security-monitor', action: 'RATE_LIMIT_TRIGGERED', details: 'Excessive requests on /api/v1/events from 192.168.1.45', ip: '192.168.1.45', level: 'security' },
  { id: 'aud-105', timestamp: '2025-02-15 19:40:02', actor: 'cultural@vit.ac.in', action: 'EVENT_CREATED', details: 'Drafted new event "Raag Classical Night"', ip: '10.87.44.82', level: 'info' },
  { id: 'aud-106', timestamp: '2025-02-15 16:12:55', actor: 'admin@virtupass.edu', action: 'ROLE_UPDATED', details: 'Promoted user "Dr. Suresh Babu" to verified organizer', ip: '10.87.12.4', level: 'info' },
];

export const AuditLog: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = demoAuditLogs.filter(
    (l) =>
      l.action.toLowerCase().includes(search.toLowerCase()) ||
      l.actor.toLowerCase().includes(search.toLowerCase()) ||
      l.details.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Security Audit Log"
        description="Immutable chronological trail of security events, administrative actions, and gate validations."
        breadcrumbs={[{ label: 'Admin Command', href: '/admin/dashboard' }, { label: 'Audit Log' }]}
      />

      <div className="w-full sm:w-96">
        <Input
          placeholder="Filter audit entries by action or actor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<Search className="h-4 w-4" />}
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
        />
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-xl font-mono text-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Actor</th>
                <th className="px-6 py-4">Audit Details</th>
                <th className="px-6 py-4">Origin IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {filtered.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-400 whitespace-nowrap">{log.timestamp}</td>
                  <td className="px-6 py-4 font-mono font-bold">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] ${
                        log.level === 'security'
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : log.level === 'warn'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : 'bg-blue-950 text-blue-400 border border-blue-800'
                      }`}
                    >
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{log.actor}</td>
                  <td className="px-6 py-4 text-slate-300">{log.details}</td>
                  <td className="px-6 py-4 font-mono text-slate-500">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

