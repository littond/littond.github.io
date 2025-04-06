import React from 'react'
import { MarkdownRenderer } from '../blog_components/MarkdownRenderer'

const markdown = "# hello";

export const Blog = () => {
    return (
        <div>
            Blog Page
            <MarkdownRenderer content={markdown} />
        </div>
    );
}
