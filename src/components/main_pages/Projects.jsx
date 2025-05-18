import React from 'react';
import { ContentList } from '../content/ContentList';
import '../../styles/main_pages/Projects.css';

export const Projects = () => {
  return (
    <div className="projects-container">
      <ContentList
        contentType="projects"
        title="Projects"
      />
    </div>
  );
}; 