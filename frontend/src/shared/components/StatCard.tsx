import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from './Card';
import { cn } from '../utils/cn';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string | number;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  colorVariant?: 'indigo' | 'emerald' | 'amber' | 'rose' | 'purple' | 'blue';
  description?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon: Icon,
  trend,
  colorVariant = 'indigo',
  description,
}) => {
  const colorMap = {
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-100',
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-100',
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-100',
    },
    rose: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-100',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-100',
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-100',
    },
  };

  const style = colorMap[colorVariant];

  return (
    <Card className="p-6 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase">{label}</p>
        <div className={cn('p-2.5 rounded-xl border', style.bg, style.text, style.border)}>
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{value}</span>
      </div>

      {(trend || description) && (
        <div className="mt-3 flex items-center gap-2 text-xs">
          {trend && (
            <span
              className={cn(
                'inline-flex items-center gap-1 font-semibold px-1.5 py-0.5 rounded-md',
                trend.direction === 'up'
                  ? 'bg-emerald-50 text-emerald-700'
                  : trend.direction === 'down'
                  ? 'bg-rose-50 text-rose-700'
                  : 'bg-slate-100 text-slate-700'
              )}
            >
              {trend.direction === 'up' ? (
                <TrendingUp className="h-3 w-3" />
              ) : trend.direction === 'down' ? (
                <TrendingDown className="h-3 w-3" />
              ) : (
                <Minus className="h-3 w-3" />
              )}
              {trend.value}
            </span>
          )}
          <span className="text-slate-500 font-medium">{trend?.label || description}</span>
        </div>
      )}
    </Card>
  );
};

