import React from 'react';

export const MarkdownRenderer = ({ content }) => {
  // A very basic markdown renderer
  // In a production app, you would use a dedicated markdown parser like 'marked' or 'remark'
  
  // Function to convert markdown to HTML (very simplified)
  const convertMarkdownToHtml = (markdown) => {
    if (!markdown) return '';
    
    // Replace headers
    let html = markdown
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
      .replace(/^##### (.*$)/gm, '<h5>$1</h5>')
      .replace(/^###### (.*$)/gm, '<h6>$1</h6>');
    
    // Replace bold and italic
    html = html
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\_\_(.*?)\_\_/g, '<strong>$1</strong>')
      .replace(/\_(.*?)\_/g, '<em>$1</em>');
    
    // Replace links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    
    // Replace lists
    html = html.replace(/^\* (.*$)/gm, '<ul><li>$1</li></ul>');
    html = html.replace(/^- (.*$)/gm, '<ul><li>$1</li></ul>');
    html = html.replace(/^([0-9]+)\. (.*$)/gm, '<ol><li>$2</li></ol>');
    
    // Replace paragraphs (must be after all other replacements)
    html = html.replace(/^(?!<[a-z])(.*$)/gm, '<p>$1</p>');
    
    // Combine adjacent list items
    html = html
      .replace(/<\/ul><ul>/g, '')
      .replace(/<\/ol><ol>/g, '');
    
    return html;
  };
  
  return (
    <div 
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(content) }}
    />
  );
}; 