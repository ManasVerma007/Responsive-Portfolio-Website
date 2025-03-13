import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  href, 
  to, 
  className = "", 
  ...props 
}, ref) => {
  
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";
  
  const variants = {
    // Ensure text is white in both light and dark modes for primary
    primary: "bg-accent hover:bg-accent-hover text-white dark:bg-accent-dark dark:hover:bg-accent-dark/90 dark:text-white",
    // Better contrast for secondary buttons
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white dark:border-accent-dark dark:text-accent-dark dark:hover:bg-accent-dark dark:hover:text-white",
    // Better contrast for ghost buttons
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200",
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  
  const allClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses} ref={ref} {...props}>
        {children}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className={allClasses} ref={ref} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={allClasses} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;