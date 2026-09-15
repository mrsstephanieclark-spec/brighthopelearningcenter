import React, { useState } from 'react';
import { ChevronDown, Phone, Heart, Users, Briefcase, ExternalLink } from 'lucide-react';

interface PathCardData {
  id: string;
  title: string;
  initials: string;
  circleBg: string;
  circleText: string;
  blurb: string;
  linkHref: string;
  linkLabel: string;
  icon: React.ReactNode;
  external?: boolean;
}

export const PathSection: React.FC = () => {
  // Track expanded card state by id (null or id)
  const [expandedId, setExpandedId] = useState<string | null>('parent'); // Default open first card for discovery

  const pathCards: PathCardData[] = [
    {
      id: 'parent',
      title: "I'm a Parent",
      initials: 'P',
      circleBg: 'bg-blue',
      circleText: 'text-white',
      blurb: "Curious if Bright Hope is right for your child? Reach out and we'll set up a tour and a screening — no pressure, just a conversation.",
      linkHref: 'tel:5022065390',
      linkLabel: 'Call 502-206-5390',
      icon: <Phone className="w-4 h-4" />
    },
    {
      id: 'donate',
      title: "I'd like to Donate",
      initials: '$',
      circleBg: 'bg-gold',
      circleText: 'text-ink',
      blurb: "Every gift goes straight to keeping this tuition-free for the families who need it most, through our Givebutter fund.",
      linkHref: 'https://givebutter.com/bhlc',
      linkLabel: 'Give via Givebutter',
      icon: <Heart className="w-4 h-4" />,
      external: true
    },
    {
      id: 'volunteer',
      title: "I'd like to Volunteer",
      initials: 'V',
      circleBg: 'bg-green',
      circleText: 'text-white',
      blurb: "Classrooms, events, and building needs all run better with volunteers who show up. Tell us your interests and experience.",
      linkHref: 'mailto:bhlc@brighthopelc.org?subject=Volunteer%20Inquiry%20-%20Bright%20Hope',
      linkLabel: 'Email bhlc@brighthopelc.org',
      icon: <Users className="w-4 h-4" />
    },
    {
      id: 'career',
      title: "I'm exploring a Career",
      initials: 'C',
      circleBg: 'bg-pink',
      circleText: 'text-white',
      blurb: "Currently hiring a Nurse, Teacher Assistant, and part-time SLP — evidence-based practice, faith-rooted team.",
      linkHref: 'mailto:bhlc@brighthopelc.org?subject=Career%20Inquiry%20-%20Bright%20Hope',
      linkLabel: 'Contact Careers',
      icon: <Briefcase className="w-4 h-4" />
    }
  ];

  const toggleCard = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="paths" className="py-16 md:py-24 bg-paper-raised border-y border-ink/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-green bg-green/10 px-3.5 py-1.5 rounded-full border border-green/20">
            Choose your next step
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
            One visit, four ways to walk alongside a Bright Hope kid.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {pathCards.map((card) => {
            const isExpanded = expandedId === card.id;

            return (
              <div
                key={card.id}
                className={`rounded-2xl transition-all duration-300 border bg-paper shadow-sm hover:shadow-md ${
                  isExpanded ? 'border-blue ring-2 ring-blue/20' : 'border-ink/10'
                }`}
              >
                {/* Clickable Header Button */}
                <button
                  type="button"
                  onClick={() => toggleCard(card.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`path-content-${card.id}`}
                  className="w-full text-left p-6 flex flex-col items-start gap-4 focus-visible:ring-2 focus-visible:ring-gold rounded-2xl outline-none"
                >
                  <div className="flex items-center justify-between w-full">
                    {/* Circle Icon */}
                    <div className={`w-12 h-12 rounded-full ${card.circleBg} ${card.circleText} font-bold text-xl font-heading flex items-center justify-center shadow-md`}>
                      {card.initials}
                    </div>

                    <div className={`p-1.5 rounded-full bg-paper-raised text-ink/70 transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-blue/10 text-blue' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-heading text-ink">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue mt-1">
                      {isExpanded ? 'Tap to close' : 'Tap to see the next step'}
                    </p>
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div
                    id={`path-content-${card.id}`}
                    className="px-6 pb-6 pt-2 border-t border-ink/10 space-y-4 text-left animate-fadeIn"
                  >
                    <p className="text-sm text-ink/85 leading-relaxed font-sans">
                      {card.blurb}
                    </p>

                    <a
                      href={card.linkHref}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 bg-blue text-white font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-blue/90 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-gold outline-none"
                    >
                      {card.icon}
                      <span>{card.linkLabel}</span>
                      {card.external && <ExternalLink className="w-3.5 h-3.5 opacity-80" />}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
