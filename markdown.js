import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownContent(type, slug) {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(content);
  
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    contentHtml,
    ...data,
  };
}

export function getAllMarkdownFiles(type) {
  const fullPath = path.join(contentDirectory, type);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(fullPath);
  
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const slug = name.replace(/\.md$/, '');
      const fullFilePath = path.join(fullPath, name);
      const fileContents = fs.readFileSync(fullFilePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        ...data,
      };
    })
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date || 0) - new Date(a.date || 0);
    });
}

export function getBlogPosts() {
  return getAllMarkdownFiles('blog');
}

export function getDevelopmentUpdates() {
  return getAllMarkdownFiles('development');
}

