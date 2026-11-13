import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Calendar,
  Clock,
  MapPin,
  IndianRupee,
  Users,
  Image,
  Tag,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react';
import {
  PageHeader,
  Card,
  Button,
  Input,
  Badge,
} from '@/shared/components';
import { formatCurrency } from '@/shared/utils/formatters';

const eventSchema = z.object({
  title: z.string().min(5, 'Event title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  category: z.enum(['technical', 'cultural', 'sports', 'workshop', 'other']),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Start time is required'),
  venue: z.string().min(3, 'Venue is required'),
  price: z.coerce.number().min(0, 'Price must be 0 or greater'),
  totalSeats: z.coerce.number().min(10, 'Total seats must be at least 10'),
  tags: z.string().optional(),
});

type EventFormValues = z.infer<typeof eventSchema>;

export const CreateEvent: React.FC = () => {
  const [created, setCreated] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: 'DevPulse Hackathon 2025',
      description: 'A 24-hour university-wide hackathon focusing on AI agents and campus solutions.',
      category: 'technical',
      date: '2025-04-10',
      time: '09:00',
      venue: 'Technology Tower, Hall 1',
      price: 150,
      totalSeats: 300,
      tags: 'ai, hackathon, coding',
    },
  });

  const formValues = watch();

  const onSubmit = (data: EventFormValues) => {
    console.log('Event submission payload:', data);
    setCreated(true);
  };

  return (
    <div className="space-y-8 max-w-6xl">
      <PageHeader
        title="Create New Event"
        description="Publish a new festival event, workshop, or competition with custom pricing and seat allocation."
        breadcrumbs={[{ label: 'Organizer Hub', href: '/organizer/dashboard' }, { label: 'Create Event' }]}
      />

      {created ? (
        <Card className="p-10 border-slate-200 text-center space-y-4">
          <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Event Form Validated!</h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your event details pass all Zod validation rules. In Phase 4, this form will persist into the in-memory backend event store and trigger admin review.
          </p>
          <Button onClick={() => setCreated(false)} variant="outline">
            Create Another Event
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8 border-slate-200 shadow-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* 1. Basic Details */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-purple-700">
                    1. Event Information
                  </h3>
                  <Input
                    label="Event Title"
                    {...register('title')}
                    error={errors.title?.message}
                    placeholder="e.g. National Level Hackathon"
                  />

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-slate-700">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      {...register('description')}
                      className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20"
                      placeholder="Outline schedule, eligibility, rules..."
                    />
                    {errors.description && (
                      <p className="text-xs text-rose-600 font-medium">{errors.description.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Event Category
                    </label>
                    <select
                      {...register('category')}
                      className="block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20"
                    >
                      <option value="technical">Technical</option>
                      <option value="cultural">Cultural</option>
                      <option value="sports">Sports</option>
                      <option value="workshop">Workshop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* 2. Date & Venue */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-purple-700">
                    2. Date &amp; Location
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Event Date"
                      type="date"
                      {...register('date')}
                      error={errors.date?.message}
                    />
                    <Input
                      label="Start Time"
                      type="time"
                      {...register('time')}
                      error={errors.time?.message}
                    />
                  </div>
                  <Input
                    label="Venue & Room"
                    {...register('venue')}
                    error={errors.venue?.message}
                    leftIcon={<MapPin className="h-4 w-4" />}
                    placeholder="e.g. Kamaraj Auditorium, 2nd Floor"
                  />
                </div>

                {/* 3. Ticketing */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-purple-700">
                    3. Ticket Pricing &amp; Capacity
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Ticket Price (₹)"
                      type="number"
                      {...register('price')}
                      error={errors.price?.message}
                      leftIcon={<IndianRupee className="h-4 w-4" />}
                    />
                    <Input
                      label="Total Capacity (Seats)"
                      type="number"
                      {...register('totalSeats')}
                      error={errors.totalSeats?.message}
                      leftIcon={<Users className="h-4 w-4" />}
                    />
                  </div>
                  <Input
                    label="Tags (comma-separated)"
                    {...register('tags')}
                    leftIcon={<Tag className="h-4 w-4" />}
                    placeholder="e.g. hackathon, ai, prizes"
                  />
                </div>

                {/* Banner Placeholder */}
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Event Banner Media
                  </label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-purple-400 transition-colors bg-slate-50/50">
                    <Image className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-700">
                      Upload promotional cover image
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      PNG, JPG up to 5MB (Phase 1 preview)
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    isLoading={isSubmitting}
                  >
                    Publish Event Submission
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Live Card Preview */}
          <div className="space-y-6">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              Live Attendee Card Preview
            </h3>

            <Card className="overflow-hidden border-slate-200 shadow-md">
              <div className="h-40 bg-gradient-to-br from-purple-800 to-indigo-900 flex items-center justify-center p-4 text-white font-bold text-center">
                <span>{formValues.title || 'Event Title Preview'}</span>
              </div>
              <div className="p-5 space-y-3">
                <Badge variant="purple" size="sm">
                  {(formValues.category || 'CATEGORY').toUpperCase()}
                </Badge>
                <h4 className="font-bold text-slate-900 text-base">
                  {formValues.title || 'Your Event Title'}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {formValues.description || 'Description will appear here.'}
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 flex justify-between">
                  <span>{formValues.date || 'YYYY-MM-DD'}</span>
                  <span className="font-bold text-slate-900">
                    {formatCurrency(Number(formValues.price) || 0)}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

