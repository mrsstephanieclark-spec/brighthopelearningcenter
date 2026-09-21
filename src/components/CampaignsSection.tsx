import React from 'react';
import { Flower2, Gift, HeartHandshake, ExternalLink } from 'lucide-react';

interface CampaignCardData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  buttonLabel: string;
  linkHref: string;
  icon: React.ReactNode;
  tagBg: string;
  tagColor: string;
  cardHoverBorder: string;
}

export const CampaignsSection: React.FC = () => {
  const campaigns: CampaignCardData[] = [
    {
      id: 'garden-party',
      title: 'Garden Party',
      tagline: 'Our Biggest Fundraiser',
      description: 'Our signature annual spring event bringing families, supporters, and community leaders together to celebrate student milestones and fuel our mission.',
      buttonLabel: 'Support Garden Party',
      linkHref: 'https://givebutter.com/bhlc',
      icon: <Flower2 className="w-6 h-6" />,
      tagBg: 'bg-green text-white',
      tagColor: 'text-green',
      cardHoverBorder: 'hover:border-green'
    },
    {
      id: 'giving-tuesday',
      title: 'Giving Tuesday',
      tagline: 'Global Day of Giving',
      description: 'A powerful day of community generosity every autumn where matching gifts double your impact for children receiving free speech, OT, and PT therapies.',
      buttonLabel: 'Give on Giving Tuesday',
      linkHref: 'https://givebutter.com/bhlc',
      icon: <HeartHandshake className="w-6 h-6" />,
      tagBg: 'bg-blue text-white',
      tagColor: 'text-blue',
      cardHoverBorder: 'hover:border-blue'
    },
    {
      id: 'gift-of-hope',
      title: 'End of Year "Gift of Hope"',
      tagline: 'Year-End Giving Campaign',
      description: 'Our year-end initiative ensuring Bright Hope enters every new school year fully funded to serve every enrolled child 100% tuition-free.',
      buttonLabel: 'Give a Gift of Hope',
      linkHref: 'https://givebutter.com/bhlc',
      icon: <Gift className="w-6 h-6" />,
      tagBg: 'bg-gold text-ink',
      tagColor: 'text-gold',
      cardHoverBorder: 'hover:border-gold'
    }
  ];

  return (
    <section id="campaigns" className="py-16 md:py-24 bg-paper-raised border-b border-ink/10 transition-colors duration-200 relative overflow-hidden">
      
      {/* Decorative background path motif line */}
      <div className="absolute top-4 left-0 right-0 hidden md:block pointer-events-none opacity-20">
        <svg className="w-full h-8 text-gold" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 0,20 C 300,35 600,5 900,25 C 1050,35 1150,15 1200,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-blue px-3.5 py-1.5 rounded-full shadow-xs">
            Annual Initiatives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
            Key Fundraising Campaigns
          </h2>
          <p className="text-base sm:text-lg text-ink/80 font-sans max-w-2xl mx-auto">
            Bright Hope relies on community support through three main annual initiatives that keep our early intervention and education 100% tuition-free for families.
          </p>
        </div>

        {/* 3 Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className={`group rounded-3xl border border-ink/10 bg-paper p-7 sm:p-8 shadow-sm hover:shadow-md ${campaign.cardHoverBorder} transition-all duration-200 flex flex-col justify-between h-full`}
            >
              <div>
                {/* Header Row: Icon + Badge Tag */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${campaign.tagBg} flex items-center justify-center shadow-sm`}>
                    {campaign.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${campaign.tagColor} bg-paper-raised px-3 py-1 rounded-full border border-ink/10`}>
                    {campaign.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading text-ink mb-3 group-hover:text-blue transition-colors">
                  {campaign.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink/80 leading-relaxed font-sans mb-6">
                  {campaign.description}
                </p>
              </div>

              {/* Call-To-Action Link Button */}
              <div className="pt-2 mt-auto">
                <a
                  href={campaign.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green/90 text-white font-bold px-5 py-3 rounded-xl transition-all duration-200 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-gold outline-none w-full text-center"
                >
                  <span>{campaign.buttonLabel}</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
