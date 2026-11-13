import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { formatCurrency, formatDate, formatTime } from '../utils/formatters';
import type { Event } from '../types';

export interface EventCardProps {
  event: Event;
  showActions?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, showActions = true }) => {
  const categoryVariantMap: Record<Event['category'], 'default' | 'success' | 'warning' | 'danger' | 'info' | 'purple'> = {
    cultural: 'purple',
    technical: 'info',
    sports: 'success',
    workshop: 'warning',
    other: 'default',
  };

  return (
    <Card hoverEffect className="flex flex-col h-full bg-white group">
      {/* Event Image Banner */}
      <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-indigo-800 via-indigo-900 to-purple-900 flex items-center justify-center p-4">
            <span className="text-white/60 font-semibold text-lg">{event.title}</span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={categoryVariantMap[event.category] || 'default'} size="sm" className="shadow-sm">
            {event.category.toUpperCase()}
          </Badge>
          {event.status === 'published' && (
            <Badge variant="success" size="sm" className="shadow-sm">
              AVAILABLE
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-md font-bold text-slate-900 text-sm">
          {event.price === 0 ? 'FREE' : formatCurrency(event.price)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {event.title}
          </h3>
          <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          {/* Metadata */}
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
              <span>{formatDate(event.date)}</span>
              <span className="text-slate-300">•</span>
              <Clock className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
              <span>{formatTime(event.time)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5 text-slate-400" />
                {event.availableSeats} / {event.totalSeats} seats left
              </span>
              <span className="font-medium text-slate-600 truncate max-w-[140px]">
                By {event.organizerName}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {showActions && (
          <div className="mt-5 pt-3 border-t border-slate-100">
            <Link to={`/events/${event.id}`} className="block">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-between group-hover:border-indigo-600 group-hover:text-indigo-600"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                View Details
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
};

