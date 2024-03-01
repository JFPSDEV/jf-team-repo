import { MetadataRoute } from 'next';

import { routes } from '@/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return routes.map((url) => ({
    url: url,
    lastModified: new Date(),
  }));
}
