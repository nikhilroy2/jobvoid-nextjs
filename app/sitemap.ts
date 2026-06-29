import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jobvoid.com';
  
  // List all static routes
  const routes = [
    '',
    '/how-it-works',
    '/the-role',
    '/pay',
    '/faq',
    '/about',
    '/apply'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
