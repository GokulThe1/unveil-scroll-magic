import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, TrendingUp } from 'lucide-react';

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="cta" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-glow to-accent overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(191,65%,14%)] rounded-full -translate-x-48 -translate-y-48 parallax-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(191,65%,14%)] rounded-full translate-x-48 translate-y-48 parallax-fast"></div>
      </div>
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[hsl(191,65%,14%)]"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 ${isVisible ? 'text-reveal' : 'opacity-0'}`}>
            Ready to build your
            <span className="block">dream team?</span>
          </h2>
          
          <p className={`text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed ${isVisible ? 'fade-in-up stagger-delay-1' : 'opacity-0'}`}>
            Connect with exceptional talent or find your perfect opportunity. 
            Let's make it happen together.
          </p>

          <div className={`flex justify-center ${isVisible ? 'fade-in-up stagger-delay-2' : 'opacity-0'}`}>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cta-button bg-[hsl(191,65%,14%)] text-white hover:bg-[hsl(191,65%,18%)] border-2 border-white/20 text-lg px-6 py-3 md:px-8 md:py-4 group glow-pulse rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-elegant inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className={`mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${isVisible ? 'fade-in-up stagger-delay-3' : 'opacity-0'}`}>
            <div className="text-center p-6 rounded-lg bg-white/90 backdrop-blur-sm border-2 border-[hsl(191,65%,14%)]/30">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-[hsl(191,65%,14%)]">24/7</div>
              <div className="text-[hsl(191,65%,14%)]/80 text-sm md:text-base">Support Available</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/90 backdrop-blur-sm border-2 border-[hsl(191,65%,14%)]/30">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-[hsl(191,65%,14%)]">48hrs</div>
              <div className="text-[hsl(191,65%,14%)]/80 text-sm md:text-base">Average Response Time</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/90 backdrop-blur-sm border-2 border-[hsl(191,65%,14%)]/30">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-[hsl(191,65%,14%)]">100%</div>
              <div className="text-[hsl(191,65%,14%)]/80 text-sm md:text-base">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};