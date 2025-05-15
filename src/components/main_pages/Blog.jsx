import React from 'react';
import '../../styles/Blog.css';

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      date: 'June 15, 2023',
      excerpt: 'Learn how to build your first React application from scratch.',
      tags: ['React', 'JavaScript', 'Web Development']
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox',
      date: 'July 3, 2023',
      excerpt: 'Understanding when to use CSS Grid and when to use Flexbox for modern layouts.',
      tags: ['CSS', 'Web Design', 'Layout']
    },
    {
      id: 3,
      title: 'State Management in React',
      date: 'August 10, 2023',
      excerpt: 'Exploring different state management options in React applications.',
      tags: ['React', 'State Management', 'Web Development']
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="page-title">Blog</h1>
      <p className="page-subtitle">Thoughts, ideas, and explorations in tech</p>
      
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="post-tag">{tag}</span>
                ))}
              </div>
            </div>
            <p className="post-excerpt">{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};