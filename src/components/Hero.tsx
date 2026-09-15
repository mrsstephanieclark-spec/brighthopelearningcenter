import React from 'react';
import { Compass, Heart, Sun, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-paper transition-colors duration-200">
      
      {/* Decorative background subtle glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue font-bold text-sm tracking-wide">
              <Sun className="w-4 h-4 text-gold" />
              <span>Shelbyville, Kentucky · Est. 2022</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-ink leading-tight tracking-tight">
              Every child was made for a <span className="text-blue underline decoration-gold decoration-4 underline-offset-4">bright future.</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed font-sans max-w-2xl">
              Bright Hope Learning Center provides Christ-centered early intervention, education, and therapy — <strong className="text-ink font-extrabold">completely tuition-free</strong> — for children ages 1–6 with special needs.
            </p>

            {/* Buttons */}
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
                className="inline-flex items-center justify-center gap-2 border-2 border-blue text-blue hover:bg-blue hover:text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-blue outline-none"
              >
                <Heart className="w-5 h-5" />
                <span>Give hope today</span>
              </a>
            </div>

            {/* Scripture Line */}
            <div className="pt-2">
              <p className="text-sm italic font-sans text-ink/75 border-l-2 border-gold pl-3 py-1">
                "For I know the plans I have for you… plans to give you hope and a future." — Jeremiah 29:11
              </p>
            </div>

          </div>

          {/* Right Column: Photo Area Placeholder */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl p-3 bg-paper-raised border border-ink/10 shadow-xl">
              
              {/* Contained Photo Placeholder Panel */}
              <div 
                className="w-full aspect-[4/3] rounded-2xl border-2 border-dashed border-blue/40 bg-paper/60 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, rgba(46, 134, 193, 0.05) 0, rgba(46, 134, 193, 0.05) 15px, rgba(253, 186, 45, 0.05) 15px, rgba(253, 186, 45, 0.05) 30px)`
                }}
              >
                {/* Decorative Icon */}
                <div className="w-16 h-16 rounded-full bg-blue/10 border border-blue/20 flex items-center justify-center mb-4 text-blue shadow-inner">
                  <BookOpen className="w-8 h-8 text-blue" />
                </div>

                <p className="font-heading font-bold text-ink/80 text-lg mb-1">
                  Real Bright Hope photo goes here
                </p>
                
                <p className="text-xs text-ink/60 max-w-xs font-sans">
                  Reserved for photography following client photo day (classroom, therapy session, or joyful student moment).
                </p>

                {/* Badge Tag */}
                <span className="absolute top-4 right-4 bg-gold/20 text-ink text-xs font-bold px-3 py-1 rounded-full border border-gold/40">
                  Placeholder
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
