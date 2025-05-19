---
title: Personal Portfolio Website
date: 2025-05-18
slug: personal-portfolio-website
tags: [React, Vite, GitHub Pages, CSS]
excerpt: A deep dive into the development of my personal portfolio website, exploring the tech stack, design decisions, and implementation details.
---

# Building My Personal Portfolio Website

## Overview

This portfolio website serves as a showcase of my work and a digital representation of my skills as a software engineer. The site you're currently browsing was built from the ground up with modern web technologies, focusing on a responsive design, and maintainability.

## Tech Stack

### Frontend Framework
The site is built with **React** - a popular JavaScript library for building user interfaces. React's component-based architecture allowed me to create reusable UI elements like the `Chip` component used throughout the site and the unified `SectionTitle` component that maintains consistent styling across different sections.

### Build Tool
I chose **Vite** as the build tool for its easy of use and easy static site genoration with React.

### Hosting & Deployment
The site is hosted on **GitHub Pages**, providing reliable, free hosting for static websites. This approach offers several benefits:

- Zero hosting costs
- High availability
- Seamless integration with my existing GitHub workflow

### Automated Workflow
I implemented 2 **GitHub Actions** to automate the deployment process, which:

1. Auto Deploys
    1. Builds the site when changes are pushed to the main branch
    2. Deploys the built files to GitHub Pages
2. Auto Updates Dev
    1. Synchronizes changes between the main and dev branches to ensure development stays up to date

This automation eliminates manual deployment steps and ensures the live site always reflects the latest approved changes.

## Notable Features

### Dynamic Routing with Static Hosting

One of the most interesting aspects of this site is how it handles routing. While GitHub Pages only serves static content, I wanted the site to have the feel of a multi-page application with clean URLs. 

I accomplished this using **React Router's HashRouter**, which enables client-side routing without requiring server configuration. This approach:

- Allows for navigation between different sections of the site
- Maintains browser history for back/forward navigation
- Permits direct linking to specific pages
- Works perfectly with static hosting like GitHub Pages

The content for blog posts and projects is stored as markdown files, processed at build time, and dynamically rendered based on the current route. This provides a seamless content management solution while maintaining the benefits of a static site.

### Responsive Design

The site is designed to provide an easy viewing experience across a range of devices:

- Simpole column based layouts that adapt to different screen sizes
- Touch-friendly navigation for mobile users

## Resources and Inspiration

### Design Inspiration
The initial design was inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/), which exemplifies clean, effective presentation of developer information. Though I ultimately strayed away from her design as I want a more simplistic approach to redereing pages on desktop vs mobile applcations. 

### Color Palette Development
The color scheme was carefully selected using:
- [Coolors](https://coolors.co/) for exploring color combinations
- [Realtime Colors](https://www.realtimecolors.com/) for visualizing the palette in context

### Development Assistance
Throughout the development process, I leveraged AI tools:
- **GPT and Cursor agents** helped streamline the coding process
- AI assistance was particularly useful when making simple but large changes accross the code base where I could provide an expample to the agent and have it manage the reset of a refactor.

## Code

This project is public, and the complete codebase is available on GitHub. Feel free to explore how it was built or use it as inspiration for your own portfolio site.

**Repository**: [littond.github.io](https://github.com/littond/littond.github.io)
