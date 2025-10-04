import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Digital Innovations",
    content: "ProStaff Solutions found me the perfect role that aligned with my career goals. Their personalized approach and industry expertise made all the difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "TechFlow Systems",
    content: "The team at ProStaff understood my technical requirements and connected me with an amazing opportunity. Couldn't be happier with the outcome!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Finance Manager", 
    company: "Global Investments",
    content: "Professional, responsive, and results-driven. ProStaff Solutions exceeded my expectations and helped me advance my career significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Thompson", 
    role: "Operations Director",
    company: "Supply Chain Pro",
    content: "As an employer, working with ProStaff has been fantastic. They consistently deliver high-quality candidates who are the perfect fit for our culture.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-background snap-start">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'fade-in-up stagger-delay-1' : 'opacity-0'}`}>
            Don't just take our word for it. Here's what professionals and employers 
            are saying about their experience with ProStaff Solutions.
          </p>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className={`horizontal-scroll space-x-6 pb-4 ${isVisible ? 'fade-in-blur-clear stagger-delay-2' : 'opacity-0'}`}>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border shadow-elegant min-w-[400px] md:min-w-[500px]"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-primary font-medium text-sm">
                        {testimonial.role}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 text-muted-foreground">
          <p>Scroll horizontally to see more testimonials →</p>
        </div>
      </div>
    </section>
  );
};