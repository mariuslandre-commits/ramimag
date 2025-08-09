import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const CASE_DIR = path.join(process.cwd(), 'content', 'case-studies');

export async function getCaseStudyBySlug(slug: string) {
  const fullPath = path.join(CASE_DIR, `${slug}.mdx`);
  try {
    const file = await fs.readFile(fullPath, 'utf8');
    const { content, data } = matter(file);
    return { content, frontMatter: data as any };
  } catch {
    return null;
  }
}

export async function listCaseStudies() {
  const files = await fs.readdir(CASE_DIR);
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}
