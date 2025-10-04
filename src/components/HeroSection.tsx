import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, TrendingUp, ChevronDown } from 'lucide-react';
import mountainImage from '@/assets/mountain-parallax.jpg';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start pt-16">
      {/* Layered Parallax Mountain Background */}
      <div 
        className="absolute inset-0 parallax-slow"
        style={{
          backgroundImage: `url(${mountainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary-glow/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 hero-headline leading-tight text-[hsl(191,65%,14%)]">
            <span className="block">Empowering Businesses,</span>
            <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              Enriching Careers
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-[hsl(191,65%,14%)]/90 hero-subheading">
            Hire. Grow. Succeed.
          </p>
          
          <p className="text-base sm:text-lg mb-6 md:mb-8 text-[hsl(191,65%,14%)]/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We believe in the power of people to drive success. HRive provides advanced HR solutions designed to help businesses and individuals succeed in a rapidly evolving world.
          </p>


          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-up stagger-delay-4">
            <div className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm border-2 border-[hsl(191,65%,14%)]/20 hover:border-[hsl(191,65%,14%)]/40 transition-all">
              <Users className="h-12 w-12 mx-auto mb-4 text-[hsl(191,65%,14%)]" />
              <div className="text-3xl font-bold mb-2 text-[hsl(191,65%,14%)]">20+</div>
              <div className="text-[hsl(191,65%,14%)]/80">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm border-2 border-[hsl(191,65%,14%)]/20 hover:border-[hsl(191,65%,14%)]/40 transition-all">
              <Briefcase className="h-12 w-12 mx-auto mb-4 text-[hsl(191,65%,14%)]" />
              <div className="text-3xl font-bold mb-2 text-[hsl(191,65%,14%)]">100%</div>
              <div className="text-[hsl(191,65%,14%)]/80">Compliance Rate</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm border-2 border-[hsl(191,65%,14%)]/20 hover:border-[hsl(191,65%,14%)]/40 transition-all">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-[hsl(191,65%,14%)]" />
              <div className="text-3xl font-bold mb-2 text-[hsl(191,65%,14%)]">500+</div>
              <div className="text-[hsl(191,65%,14%)]/80">Clients Served</div>
            </div>
          </div>

          {/* Mobile Arrow - positioned after stats */}
          <div className="md:hidden flex justify-center mt-12 mb-8">
            <ChevronDown className="h-8 w-8 text-[hsl(191,65%,14%)]/70 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Desktop Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[hsl(191,65%,14%)]/50 rounded-full flex justify-center items-start pt-2">
          <div className="w-1 h-3 bg-[hsl(191,65%,14%)] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};