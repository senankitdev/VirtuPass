import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  FileCheck,
  AlertCircle,
  Building,
  Hash,
  BookOpen,
} from 'lucide-react';
import {
  PageHeader,
  Card,
  Button,
  Input,
  Badge,
} from '@/shared/components';

export const Verification: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <PageHeader
        title="Academic Verification"
        description="Verify your college identity and academic standing to unlock exclusive student pricing and CGPA merit discounts."
        breadcrumbs={[{ label: 'Dashboard', href: '/user/dashboard' }, { label: 'Verification' }]}
      />

      {/* Verification Status Banner */}
      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-base">Verification Status</h3>
              <Badge variant="warning">PENDING VERIFICATION</Badge>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Your profile is currently unverified. Submit your academic credentials below.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Verification Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 sm:p-8 border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-600" />
              Student Academic Credential Form
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Enter your official university details. In Phase 2, this will connect with institutional databases.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900">Credentials Submitted for Review</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Your academic profile details have been received. Real-time university API validation and automatic CGPA discount activation will take effect in Phase 2.
                </p>
                <Button size="sm" variant="outline" onClick={() => setSubmitted(false)}>
                  Edit Information
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="College / University Name"
                  placeholder="e.g. Vellore Institute of Technology (VIT)"
                  defaultValue="Vellore Institute of Technology, Vellore"
                  leftIcon={<Building className="h-4 w-4" />}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Student Registration Number"
                    placeholder="e.g. 21BCE1042"
                    defaultValue="21BCE1042"
                    leftIcon={<Hash className="h-4 w-4" />}
                    required
                  />

                  <Input
                    label="Current Cumulative GPA (CGPA)"
                    placeholder="e.g. 9.15"
                    defaultValue="9.20"
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    leftIcon={<Award className="h-4 w-4" />}
                    required
                  />
                </div>

                <Input
                  label="Degree & Branch of Study"
                  placeholder="e.g. B.Tech Computer Science and Engineering"
                  defaultValue="B.Tech Computer Science and Engineering"
                  leftIcon={<BookOpen className="h-4 w-4" />}
                  required
                />

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    Phase 1 Notice: Academic verification form is scaffolding. Real document uploads and grading registry verification will be implemented in Prompt 2.
                  </span>
                </div>

                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Credentials for Verification
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>

        {/* Benefits Sidebar */}
        <div className="space-y-6">
          <Card className="p-6 border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              What You Unlock
            </h3>
            <ul className="space-y-4 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">CGPA Merit Scholarships</strong>
                  <p className="text-slate-500 mt-0.5">Automated discounts of up to 30% for academic toppers.</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">Priority Booking Window</strong>
                  <p className="text-slate-500 mt-0.5">24-hour advance access to high-demand pro-shows and star nights.</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">Official Student Pass Badge</strong>
                  <p className="text-slate-500 mt-0.5">Digital verification checkmark on your gate entry QR pass.</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

