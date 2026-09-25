import React from 'react';
import { Heart } from 'lucide-react';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  specialtyBadge: string;
  badgeBg: string;
  bioSentence: string;
}

export const StaffSection: React.FC = () => {
  const team: StaffMember[] = [
    {
      id: 'kerry-clark',
      name: 'Kerry Clark',
      role: 'Founder & Executive Director',
      imageSrc: '/assets/images/kerry-clark-v3.jpg',
      imageAlt: 'Kerry Clark, Founder and Executive Director of Bright Hope Learning Center, smiling warmly at her office desk',
      specialtyBadge: 'Leadership & Vision',
      badgeBg: 'bg-gold text-ink',
      bioSentence: 'Leading Bright Hope with faith, vision, and a commitment to keeping quality early intervention 100% tuition-free for every family.'
    },
    {
      id: 'lead-educator',
      name: 'Special Education Team',
      role: 'Licensed Early Intervention Teachers',
      imageSrc: '/assets/images/special-education-team-v4.jpg',
      imageAlt: 'A young student wearing noise-reducing headphones and seated in an adaptive chair, smiling while participating in a classroom activity at Bright Hope Learning Center.',
      specialtyBadge: 'Specialized Education',
      badgeBg: 'bg-blue text-white',
      bioSentence: 'Structuring warm, therapeutic learning environments tailored to each child\'s unique cognitive and social growth goals.'
    },
    {
      id: 'therapists',
      name: 'Pediatric Therapy Specialists',
      role: 'Licensed OT, PT & SLP Therapists',
      imageSrc: '/assets/images/pediatric-therapy-specialists-v3.jpg',
      imageAlt: 'Bright Hope pediatric physical therapist guiding a young student in an adaptive mobility trainer',
      specialtyBadge: 'Integrated Therapy',
      badgeBg: 'bg-green-secondary text-white',
      bioSentence: 'Collaborating daily under one roof to deliver individualized speech, fine motor, and gross motor therapies.'
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-paper-raised border-b border-ink/10 transition-colors duration-200 relative overflow-hidden">
      
      {/* Background path line motif */}
      <div className="absolute top-4 left-0 right-0 hidden md:block pointer-events-none opacity-20">
        <svg className="w-full h-8 text-blue" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 0,20 C 300,5 600,35 900,15 C 1050,5 1150,25 1200,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-blue px-3.5 py-1.5 rounded-full shadow-xs">
            Meet Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
            The heart behind Bright Hope.
          </h2>
          <p className="text-base sm:text-lg text-ink/85 font-sans max-w-2xl mx-auto">
            Dedicated special educators, credentialed therapists, and leadership walking alongside your family every step of the way.
          </p>
        </div>

        {/* 3 Staff Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {team.map((member) => (
            <div
              key={member.id}
              className="group rounded-3xl border border-ink/10 bg-paper p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-gold transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Photo Container */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative border border-ink/10 shadow-inner bg-paper-raised">
                  <img
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${member.badgeBg}`}>
                      ✦ {member.specialtyBadge}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold font-heading text-ink mb-1 group-hover:text-blue transition-colors">
                  {member.name}
                </h3>

                {/* Role / Title */}
                <p className="text-sm font-bold text-blue font-sans mb-3">
                  {member.role}
                </p>

                {/* Short Sentence */}
                <p className="text-sm text-ink/85 leading-relaxed font-sans">
                  {member.bioSentence}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-4 mt-6 border-t border-ink/10 flex items-center gap-1.5 text-xs text-green-secondary font-bold">
                <Heart className="w-3.5 h-3.5 fill-green-secondary/20 text-green-secondary" />
                <span>Serving Shelbyville Families</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
