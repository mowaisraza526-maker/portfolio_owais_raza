import type { Metadata, Viewport } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';
import { site } from '@/content/site';

const font = Inter_Tight({ subsets: ['latin'], display: 'swap', variable: '--font-sans', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: site.url, siteName: site.name, title: `${site.name} — ${site.role}`, description: site.description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: `${site.name}, ${site.role}` }],
  },
  twitter: { card: 'summary_large_image', title: `${site.name} — ${site.role}`, description: site.description, images: ['/og.jpg'] },
};
export const viewport: Viewport = { themeColor: '#F6F2EA', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: site.role, url: site.url,
  email: `mailto:${site.email}`, address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  sameAs: [site.linkedin, site.github],
  knowsAbout: ['WordPress', 'WooCommerce', 'Shopify Liquid', 'Responsive UI', 'Core Web Vitals', 'Technical SEO', 'Vue.js', 'Angular'],
  worksFor: { '@type': 'Organization', name: 'Team Reactivate Pvt. Ltd.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
