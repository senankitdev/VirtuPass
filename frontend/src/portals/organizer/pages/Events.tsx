import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Calendar, MapPin, Users, Edit, Eye, Trash2 } from 'lucide-react';
import { PageHeader, Button, Badge, Input, Card } from '@/shared/components';
import { useEvents } from '@/shared/hooks/useApi';
import { formatCurrency, formatDate } from '@/shared/utils/formatters';

export const Events: React.FC = () => {
  const { data: events } = useEvents();
  const [filter, setFilter] = useState<'all' | 'published' | 'pending' | 'draft'>('all');
  const [search, setSearch] = useState('');

  const myEvents = (events || []).filter((e) => e.organizerId === 'org-001');

  return (
    <div className="space-y-8">
      <PageHeader
        title="My Organized Events"
        description="Manage listings, ticket inventories, and event registrations created by your organization."
        breadcrumbs={[{ label: 'Organizer Hub', href: '/organizer/dashboard' }, { label: 'Events' }]}
        actions={
          <Link to="/organizer/events/new">
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
              leftIcon={<Plus className="h-4 w-4" />}
            >
              Create New Event
            </Button>
          </Link>
        }
      />

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="w-full sm:w-80">
          <Input
            placeholder="Search my events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
          />
        </div>

        <div className="flex gap-2">
          {(['all', 'published', 'pending', 'draft'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                filter === tab
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myEvents.map((evt) => (
          <Card key={evt.id} className="p-6 border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <Badge variant="purple" size="sm" className="mb-2 uppercase">
                    {evt.category}
                  </Badge>
                  <h3 className="font-bold text-lg text-slate-900">{evt.title}</h3>
                </div>
                <Badge variant="success" size="sm">
                  {evt.status.toUpperCase()}
                </Badge>
              </div>

              <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {evt.description}
              </p>

              <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-purple-600" />
                  <span>{formatDate(evt.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-purple-600" />
                  <span>{evt.venue}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-bold text-slate-900">{formatCurrency(evt.price)}</span>
                  <span className="text-slate-500 font-mono">
                    {evt.totalSeats - evt.availableSeats} / {evt.totalSeats} sold
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <Button size="sm" variant="ghost">
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

