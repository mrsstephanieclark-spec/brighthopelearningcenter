import React from 'react';
import { Phone, Heart, Users, Briefcase, ExternalLink } from 'lucide-react';

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
      linkLabel: 'Give on Givebutter',
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
      linkHref: 'mailto:bhlc@brighthopelc.org',
      linkLabel: 'Email Us',
      icon: <Users className="w-4 h-4" />
    },
    {
      id: 'career',
      title: "I'm exploring a Career",
      initials: 'C',
      circleBg: 'bg-pink',
      circleText: 'text-white',
      blurb: "Currently hiring a Nurse, Teacher Assistant, and part-time SLP — evidence-based practice, faith-rooted team.",
      linkHref: 'mailto:bhlc@brighthopelc.org',
      linkLabel: 'Email Your Resume',
      icon: <Briefcase className="w-4 h-4" />
    }
  ];

  return (
    <section id="paths" className="py-16 md:py-24 bg-paper-raised border-y border-ink/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-green bg-green/10 px-3.5 py-1.5 rounded-full border border-green/20 mb-5">
            Choose your next step
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
            One visit, four ways to walk alongside a Bright Hope kid.
          </h2>
        </div>

        {/* Cards Grid: Permanently Expanded, Equal Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pathCards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left h-full"
            >
              <div>
                {/* Circle Icon */}
                <div className={`w-12 h-12 rounded-full ${card.circleBg} ${card.circleText} font-bold text-xl font-heading flex items-center justify-center shadow-md mb-4`}>
                  {card.initials}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-ink mb-3">
                  {card.title}
                </h3>

                {/* Body Paragraph */}
                <p className="text-sm text-ink/85 leading-relaxed font-sans mb-6">
                  {card.blurb}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 mt-auto">
                <a
                  href={card.linkHref}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 bg-blue text-white font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-blue/90 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-gold outline-none w-full text-center"
                >
                  {card.icon}
                  <span>{card.linkLabel}</span>
                  {card.external && <ExternalLink className="w-3.5 h-3.5 opacity-80" />}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
