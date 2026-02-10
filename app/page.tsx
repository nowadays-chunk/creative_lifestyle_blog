import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrendingCarousel from '@/components/TrendingCarousel';
import MasonryGrid from '@/components/MasonryGrid';
import ParallaxSection from '@/components/ParallaxSection';
import InfluencerHighlight from '@/components/InfluencerHighlight';
import SocialProof from '@/components/SocialProof';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />

      <Hero />

      <TrendingCarousel />

      <MasonryGrid />

      <ParallaxSection
        title="Experience the Art of Living"
        subtitle="Featured Narrative"
        content="Dive deep into stories that celebrate creativity, mindfulness, and authentic expression. Our curated narratives bring together the finest voices in lifestyle, fashion, wellness, and design—crafted to inspire your journey toward a more intentional life."
        image="/images/parallax-background.jpg"
      />

      <InfluencerHighlight />

      <SocialProof />

      <Newsletter />

      <Footer />
    </main>
  );
}
