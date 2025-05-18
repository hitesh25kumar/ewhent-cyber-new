import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  as?: React.ElementType;
  to?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  as: Component = 'button',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg';
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm focus:ring-primary-500',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white shadow-sm focus:ring-secondary-500',
    outline: 'border-2 hover:bg-primary-50 border-current focus:ring-primary-500',
    ghost: 'hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
  };
  
  const sizeStyles = {
    xs: 'text-xs px-2.5 py-1.5',
    sm: 'text-sm px-3 py-2',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;
  
  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Button;