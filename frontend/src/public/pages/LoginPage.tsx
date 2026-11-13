import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Ticket, ArrowRight, ShieldCheck, GraduationCap, Building2, User } from 'lucide-react';
import { Button, Input, Card, Badge } from '@/shared/components';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('student@vit.ac.in');
  const [selectedRole, setSelectedRole] = useState<'user' | 'admin' | 'organizer'>('user');

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole === 'admin') navigate('/admin/dashboard');
    else if (selectedRole === 'organizer') navigate('/organizer/dashboard');
    else navigate('/user/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 mb-4">
            <Ticket className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sign In to VirtuPass
          </h2>
          <p className="mt-2 text-xs text-slate-500">
            Select your portal role below to access your dedicated dashboard.
          </p>
        </div>

        <Card className="p-8 shadow-xl border-slate-200">
          {/* Role Selector Tabs */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Portal Target
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedRole('user')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  selectedRole === 'user'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                <span>Student</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('organizer')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  selectedRole === 'organizer'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Building2 className="h-4 w-4" />
                <span>Organizer</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('admin')}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  selectedRole === 'admin'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Admin</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleDemoLogin} className="space-y-4">
            <Input
              label="Campus Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@vitstudent.ac.in"
              required
            />

            <Input
              label="Password"
              type="password"
              defaultValue="••••••••••••"
              placeholder="Enter password"
              required
            />

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="font-semibold text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full mt-2"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Enter {selectedRole === 'user' ? 'Student' : selectedRole === 'organizer' ? 'Organizer' : 'Admin'} Portal
            </Button>
          </form>

          {/* Phase Notice */}
          <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-[11px] text-slate-500">
              * Phase 1 Demo: Real authentication, JWT tokens & university SSO will be connected in Phase 2.
            </p>
          </div>
        </Card>

        <p className="text-center text-xs text-slate-500">
          Don't have an account yet?{' '}
          <Link to="/register" className="font-bold text-indigo-600 hover:underline">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

