import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Base properties shared by all button variations
 */
type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

/**
 * Type for button rendered as an HTML button element
 */
type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

/**
 * Type for button rendered as an HTML anchor element
 */
type ButtonAsAnchorProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

/**
 * Type for button rendered as a React Router Link component
 */
type ButtonAsLinkProps = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, 'className'> & {
    as: typeof Link;
  };

/**
 * Combined button props type union
 */
type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps;

/**
 * Versatile Button component
 * Can be rendered as a button, anchor, or React Router Link
 * Supports different sizes, variants, and states
 *
 * @param props - Button properties
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  as = 'button',
  ...props
}) => {
  // Common class names for all button types
  const baseClasses =
    'font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary:
      'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-800',
    outline:
      'border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-500 dark:border-gray-600 dark:hover:bg-gray-800 dark:text-gray-300',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  // Render as React Router Link
  if (as === Link) {
    return (
      <Link className={buttonClasses} {...(props as React.ComponentProps<typeof Link>)}>
        {children}
      </Link>
    );
  }

  // Render as anchor tag
  if (as === 'a') {
    return (
      <a className={buttonClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  // Default: render as button
  return (
    <button className={buttonClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
