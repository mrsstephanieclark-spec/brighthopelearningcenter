import React, { useRef, useEffect } from 'react';
import { Compass, Heart, Sun } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden py-16 md:py-24 lg:py-28 bg-black text-white transition-colors duration-200">
      
      {/* 1. Full-Bleed Background Video / Poster (Slow ambient 0.5x playback speed) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          poster="/assets/images/hero-video-poster.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
          <source src="/assets/hero-background.MOV" type="video/quicktime" />
          <img 
            src="/assets/images/hero-video-poster.jpg" 
            alt="Bright Hope Learning Center classroom in action" 
            className="w-full h-full object-cover object-center"
          />
        </video>
      </div>

      {/* 2. Dark Neutral Scrim Overlay (Darker black on left for WCAG AA text contrast, lighter on right for vibrant photo visibility) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10 pointer-events-none" />

      {/* Decorative subtle ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none z-10" />

      {/* 3. Layered Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subhead, Scripture & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left max-w-3xl">
            
            {/* Eyebrow Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0B4EA2] font-bold text-sm tracking-wide shadow-md border border-white/30">
              <Sun className="w-4 h-4 text-[#0B4EA2]" />
              <span>Shelbyville, Kentucky · Est. 2022</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight tracking-tight drop-shadow-sm">
              Every child was made for a <span className="text-gold underline decoration-gold decoration-4 underline-offset-4">bright future.</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-[#F5F5F5] leading-relaxed font-sans max-w-2xl font-medium drop-shadow-xs">
              Bright Hope Learning Center provides Christ-centered early intervention, education, and therapy — <strong className="text-white font-extrabold underline decoration-gold/60 decoration-2">completely tuition-free</strong> — for children ages 1–5 with special needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#paths"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-white outline-none"
              >
                <Compass className="w-5 h-5 text-ink" />
                <span>Find your path</span>
              </a>

              <a
                href="https://givebutter.com/bhlc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-secondary hover:bg-green-secondary/90 text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-gold outline-none"
              >
                <Heart className="w-5 h-5 fill-white/20 text-white" />
                <span>Give hope today</span>
              </a>
            </div>

            {/* Scripture Line */}
            <div className="pt-2">
              <p className="text-sm italic font-sans text-white/95 border-l-4 border-gold pl-4 py-2.5 bg-white/10 backdrop-blur-md rounded-r-xl border border-white/10 max-w-xl shadow-xs">
                "For I know the plans I have for you… plans to give you hope and a future." — Jeremiah 29:11
              </p>
            </div>

          </div>

          {/* Right Column: Photo Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-3xl p-4 bg-white border border-white/20 shadow-2xl space-y-3">
              <div className="w-full aspect-[1200/1134] rounded-2xl overflow-hidden relative shadow-inner border border-ink/10">
                <img 
                  src="/assets/images/hero-photo-v3.jpg" 
                  alt="Bright Hope specialist guiding a young student in hands-on early intervention activities" 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 pointer-events-none">
                  <span className="text-xs font-bold text-white uppercase tracking-wider bg-[#0B4EA2] px-3 py-1 rounded-full shadow-sm">
                    ✦ Early Intervention
                  </span>
                </div>
              </div>

              <p className="text-xs font-bold text-[#0B4EA2] font-sans text-left">
                Christ-centered early intervention & specialized education in Shelbyville, KY.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
