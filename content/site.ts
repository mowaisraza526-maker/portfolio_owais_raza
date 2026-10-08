/**
 * Single source of truth for portfolio content (from the 2026 resume).
 * Edit text here — components contain no hard-coded copy.
 */
export const site = {
  name: 'Muhammad Owais Raza',
  first: 'Muhammad',
  last: 'Owais Raza',
  role: 'Frontend & WordPress Developer',
  url: 'https://owais-raza-portfolio-one.vercel.app',
  email: 'mowaisraza526@gmail.com',
  phone: '+92 313 1513035',
  phoneHref: 'tel:+923131513035',
  whatsapp: 'https://wa.me/923131513035?text=Hi%20Owais%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  timezone: 'PKT (UTC+5)',
  location: 'Karachi, Pakistan',
  linkedin: 'https://www.linkedin.com/in/muhammad-owais-raza-963885219',
  github: 'https://github.com/mowaisraza526-maker',
  resume: '/docs/Muhammad-Owais-Raza-Resume.pdf',
  resumeAts: '/docs/Muhammad-Owais-Raza-Resume-ATS.pdf',
  title: 'Muhammad Owais Raza | Frontend & WordPress Developer in Karachi, Pakistan',
  description:
    'Frontend & WordPress developer in Karachi, Pakistan with 4+ years of experience. Figma-to-code, WordPress/WooCommerce, Shopify themes, Core Web Vitals and technical SEO.',
  status: 'Open to remote and on-site roles',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = {
  line: 'Frontend developer at Team Reactivate, Karachi',
  value: '27+',
  label: 'production projects delivered',
  sub: '15+ live today, 8+ in active maintenance',
};

export const brands = ['Dawlance', 'Shan Foods', 'Lux', 'Pond’s', 'Sunsilk', 'TRESemmé', 'Doritos', 'Lipton', 'Red Bull', 'Dalda'];

export const intro = {
  heading:
    "I'm Muhammad Owais Raza, a frontend and WordPress developer who turns Figma designs into fast, responsive production interfaces.",
  body: 'I work from design handoff through QA, production fixes and deployment support, alongside designers, backend developers and project managers.',
};

export const counters = [
  { value: 4, suffix: '+', label: 'Years full-time' },
  { value: 27, suffix: '+', label: 'Production projects' },
  { value: 15, suffix: '+', label: 'Currently live' },
  { value: 8, suffix: '+', label: 'In active maintenance' },
];

export const statsStatement =
  'Responsive, performance-minded interfaces across WordPress, Shopify, Laravel-based platforms and internal applications.';

export const services = [
  {
    title: 'WordPress & WooCommerce',
    text: 'Custom themes and plugin work, built from Figma designs and delivered with staging-to-live support.',
    bullets: ['Custom themes, ACF and custom post types', 'Elementor Pro and Gutenberg builds', 'WooCommerce, WPML and Polylang', 'Migrations, cPanel, maintenance and security'],
    image: '/images/shanfoods.webp', alt: 'Shan Foods website, built on WordPress', w: 1280, h: 800,
  },
  {
    title: 'Shopify themes',
    text: 'Liquid themes with flexible sections, schema settings and the product and cart experience that stores actually use.',
    bullets: ['Sections, blocks and settings schema', 'Metafields and metaobjects', 'Product and collection templates, cart UI', 'Variants, filters, search and theme publishing'],
    image: '/images/bentokid.webp', alt: 'Bento Kids Shopify storefront', w: 1280, h: 800,
  },
  {
    title: 'UI engineering',
    text: 'Pixel-accurate, responsive interfaces with reusable components, design tokens and light and dark themes.',
    bullets: ['HTML5, CSS3/SCSS, Tailwind CSS', 'Figma-to-code, mobile-first layouts', 'Design tokens and theming', 'GSAP and AOS interactions'],
    image: '/images/tms-people.webp', alt: 'TMS People HRMS dashboard', w: 1280, h: 800,
  },
  {
    title: 'Performance, SEO & QA',
    text: 'Lighthouse and Core Web Vitals work, technical SEO and cross-browser QA before and after release.',
    bullets: ['Core Web Vitals and PageSpeed', 'Image, font and resource optimization', 'Technical and on-page SEO', 'Cross-browser and responsive testing'],
    image: '/images/makebranded.webp', alt: 'MakeBranded platform homepage', w: 1280, h: 747,
  },
];

export const strengths = [
  { title: 'Design-accurate', text: 'Figma handoff turned into pixel-accurate, responsive builds, with QA before it reaches production.', icon: 'ruler' },
  { title: 'Performance-minded', text: 'Recorded Lighthouse lab scores of 94 or higher on performance for HRSI and MakeBranded.', icon: 'gauge' },
  { title: 'Production-ready', text: 'Trusted with urgent production issues, cross-browser defects and responsive fixes.', icon: 'shield' },
  { title: 'Multilingual and RTL', text: 'WPML, Polylang, language switchers and English/Arabic RTL interfaces.', icon: 'globe' },
];

export const ctaStrip = 'Have a design that needs to ship fast, responsive and pixel-accurate? Let’s build it.';

export type Project = {
  slug: string; title: string; category: string; stack: string; role: string; url?: string; image?: string; alt?: string; w?: number; h?: number; note?: string;
};

export const projects: Project[] = [
  { slug: 'tms-people', role: 'Frontend owner, end to end', title: 'TMS People', category: 'Internal HRMS', stack: 'Vue.js, Laravel, Tailwind CSS, Vite', image: '/images/tms-people.webp', alt: 'TMS People HRMS dashboard with attendance charts', w: 1280, h: 800, note: 'Private beta' },
  { slug: 'hrsi', role: 'Complete frontend from supplied designs · Lighthouse 94 mobile, 100 SEO', title: 'HRSI', category: 'Custom WordPress', stack: 'WordPress, PHP, ACF, GSAP', url: 'https://hrsi.teamreactivate.com.pk/', image: '/images/hrsi.webp', alt: 'HRSI homepage hero', w: 1280, h: 800 },
  { slug: 'shan-foods', role: 'Responsive multilingual UI and ongoing maintenance', title: 'Shan Foods', category: 'Multilingual WordPress', stack: 'WordPress, multilingual UI', url: 'https://www.shanfoods.com/', image: '/images/shanfoods.webp', alt: 'Shan Foods homepage', w: 1280, h: 800 },
  { slug: 'makebranded', role: 'Frontend + optimization · Lighthouse 98 mobile / 99 desktop', title: 'MakeBranded', category: 'Platform + blog', stack: 'Laravel frontend, WordPress', url: 'https://makebranded.com/', image: '/images/makebranded.webp', alt: 'MakeBranded QR code generator homepage', w: 1280, h: 747 },
  { slug: 'bento-kids', role: 'Theme sections, metafields, cart UI and publishing', title: 'Bento Kids', category: 'Shopify store', stack: 'Shopify, Liquid, metafields', url: 'https://bentokid.com/', image: '/images/bentokid.webp', alt: 'Bento Kids Shopify homepage', w: 1280, h: 800 },
  { slug: 'dawlance-prima', role: 'Production frontend from Figma, then an Angular rebuild', title: 'Dawlance Prima Catalogue', category: 'Interactive catalogue', stack: 'HTML, SCSS, JavaScript, Angular rebuild', url: 'https://prima-line-catalog.vercel.app/', image: '/images/dawlance.webp', alt: 'Dawlance Prima range showroom menu', w: 1280, h: 800, note: 'Angular demo' },
  { slug: 'team-reactivate', role: 'Frontend end to end · Lighthouse 100 SEO and accessibility', title: 'Team Reactivate Beta', category: 'Agency website', stack: 'WordPress, custom frontend, GSAP', url: 'https://beta.teamreactivate.com.pk/', image: '/images/teamreactivate.webp', alt: 'Team Reactivate beta website hero', w: 1280, h: 800 },
  { slug: 'lux-style', role: 'Public site UI updates; owned the jury portal frontend', title: 'Lux Style Awards', category: 'Website + jury portal', stack: 'WordPress, JavaScript', url: 'https://www.luxstyle.pk/', note: 'Four annual cycles, 2022–2025' },
];

export const cases = [
  {
    title: 'TMS People', sub: 'Multi-organization HRMS',
    image: '/images/tms-people.webp', alt: 'TMS People dashboard', w: 1280, h: 800,
    role: 'Frontend owner, end to end', stack: 'Vue.js, Laravel, Tailwind CSS, Vite',
    built: 'Dashboards, attendance and roster screens, employee profiles, HR services, organization charts, role-based screens, reusable components and light/dark themes.',
    outcome: 'Active private beta for about 150 employees, with multi-organization support, running alongside the legacy system.',
    tone: 'dark' as const,
  },
  {
    title: 'HRSI', sub: 'Custom WordPress platform',
    image: '/images/hrsi.webp', alt: 'HRSI homepage', w: 1280, h: 800, url: 'https://hrsi.teamreactivate.com.pk/',
    role: 'Complete frontend from supplied designs', stack: 'WordPress, PHP, ACF, Elementor, GSAP, AOS, Bootstrap, Swiper',
    built: 'Custom theme, responsive layouts, animations and interactions, and performance optimization.',
    outcome: 'Lighthouse lab scores: 94 mobile and 94 desktop performance, 100 SEO.',
    tone: 'light' as const,
  },
  {
    title: 'MakeBranded', sub: 'Platform and WordPress blog',
    image: '/images/makebranded.webp', alt: 'MakeBranded homepage', w: 1280, h: 747, url: 'https://makebranded.com/',
    role: 'Frontend implementation and optimization', stack: 'Laravel frontend, WordPress, technical SEO',
    built: 'Frontend for the Laravel-based main platform and the WordPress blog, with performance and SEO work on both.',
    outcome: 'Lighthouse lab performance: 98 mobile / 99 desktop on the platform, 99 / 99 on the blog, plus 100 accessibility, best practices and SEO on blog tests.',
    tone: 'dark' as const,
  },
  {
    title: 'Dawlance Prima Catalogue', sub: 'Production build, then an Angular rebuild',
    image: '/images/dawlance.webp', alt: 'Dawlance Prima showroom', w: 1280, h: 800, url: 'https://prima-line-catalog.vercel.app/',
    role: 'Production frontend from Figma; Angular version built for learning', stack: 'HTML5, SCSS, JavaScript, Swiper, AOS; Angular',
    built: 'The production catalogue frontend from Figma, then a personal Angular rebuild with nested components, routing, Signals, @if/@for control flow and parent-child communication.',
    outcome: 'The live demo is the Angular learning rebuild, not client production code.',
    tone: 'light' as const,
  },
];

export const toolkit = [
  { group: 'UI engineering', items: ['HTML5', 'CSS3 / SCSS', 'Tailwind CSS', 'Bootstrap', 'Flexbox / Grid', 'Design systems', 'Light / dark themes'] },
  { group: 'WordPress & WooCommerce', items: ['Custom themes', 'Elementor / Pro', 'Gutenberg', 'ACF', 'CPT / custom fields', 'PHP templates', 'Custom plugin work'] },
  { group: 'Shopify', items: ['Liquid', 'Sections / blocks', 'Schema', 'Metafields / metaobjects', 'Cart UI', 'Filters / search'] },
  { group: 'Performance, SEO & QA', items: ['Lighthouse', 'Core Web Vitals', 'Image / font optimization', 'Technical SEO', 'Cross-browser QA', 'Accessibility-aware UI'] },
  { group: 'Frameworks & JavaScript', items: ['Vue.js (HRMS UI)', 'Angular (project-based)', 'React (learning)', 'TypeScript (basic)', 'JavaScript / jQuery (basic working knowledge)', 'GSAP / AOS', 'Laravel Blade'] },
  { group: 'Multilingual', items: ['WPML', 'Polylang', 'Language switchers', 'English / Arabic RTL'] },
  { group: 'Tools', items: ['Git / GitHub', 'Vite', 'npm', 'Node.js', 'Figma', 'Photoshop', 'Illustrator', 'Browser DevTools'] },
];

export const experience = [
  {
    org: 'Team Reactivate Pvt. Ltd.', place: 'Karachi', kind: 'Full-time', years: 'Jan 2022 – Present',
    title: 'Frontend Developer',
    steps: ['Frontend Intern (Jan – Apr 2022)', 'Junior Frontend Developer (May 2022 – Jun 2023)', 'Frontend Developer (Jul 2023 – Present)'],
    points: [
      'Deliver responsive interfaces from Figma handoff through QA, production fixes and deployment support.',
      'Contributed to 27+ production projects, including work for Dawlance, Shan Foods, Lux, Pond’s, Sunsilk, TRESemmé, Doritos, Lipton, Red Bull and Dalda.',
      'Own frontend delivery for TMS People, a multi-organization HRMS in active beta, with reusable components, design tokens and light/dark themes.',
    ],
  },
  {
    org: 'ContriverMate', place: 'Remote', kind: 'Contract', years: 'Nov 2021 – Sep 2024',
    title: 'Frontend Developer',
    steps: [],
    points: ['Contributed to WordPress and Laravel UI codebases through responsive updates, maintenance, frontend refinements and selected WordPress builds.'],
  },
  {
    org: 'Independent work', place: 'Remote', kind: 'Freelance', years: 'Alongside full-time work',
    title: 'WordPress Developer',
    steps: [],
    points: ['Delivered 5+ independent WordPress projects covering requirements, theme customization, e-commerce, responsive UI, QA, optimization and handover. Clients include Destination Food, Syriza Textile and Sadaat Quran Academy.'],
  },
];

export const education = [
  { title: 'Web Development Certification', place: 'Infra', detail: '6 months · 2022' },
  { title: 'Intermediate (HSSC), Arts', place: 'Govt. Degree Boys College Baldia Town Sector 4E, Karachi', detail: '2022' },
];

export const learning =
  'Self-directed, non-certified learning in Angular, React, TypeScript, advanced CSS/SCSS, GSAP, Core Web Vitals, technical SEO and Laravel/Blade fundamentals.';

export const cta = {
  heading: 'Have a project or role in mind?',
  text: 'I’m open to frontend and WordPress roles (remote, hybrid or on-site in Karachi) and freelance projects for clients worldwide. Email or WhatsApp me and I’ll reply with next steps.',
};
