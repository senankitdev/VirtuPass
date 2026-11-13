import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-xl active:scale-[0.98]';

    const variants = {
      primary:
        'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-200 focus:ring-indigo-500 border border-transparent',
      secondary:
        'bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-400 border border-transparent',
      outline:
        'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus:ring-indigo-500 shadow-sm',
      ghost:
        'text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-400 border border-transparent',
      danger:
        'bg-rose-600 text-white hover:bg-rose-700 shadow-sm shadow-rose-200 focus:ring-rose-500 border border-transparent',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-lg',
      md: 'text-sm px-4 py-2 gap-2 rounded-xl',
      lg: 'text-base px-6 py-2.5 gap-2.5 rounded-xl',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

