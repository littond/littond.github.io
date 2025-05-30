import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentCard } from './ContentCard';
import { SectionTitle } from '../utils/Section_Title';
import { getContentItems } from '../../scripts/contentLoader';
import '../../styles/content/LatestContent.css';
import '../../styles/utils/site_color.css';

export const LatestContent = ({ contentType }) => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        const contentItems = await getContentItems(contentType);
        // Get the first (most recent) item
        if (contentItems.length > 0) {
          setItem(contentItems[0]);
        }
      } catch (error) {
        console.error(`Error loading latest ${contentType}:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [contentType]);

  const title = contentType === 'blog' ? 'Latest Blog Post' : 'Latest Project';

  return (
    <div className="latest-content-section">
      <div className="section-header">
        <SectionTitle className="with-view-link">{title}</SectionTitle>
      </div>
      
      {isLoading ? (
        <div className="loading-content primary-text">Loading content...</div>
      ) : item ? (
          <ContentCard 
            item={item} 
            contentType={contentType} 
            referrer="home"
          />
      ) : (
        <div className="no-content primary-text">No {contentType} content found.</div>
      )}
    </div>
  );
}; 