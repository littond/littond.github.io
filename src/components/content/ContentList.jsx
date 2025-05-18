import React, { useState, useEffect } from 'react';
import { ContentCard } from './ContentCard';
import { getContentItems, getAllTags } from '../../scripts/contentLoader';
import '../../styles/content/ContentList.css';

export const ContentList = ({ contentType, title }) => {
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        const contentItems = await getContentItems(contentType);
        setItems(contentItems);
        setTags(getAllTags(contentItems));
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [contentType]);

  const filteredItems = selectedTag === 'all'
    ? items
    : items.filter(item => item.tags && item.tags.includes(selectedTag));

  return (
    <div className="content-card-container">
      <h1 className="page-title">{title}</h1>

      {isLoading ? (
        <div className="loading">Loading content...</div>
      ) : (
        <>
          <div className="filter-container">
            <button 
              className={`filter-tag ${selectedTag === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedTag('all')}
            >
              All
            </button>
            {tags.map(tag => (
              <button
                key={tag}
                className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="no-results">No items found.</div>
          ) : (
            <div className="content-grid">
              {filteredItems.map((item, index) => (
                <div key={item.slug || index} className="content-grid-item">
                  <ContentCard item={item} contentType={contentType} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}; 