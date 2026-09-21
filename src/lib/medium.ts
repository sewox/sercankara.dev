import { XMLParser } from 'fast-xml-parser';
import type { UnifiedPost } from './posts';

interface MediumItem {
  title?: string;
  link?: string;
  guid?: string;
  pubDate?: string;
  'content:encoded'?: string;
  description?: string;
  category?: string | string[];
}

interface MediumRSSResponse {
  rss?: {
    channel?: {
      item?: MediumItem | MediumItem[];
    };
  };
}

/**
 * Strips HTML tags and collapses whitespace to create a clean preview snippet.
 */
function cleanDescription(rawHtml?: string): string {
  if (!rawHtml) return '';
  const text = rawHtml
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > 200 ? `${text.slice(0, 197)}...` : text;
}

/**
 * Fetches and parses Medium RSS feed at build time.
 * Returns an empty array gracefully on network or parser errors.
 */
export async function getMediumPosts(
  username: string = 'sewox'
): Promise<UnifiedPost[]> {
  const feedUrl = `https://medium.com/feed/@${username}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(feedUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBuildBot/1.0)',
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(
        `[Medium RSS] Failed to fetch feed for @${username} (HTTP ${response.status}). Falling back to empty array.`
      );
      return [];
    }

    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '',
      parseTagValue: true,
      trimValues: true,
    });

    const parsed: MediumRSSResponse = parser.parse(xmlData);
    const rawItems = parsed.rss?.channel?.item;

    if (!rawItems) {
      return [];
    }

    const items: MediumItem[] = Array.isArray(rawItems) ? rawItems : [rawItems];

    return items
      .filter((item) => item.title && (item.link || item.guid))
      .map((item) => {
        const categories = item.category
          ? Array.isArray(item.category)
            ? item.category
            : [item.category]
          : [];

        const description = cleanDescription(
          item['content:encoded'] || item.description || ''
        );

        return {
          title: item.title || 'Untitled',
          description,
          pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
          url: item.link || item.guid || '',
          isExternal: true,
          source: 'medium' as const,
          tags: categories.filter((c): c is string => typeof c === 'string'),
        };
      });
  } catch (error) {
    console.warn(
      `[Medium RSS] Could not load Medium feed for @${username}: ${(error as Error).message}. Continuing with local posts.`
    );
    return [];
  }
}
