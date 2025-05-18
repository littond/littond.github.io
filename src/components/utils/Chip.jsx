import React from 'react';
import '../../styles/utils/Chip.css';

export const Chip = ({ 
  children, 
  onClick, 
  className = '', 
  bgColorClass = 'secondary-bg', 
  textColorClass = 'tertiary-text',
  size = 'medium',
  isActive = false
}) => {
  const baseClasses = 'chip';
  const sizeClass = `chip-${size}`;
  const activeClass = isActive ? 'active' : '';
  const activeTextClass = isActive ? 'primary-text' : textColorClass;
  
  const allClasses = [
    baseClasses,
    bgColorClass,
    activeTextClass,
    sizeClass,
    activeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={allClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};
