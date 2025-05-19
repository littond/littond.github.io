import React from 'react';
import '../../styles/utils/Section_Title.css';
import '../../styles/utils/site_color.css';

export const SectionTitle = ({ children, className = '' }) => {
  return (
    <div className={`section-title-container ${className}`}>
      <h2 className="section-title accent-text">{children}</h2>
      <div className="section-title-underline"></div>
    </div>
  );
};
