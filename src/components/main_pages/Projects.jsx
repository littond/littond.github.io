import React from 'react';
import { ContentList } from '../content/ContentList';
import '../../styles/main_pages/Projects.css';

export const Projects = () => {
  return (
    <ContentList 
      contentType="projects"
      title="My Projects"
      subtitle="Check out some of the projects I've been working on"
    />
  );
}; 