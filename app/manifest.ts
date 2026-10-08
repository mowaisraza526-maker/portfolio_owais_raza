import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}, ${site.role}`, short_name: 'Owais Raza', description: site.description,
    start_url: '/', display: 'standalone', background_color: '#FFFFFF', theme_color: '#FFFFFF',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
