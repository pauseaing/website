export type GlobalNewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

const FEED_URL = 'https://pauseai.substack.com/feed';

const FALLBACK_ITEMS: GlobalNewsItem[] = [
  {
    title: 'PauseAI Global: Latest movement updates',
    link: 'https://pauseai.substack.com',
    pubDate: 'Updated recently',
    source: 'PauseAI Global',
  },
  {
    title: 'Read the PauseAI proposal',
    link: 'https://pauseai.info/proposal',
    pubDate: 'Reference',
    source: 'PauseAI Global',
  },
  {
    title: 'Explore global chapter activities',
    link: 'https://pauseai.info/communities',
    pubDate: 'Reference',
    source: 'PauseAI Global',
  },
];

function decodeXmlEntities(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .trim();
}

function parseRssItems(xml: string): GlobalNewsItem[] {
  const itemRegex = /<item>[\s\S]*?<\/item>/gi;
  const items = xml.match(itemRegex) ?? [];

  return items
    .map((itemXml) => {
      const title = itemXml.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '';
      const link = itemXml.match(/<link>([\s\S]*?)<\/link>/i)?.[1] ?? '';
      const pubDate = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)?.[1] ?? '';

      return {
        title: decodeXmlEntities(title),
        link: decodeXmlEntities(link),
        pubDate: decodeXmlEntities(pubDate),
        source: 'PauseAI Global',
      };
    })
    .filter((item) => item.title.length > 0 && item.link.length > 0)
    .slice(0, 3);
}

export async function getGlobalNews(): Promise<GlobalNewsItem[]> {
  try {
    const response = await fetch(FEED_URL, {
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
    });

    if (!response.ok) {
      return FALLBACK_ITEMS;
    }

    const xml = await response.text();
    const parsed = parseRssItems(xml);
    return parsed.length > 0 ? parsed : FALLBACK_ITEMS;
  } catch {
    return FALLBACK_ITEMS;
  }
}
