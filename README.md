# Personal Website

This is my personal website, built with React and Vite, showcasing my projects and blog posts.

## Blog and Projects Content

### Adding Blog Posts

1. Create a new markdown file in `src/content/blogs/` with a descriptive filename
2. Add the required front matter at the top of the file:

```md
---
title: Your Blog Title
date: YYYY-MM-DD
slug: unique-url-slug
tags: [Tag1, Tag2, Tag3]
excerpt: A brief summary of the blog post (appears on the cards)
---

# Your blog content starts here

Content in markdown format...
```

3. Write your blog post content in Markdown below the front matter

### Adding Projects

1. Create a new markdown file in `src/content/projects/` with a descriptive filename
2. Add the required front matter at the top of the file:

```md
---
title: Project Name
date: YYYY-MM-DD
slug: unique-project-slug
tags: [Technology1, Technology2, Technology3]
excerpt: A brief description of the project (appears on the cards)
---

# Project Title

Project content in markdown format...
```

3. Write your project details in Markdown below the front matter

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is set up to deploy to GitHub Pages. When you push to the main branch, the site will be automatically built and deployed.
