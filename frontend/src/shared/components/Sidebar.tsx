import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Ticket, ChevronRight, LogOut, LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
}

export interface SidebarProps {
  portalName: 'user' | 'admin' | 'organizer';
  portalTitle: string;
  portalSubtitle: string;
  navItems: NavItem[];
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
}

export const Sidebar: React.FC<SidebarProps> = ({
  portalName,
  portalTitle,
  portalSubtitle,
  navItems,
  user,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Portal-specific styling
  const portalStyles = {
    user: {
      bg: 'bg-white',
      border: 'border-slate-200',
      activeLink: 'bg-indigo-50 text-indigo-700 font-semibold',
      activeIcon: 'text-indigo-600',
      accentBadge: 'bg-indigo-100 text-indigo-700',
      logoGradient: 'from-indigo-600 to-blue-600',
    },
    admin: {
      bg: 'bg-slate-900',
      border: 'border-slate-800',
      activeLink: 'bg-slate-800 text-blue-400 font-semibold',
      activeIcon: 'text-blue-400',
      accentBadge: 'bg-blue-900/60 text-blue-300',
      logoGradient: 'from-blue-500 to-indigo-500',
    },
    organizer: {
      bg: 'bg-white',
      border: 'border-slate-200',
      activeLink: 'bg-purple-50 text-purple-700 font-semibold',
      activeIcon: 'text-purple-600',
      accentBadge: 'bg-purple-100 text-purple-700',
      logoGradient: 'from-purple-600 to-violet-600',
    },
  };

  const style = portalStyles[portalName];
  const isDark = portalName === 'admin';

  return (
    <>
      {/* Mobile hamburger header */}
      <div
        className={cn(
          'lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 border-b',
          isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        )}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              'h-9 w-9 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-md',
              style.logoGradient
            )}
          >
            <Ticket className="h-5 w-5" />
          </div>
          <div>
            <span className="font-bold text-base tracking-tight">VirtuPass</span>
            <span
              className={cn(
                'ml-2 text-xs px-2 py-0.5 rounded-full font-medium uppercase',
                style.accentBadge
              )}
            >
              {portalName}
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'p-2 rounded-xl transition-colors',
            isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-600'
          )}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 flex flex-col border-r transition-transform duration-300 lg:translate-x-0',
          style.bg,
          style.border,
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Brand Header */}
        <div
          className={cn(
            'p-6 border-b flex items-center gap-3',
            isDark ? 'border-slate-800' : 'border-slate-100'
          )}
        >
          <div
            className={cn(
              'h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-md shadow-indigo-500/10 shrink-0',
              style.logoGradient
            )}
          >
            <Ticket className="h-5 w-5" />
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'font-black text-lg tracking-tight',
                  isDark ? 'text-white' : 'text-slate-900'
                )}
              >
                VirtuPass
              </span>
              <span
                className={cn(
                  'text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider',
                  style.accentBadge
                )}
              >
                {portalName}
              </span>
            </div>
            <p
              className={cn(
                'text-xs truncate font-medium',
                isDark ? 'text-slate-400' : 'text-slate-500'
              )}
            >
              {portalSubtitle}
            </p>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                    isActive
                      ? style.activeLink
                      : isDark
                      ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        className={cn(
                          'h-5 w-5 transition-colors',
                          isActive
                            ? style.activeIcon
                            : isDark
                            ? 'text-slate-400 group-hover:text-slate-200'
                            : 'text-slate-400 group-hover:text-slate-700'
                        )}
                      />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined ? (
                      <span
                        className={cn(
                          'text-xs px-2 py-0.5 rounded-full font-semibold',
                          isActive
                            ? style.accentBadge
                            : isDark
                            ? 'bg-slate-800 text-slate-400'
                            : 'bg-slate-100 text-slate-600'
                        )}
                      >
                        {item.badge}
                      </span>
                    ) : (
                      <ChevronRight
                        className={cn(
                          'h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all',
                          isActive ? 'opacity-100 translate-x-0' : 'text-slate-400'
                        )}
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* User profile section at bottom */}
        <div
          className={cn(
            'p-4 border-t',
            isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50/60'
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <div
                className={cn(
                  'h-9 w-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0',
                  isDark ? 'bg-slate-800 text-blue-400' : 'bg-indigo-100 text-indigo-700'
                )}
              >
                {user?.name ? user.name.slice(0, 2).toUpperCase() : 'VP'}
              </div>
              <div className="overflow-hidden">
                <p
                  className={cn(
                    'text-sm font-semibold truncate',
                    isDark ? 'text-white' : 'text-slate-900'
                  )}
                >
                  {user?.name || 'Demo Account'}
                </p>
                <p
                  className={cn(
                    'text-xs capitalize truncate',
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  )}
                >
                  {user?.role || portalName}
                </p>
              </div>
            </div>
            <NavLink
              to="/"
              title="Return to Public Site"
              className={cn(
                'p-1.5 rounded-lg transition-colors',
                isDark ? 'text-slate-400 hover:text-rose-400 hover:bg-slate-800' : 'text-slate-400 hover:text-rose-600 hover:bg-slate-200'
              )}
            >
              <LogOut className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

