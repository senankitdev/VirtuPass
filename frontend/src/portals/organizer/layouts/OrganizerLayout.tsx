import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  CalendarPlus,
  ShoppingBag,
  UserCheck,
  QrCode,
  User,
} from 'lucide-react';
import { Sidebar, type NavItem } from '@/shared/components';

const organizerNavItems: NavItem[] = [
  { label: 'Organizer Hub', href: '/organizer/dashboard', icon: LayoutDashboard },
  { label: 'My Events', href: '/organizer/events', icon: Calendar },
  { label: 'Create New Event', href: '/organizer/events/new', icon: CalendarPlus },
  { label: 'Ticket Bookings', href: '/organizer/bookings', icon: ShoppingBag },
  { label: 'Event Attendance', href: '/organizer/attendance', icon: UserCheck },
  { label: 'QR Pass Scanner', href: '/organizer/scanner', icon: QrCode },
  { label: 'Club Profile', href: '/organizer/profile', icon: User },
];

export const OrganizerLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar navigation */}
      <Sidebar
        portalName="organizer"
        portalTitle="Event Hub"
        portalSubtitle="Club & Fest Host"
        navItems={organizerNavItems}
        user={{
          name: 'VIT Technical Board',
          role: 'Official Club',
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

