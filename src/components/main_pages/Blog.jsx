import React from 'react';
import { ContentList } from '../content/ContentList';
import '../../styles/main_pages/Blog.css';

export const Blog = () => {
  return (
    <ContentList 
      contentType="blog"
      title="Blog"
    />
  );
};