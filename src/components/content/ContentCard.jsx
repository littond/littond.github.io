import React from 'react';
import { Link } from 'react-router-dom';
import { Chip } from '../utils/Chip';
import '../../styles/content/ContentCard.css';
import '../../styles/utils/site_color.css';

export const ContentCard = ({ item, contentType, referrer }) => {
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Build the link with referrer if provided
  const linkTo = referrer 
    ? `/${contentType}/${item.slug}?from=${referrer}` 
    : `/${contentType}/${item.slug}`;

  return (
    <div className="content-card primary-bg">
      <h2 className="card-title secondary-text">{item.title}</h2>
      <div className="card-meta tertiary-text">
        <span className="card-date">{formattedDate}</span>
        <div className="card-tags">
          {item.tags.map(tag => (
            <Chip key={tag} size="small">{tag}</Chip>
          ))}
        </div>
      </div>
      <p className="card-excerpt tertiary-text">{item.excerpt}</p>
      <Link to={linkTo} className="accent-text read-more">
        Read More →
      </Link>
    </div>
  );
}; 