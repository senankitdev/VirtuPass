import React, { useState } from 'react';
import { UserCheck, Clock, Search, QrCode } from 'lucide-react';
import { PageHeader, StatCard, Badge, Button, Input } from '@/shared/components';

interface CheckInRecord {
  ticketId: string;
  name: string;
  regNo: string;
  time: string;
  gate: string;
  status: 'admitted' | 'flagged';
}

const demoCheckIns: CheckInRecord[] = [
  { ticketId: 'TKT-TEC-001', name: 'Aarav Sharma', regNo: '21BCE1042', time: '09:04:12 AM', gate: 'Anna Auditorium — Gate 1', status: 'admitted' },
  { ticketId: 'TKT-TEC-002', name: 'Kunal Kapoor', regNo: '22BCE2411', time: '09:07:35 AM', gate: 'Anna Auditorium — Gate 1', status: 'admitted' },
  { ticketId: 'TKT-TEC-003', name: 'Rohan Verma', regNo: '21BCE1980', time: '09:12:02 AM', gate: 'Anna Auditorium — Gate 2', status: 'admitted' },
  { ticketId: 'TKT-TEC-004', name: 'Sneha Reddy', regNo: '21BCE0491', time: '09:15:44 AM', gate: 'Anna Auditorium — Gate 1', status: 'admitted' },
];

export const Attendance: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState('Technovate 2025');

  return (
    <div className="space-y-8">
      <PageHeader
        title="Event Gate Attendance"
        description="Monitor real-time gate check-ins and crowd admissions for your active events."
        breadcrumbs={[{ label: 'Organizer Hub', href: '/organizer/dashboard' }, { label: 'Attendance' }]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Admitted" value="158" icon={UserCheck} colorVariant="purple" description="Checked in at gates" />
        <StatCard label="Expected" value="342" icon={Clock} colorVariant="indigo" description="Confirmed ticket holders" />
        <StatCard label="Turnout Rate" value="46.2%" icon={QrCode} colorVariant="emerald" description="Current attendance ratio" />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">Recent Turnstile Scans</h3>
          <span className="text-xs text-purple-700 font-semibold">{selectedEvent}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Ticket ID</th>
                <th className="px-6 py-4">Attendee Name</th>
                <th className="px-6 py-4">Student Roll No</th>
                <th className="px-6 py-4">Gate Location</th>
                <th className="px-6 py-4">Scan Timestamp</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {demoCheckIns.map((item) => (
                <tr key={item.ticketId} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 font-mono font-bold text-purple-700">{item.ticketId}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 font-mono text-slate-600">{item.regNo}</td>
                  <td className="px-6 py-4 text-slate-500">{item.gate}</td>
                  <td className="px-6 py-4 text-slate-500 font-mono">{item.time}</td>
                  <td className="px-6 py-4">
                    <Badge variant="success" size="sm">
                      {item.status.toUpperCase()}
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

