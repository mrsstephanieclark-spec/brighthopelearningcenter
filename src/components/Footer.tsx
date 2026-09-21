import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-paper-raised text-ink border-t border-ink/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left mb-12">
          
          {/* Column 1: Logo + Jeremiah Scripture */}
          <div className="space-y-4">
            <a href="/" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg" aria-label="Bright Hope Learning Center Home">
              <img 
                src="/assets/logo-horizontal.png" 
                alt="Bright Hope Learning Center" 
                className="h-14 sm:h-16 w-auto object-contain" 
              />
            </a>

            <p className="text-sm italic font-sans text-ink/80 border-l-2 border-gold pl-3 py-1">
              "For I know the plans I have for you… plans to give you hope and a future." — Jeremiah 29:11
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-heading text-ink uppercase tracking-wider">
              Contact Us
            </h4>

            <ul className="space-y-3 text-sm font-sans text-ink/85">
              <li>
                <a 
                  href="tel:5022065390" 
                  className="inline-flex items-center gap-2.5 hover:text-blue transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none rounded"
                >
                  <Phone className="w-4 h-4 text-blue shrink-0" />
                  <span>502-206-5390</span>
                </a>
              </li>

              <li>
                <a 
                  href="mailto:bhlc@brighthopelc.org" 
                  className="inline-flex items-center gap-2.5 hover:text-blue transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none rounded"
                >
                  <Mail className="w-4 h-4 text-blue shrink-0" />
                  <span>bhlc@brighthopelc.org</span>
                </a>
              </li>

              <li>
                <a 
                  href="https://maps.google.com/?q=222+Main+St,+Shelbyville,+KY+40065" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 hover:text-blue transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none rounded"
                >
                  <MapPin className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                  <span>222 Main St, Shelbyville, KY 40065</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Community */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-heading text-ink uppercase tracking-wider">
              Connect With Us
            </h4>

            <p className="text-sm text-ink/80 font-sans">
              Follow along with Bright Hope milestones, classroom updates, and community events.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com/brighthopelc_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bright Hope Learning Center on Instagram"
                className="p-3 rounded-full bg-paper border border-ink/10 text-ink hover:text-green-secondary hover:border-green-secondary transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com/Brighthopelc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bright Hope Learning Center on Facebook"
                className="p-3 rounded-full bg-paper border border-ink/10 text-ink hover:text-blue hover:border-blue transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Dashed Top Divider */}
        <div className="border-t border-dashed border-ink/20 pt-8 mt-8 space-y-4 text-xs font-sans text-ink/70 text-left">
          
          {/* NOTE: Standard non-discrimination statement wording. Kerry/legal counsel should explicitly review and sign off on exact wording before official production launch. */}
          <div className="p-4 rounded-xl bg-paper border border-ink/10 space-y-1.5">
            <h5 className="font-bold text-ink text-xs uppercase tracking-wider">
              IRS Non-Discrimination Policy
            </h5>

            <p className="leading-relaxed text-ink/75">
              Bright Hope Learning Center admits students of any race, color, national origin, and ethnic origin to all the rights, privileges, programs, and activities generally made available to students. It does not discriminate on the basis of race, color, national origin, sex, disability, or ethnic origin in the administration of its educational policies, admissions policies, and other school-administered programs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-ink/60">
            <p>© {new Date().getFullYear()} Bright Hope Learning Center. All rights reserved.</p>
            <p>Shelbyville, Kentucky · Christ-Centered Special Education</p>
          </div>

        </div>

      </div>
    </footer>
  );
};
