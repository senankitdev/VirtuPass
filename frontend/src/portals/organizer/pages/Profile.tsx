import React from 'react';
import {
  Building2,
  Mail,
  Phone,
  Globe,
  CreditCard,
  Star,
  Calendar,
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import {
  PageHeader,
  Card,
  Button,
  Input,
  Badge,
} from '@/shared/components';

export const Profile: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl">
      <PageHeader
        title="Organizer &amp; Club Profile"
        description="Manage your institutional club profile, faculty advisor contacts, and payout configuration."
        breadcrumbs={[{ label: 'Organizer Hub', href: '/organizer/dashboard' }, { label: 'Club Profile' }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Organization Summary */}
        <div className="space-y-6">
          <Card className="p-6 text-center border-slate-200">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-purple-500/20 text-2xl font-black mb-4">
              VTB
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">VIT Technical Board</h3>
            <p className="text-xs text-slate-500">Official Student Tech Board</p>

            <div className="mt-3 flex justify-center">
              <Badge variant="purple" size="sm" className="gap-1">
                <ShieldCheck className="h-3 w-3" /> VERIFIED CLUB
              </Badge>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-black text-slate-900">12</div>
                <div className="text-[10px] uppercase text-slate-400">Events</div>
              </div>
              <div>
                <div className="text-lg font-black text-purple-600">847</div>
                <div className="text-[10px] uppercase text-slate-400">Tickets</div>
              </div>
              <div>
                <div className="text-lg font-black text-amber-500 flex items-center justify-center gap-0.5">
                  4.9 <Star className="h-3 w-3 fill-amber-500" />
                </div>
                <div className="text-[10px] uppercase text-slate-400">Rating</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Faculty Advisor
            </h4>
            <div className="text-xs space-y-1">
              <p className="font-semibold text-slate-800">Dr. Suresh Babu K.</p>
              <p className="text-slate-500">School of Computer Science &amp; Engineering</p>
              <p className="text-slate-500">sureshbabu@vit.ac.in</p>
            </div>
          </Card>
        </div>

        {/* Right Column: Editable Profile Fields */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 sm:p-8 border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Organization Details
              </h3>
              <p className="text-xs text-slate-500">
                These details are displayed on public event banners and ticket passes.
              </p>
            </div>

            <div className="space-y-4">
              <Input
                label="Organization / Club Name"
                defaultValue="VIT Technical Board"
                leftIcon={<Building2 className="h-4 w-4" />}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Official Contact Email"
                  defaultValue="technicalboard@vit.ac.in"
                  leftIcon={<Mail className="h-4 w-4" />}
                />
                <Input
                  label="Helpline Phone"
                  defaultValue="+91 416 220 2011"
                  leftIcon={<Phone className="h-4 w-4" />}
                />
              </div>

              <Input
                label="Club Portal / Website"
                defaultValue="https://vittechboard.org"
                leftIcon={<Globe className="h-4 w-4" />}
              />

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">
                  About the Organization
                </label>
                <textarea
                  rows={3}
                  defaultValue="The apex student-run technical governing council coordinating flagship hackathons, coding challenges, robotics events, and tech exhibitions across VIT."
                  className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20"
                />
              </div>
            </div>

            {/* Payout Details Section */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Fest Ticket Payout Account
                  </h3>
                  <p className="text-xs text-slate-500">
                    Settlement account for ticket revenues.
                  </p>
                </div>
                <Badge variant="success" size="sm">
                  ACTIVE
                </Badge>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">State Bank of India •••• 4092</p>
                    <p className="text-[11px] text-slate-500">IFSC: SBIN0007234 • VIT Campus Branch</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                * Demo form (Phase 1 profile scaffold)
              </span>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Save Profile Changes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

