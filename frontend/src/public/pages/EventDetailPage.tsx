import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Building2,
  Tag,
  ShieldCheck,
  Ticket,
  ArrowLeft,
  GraduationCap,
} from 'lucide-react';
import {
  PageHeader,
  Button,
  Badge,
  Card,
  LoadingState,
  ErrorState,
} from '@/shared/components';
import { useEvent } from '@/shared/hooks/useApi';
import { formatCurrency, formatDate, formatTime } from '@/shared/utils/formatters';

export const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const { data: event, isLoading, isError, refetch } = useEvent(eventId || '');

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <LoadingState message="Loading event details..." />
      </div>
    );
  }

  if (isError || !event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ErrorState
          title="Event Not Found"
          message={`Unable to find event with ID '${eventId}' in the in-memory data store.`}
          onRetry={refetch}
        />
        <div className="mt-6 text-center">
          <Link to="/events">
            <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        to="/events"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to All Events
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
            {event.imageUrl ? (
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-72 sm:h-96 object-cover"
              />
            ) : (
              <div className="w-full h-72 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                <Ticket className="h-16 w-16 text-white/30" />
              </div>
            )}
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge variant="purple" size="md">
                {event.category.toUpperCase()}
              </Badge>
              <Badge variant="success" size="md">
                {event.status.toUpperCase()}
              </Badge>
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {event.title}
            </h1>
            <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-slate-400" />
              Organized by <span className="font-semibold text-slate-700">{event.organizerName}</span>
            </p>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">About This Event</h3>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {event.description}
            </p>

            {event.tags && event.tags.length > 0 && (
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                <Tag className="h-3.5 w-3.5 text-slate-400" />
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Ticket Card & Info */}
        <div className="space-y-6">
          <Card className="p-6 border-slate-200 shadow-md space-y-6">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Registration Fee
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">
                  {event.price === 0 ? 'FREE' : formatCurrency(event.price)}
                </span>
                <span className="text-xs text-slate-400 font-normal">/ attendee</span>
              </div>
            </div>

            {/* Event Key Facts */}
            <div className="space-y-3.5 text-xs text-slate-600 border-t border-b border-slate-100 py-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-indigo-600 shrink-0" />
                <div>
                  <span className="block text-slate-400 font-medium">Date</span>
                  <span className="font-semibold text-slate-800">{formatDate(event.date)}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-indigo-600 shrink-0" />
                <div>
                  <span className="block text-slate-400 font-medium">Time</span>
                  <span className="font-semibold text-slate-800">{formatTime(event.time)}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-600 shrink-0" />
                <div>
                  <span className="block text-slate-400 font-medium">Venue</span>
                  <span className="font-semibold text-slate-800">{event.venue}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-indigo-600 shrink-0" />
                <div>
                  <span className="block text-slate-400 font-medium">Availability</span>
                  <span className="font-semibold text-slate-800">
                    {event.availableSeats} of {event.totalSeats} seats remaining
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Perks callout */}
            <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 flex items-start gap-2.5">
              <GraduationCap className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-indigo-900">Academic Discount Available</p>
                <p className="text-indigo-700 text-[11px] mt-0.5">
                  Verified students with CGPA &gt; 8.5 qualify for up to 30% instant waiver.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <Link to="/user/dashboard" className="block">
              <Button size="lg" className="w-full">
                Book Ticket Pass (User Portal)
              </Button>
            </Link>

            <p className="text-[11px] text-center text-slate-400">
              * Phase 1 Demo: Real booking & payment workflows activate in Phase 4.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

