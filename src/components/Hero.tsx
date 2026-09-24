import React, { useState, useEffect } from 'react';
import { Compass, Heart, Sun } from 'lucide-react';

export const Hero: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden py-16 md:py-24 lg:py-28 bg-paper transition-colors duration-200">
      
      {/* 1. Full-Bleed Background Video / Poster Fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {prefersReducedMotion ? (
          <img 
            src="/assets/images/hero-video-poster.jpg" 
            alt="Bright Hope Learning Center classroom" 
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            poster="/assets/images/hero-video-poster.jpg"
            className="w-full h-full object-cover object-center transition-opacity duration-700"
          >
            <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
            <img 
              src="/assets/images/hero-video-poster.jpg" 
              alt="Bright Hope Learning Center classroom" 
              className="w-full h-full object-cover object-center"
            />
          </video>
        )}
      </div>

      {/* 2. Legibility Overlay Layer (Soft cream/ink gradient preserving 100% text readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/90 to-paper/50 dark:from-paper/95 dark:via-paper/90 dark:to-paper/60 backdrop-blur-[2px] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-80 z-10 pointer-events-none" />

      {/* Decorative background subtle glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none z-10" />

      {/* 3. Layered Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subhead, Scripture & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left max-w-3xl">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue font-bold text-sm tracking-wide shadow-xs">
              <Sun className="w-4 h-4 text-gold" />
              <span>Shelbyville, Kentucky · Est. 2022</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-ink leading-tight tracking-tight">
              Every child was made for a <span className="text-blue underline decoration-gold decoration-4 underline-offset-4">bright future.</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-ink/85 leading-relaxed font-sans max-w-2xl font-medium">
              Bright Hope Learning Center provides Christ-centered early intervention, education, and therapy — <strong className="text-ink font-extrabold">completely tuition-free</strong> — for children ages 1–5 with special needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#paths"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-ink outline-none"
              >
                <Compass className="w-5 h-5 text-ink" />
                <span>Find your path</span>
              </a>

              <a
                href="https://givebutter.com/bhlc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green/90 text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-gold outline-none"
              >
                <Heart className="w-5 h-5 fill-white/20 text-white" />
                <span>Give hope today</span>
              </a>
            </div>

            {/* Scripture Line */}
            <div className="pt-2">
              <p className="text-sm italic font-sans text-ink/80 border-l-2 border-gold pl-3 py-1 bg-paper/60 backdrop-blur-xs rounded-r-md max-w-xl">
                "For I know the plans I have for you… plans to give you hope and a future." — Jeremiah 29:11
              </p>
            </div>

          </div>

          {/* Right Column: Live Video Badge Preview Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-3xl p-4 bg-paper-raised/90 backdrop-blur-md border border-ink/10 shadow-2xl space-y-3">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-inner border border-ink/10">
                <img 
                  src="/assets/images/hero-video-poster.jpg" 
                  alt="Bright Hope student learning in classroom" 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider bg-blue/90 px-3 py-1 rounded-full backdrop-blur-xs">
                    ✦ Classroom In Action
                  </span>
                </div>
              </div>

              <p className="text-xs font-bold text-ink/75 font-sans text-left">
                Christ-centered early intervention & specialized education in Shelbyville, KY.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

