import React from 'react';
import { Palette, Footprints, Ear, Sparkles, MessageCircle } from 'lucide-react';

interface InchstoneCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeBg: string;
  badgeColor: string;
  topBorderClass: string;
  cardBgClass: string;
}

export const InchstonesSection: React.FC = () => {
  const inchstones: InchstoneCard[] = [
    {
      id: 'paintbrush',
      title: 'Held an adapted paintbrush',
      description: 'Held an adapted paintbrush in her hand for ten seconds — a small grip, a big step.',
      icon: <Palette className="w-6 h-6" />,
      badgeBg: 'bg-[#0B4EA2] text-white',
      badgeColor: 'text-white',
      topBorderClass: 'border-t-4 border-[#0B4EA2] border-x border-b border-[#0B4EA2]/20',
      cardBgClass: 'bg-[#0B4EA2]/5'
    },
    {
      id: 'steps',
      title: 'Two steps, unassisted',
      description: 'Not a full walk across the room yet — but two steps nobody helped with.',
      icon: <Footprints className="w-6 h-6 text-[#051C3B]" />,
      badgeBg: 'bg-[#FFD200]',
      badgeColor: 'text-[#051C3B]',
      topBorderClass: 'border-t-4 border-[#FFD200] border-x border-b border-[#FFD200]/30',
      cardBgClass: 'bg-[#FFD200]/15'
    },
    {
      id: 'name',
      title: 'Turned toward a name',
      description: 'A child responds to being called — a quiet, huge sign of connection.',
      icon: <Ear className="w-6 h-6 text-[#051C3B]" />,
      badgeBg: 'bg-[#7FBF3F]',
      badgeColor: 'text-[#051C3B]',
      topBorderClass: 'border-t-4 border-[#7FBF3F] border-x border-b border-[#7FBF3F]/25',
      cardBgClass: 'bg-[#7FBF3F]/12'
    },
    {
      id: 'play',
      title: 'First pretend play',
      description: 'Demonstrated pretend play for the first time — after many, many modeled opportunities.',
      icon: <Sparkles className="w-6 h-6 text-white" />,
      badgeBg: 'bg-[#2E7D32]',
      badgeColor: 'text-white',
      topBorderClass: 'border-t-4 border-[#2E7D32] border-x border-b border-[#2E7D32]/20',
      cardBgClass: 'bg-[#2E7D32]/10'
    },
    {
      id: 'word',
      title: 'First clear word',
      description: '"More." "Up." "Mama." One word, months in the making.',
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      badgeBg: 'bg-[#0B4EA2]',
      badgeColor: 'text-white',
      topBorderClass: 'border-t-4 border-[#0B4EA2] border-x border-b border-[#0B4EA2]/20',
      cardBgClass: 'bg-[#0B4EA2]/5'
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
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-[#051C3B] bg-[#FFD200] px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
            Our word for it
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink mb-5">
            Every "inchstone" matters.
          </h2>
          <p className="text-base sm:text-lg text-ink/80 font-sans">
            Not every win is a milestone. Some are inches — and we celebrate every one.
          </p>
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
          {inchstones.map((card) => (
            <div
              key={card.id}
              className={`p-6 rounded-2xl ${card.cardBgClass} ${card.topBorderClass} shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between text-left h-full`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${card.badgeBg} ${card.badgeColor} flex items-center justify-center mb-4 shadow-xs`}>
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold font-heading text-[#051C3B] mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-[#051C3B]/85 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/10 flex items-center gap-1.5 text-xs text-[#2E7D32] font-bold">
                <span>✦ Celebrating growth</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
