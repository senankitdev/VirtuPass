import React, { useState } from 'react';
import { Search, Building2, CheckCircle2, AlertCircle, Eye, ShieldAlert } from 'lucide-react';
import { PageHeader, Badge, Button, Input } from '@/shared/components';

interface DemoOrganizer {
  id: string;
  name: string;
  organization: string;
  email: string;
  eventsCount: number;
  status: 'active' | 'pending' | 'suspended';
  joinedDate: string;
}

const demoOrganizers: DemoOrganizer[] = [
  { id: 'org-1', name: 'Dr. Suresh Babu', organization: 'VIT Technical Board', email: 'techboard@vit.ac.in', eventsCount: 14, status: 'active', joinedDate: '2024-06-10' },
  { id: 'org-2', name: 'Prof. Meenakshi Sundaram', organization: 'VIT Cultural Committee', email: 'cultural@vit.ac.in', eventsCount: 22, status: 'active', joinedDate: '2024-06-12' },
  { id: 'org-3', name: 'Kavita Menon', organization: 'IEEE Student Branch', email: 'ieee@vit.ac.in', eventsCount: 8, status: 'active', joinedDate: '2024-07-20' },
  { id: 'org-4', name: 'Rahul Deshmukh', organization: 'Robotics Club', email: 'robotics@vit.ac.in', eventsCount: 5, status: 'pending', joinedDate: '2024-11-10' },
  { id: 'org-5', name: 'Vikram Joshi', organization: 'E-Sports Association', email: 'esports@vit.ac.in', eventsCount: 3, status: 'suspended', joinedDate: '2024-08-01' },
];

export const Organizers: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = demoOrganizers.filter(
    (o) =>
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.organization.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Organizer Management"
        description="Review campus clubs, university committees, and departmental fest organizers."
        breadcrumbs={[{ label: 'Admin Command', href: '/admin/dashboard' }, { label: 'Organizers' }]}
      />

      <div className="w-full sm:w-96">
        <Input
          placeholder="Search club or organizer..."
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
                <th className="px-6 py-4">Club / Organization</th>
                <th className="px-6 py-4">Lead Contact</th>
                <th className="px-6 py-4">Hosted Events</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Registered</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map((org) => (
                <tr key={org.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-purple-400" />
                      {org.organization}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-white">{org.name}</div>
                    <div className="text-slate-400 text-[11px]">{org.email}</div>
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-blue-400">{org.eventsCount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                        org.status === 'active'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : org.status === 'pending'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}
                    >
                      {org.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{org.joinedDate}</td>
                  <td className="px-6 py-4 text-right">
                    <Button size="sm" variant="ghost" className="h-7 text-xs px-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                      <Eye className="h-3.5 w-3.5" />
                    </Button>
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

