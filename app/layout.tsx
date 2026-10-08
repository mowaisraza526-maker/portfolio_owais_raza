import type { Metadata, Viewport } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';
import { site, education } from '@/content/site';

const font = Inter_Tight({ subsets: ['latin'], display: 'swap', variable: '--font-sans', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'Frontend Developer Karachi', 'WordPress Developer Pakistan', 'Shopify Developer Pakistan', 'WooCommerce Developer',
    'Figma to code', 'Responsive web design', 'Core Web Vitals', 'Technical SEO', 'Muhammad Owais Raza',
  ],
  category: 'technology',
  alternates: { canonical: '/' },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: 'profile', locale: 'en_US', url: site.url, siteName: site.name, title: site.title, description: site.description,
    firstName: 'Muhammad Owais', lastName: 'Raza', username: 'mowaisraza526-maker',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: `${site.name}, ${site.role} in ${site.location}` }],
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/og.jpg'] },
};
// Light-only design: tell browsers (and Android/Samsung auto-dark) not to invert it.
export const viewport: Viewport = { themeColor: '#FFFFFF', colorScheme: 'light', width: 'device-width', initialScale: 1 };

const person = {
  '@type': 'Person', '@id': `${site.url}/#person`, name: site.name, givenName: 'Muhammad Owais', familyName: 'Raza',
  jobTitle: site.role, description: site.description, url: site.url, image: `${site.url}/images/portrait-main.webp`,
  email: `mailto:${site.email}`, telephone: site.phone.replace(/\s/g, ''),
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressRegion: 'Sindh', addressCountry: 'PK' },
  nationality: { '@type': 'Country', name: 'Pakistan' },
  knowsLanguage: ['English', 'Urdu'],
  sameAs: [site.linkedin, site.github],
  knowsAbout: ['WordPress', 'WooCommerce', 'Shopify Liquid', 'Responsive UI', 'Figma to code', 'Core Web Vitals', 'Technical SEO', 'Vue.js', 'Angular', 'Tailwind CSS'],
  worksFor: { '@type': 'Organization', name: 'Team Reactivate Pvt. Ltd.' },
  alumniOf: education.map((e) => ({ '@type': 'EducationalOrganization', name: e.place })),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url, name: site.name, inLanguage: 'en', publisher: { '@id': `${site.url}/#person` } },
    { '@type': 'ProfilePage', '@id': `${site.url}/#profile`, url: site.url, name: site.title, inLanguage: 'en', isPartOf: { '@id': `${site.url}/#website` }, mainEntity: { '@id': `${site.url}/#person` } },
    person,
  ],
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
