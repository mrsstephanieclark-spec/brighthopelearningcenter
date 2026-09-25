import React, { useState } from 'react';

interface ValueItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  colorName: 'blue' | 'gold' | 'green' | 'green-secondary';
  colorHex: string;
  bgHex: string;
  borderHex: string;
  inactiveBgHex: string;
  inactiveBorderHex: string;
  inactiveTextColor: string;
}

export const ValuesSection: React.FC = () => {
  const values: ValueItem[] = [
    {
      id: 'faith',
      name: 'Faith',
      tagline: 'Trusting God in every step',
      description: 'We believe God has a purpose for every child and faithfully pursue excellence, trusting Him to accomplish more than we can imagine.',
      colorName: 'blue',
      colorHex: '#0B4EA2',
      bgHex: 'rgba(11, 78, 162, 0.15)',
      borderHex: '#0B4EA2',
      inactiveBgHex: 'rgba(11, 78, 162, 0.08)',
      inactiveBorderHex: 'rgba(11, 78, 162, 0.25)',
      inactiveTextColor: 'text-[#0B4EA2]'
    },
    {
      id: 'hope',
      name: 'Hope',
      tagline: 'Seeing possibility beyond diagnosis',
      description: 'We believe every child has God-given potential, and we inspire hope by focusing on possibilities rather than limitations.',
      colorName: 'gold',
      colorHex: '#FFD200',
      bgHex: 'rgba(255, 210, 0, 0.25)',
      borderHex: '#FFD200',
      inactiveBgHex: 'rgba(255, 210, 0, 0.18)',
      inactiveBorderHex: 'rgba(255, 210, 0, 0.4)',
      inactiveTextColor: 'text-[#051C3B]'
    },
    {
      id: 'love',
      name: 'Love',
      tagline: 'The love of Christ',
      description: 'We love every child and family with the unconditional, compassionate love of Christ, seeing each person as uniquely created by God.',
      colorName: 'green',
      colorHex: '#7FBF3F',
      bgHex: 'rgba(127, 191, 63, 0.15)',
      borderHex: '#7FBF3F',
      inactiveBgHex: 'rgba(127, 191, 63, 0.12)',
      inactiveBorderHex: 'rgba(127, 191, 63, 0.3)',
      inactiveTextColor: 'text-[#2E7D32]'
    },
    {
      id: 'community',
      name: 'Community',
      tagline: 'Growing better together',
      description: 'We build meaningful relationships where children, families, staff, and community partners encourage and strengthen each other.',
      colorName: 'blue',
      colorHex: '#0B4EA2',
      bgHex: 'rgba(11, 78, 162, 0.15)',
      borderHex: '#0B4EA2',
      inactiveBgHex: 'rgba(11, 78, 162, 0.08)',
      inactiveBorderHex: 'rgba(11, 78, 162, 0.25)',
      inactiveTextColor: 'text-[#0B4EA2]'
    },
    {
      id: 'celebration',
      name: 'Celebration',
      tagline: 'Every "inchstone" matters',
      description: 'We joyfully celebrate every step forward. Even the smallest inchstone represents courage, growth, and God\'s faithfulness.',
      colorName: 'gold',
      colorHex: '#FFD200',
      bgHex: 'rgba(255, 210, 0, 0.25)',
      borderHex: '#FFD200',
      inactiveBgHex: 'rgba(255, 210, 0, 0.18)',
      inactiveBorderHex: 'rgba(255, 210, 0, 0.4)',
      inactiveTextColor: 'text-[#051C3B]'
    },
    {
      id: 'innovation',
      name: 'Innovation',
      tagline: 'Creative solutions for every child',
      description: 'We embrace evidence-based practices, creativity, and collaboration to help every child learn, grow, and thrive.',
      colorName: 'green-secondary',
      colorHex: '#2E7D32',
      bgHex: 'rgba(46, 125, 50, 0.15)',
      borderHex: '#2E7D32',
      inactiveBgHex: 'rgba(46, 125, 50, 0.1)',
      inactiveBorderHex: 'rgba(46, 125, 50, 0.25)',
      inactiveTextColor: 'text-[#2E7D32]'
    },
    {
      id: 'stewardship',
      name: 'Stewardship',
      tagline: 'Faithful with every gift',
      description: 'We honor God by wisely managing every resource, relationship, and opportunity entrusted to us, maximizing our impact for children and families.',
      colorName: 'green',
      colorHex: '#7FBF3F',
      bgHex: 'rgba(127, 191, 63, 0.15)',
      borderHex: '#7FBF3F',
      inactiveBgHex: 'rgba(127, 191, 63, 0.12)',
      inactiveBorderHex: 'rgba(127, 191, 63, 0.3)',
      inactiveTextColor: 'text-[#2E7D32]'
    },
  ];

  // Faith is selected by default
  const [selectedId, setSelectedId] = useState<string>('faith');
  const activeValue = values.find(v => v.id === selectedId) || values[0];

  return (
    <section id="values" className="py-16 md:py-24 bg-paper transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col items-center">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-blue bg-blue/10 px-3.5 py-1.5 rounded-full border border-blue/20 mb-6">
            What guides every inchstone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink mb-5">
            Seven values, walked out one step at a time.
          </h2>
          <p className="text-base sm:text-lg text-ink/75 font-sans">
            Our logo's open book already draws a path toward the light — these are the seven stones that make it up. Tap one.
          </p>
        </div>

        {/* Hand-drawn curved SVG dashed path above pills */}
        <div className="relative mb-6 hidden md:block overflow-hidden py-2">
          <svg 
            className="w-full h-12 text-green/60" 
            viewBox="0 0 1000 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              d="M 10,25 C 150,5 300,45 450,20 C 600,-5 750,45 990,25" 
              stroke="#3FA34D" 
              strokeWidth="3" 
              strokeDasharray="8 6" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 7 Value Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {values.map((val) => {
            const isSelected = val.id === selectedId;

            return (
              <button
                key={val.id}
                type="button"
                onClick={() => setSelectedId(val.id)}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-200 border outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isSelected
                    ? 'shadow-md scale-105 border-ink/20 text-ink'
                    : `${val.inactiveTextColor} hover:opacity-85`
                }`}
                style={{
                  backgroundColor: isSelected ? val.bgHex : val.inactiveBgHex,
                  borderColor: isSelected ? val.colorHex : val.inactiveBorderHex,
                }}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0" 
                  style={{ backgroundColor: val.colorHex }}
                />
                <span>{val.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Value Detail Panel */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="p-8 sm:p-10 rounded-3xl bg-paper-raised shadow-lg border border-ink/10 transition-all duration-300 relative text-left"
            style={{
              borderLeftWidth: '8px',
              borderLeftColor: activeValue.colorHex
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span 
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: activeValue.colorHex }}
              >
                Step {values.findIndex(v => v.id === activeValue.id) + 1} of 7
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink">
                {activeValue.name}
              </h3>
            </div>

            <p 
              className="text-lg sm:text-xl font-bold font-heading mb-3"
              style={{ color: activeValue.colorHex }}
            >
              "{activeValue.tagline}"
            </p>

            <p className="text-base sm:text-lg text-ink/85 leading-relaxed font-sans">
              {activeValue.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
