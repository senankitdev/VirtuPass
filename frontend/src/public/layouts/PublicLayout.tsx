import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Ticket, Heart, Shield, Sparkles, Mail, ExternalLink } from 'lucide-react';
import { Navbar } from '@/shared/components';

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <Ticket className="h-5 w-5" />
                </div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  VirtuPass
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Smart College Fest Ticketing Platform. One Identity. One Verified Pass. One Seamless Entry.
              </p>
              <div className="flex items-center gap-2 text-xs text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-3 py-1.5 rounded-lg w-fit">
                <Shield className="h-3.5 w-3.5 text-indigo-400" />
                <span>Zero Database Architecture</span>
              </div>
            </div>

            {/* Quick Portals Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Three Portals
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link
                    to="/user/dashboard"
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    <span>Student User Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/organizer/dashboard"
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-medium"
                  >
                    <span>Event Organizer Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <span>System Admin Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Explore Fest
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to="/events" className="hover:text-white transition-colors">
                    All Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link to="/user/verification" className="hover:text-white transition-colors">
                    Academic CGPA Verification
                  </Link>
                </li>
                <li>
                  <Link to="/organizer/scanner" className="hover:text-white transition-colors">
                    Gate QR Scanner
                  </Link>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How VirtuPass Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact / Notice */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Hackathon Demo Notice
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                All data is maintained in-memory for zero latency and rapid hackathon demonstration. Data resets on server restart.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Mail className="h-3.5 w-3.5 text-slate-500" />
                <span>support@virtupass.edu</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2025 VirtuPass. Built for Smart College Fest Ticketing.</p>
            <div className="flex items-center gap-1 text-slate-400">
              <span>Made with</span>
              <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
              <span>for Campus Innovations</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

