'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ----------------------------------------------------------------
   Base field variants (shared between input and textarea)
---------------------------------------------------------------- */
const fieldVariants = cva(
  [
    'block w-full',
    'bg-bg-warm-white',
    'border border-neutral-200',
    'text-neutral-800 placeholder:text-neutral-500',
    'rounded-[var(--radius-DEFAULT)]',
    'px-4 py-3',
    'min-h-[2.75rem]',
    'font-body text-base',
    'transition-all duration-[200ms] ease-[var(--ease-default)]',
    'outline-none',
    'hover:border-neutral-300',
    'focus:border-indigo-500 focus:ring-3 focus:ring-indigo-500/[0.12]',
    'disabled:bg-neutral-100 disabled:border-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      hasError: {
        true: [
          'border-error',
          'focus:border-error focus:ring-error/[0.10]',
          'hover:border-error',
        ],
        false: [],
      },
    },
    defaultVariants: {
      hasError: false,
    },
  }
);

/* ----------------------------------------------------------------
   Label
---------------------------------------------------------------- */
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

function Label({ children, required, className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        'block text-sm font-medium text-neutral-700 mb-[0.375rem]',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1 text-error" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

/* ----------------------------------------------------------------
   Helper / Error text
---------------------------------------------------------------- */
interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: boolean;
}

function HelperText({ children, error, className, ...props }: HelperTextProps) {
  return (
    <p
      className={cn(
        'mt-1.5 text-xs',
        error ? 'text-error' : 'text-neutral-500',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

/* ----------------------------------------------------------------
   Text / Email / Tel Input
---------------------------------------------------------------- */
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof fieldVariants> {
  type?: 'text' | 'email' | 'tel' | 'password' | 'search' | 'url' | 'number';
  label?: string;
  helperText?: string;
  errorMessage?: string;
  wrapperClassName?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      helperText,
      errorMessage,
      wrapperClassName,
      hasError,
      required,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const isError = hasError || Boolean(errorMessage);

    return (
      <div className={cn('flex flex-col', wrapperClassName)}>
        {label && (
          <Label htmlFor={inputId} required={required}>
            {label}
          </Label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          required={required}
          aria-required={required}
          aria-invalid={isError || undefined}
          aria-describedby={
            errorMessage ? errorId : helperText ? helperId : undefined
          }
          className={cn(fieldVariants({ hasError: isError }), className)}
          {...props}
        />
        {errorMessage && (
          <HelperText id={errorId} error role="alert">
            {errorMessage}
          </HelperText>
        )}
        {!errorMessage && helperText && (
          <HelperText id={helperId}>{helperText}</HelperText>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

/* ----------------------------------------------------------------
   Textarea
---------------------------------------------------------------- */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof fieldVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  wrapperClassName?: string;
  required?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      wrapperClassName,
      hasError,
      required,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const isError = hasError || Boolean(errorMessage);

    return (
      <div className={cn('flex flex-col', wrapperClassName)}>
        {label && (
          <Label htmlFor={inputId} required={required}>
            {label}
          </Label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          required={required}
          aria-required={required}
          aria-invalid={isError || undefined}
          aria-describedby={
            errorMessage ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            fieldVariants({ hasError: isError }),
            'resize-y min-h-[7rem]',
            className
          )}
          {...props}
        />
        {errorMessage && (
          <HelperText id={errorId} error role="alert">
            {errorMessage}
          </HelperText>
        )}
        {!errorMessage && helperText && (
          <HelperText id={helperId}>{helperText}</HelperText>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

/* ----------------------------------------------------------------
   Select
---------------------------------------------------------------- */
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof fieldVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  wrapperClassName?: string;
  required?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      wrapperClassName,
      hasError,
      required,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const isError = hasError || Boolean(errorMessage);

    return (
      <div className={cn('flex flex-col', wrapperClassName)}>
        {label && (
          <Label htmlFor={inputId} required={required}>
            {label}
          </Label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            required={required}
            aria-required={required}
            aria-invalid={isError || undefined}
            aria-describedby={
              errorMessage ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              fieldVariants({ hasError: isError }),
              'appearance-none pr-10 cursor-pointer',
              className
            )}
            {...props}
          >
            {children}
          </select>
          {/* Chevron icon */}
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
            aria-hidden="true"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        {errorMessage && (
          <HelperText id={errorId} error role="alert">
            {errorMessage}
          </HelperText>
        )}
        {!errorMessage && helperText && (
          <HelperText id={helperId}>{helperText}</HelperText>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Input, Textarea, Select, Label, HelperText, fieldVariants };
