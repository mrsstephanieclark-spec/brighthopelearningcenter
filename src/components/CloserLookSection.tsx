import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CloserLookCard {
  id: string;
  title: string;
  subtitle: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  badgeTextColor: string;
  topBorderColor: string;
  buttonClass: string;
}

export const CloserLookSection: React.FC = () => {
  const cards: CloserLookCard[] = [
    {
      id: 'story',
      title: 'Our Story',
      subtitle: 'Who we are',
      blurb: 'Founded on faith and love, Bright Hope provides Christ-centered early intervention and developmental support for children with special needs.',
      imageSrc: '/assets/images/our-story-square.jpg',
      imageAlt: 'Young student stepping carefully across sensory stepping tiles guided by a Bright Hope teacher',
      linkHref: '/#values',
      badgeTextColor: 'text-[#0B4EA2]',
      topBorderColor: 'border-t-4 border-[#0B4EA2]',
      buttonClass: 'bg-[#0B4EA2] hover:bg-[#09428B] text-white font-bold focus-visible:ring-2 focus-visible:ring-[#0B4EA2]'
    },
    {
      id: 'services',
      title: 'Our Services',
      subtitle: 'What we offer',
      blurb: 'Licensed speech, occupational, and physical therapy alongside specialized early education — completely tuition-free for ages 1–5.',
      imageSrc: '/assets/images/our-services-square.jpg',
      imageAlt: 'Child completing hands-on picture card sorting activities with colorful rhyming houses during speech session',
      linkHref: '/programs',
      badgeTextColor: 'text-[#2E7D32]',
      topBorderColor: 'border-t-4 border-[#7FBF3F]',
      buttonClass: 'bg-[#7FBF3F] hover:bg-[#70aa37] text-[#051C3B] font-extrabold focus-visible:ring-2 focus-visible:ring-[#7FBF3F]'
    },
    {
      id: 'needs',
      title: 'Our Needs',
      subtitle: 'How YOU can help',
      blurb: 'As a 100% free program for families, our work is made possible through donor support, community volunteers, and faithful partners.',
      imageSrc: '/assets/images/our-needs-square.jpg',
      imageAlt: 'Bright Hope specialist guiding a child in adaptive seating through shape puzzle exercises next to an AAC speech device',
      linkHref: '/#give',
      badgeTextColor: 'text-[#051C3B] font-extrabold',
      topBorderColor: 'border-t-4 border-[#FFD200]',
      buttonClass: 'bg-[#FFD200] hover:bg-[#e6bd00] text-[#051C3B] font-extrabold focus-visible:ring-2 focus-visible:ring-[#FFD200]'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-paper border-b border-ink/10 transition-colors duration-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase bg-[#FFD200] text-[#051C3B] px-3.5 py-1.5 rounded-full shadow-xs">
            Explore Bright Hope
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
            Take a Closer Look
          </h2>
          <p className="text-base sm:text-lg text-ink/80 font-sans max-w-2xl mx-auto">
            Discover our mission, explore our tuition-free programs, and see how you can make a lasting difference in a child's life.
          </p>
        </div>

        {/* 3 Horizontal Cards Grid with Distinct Blue/Green/Gold Identities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`group rounded-3xl ${card.topBorderColor} border-x border-b border-ink/10 bg-paper-raised p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full`}
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
                <span className={`inline-block text-xs font-extrabold tracking-wider uppercase ${card.badgeTextColor} mb-1.5`}>
                  {card.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading text-ink mb-3 group-hover:text-[#0B4EA2] transition-colors">
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
                  className={`inline-flex items-center justify-center gap-2 ${card.buttonClass} px-5 py-3 rounded-xl transition-all duration-200 text-sm shadow-sm outline-none w-full text-center group/btn`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
