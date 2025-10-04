import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CTASection } from '@/components/CTASection';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set CSS custom property for parallax effects
  useEffect(() => {
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
  }, [scrollY]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;