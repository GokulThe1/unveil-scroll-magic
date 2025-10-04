import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import hriveLogo from '@/assets/hrive-logo.png';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={hriveLogo} 
              alt="HRive - Thrive Together" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-4">
              Helping Organizations and Their People Thrive
            </p>
            <p className="text-sm text-muted-foreground">
              Professional Human Resources consulting and services tailored to organizations of all sizes.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Chennai, Tamil Nadu<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">+91 9384888286</p>
                  <p className="text-muted-foreground">+91 9840907480</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">info@hrive.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Establishment Compliances</li>
              <li>Payroll Services & Compliance</li>
              <li>ESIC / EPF Compliances</li>
              <li>HR Policy Development</li>
              <li>POSH Compliance</li>
              <li>Contract Staffing</li>
              <li>Factory Compliance & Audit</li>
              <li>Training & Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 HRive. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};