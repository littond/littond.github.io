// MarkdownRenderer.jsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css' // or any other theme

export const MarkdownRenderer = ({ content }) => {
    return <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
    >
        {content}
    </ReactMarkdown>
}