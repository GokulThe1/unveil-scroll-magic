import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

const jobListings = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "New York, NY",
    type: "Full-time",
    posted: "2 days ago",
    salary: "$120k - $150k",
    description: "Lead development of scalable web applications using React and Node.js."
  },
  {
    title: "Marketing Manager",
    company: "Growth Dynamics",
    location: "Los Angeles, CA", 
    type: "Full-time",
    posted: "1 week ago",
    salary: "$80k - $100k",
    description: "Drive marketing strategy and campaigns for B2B SaaS products."
  },
  {
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Chicago, IL",
    type: "Contract",
    posted: "3 days ago",
    salary: "$70k - $85k",
    description: "Analyze large datasets to provide business insights and recommendations."
  },
  {
    title: "UX Designer",
    company: "Design Studio",
    location: "Austin, TX",
    type: "Full-time", 
    posted: "5 days ago",
    salary: "$75k - $95k",
    description: "Create user-centered designs for mobile and web applications."
  },
  {
    title: "Project Manager",
    company: "Agile Solutions",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "1 day ago", 
    salary: "$90k - $110k",
    description: "Manage cross-functional teams and deliver projects on time and budget."
  },
  {
    title: "Sales Representative",
    company: "Enterprise Sales",
    location: "Miami, FL",
    type: "Full-time",
    posted: "4 days ago",
    salary: "$60k - $80k + Commission",
    description: "Build relationships with clients and drive revenue growth."
  }
];

export const JobListingsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="jobs" ref={sectionRef} className="py-20 bg-gradient-subtle snap-start">
      {/* Live Ticker */}
      <div className="overflow-hidden bg-primary text-primary-foreground py-3">
        <div className="ticker-scroll">
          <span className="text-lg font-semibold">
            🎯 We're hiring across all roles! • Join top companies • Remote & On-site positions • 
            Apply today and transform your career • New opportunities added daily •
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Latest <span className="text-primary">Opportunities</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'fade-in-up stagger-delay-1' : 'opacity-0'}`}>
            Discover your next career move with our curated selection of top job opportunities 
            from leading companies across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job, index) => (
            <Card 
              key={index}
              className={`card-hover border-border group ${isVisible ? `slide-in-up stagger-delay-${(index % 6) + 1}` : 'opacity-0'}`}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Posted {job.posted}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{job.salary}</span>
                  <Button 
                    size="sm" 
                    className="apply-button opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'fade-in-up stagger-delay-4' : 'opacity-0'}`}>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Jobs
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};