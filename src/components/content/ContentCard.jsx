import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/content/ContentCard.css';
import '../../styles/utils/site_color.css';

export const ContentCard = ({ item, contentType }) => {
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="content-card quaternary-bg">
      <h2 className="card-title secondary-text">{item.title}</h2>
      <div className="card-meta tertiary-text">
        <span className="card-date">{formattedDate}</span>
        <div className="card-tags">
          {item.tags.map(tag => (
            <span key={tag} className="card-tag tertiary-bg">{tag}</span>
          ))}
        </div>
      </div>
      <p className="card-excerpt tertiary-text">{item.excerpt}</p>
      <Link to={`/${contentType}/${item.slug}`} className="accent-text read-more">
        Read More →
      </Link>
    </div>
  );
}; 