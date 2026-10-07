import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Intro from '@/components/Intro';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyMe from '@/components/WhyMe';
import CtaStrip from '@/components/CtaStrip';
import Works from '@/components/Works';
import CaseStudies from '@/components/CaseStudies';
import Toolkit from '@/components/Toolkit';
import Experience from '@/components/Experience';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Intro />
        <Stats />
        <Services />
        <WhyMe />
        <CtaStrip />
        <Works />
        <CaseStudies />
        <Toolkit />
        <Experience />
        <CtaBanner />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
