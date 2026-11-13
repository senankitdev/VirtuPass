import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from '@/public/layouts/PublicLayout';
import { UserLayout } from '@/portals/user/layouts/UserLayout';
import { AdminLayout } from '@/portals/admin/layouts/AdminLayout';
import { OrganizerLayout } from '@/portals/organizer/layouts/OrganizerLayout';

// Public Pages
import { LandingPage } from '@/public/pages/LandingPage';
import { PublicEventsPage } from '@/public/pages/PublicEventsPage';
import { EventDetailPage } from '@/public/pages/EventDetailPage';
import { LoginPage } from '@/public/pages/LoginPage';
import { RegisterPage } from '@/public/pages/RegisterPage';

// User Portal Pages
import { Dashboard as UserDashboard } from '@/portals/user/pages/Dashboard';
import { Verification as UserVerification } from '@/portals/user/pages/Verification';
import { Events as UserEvents } from '@/portals/user/pages/Events';
import { default as UserTickets } from '@/portals/user/pages/Tickets';
import { default as UserBookings } from '@/portals/user/pages/Bookings';
import { default as UserProfile } from '@/portals/user/pages/Profile';

// Admin Portal Pages
import { default as AdminDashboard } from '@/portals/admin/pages/Dashboard';
import { Users as AdminUsers } from '@/portals/admin/pages/Users';
import { Organizers as AdminOrganizers } from '@/portals/admin/pages/Organizers';
import { Events as AdminEvents } from '@/portals/admin/pages/Events';
import { Tickets as AdminTickets } from '@/portals/admin/pages/Tickets';
import { Attendance as AdminAttendance } from '@/portals/admin/pages/Attendance';
import { AuditLog as AdminAuditLog } from '@/portals/admin/pages/AuditLog';

// Organizer Portal Pages
import { Dashboard as OrganizerDashboard } from '@/portals/organizer/pages/Dashboard';
import { Events as OrganizerEvents } from '@/portals/organizer/pages/Events';
import { CreateEvent as OrganizerCreateEvent } from '@/portals/organizer/pages/CreateEvent';
import { Bookings as OrganizerBookings } from '@/portals/organizer/pages/Bookings';
import { Attendance as OrganizerAttendance } from '@/portals/organizer/pages/Attendance';
import { Scanner as OrganizerScanner } from '@/portals/organizer/pages/Scanner';
import { Profile as OrganizerProfile } from '@/portals/organizer/pages/Profile';

/**
 * RouteGuard (Phase 1 Placeholder):
 * In Phase 2, this wrapper will validate JWT access tokens and verify role permissions
 * against the Fastify backend auth endpoints.
 */
interface RouteGuardProps {
  children: React.ReactNode;
  allowedRole?: 'student' | 'admin' | 'organizer';
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children, allowedRole }) => {
  // Phase 1: Pass-through wrapper with placeholder comment
  // Real backend token validation will be hooked up in Phase 2
  return <>{children}</>;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public Routes (Navbar + Footer) ────────────────────────── */}
        <Route element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="events" element={<PublicEventsPage />} />
          <Route path="events/:eventId" element={<EventDetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* ── User Portal Routes (/user/*) ──────────────────────────── */}
        <Route
          path="user"
          element={
            <RouteGuard allowedRole="student">
              <UserLayout />
            </RouteGuard>
          }
        >
          <Route index element={<Navigate to="/user/dashboard" replace />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="verification" element={<UserVerification />} />
          <Route path="events" element={<UserEvents />} />
          <Route path="tickets" element={<UserTickets />} />
          <Route path="bookings" element={<UserBookings />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* ── Admin Portal Routes (/admin/*) ────────────────────────── */}
        <Route
          path="admin"
          element={
            <RouteGuard allowedRole="admin">
              <AdminLayout />
            </RouteGuard>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="organizers" element={<AdminOrganizers />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="tickets" element={<AdminTickets />} />
          <Route path="attendance" element={<AdminAttendance />} />
          <Route path="audit" element={<AdminAuditLog />} />
        </Route>

        {/* ── Organizer Portal Routes (/organizer/*) ────────────────── */}
        <Route
          path="organizer"
          element={
            <RouteGuard allowedRole="organizer">
              <OrganizerLayout />
            </RouteGuard>
          }
        >
          <Route index element={<Navigate to="/organizer/dashboard" replace />} />
          <Route path="dashboard" element={<OrganizerDashboard />} />
          <Route path="events" element={<OrganizerEvents />} />
          <Route path="events/new" element={<OrganizerCreateEvent />} />
          <Route path="bookings" element={<OrganizerBookings />} />
          <Route path="attendance" element={<OrganizerAttendance />} />
          <Route path="scanner" element={<OrganizerScanner />} />
          <Route path="profile" element={<OrganizerProfile />} />
        </Route>

        {/* ── Fallback 404 Route ────────────────────────────────────── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
