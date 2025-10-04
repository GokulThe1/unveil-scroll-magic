import { useEffect, useRef, useState } from 'react';
import { Target, Award, Heart, Users } from 'lucide-react';
import teamImage from '@/assets/about-team.jpg';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, placements: 0, companies: 0, satisfaction: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { years: 20, placements: 500, companies: 15, satisfaction: 100 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        years: Math.floor(targets.years * progress),
        placements: Math.floor(targets.placements * progress),
        companies: Math.floor(targets.companies * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-subtle snap-start">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Company Image */}
          <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <img 
              src={teamImage}
              alt="Our professional team"
              className="rounded-lg shadow-elegant zoom-scroll w-full h-[500px] object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Trusted Partner in <span className="text-primary">Human Resources</span>
            </h2>
            
            <div className="text-reveal">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At HRive, we are more than just an HR service provider; we are your dedicated business partner. 
                We specialize in offering professional Human Resources consulting and services tailored to 
                organizations of all sizes, from startups to large enterprises.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our approach is built on a deep understanding of your unique business, company culture, and specific needs. 
                We dedicate ourselves to building strong, long-term relationships and delivering timely, cost-effective 
                solutions that drive success.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg shadow-card border">
                <div className="text-3xl font-bold text-primary mb-2">{counts.years}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center p-4 bg-card rounded-lg shadow-card border">
                <div className="text-3xl font-bold text-primary mb-2">{counts.placements.toLocaleString()}+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              
              <div className="text-center p-4 bg-card rounded-lg shadow-card border">
                <div className="text-3xl font-bold text-primary mb-2">{counts.companies}+</div>
                <div className="text-sm text-muted-foreground">Industries Covered</div>
              </div>
              
              <div className="text-center p-4 bg-card rounded-lg shadow-card border">
                <div className="text-3xl font-bold text-primary mb-2">{counts.satisfaction}%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};