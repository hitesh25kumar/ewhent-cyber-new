import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const routes = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/product', changefreq: 'weekly', priority: 0.8 },
  { url: '/solutions', changefreq: 'weekly', priority: 0.8 },
  { url: '/resources', changefreq: 'weekly', priority: 0.7 },
  { url: '/pricing', changefreq: 'weekly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/careers', changefreq: 'weekly', priority: 0.7 },
];

const stream = new SitemapStream({ hostname: 'https://ewhent.com' });
const data = routes.map((route) => ({
  url: route.url,
  changefreq: route.changefreq,
  priority: route.priority,
}));

streamToPromise(Readable.from(data).pipe(stream))
  .then((sitemap) => {
    createWriteStream('./public/sitemap.xml').write(sitemap.toString());
  })
  .catch(console.error);