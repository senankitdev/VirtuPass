import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { PageHeader, EventCard, LoadingState, ErrorState, Input } from '@/shared/components';
import { useEvents } from '@/shared/hooks/useApi';
import type { Event } from '@/shared/types';

export const PublicEventsPage: React.FC = () => {
  const { data: events, isLoading, isError, refetch } = useEvents();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'technical', 'cultural', 'sports', 'workshop'];

  const filteredEvents = (events || []).filter((event: Event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase()) ||
      event.venue.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageHeader
        title="College Fest Events"
        description="Explore technical symposiums, cultural nights, gaming battles, and guest lectures across the campus."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Events' }]}
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <div className="w-full md:w-96">
          <Input
            placeholder="Search events, venues, keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      {isLoading ? (
        <LoadingState message="Fetching events from backend..." />
      ) : isError ? (
        <ErrorState
          title="Could not connect to backend"
          message="Make sure the VirtuPass Fastify server is running at http://localhost:4000"
          onRetry={refetch}
        />
      ) : filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-base font-semibold text-slate-800">No events matched your search</p>
          <p className="text-xs text-slate-500 mt-1">Try searching for other keywords or select 'all'.</p>
        </div>
      )}
    </div>
  );
};

