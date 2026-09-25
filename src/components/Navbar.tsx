import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'For Families', href: '/#paths' },
    { name: 'Our Values', href: '/#values' },
    { name: 'Programs & Services', href: '/programs' },
    { name: 'Inchstones', href: '/#inchstones' },
    { name: 'Get Involved', href: '/#give' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-2">
          
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-gold outline-none"
            aria-label="Bright Hope Learning Center Home"
          >
            <img 
              src="/assets/logo-horizontal.png" 
              alt="Bright Hope Learning Center" 
              className="h-14 sm:h-15 lg:h-[60px] w-auto object-contain" 
            />
          </a>

          {/* Desktop Links & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-ink/80 hover:text-blue transition-colors focus-visible:ring-2 focus-visible:ring-gold rounded px-2 py-1 outline-none"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="https://givebutter.com/bhlc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-secondary hover:bg-green-secondary/90 text-white font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold outline-none"
            >
              <Heart className="w-4 h-4 fill-white/20 text-white" />
              <span>Donate</span>
            </a>
          </div>

          {/* Mobile Right Controls: Donate Button + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="https://givebutter.com/bhlc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-green-secondary text-white font-bold px-3.5 py-1.5 rounded-full text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-gold outline-none"
            >
              <span>Donate</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink hover:bg-paper-raised focus-visible:ring-2 focus-visible:ring-gold outline-none"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden border-t border-ink/10 bg-paper-raised px-4 pt-3 pb-6 space-y-3 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-ink/90 hover:bg-blue/10 hover:text-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
