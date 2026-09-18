import React from 'react';
import { Pencil, Footprints, Ear, HeartHandshake, MessageCircle } from 'lucide-react';

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
      id: 'letter',
      title: 'First traced letter',
      description: 'A shaky line becomes a real "A" — weeks of fine-motor work, right there on the page.',
      icon: <Pencil className="w-6 h-6" />,
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
      id: 'toy',
      title: 'Shared a toy, unprompted',
      description: 'No one asked. They just did it. That\'s the whole ballgame some days.',
      icon: <HeartHandshake className="w-6 h-6" />,
      badgeBg: 'bg-pink/15',
      badgeColor: 'text-pink'
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
    <section id="inchstones" className="py-16 md:py-24 bg-paper-raised border-y border-ink/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col items-center">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-gold bg-gold/15 px-3.5 py-1.5 rounded-full border border-gold/30 text-ink mb-6">
            Our word for it
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink mb-5">
            Every "inchstone" matters.
          </h2>
          <p className="text-base sm:text-lg text-ink/80 font-sans">
            Not every win is a milestone. Some are inches — and we celebrate every one.
          </p>
        </div>

        {/* Horizontal Scroll Container (Touch Swipe / Touch friendly) */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x-container scrollbar-thin scrollbar-thumb-gold/50 scrollbar-track-transparent">
            {inchstones.map((card) => (
              <div
                key={card.id}
                className="snap-item shrink-0 w-[280px] sm:w-[320px] p-6 rounded-2xl bg-paper border border-ink/10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left"
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

        {/* Small Italic Caption */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm italic font-sans text-ink/65">
            Placeholder examples — swap in real, family-approved inchstones as they happen.
          </p>
        </div>

      </div>
    </section>
  );
};
