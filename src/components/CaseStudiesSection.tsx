import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Target } from 'lucide-react';

const caseStudies = [
  {
    icon: TrendingUp,
    title: "Tech Startup Scaling",
    company: "InnovateTech",
    challenge: "Rapid scaling from 50 to 200+ employees in 12 months",
    solution: "Implemented structured hiring process with specialized technical recruiters",
    results: {
      before: "6-month hiring cycles",
      after: "3-week average placement",
      improvement: "80% faster hiring"
    },
    metric: "200% growth achieved"
  },
  {
    icon: Users,
    title: "Healthcare Transformation",
    company: "MedCare Systems",
    challenge: "Critical shortage of specialized healthcare professionals",
    solution: "Developed talent pipeline with continuous candidate engagement",
    results: {
      before: "40% vacancy rate",
      after: "95% positions filled",
      improvement: "55% improvement"
    },
    metric: "Patient satisfaction up 30%"
  },
  {
    icon: Target,
    title: "Financial Services Expansion",
    company: "Capital Partners",
    challenge: "Expanding into new markets with limited local talent pool",
    solution: "Remote-first strategy with hybrid onboarding programs",
    results: {
      before: "Limited to local talent",
      after: "Global talent access",
      improvement: "300% candidate pool"
    },
    metric: "15 new offices launched"
  }
];

export const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="case-studies" ref={sectionRef} className="py-20 bg-background snap-start">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'fade-in-up stagger-delay-1' : 'opacity-0'}`}>
            Real transformations. Real results. See how we've helped companies 
            achieve their hiring goals and drive business growth.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`timeline-item mb-16 last:mb-0 ${
                isVisible && index <= activeIndex ? 'animate' : ''
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Card className="border-border shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                      <div className="flex items-center mb-4">
                        <study.icon className="h-8 w-8 text-primary mr-3" />
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                          <p className="text-primary font-medium">{study.company}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-subtle p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-center mb-6 text-foreground">Results</h4>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">Before</p>
                          <p className="font-semibold text-foreground">{study.results.before}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">After</p>
                          <p className="font-semibold text-foreground">{study.results.after}</p>
                        </div>
                      </div>

                      <div className="text-center p-4 bg-primary text-primary-foreground rounded-lg">
                        <p className="text-sm opacity-90 mb-1">Improvement</p>
                        <p className="text-xl font-bold">{study.results.improvement}</p>
                        <p className="text-sm mt-2 opacity-90">{study.metric}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index <= activeIndex ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};