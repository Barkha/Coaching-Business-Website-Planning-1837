import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme/ThemeProvider';

const Logo = ({ variant = 'default', className = '' }) => {
  const theme = useTheme();
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      {variant === 'image' ? (
        <img 
          src={theme.logo.main} 
          alt={theme.logo.alt} 
          width={theme.logo.width} 
          height={theme.logo.height}
        />
      ) : (
        <h1 className={`text-2xl font-bold ${variant === 'light' ? 'text-white' : `text-${theme.colors.primary.main}`}`}>
          {theme.name}
        </h1>
      )}
    </Link>
  );
};

export default Logo;