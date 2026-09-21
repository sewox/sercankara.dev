import { getCollection } from 'astro:content';
import { getMediumPosts } from './medium';

export interface UnifiedPost {
  title: string;
  description: string;
  pubDate: Date;
  url: string; // Local route (/thoughts/slug) OR Medium URL
  isExternal: boolean; // true if Medium post
  source: 'local' | 'medium';
  readingTime?: string;
  tags?: string[];
}

/**
 * Computes an estimated reading time from markdown content.
 */
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Returns all articles (local Markdown thoughts + build-time Medium RSS posts),
 * sorted descending by publication date.
 */
export async function getAllPosts(options?: {
  mediumUsername?: string;
}): Promise<UnifiedPost[]> {
  // 1. Fetch local Markdown collection
  const localArticles = await getCollection('thoughts', ({ data }) => {
    return !data.draft;
  });

  const localPosts: UnifiedPost[] = localArticles.map((article) => ({
    title: article.data.title,
    description: article.data.description,
    pubDate: new Date(article.data.pubDate),
    url: `/thoughts/${article.slug}`,
    isExternal: false,
    source: 'local' as const,
    readingTime: calculateReadingTime(article.body || ''),
    tags: article.data.tags,
  }));

  // 2. Fetch Medium RSS feed
  const mediumPosts = await getMediumPosts(options?.mediumUsername ?? 'sewox');

  // 3. Merge and sort descending by pubDate
  const all = [...localPosts, ...mediumPosts];

  return all.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}
