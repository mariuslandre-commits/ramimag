import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mariusandre.dev'; // TODO replace
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/journey`, priority: 0.7 },
  ];
}
