import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getContentItems, getContentItemBySlug } from '../../scripts/contentLoader';
import { MarkdownRenderer } from './MarkdownRenderer';
import { Chip } from '../utils/Chip';
import '../../styles/content/ContentDetail.css';
import '../../styles/utils/site_color.css';

export const ContentDetail = ({ contentType }) => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        const contentItems = await getContentItems(contentType);
        const foundItem = getContentItemBySlug(contentItems, slug);
        
        if (foundItem) {
          setItem(foundItem);
        } else {
          setError('Content not found');
        }
      } catch (error) {
        console.error('Error loading content:', error);
        setError('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [contentType, slug]);

  if (isLoading) {
    return <div className="content-loader primary-text">Loading content...</div>;
  }

  if (error || !item) {
    return (
      <div className="content-error primary-text">
        <h1>Content Not Found</h1>
        <p>{error || 'The requested content could not be found.'}</p>
        <Link to={`/${contentType}`} className="back-link">
          ← Back to {contentType === 'blog' ? 'Blog' : 'Projects'}
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="content-page">
      <div className="content-header">
        <h1 className="content-title primary-text">{item.title}</h1>
        <div className="content-meta tertiary-text">
          <div className="content-date">{formattedDate}</div>
          <div className="content-tags">
            {item.tags && item.tags.map(tag => (
              <Chip key={tag} size="small">{tag}</Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="content-body link-text">
        <MarkdownRenderer content={item.content} />
      </div>

      <div className="content-footer">
        <Link to={`/${contentType}`} className="back-link accent-text">
          ← Back to {contentType === 'blog' ? 'Blog' : 'Projects'}
        </Link>
      </div>
    </div>
  );
}; 