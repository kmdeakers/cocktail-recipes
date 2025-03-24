import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ 
    label, 
    helperText, 
    error, 
    leftIcon, 
    rightIcon, 
    className = '', 
    fullWidth = false,
    ...props 
  }, ref) {
    // Container class
    const containerClass = `flex flex-col ${fullWidth ? 'w-full' : ''}`;
    
    // Input wrapper class
    const wrapperClass = 'relative flex items-center';
    
    // Base input class
    let inputClass = 'flex h-10 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
    
    // Error state
    if (error) {
      inputClass += ' border-red-500 focus:ring-red-500';
    } else {
      inputClass += ' focus:ring-blue-500';
    }
    
    // Left icon padding
    if (leftIcon) {
      inputClass += ' pl-10';
    }
    
    // Right icon padding
    if (rightIcon) {
      inputClass += ' pr-10';
    }
    
    // Full width
    if (fullWidth) {
      inputClass += ' w-full';
    }
    
    // Add custom classes
    inputClass += ` ${className}`;
    
    return (
      <div className={containerClass}>
        {label && (
          <label 
            className="mb-2 text-sm font-medium text-gray-700"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        
        <div className={wrapperClass}>
          {leftIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={inputClass}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(helperText || error) && (
          <p className={`mt-1 text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
