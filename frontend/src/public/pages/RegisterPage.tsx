import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Ticket, ArrowRight, GraduationCap, Building2 } from 'lucide-react';
import { Button, Input, Card } from '@/shared/components';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'organizer'>('student');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'organizer') navigate('/organizer/dashboard');
    else navigate('/user/dashboard');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 mb-4">
            <Ticket className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Create Your Account
          </h2>
          <p className="mt-2 text-xs text-slate-500">
            Join VirtuPass to discover events, unlock discounts, or manage college festivals.
          </p>
        </div>

        <Card className="p-8 shadow-xl border-slate-200">
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              I am registering as:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  role === 'student'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                <span>Student Attendee</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('organizer')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  role === 'organizer'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Building2 className="h-4 w-4" />
                <span>Event Organizer</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="e.g. Aarav Sharma"
              required
            />

            <Input
              label="University Email"
              type="email"
              placeholder="e.g. aarav.sharma2022@vitstudent.ac.in"
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create strong password"
              required
            />

            <div className="text-xs text-slate-500">
              By creating an account, you agree to VirtuPass Terms and College Safety Guidelines.
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full mt-2"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Register &amp; Proceed to {role === 'student' ? 'Student' : 'Organizer'} Portal
            </Button>
          </form>

          <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-[11px] text-slate-500">
              * Phase 1 Demo: Full academic verification and registration database sync activate in Phase 2.
            </p>
          </div>
        </Card>

        <p className="text-center text-xs text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-indigo-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

