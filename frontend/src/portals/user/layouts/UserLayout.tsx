import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Award,
  Calendar,
  Ticket,
  ShoppingBag,
  User,
} from 'lucide-react';
import { Sidebar, type NavItem } from '@/shared/components';

const userNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/user/dashboard', icon: LayoutDashboard },
  { label: 'Academic Verification', href: '/user/verification', icon: Award, badge: 'New' },
  { label: 'Explore Events', href: '/user/events', icon: Calendar },
  { label: 'My Tickets', href: '/user/tickets', icon: Ticket },
  { label: 'My Bookings', href: '/user/bookings', icon: ShoppingBag },
  { label: 'Student Profile', href: '/user/profile', icon: User },
];

export const UserLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar navigation */}
      <Sidebar
        portalName="user"
        portalTitle="Student Portal"
        portalSubtitle="Attendee & Passes"
        navItems={userNavItems}
        user={{
          name: 'Aarav Sharma',
          role: 'Student Attendee',
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

