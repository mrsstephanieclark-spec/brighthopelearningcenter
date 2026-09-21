import React from 'react';
import { Palette, Footprints, Ear, Sparkles, MessageCircle } from 'lucide-react';

interface InchstoneCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeBg: string;
  badgeColor: string;
}

export const InchstonesSection: React.FC = () => {
  const inchstones: InchstoneCard[] = [
    {
      id: 'paintbrush',
      title: 'Held an adapted paintbrush',
      description: 'Held an adapted paintbrush in her hand for ten seconds — a small grip, a big step.',
      icon: <Palette className="w-6 h-6" />,
      badgeBg: 'bg-blue/15',
      badgeColor: 'text-blue'
    },
    {
      id: 'steps',
      title: 'Two steps, unassisted',
      description: 'Not a full walk across the room yet — but two steps nobody helped with.',
      icon: <Footprints className="w-6 h-6" />,
      badgeBg: 'bg-gold/25',
      badgeColor: 'text-ink'
    },
    {
      id: 'name',
      title: 'Turned toward a name',
      description: 'A child responds to being called — a quiet, huge sign of connection.',
      icon: <Ear className="w-6 h-6" />,
      badgeBg: 'bg-green/15',
      badgeColor: 'text-green'
    },
    {
      id: 'play',
      title: 'First pretend play',
      description: 'Demonstrated pretend play for the first time — after many, many modeled opportunities.',
      icon: <Sparkles className="w-6 h-6" />,
      badgeBg: 'bg-green-secondary/15',
      badgeColor: 'text-green-secondary'
    },
    {
      id: 'word',
      title: 'First clear word',
      description: '"More." "Up." "Mama." One word, months in the making.',
      icon: <MessageCircle className="w-6 h-6" />,
      badgeBg: 'bg-blue/15',
      badgeColor: 'text-blue'
    },
  ];

  return (
    <section id="inchstones" className="py-16 md:py-24 bg-paper border-y border-ink/10 transition-colors duration-200 relative overflow-hidden">
      
      {/* Decorative background path motif line */}
      <div className="absolute top-4 left-0 right-0 hidden md:block pointer-events-none opacity-20">
        <svg className="w-full h-8 text-gold" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 0,20 C 300,5 600,35 900,15 C 1050,5 1150,25 1200,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col items-center">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-ink bg-gold px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
            Our word for it
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink mb-5">
            Every "inchstone" matters.
          </h2>
          <p className="text-base sm:text-lg text-ink/80 font-sans">
            Not every win is a milestone. Some are inches — and we celebrate every one.
          </p>
        </div>

        {/* Responsive Responsive Grid Container — No Horizontal Scrollbar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
          {inchstones.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-2xl bg-paper-raised border border-ink/10 shadow-sm hover:shadow-md hover:border-gold transition-all duration-200 flex flex-col justify-between text-left h-full"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${card.badgeBg} ${card.badgeColor} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold font-heading text-ink mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-ink/80 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/10 flex items-center gap-1.5 text-xs text-green font-bold">
                <span>✦ Celebrating growth</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
