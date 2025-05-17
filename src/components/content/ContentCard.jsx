import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/content/ContentCard.css';

export const ContentCard = ({ item, contentType }) => {
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="content-card">
      <h2 className="card-title">{item.title}</h2>
      <div className="card-meta">
        <span className="card-date">{formattedDate}</span>
        <div className="card-tags">
          {item.tags.map(tag => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>
      </div>
      <p className="card-excerpt">{item.excerpt}</p>
      <Link to={`/${contentType}/${item.slug}`} className="read-more">
        Read More →
      </Link>
    </div>
  );
}; 