import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-lg bg-brand-green px-4 py-2 text-white shadow-soft transition hover:bg-brand-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange',
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';
