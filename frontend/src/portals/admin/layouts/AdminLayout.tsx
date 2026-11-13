import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Building2,
  Calendar,
  Ticket,
  UserCheck,
  ShieldAlert,
} from 'lucide-react';
import { Sidebar, type NavItem } from '@/shared/components';

const adminNavItems: NavItem[] = [
  { label: 'Admin Overview', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'User Directory', href: '/admin/users', icon: Users },
  { label: 'Organizers', href: '/admin/organizers', icon: Building2 },
  { label: 'All Events', href: '/admin/events', icon: Calendar, badge: '12' },
  { label: 'Ticket Oversight', href: '/admin/tickets', icon: Ticket },
  { label: 'Gate Attendance', href: '/admin/attendance', icon: UserCheck },
  { label: 'Security Audit Log', href: '/admin/audit', icon: ShieldAlert },
];

export const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex">
      {/* Sidebar navigation */}
      <Sidebar
        portalName="admin"
        portalTitle="Admin Command"
        portalSubtitle="Platform Control"
        navItems={adminNavItems}
        user={{
          name: 'Super Admin',
          role: 'Platform Owner',
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:pl-64 flex flex-col min-w-0">
        <div className="pt-16 lg:pt-0 p-6 sm:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

