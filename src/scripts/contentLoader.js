/**
 * Content loader utility for blog posts and projects
 * Reads markdown files with front matter and returns structured content
 */

// Function to import all markdown files for a specific content type
export async function getContentItems(contentType) {
  // Use static glob patterns instead of dynamic ones
  const blogFiles = import.meta.glob('../content/blogs/*.md', { eager: true, query: '?raw', import: 'default' });
  const projectFiles = import.meta.glob('../content/projects/*.md', { eager: true, query: '?raw', import: 'default' });
  
  // Select the appropriate files based on content type
  const contentFiles = contentType === 'blog' ? blogFiles : projectFiles;
  
  // Process each file to extract front matter and content
  const items = Object.entries(contentFiles).map(([path, content]) => {
    // Extract front matter data
    const frontMatterPattern = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = content.match(frontMatterPattern);
    
    if (!match) {
      throw new Error(`Invalid front matter in file: ${path}`);
    }
    
    // Parse the front matter as YAML-like key-value pairs
    const frontMatterText = match[1];
    const metadata = {};
    
    // Extract title, date, slug, tags, and excerpt from front matter
    const titleMatch = frontMatterText.match(/title:\s*(.+)$/m);
    const dateMatch = frontMatterText.match(/date:\s*(.+)$/m);
    const slugMatch = frontMatterText.match(/slug:\s*(.+)$/m);
    const tagsMatch = frontMatterText.match(/tags:\s*\[(.*)\]/m);
    const excerptMatch = frontMatterText.match(/excerpt:\s*(.+)$/m);
    
    if (titleMatch) metadata.title = titleMatch[1].trim();
    if (dateMatch) metadata.date = dateMatch[1].trim();
    if (slugMatch) metadata.slug = slugMatch[1].trim();
    if (tagsMatch) {
      metadata.tags = tagsMatch[1]
        .split(',')
        .map(tag => tag.trim().replace(/['"]/g, ''));
    }
    if (excerptMatch) metadata.excerpt = excerptMatch[1].trim();
    
    // Extract content without front matter
    const contentWithoutFrontMatter = content.replace(frontMatterPattern, '');
    
    return {
      ...metadata,
      content: contentWithoutFrontMatter,
      path
    };
  });
  
  // Sort by date (most recent first)
  return items.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to get a specific content item by slug
export function getContentItemBySlug(items, slug) {
  return items.find(item => item.slug === slug);
}

// Function to get all unique tags from content items
export function getAllTags(items) {
  const tags = new Set();
  items.forEach(item => {
    (item.tags || []).forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
} 