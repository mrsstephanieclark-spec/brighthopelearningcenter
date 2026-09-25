import React from 'react';
import { Heart, ExternalLink, Coffee } from 'lucide-react';

export const GiveBand: React.FC = () => {
  return (
    <section id="give" className="relative py-16 md:py-24 bg-gradient-to-br from-blue via-[#2574AA] to-[#1C5B87] text-white overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
          
          {/* Main Content (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold font-bold text-xs uppercase tracking-wider">
              <Coffee className="w-3.5 h-3.5" />
              <span>Hopebuilders · Monthly Giving</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight text-white">
              Skip a coffee. Fund a bright future.
            </h2>

            {/* Body */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-sans max-w-2xl">
              Join Hopebuilders, our community of monthly givers, and get a quarterly look at exactly how your gift is showing up in a Bright Hope classroom.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="https://givebutter.com/bhlc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-secondary hover:bg-green-secondary/90 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-gold outline-none"
              >
                <Heart className="w-5 h-5 fill-white/20 text-white" />
                <span>Join Hopebuilders</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>

              <a
                href="https://givebutter.com/bhlc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-gold outline-none"
              >
                <span>Give once</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>

          </div>

          {/* Stat Box Callout (Right 4 Cols) */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-2xl space-y-2">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-gold">
                100%
              </p>
              <p className="text-base sm:text-lg font-bold font-sans text-white/95 leading-snug">
                tuition-free for every family we serve.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
