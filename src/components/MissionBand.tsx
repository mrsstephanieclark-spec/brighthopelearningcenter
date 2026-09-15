import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export const MissionBand: React.FC = () => {
  const valueNames = [
    { name: 'Faith', color: 'bg-blue/15 text-blue' },
    { name: 'Hope', color: 'bg-gold/25 text-ink' },
    { name: 'Love', color: 'bg-pink/15 text-pink' },
    { name: 'Community', color: 'bg-blue/15 text-blue' },
    { name: 'Celebration', color: 'bg-gold/25 text-ink' },
    { name: 'Innovation', color: 'bg-green/15 text-green' },
    { name: 'Stewardship', color: 'bg-red/15 text-red' },
  ];

  return (
    <section className="py-16 md:py-20 bg-paper transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-blue/10 border border-blue/20 shadow-lg relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
            
            {/* Left Side: Mission */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue text-white font-bold text-xs uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5" />
                <span>Our mission</span>
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-ink leading-snug">
                "To glorify God by providing Christ-centered education and therapeutic services that improve the lives of children with special needs, bring hope to their families, and impact their communities."
              </blockquote>

              {/* 7 Value Pill Tags */}
              <div className="pt-4 space-y-2">
                <p className="text-xs font-bold text-ink/60 uppercase tracking-widest font-sans">
                  Walked out through our core values:
                </p>
                <div className="flex flex-wrap gap-2">
                  {valueNames.map((val) => (
                    <span
                      key={val.name}
                      className={`text-xs font-bold px-3 py-1 rounded-full border border-ink/10 ${val.color}`}
                    >
                      {val.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side: Vision Callout Box */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-paper-raised border-2 border-gold/40 shadow-md relative text-left">
                
                <div className="flex items-center gap-2 mb-3 text-gold font-bold">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="text-sm uppercase tracking-wider font-heading text-ink">Our vision</span>
                </div>

                <p className="text-xl sm:text-2xl font-bold font-heading text-ink leading-snug">
                  "Imagine a world where every child with special needs achieves their God-given potential and purpose."
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
