import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => data.draft !== true))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Cooties@Blog',
    description: 'Technical write-ups on AI security, LLM pentesting, and supply-chain vulnerability research.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: [post.data.category, ...(post.data.tags ?? [])],
      link: `/blog/${post.slug}/`,
    })),
  });
}
