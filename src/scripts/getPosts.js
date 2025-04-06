import fs from 'fs';
import path from 'path';

// Specify the directory to scan
const postsDir = path.join(__dirname, 'src', 'posts');

// Function to list all .md files in the 'posts' directory
export const listPostFiles = () => {
    try {
        // Read the directory contents
        const files = fs.readdirSync(postsDir);

        // Filter the files to include only .md files
        const markdownFiles = files.filter(file => file.endsWith('.md'));

        // Log the list of markdown file names
        console.log('Markdown files in src/posts:', markdownFiles);
        return markdownFiles;
    } catch (err) {
        console.error('Error reading the directory:', err);
    }
};

export const readFileContents = (filePath) => {
    try {
        // Read the file's contents
        const content = fs.readFileSync(filePath, 'utf-8');
        return content;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
};

