import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, DollarSign, Shield, FileText, Users, Briefcase, Factory, Laptop, GraduationCap, Building } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: "Establishment Compliances",
    description: "Navigating complex legal and regulatory requirements for setting up and running an establishment with all necessary registrations.",
    delay: "stagger-delay-1"
  },
  {
    icon: DollarSign,
    title: "Payroll Services & Compliance", 
    description: "End-to-end payroll management ensuring accurate salary disbursement while adhering to all statutory deductions and regulations.",
    delay: "stagger-delay-2"
  },
  {
    icon: Shield,
    title: "ESIC / EPF Compliances",
    description: "Managing contributions and filings for ESIC and EPF, ensuring all legal obligations are met for employee social security benefits.",
    delay: "stagger-delay-3"
  },
  {
    icon: FileText,
    title: "HR Policy Development",
    description: "Creating, reviewing, and implementing robust HR policies and employee handbooks that align with your values and comply with labor laws.",
    delay: "stagger-delay-4"
  },
  {
    icon: Users,
    title: "POSH Compliance",
    description: "Prevention of Sexual Harassment compliance including policy drafting, ICC formation, training, and awareness workshops.",
    delay: "stagger-delay-5"
  },
  {
    icon: Briefcase,
    title: "Contract Staffing",
    description: "Flexible and scalable workforce solutions for project-based needs with complete recruitment, onboarding, and payroll management.",
    delay: "stagger-delay-6"
  },
  {
    icon: Factory,
    title: "Factory Compliance & Audit",
    description: "Comprehensive services ensuring factory operations comply with Factories Act, 1948, including registration and periodic audits.",
    delay: "stagger-delay-7"
  },
  {
    icon: FileCheck,
    title: "Contract Labour Compliance",
    description: "Full compliance with Contract Labour Act including license procurement, statutory register maintenance, and return filing.",
    delay: "stagger-delay-8"
  },
  {
    icon: Laptop,
    title: "IT Services & Support",
    description: "Tailored IT solutions for HR functions including HRIS implementation and payroll software management for enhanced efficiency.",
    delay: "stagger-delay-9"
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Customized training programs covering leadership development, POSH awareness, and statutory compliance for high-performing teams.",
    delay: "stagger-delay-10"
  }
];

export const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="py-20 bg-[hsl(191,62%,14%)] snap-start">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Comprehensive HR <span className="text-primary">Solutions</span>
          </h2>
          <p className={`text-lg text-white/80 max-w-3xl mx-auto ${isVisible ? 'fade-in-up stagger-delay-1' : 'opacity-0'}`}>
            We offer a full suite of HR services to streamline your operations, ensure compliance, 
            and empower your workforce for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className={`service-card bg-secondary border-secondary/20 hover:border-primary/30 ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};