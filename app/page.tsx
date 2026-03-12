import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import Audience from '@/components/Audience';
import Prizes from '@/components/Prizes';
import Timeline from '@/components/Timeline';
import Judges from '@/components/Judges';
import Criteria from '@/components/Criteria';
import Requirements from '@/components/Requirements';
import Resources from '@/components/Resources';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Tracks />
      <Audience />
      <Prizes />
      <Timeline />
      <Judges />
      <Criteria />
      <Requirements />
      <Resources />
      <CTA />
      <Footer />
      <ScrollReveal />
    </>
  );
}
