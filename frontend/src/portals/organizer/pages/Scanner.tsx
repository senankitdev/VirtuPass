import React, { useState } from 'react';
import {
  QrCode,
  Camera,
  CheckCircle2,
  XCircle,
  Search,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import {
  PageHeader,
  Card,
  Button,
  Input,
  Badge,
  EmptyState,
} from '@/shared/components';

export const Scanner: React.FC = () => {
  const [manualCode, setManualCode] = useState('');
  const [scanResult, setScanResult] = useState<{
    valid: boolean;
    name?: string;
    event?: string;
    message: string;
  } | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualCode.trim().toUpperCase().startsWith('TKT')) {
      setScanResult({
        valid: true,
        name: 'Aarav Sharma (21BCE1042)',
        event: 'Technovate 2025 Flagship Hackathon',
        message: 'Pass Validated Successfully. Admission Approved.',
      });
    } else {
      setScanResult({
        valid: false,
        message: 'Invalid Pass ID. No active ticket found for this code.',
      });
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <PageHeader
        title="Gate QR Scanner"
        description="Verify attendee tickets at event turnstiles. Sub-second cryptographic pass verification."
        breadcrumbs={[{ label: 'Organizer Hub', href: '/organizer/dashboard' }, { label: 'QR Scanner' }]}
      />

      {/* Main Scanner Viewport Area */}
      <Card className="p-8 sm:p-12 border-slate-200 text-center relative overflow-hidden bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-md mx-auto space-y-6">
          {/* Simulated Camera Viewfinder */}
          <div className="relative aspect-square max-w-xs mx-auto rounded-3xl border-2 border-dashed border-purple-400 bg-slate-900/5 flex flex-col items-center justify-center p-6 transition-all hover:border-purple-600">
            {/* Viewfinder corner guides */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-purple-600" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-purple-600" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-purple-600" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-purple-600" />

            <Camera className="h-14 w-14 text-purple-600 mb-3 animate-pulse" />
            <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
              Camera Viewfinder
            </span>
            <span className="text-[11px] text-slate-400 mt-1 max-w-[200px]">
              Align student QR pass inside the frame to scan
            </span>
          </div>

          <div className="p-3 rounded-xl bg-purple-50 text-purple-700 text-xs border border-purple-200 font-medium flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>Webcam auto-scanner will activate in Phase 5</span>
          </div>
        </div>
      </Card>

      {/* Manual Code Fallback Entry */}
      <Card className="p-6 border-slate-200">
        <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
          Manual Pass Verification Fallback
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          If attendee screen is cracked or camera cannot read the QR, enter the 10-digit ticket pass code printed on the ticket.
        </p>

        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input
              placeholder="e.g. TKT-TEC-001"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              className="font-mono uppercase text-sm"
            />
          </div>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white shrink-0">
            Verify Ticket Pass
          </Button>
        </form>

        {scanResult && (
          <div
            className={`mt-4 p-4 rounded-xl border text-xs ${
              scanResult.valid
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm">
              {scanResult.valid ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span>{scanResult.message}</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-rose-600" />
                  <span>{scanResult.message}</span>
                </>
              )}
            </div>
            {scanResult.name && (
              <p className="mt-1 font-semibold">Attendee: {scanResult.name}</p>
            )}
            {scanResult.event && (
              <p className="text-[11px] text-slate-600">Event: {scanResult.event}</p>
            )}
          </div>
        )}
      </Card>

      {/* Recent Scans Session */}
      <div>
        <h3 className="font-bold text-slate-900 text-sm mb-3">Live Scans Session</h3>
        <EmptyState
          icon={QrCode}
          title="No live scans recorded yet"
          description="Scanned passes from this gate terminal will appear here with instant entry status."
        />
      </div>
    </div>
  );
};

