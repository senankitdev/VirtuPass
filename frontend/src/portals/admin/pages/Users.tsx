import React, { useState } from 'react';
import { Search, ShieldCheck, ShieldAlert, MoreVertical, UserX, Eye } from 'lucide-react';
import { PageHeader, Badge, Button, Input } from '@/shared/components';

interface DemoUser {
  id: string;
  name: string;
  email: string;
  university: string;
  cgpa: number;
  isVerified: boolean;
  status: 'active' | 'suspended';
  joinedDate: string;
}

const demoUsers: DemoUser[] = [
  { id: 'usr-1', name: 'Aarav Sharma', email: 'aarav.sharma21@vit.ac.in', university: 'VIT Vellore', cgpa: 9.42, isVerified: true, status: 'active', joinedDate: '2024-08-15' },
  { id: 'usr-2', name: 'Diya Patel', email: 'diya.p22@vit.ac.in', university: 'VIT Chennai', cgpa: 8.85, isVerified: true, status: 'active', joinedDate: '2024-09-02' },
  { id: 'usr-3', name: 'Rohan Verma', email: 'rohan.v@srmist.edu.in', university: 'SRM Institute', cgpa: 7.60, isVerified: false, status: 'active', joinedDate: '2024-10-11' },
  { id: 'usr-4', name: 'Ananya Iyer', email: 'ananya.iyer@iitm.ac.in', university: 'IIT Madras', cgpa: 9.75, isVerified: true, status: 'active', joinedDate: '2024-10-25' },
  { id: 'usr-5', name: 'Kabir Mehta', email: 'kabir.m@vit.ac.in', university: 'VIT Vellore', cgpa: 6.90, isVerified: false, status: 'suspended', joinedDate: '2024-11-01' },
  { id: 'usr-6', name: 'Sneha Reddy', email: 'sneha.r20@vit.ac.in', university: 'VIT Vellore', cgpa: 8.92, isVerified: true, status: 'active', joinedDate: '2024-11-05' },
];

export const Users: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'verified' | 'unverified'>('all');

  const filteredUsers = demoUsers.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.university.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === 'all' || (filter === 'verified' ? u.isVerified : !u.isVerified);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="User Management"
        description="Platform-wide directory of registered student attendees and university credentials."
        breadcrumbs={[{ label: 'Admin Command', href: '/admin/dashboard' }, { label: 'Users' }]}
      />

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="w-full sm:w-96">
          <Input
            placeholder="Search users by name, email, college..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'verified', 'unverified'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                filter === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">University</th>
                <th className="px-6 py-4">CGPA</th>
                <th className="px-6 py-4">Academic Status</th>
                <th className="px-6 py-4">Account</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white">{user.name}</div>
                    <div className="text-slate-400 text-[11px]">{user.email}</div>
                  </td>
                  <td className="px-6 py-4">{user.university}</td>
                  <td className="px-6 py-4 font-mono font-bold text-blue-400">{user.cgpa.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    {user.isVerified ? (
                      <Badge variant="success" size="sm" className="gap-1">
                        <ShieldCheck className="h-3 w-3" /> VERIFIED
                      </Badge>
                    ) : (
                      <Badge variant="warning" size="sm" className="gap-1">
                        <ShieldAlert className="h-3 w-3" /> UNVERIFIED
                      </Badge>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        user.status === 'active'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{user.joinedDate}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button size="sm" variant="ghost" className="h-7 text-xs px-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 text-xs px-2 text-rose-400 hover:bg-rose-950 hover:text-rose-300">
                        <UserX className="h-3.5 w-3.5" />
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

