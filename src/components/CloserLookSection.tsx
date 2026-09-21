import React from 'react';
import { ArrowRight, BookOpen, Compass, Heart } from 'lucide-react';

interface CloserLookCard {
  id: string;
  title: string;
  subtitle: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  badgeColor: string;
  badgeText: string;
  icon: React.ReactNode;
}

export const CloserLookSection: React.FC = () => {
  const cards: CloserLookCard[] = [
    {
      id: 'story',
      title: 'Our Story',
      subtitle: 'Who we are',
      blurb: 'Founded on faith and love, Bright Hope provides Christ-centered early intervention and developmental support for children with special needs.',
      imageSrc: '/assets/images/our-story-square.jpg',
      imageAlt: 'Bright Hope teacher assisting a young student in a warm classroom',
      linkHref: '/#values',
      badgeColor: 'text-white bg-blue',
      badgeText: 'text-blue',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: 'services',
      title: 'Our Services',
      subtitle: 'What we offer',
      blurb: 'Licensed speech, occupational, and physical therapy alongside specialized early education — completely tuition-free for ages 1–5.',
      imageSrc: '/assets/images/our-services-square.jpg',
      imageAlt: 'Pediatric therapist engaging a child with physical and developmental exercises',
      linkHref: '/programs',
      badgeColor: 'text-white bg-green',
      badgeText: 'text-green',
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: 'needs',
      title: 'Our Needs',
      subtitle: 'How YOU can help',
      blurb: 'As a 100% free program for families, our work is made possible through donor support, community volunteers, and faithful partners.',
      imageSrc: '/assets/images/our-needs-square.jpg',
      imageAlt: 'Community volunteers standing together in support of Bright Hope Learning Center',
      linkHref: '/#give',
      badgeColor: 'text-white bg-green-secondary',
      badgeText: 'text-green-secondary',
      icon: <Heart className="w-4 h-4" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-paper border-b border-ink/10 transition-colors duration-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase bg-gold text-ink px-3.5 py-1.5 rounded-full shadow-xs">
            Explore Bright Hope
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
            Take a Closer Look
          </h2>
          <p className="text-base sm:text-lg text-ink/80 font-sans max-w-2xl mx-auto">
            Discover our mission, explore our tuition-free programs, and see how you can make a lasting difference in a child's life.
          </p>
        </div>

        {/* 3 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group rounded-3xl border border-ink/10 bg-paper-raised p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-gold transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Square Photo Container */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative border border-ink/10 shadow-inner">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Subtitle */}
                <span className={`inline-block text-xs font-bold tracking-wider uppercase ${card.badgeText} mb-1.5`}>
                  {card.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading text-ink mb-3 group-hover:text-blue transition-colors">
                  {card.title}
                </h3>

                {/* Blurb */}
                <p className="text-sm text-ink/80 leading-relaxed font-sans mb-6">
                  {card.blurb}
                </p>
              </div>

              {/* Learn More Button */}
              <div className="pt-2 mt-auto">
                <a
                  href={card.linkHref}
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-5 py-3 rounded-xl transition-all duration-200 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-gold outline-none w-full text-center group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-ink" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
