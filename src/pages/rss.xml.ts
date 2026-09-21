import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const articles = await getCollection('thoughts', ({ data }) => !data.draft);
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  const siteUrl = context.site?.toString() || 'https://sercankara.dev';

  const itemsXml = sortedArticles
    .map((article) => {
      const postUrl = new URL(`/thoughts/${article.slug}`, siteUrl).toString();
      const pubDate = new Date(article.data.pubDate).toUTCString();

      return `    <item>
      <title><![CDATA[${article.data.title}]]></title>
      <description><![CDATA[${article.data.description}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sercan Kara — Thoughts &amp; Engineering Notes</title>
    <description>Writings on distributed systems, high-throughput architectures, Go, PHP, and cloud infrastructure.</description>
    <link>${siteUrl}</link>
    <atom:link href="${new URL('/rss.xml', siteUrl).toString()}" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
