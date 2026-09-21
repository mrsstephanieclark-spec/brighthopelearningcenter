import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TourModal } from '../components/TourModal';
import { Sun, Heart, Sparkles, Award, Compass, ShieldCheck, Activity, MessageSquare, ChevronDown, Clock } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const ProgramsPage: React.FC = () => {
  const [openFAQId, setOpenFAQId] = useState<string | null>('faq-1');
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  const toggleFAQ = (id: string) => {
    setOpenFAQId(prev => (prev === id ? null : id));
  };

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What ages do you serve?',
      answer: 'Bright Hope serves children ages 1–5 at the time of enrollment. A child who turns 6 during the school year may continue attending through the end of that school year.'
    },
    {
      id: 'faq-2',
      question: 'What is early intervention?',
      answer: 'Early intervention refers to specialized therapeutic and educational services provided during a child\'s earliest developmental years (ages 1–5). Receiving support early takes advantage of critical brain adaptability windows to build language, motor, and social skills.'
    },
    {
      id: 'faq-3',
      question: 'Is this a daycare?',
      answer: 'No. Bright Hope is a specialized developmental and educational center — not a custodial daycare. Our program is built around licensed therapists, individualized service plans, credentialed special educators, and evidence-based early intervention practices.'
    },
    {
      id: 'faq-4',
      question: 'Is there really no cost?',
      answer: 'Yes, absolutely. Bright Hope Learning Center is 100% tuition-free for every family we serve. Our operations are funded entirely through generous community supporters, donors, and Hopebuilder monthly givers.'
    }
  ];

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-200 flex flex-col font-sans selection:bg-gold selection:text-ink">
      
      {/* Shared Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        
        {/* 1. HERO / INTRO SECTION */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-paper transition-colors duration-200 border-b border-ink/10">
          
          {/* Subtle background glow highlights */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
            <div className="max-w-3xl space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue text-white font-bold text-sm tracking-wide shadow-xs">
                <Sun className="w-4 h-4 text-gold" />
                <span>Bright Hope Learning Center · Programs & Services</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-ink leading-tight tracking-tight">
                Early intervention that meets kids <span className="text-blue underline decoration-gold decoration-4 underline-offset-4">exactly where they are.</span>
              </h1>

              {/* Subhead (1-2 sentences) */}
              <p className="text-lg sm:text-xl text-ink/80 leading-relaxed font-sans">
                Bright Hope serves children ages 1–5 with special needs, providing Christ-centered early intervention, education, and therapy — <strong className="text-ink font-extrabold">completely tuition-free</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsTourModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-ink outline-none cursor-pointer"
                >
                  <Heart className="w-5 h-5 fill-ink/20 text-ink" />
                  <span>Request a Tour</span>
                </button>

                <a
                  href="#therapies"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue text-blue hover:bg-blue hover:text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-blue outline-none"
                >
                  <Activity className="w-5 h-5" />
                  <span>Explore Therapies</span>
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* 2. "WHAT WE ACTUALLY ARE" SECTION */}
        <section className="py-16 md:py-24 bg-paper-raised border-b border-ink/10 transition-colors duration-200 relative overflow-hidden">
          
          {/* Decorative background path motif line */}
          <div className="absolute top-4 left-0 right-0 hidden md:block pointer-events-none opacity-20">
            <svg className="w-full h-8 text-green" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M 0,20 C 300,35 600,5 900,25 C 1050,35 1150,15 1200,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
            <div className="max-w-4xl mx-auto space-y-6 bg-paper p-8 sm:p-12 rounded-3xl border border-ink/10 shadow-md">
              
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-green px-3.5 py-1.5 rounded-full shadow-xs">
                Our Purpose & Approach
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-ink">
                A developmental and educational center built for growth.
              </h2>

              <p className="text-base sm:text-lg text-ink/85 leading-relaxed font-sans">
                Bright Hope Learning Center is a specialized early intervention and educational program — not a custodial daycare. Built around licensed therapists, individualized service plans, and evidence-based early-intervention practices, our program provides structured therapeutic learning environments tailored specifically for children ages 1–5 with special needs. Every classroom experience, activity, and therapy session is intentionally designed by credentialed professionals to foster independence, communication, and developmental growth — completely tuition-free for every family.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-paper-raised border border-ink/10">
                  <Award className="w-5 h-5 text-blue shrink-0" />
                  <span className="text-sm font-bold font-heading text-ink">Licensed Therapists & Educators</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-paper-raised border border-ink/10">
                  <Compass className="w-5 h-5 text-green shrink-0" />
                  <span className="text-sm font-bold font-heading text-ink">Individualized Service Plans</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-paper-raised border border-ink/10">
                  <Activity className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm font-bold font-heading text-ink">Evidence-Based Practices</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-paper-raised border border-ink/10">
                  <ShieldCheck className="w-5 h-5 text-pink shrink-0" />
                  <span className="text-sm font-bold font-heading text-ink">100% Tuition-Free for Families</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 3. EARLY INTERVENTION, EXPLAINED PLAINLY */}
        <section className="py-16 md:py-24 bg-paper transition-colors duration-200 border-b border-ink/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-blue px-3.5 py-1.5 rounded-full shadow-xs">
                Understanding Early Intervention
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
                What early intervention means — and why acting early matters.
              </h2>
              <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed">
                The early childhood years — between ages 1 and 5 — represent the most significant window of brain development in a child's life. "Early intervention" simply means providing specialized support, therapy, and developmental tools right when a delay or diagnosis is identified, rather than taking a "wait-and-see" approach.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-3xl bg-paper-raised border border-ink/10 shadow-sm hover:shadow-md hover:border-blue transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl bg-blue text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-ink mb-3">
                  Unlocking Early Potential
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed font-sans">
                  During ages 1–5, young brains are extraordinarily adaptable. Introducing targeted speech, physical, and occupational therapy early creates neural pathways that make learning and skill-building faster and more natural.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-paper-raised border border-ink/10 shadow-sm hover:shadow-md hover:border-gold transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl bg-gold text-ink flex items-center justify-center font-bold mb-4 shadow-sm">
                  <Heart className="w-6 h-6 fill-ink/20 text-ink" />
                </div>
                <h3 className="text-xl font-bold font-heading text-ink mb-3">
                  Building Family Confidence
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed font-sans">
                  Early intervention doesn't just support the child — it equips parents and families with practical strategies, encouragement, and a supportive team walking beside them every step of the way.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-paper-raised border border-ink/10 shadow-sm hover:shadow-md hover:border-green transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl bg-green text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-ink mb-3">
                  Preparing for School & Life
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed font-sans">
                  By addressing fine motor, mobility, language, and social skills early, children gain the foundational independence they need to transition successfully into future learning environments.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* 4. THERAPIES OFFERED */}
        <section id="therapies" className="py-16 md:py-24 bg-paper-raised border-b border-ink/10 transition-colors duration-200 relative overflow-hidden">
          
          {/* Decorative path line */}
          <div className="absolute top-4 left-0 right-0 hidden md:block pointer-events-none opacity-20">
            <svg className="w-full h-8 text-pink" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M 0,20 C 300,5 600,35 900,15 C 1050,5 1150,25 1200,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
            
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-pink px-3.5 py-1.5 rounded-full shadow-xs">
                Comprehensive Care
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
                Therapies provided under one roof.
              </h2>
              <p className="text-base sm:text-lg text-ink/80 font-sans">
                Our credentialed therapists collaborate daily to deliver integrated care tailored to each child's individualized service plan.
              </p>
            </div>

            {/* 3 Therapy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Occupational Therapy */}
              <div className="p-8 rounded-3xl bg-paper-raised border border-ink/10 shadow-sm hover:shadow-md hover:border-pink/30 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pink/15 text-pink flex items-center justify-center font-bold mb-5">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-ink mb-3">
                    Occupational Therapy (OT)
                  </h3>
                  <p className="text-sm text-ink/85 leading-relaxed font-sans">
                    Occupational therapy helps children develop fine motor skills, sensory processing balance, and self-care abilities needed for daily life. From grasping a pencil to buttoning a coat or trying new textures, OT builds practical independence and motor confidence.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-ink/10 text-xs font-bold text-pink flex items-center gap-1.5">
                  <span>✦ Fine Motor & Sensory Processing</span>
                </div>
              </div>

              {/* Physical Therapy */}
              <div className="p-8 rounded-3xl bg-paper-raised border border-ink/10 shadow-sm hover:shadow-md hover:border-pink/30 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gold/25 text-ink flex items-center justify-center font-bold mb-5">
                    <Compass className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-ink mb-3">
                    Physical Therapy (PT)
                  </h3>
                  <p className="text-sm text-ink/85 leading-relaxed font-sans">
                    Physical therapy focuses on gross motor strength, balance, coordination, and mobility. PT supports children in achieving physical milestones — whether learning to sit independently, walk with confidence, or navigate their environment safely.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-ink/10 text-xs font-bold text-gold flex items-center gap-1.5">
                  <span>✦ Gross Motor & Mobility Milestones</span>
                </div>
              </div>

              {/* Speech-Language Therapy */}
              <div className="p-8 rounded-3xl bg-paper-raised border border-ink/10 shadow-sm hover:shadow-md hover:border-pink/30 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue/15 text-blue flex items-center justify-center font-bold mb-5">
                    <MessageSquare className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-ink mb-3">
                    Speech-Language Therapy (SLP)
                  </h3>
                  <p className="text-sm text-ink/85 leading-relaxed font-sans">
                    Speech-language therapy helps children express their thoughts, understand language, and connect with the world around them. SLP addresses speech clarity, non-verbal communication tools, social interaction, and safe feeding/swallowing skills.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-ink/10 text-xs font-bold text-blue flex items-center gap-1.5">
                  <span>✦ Expressive & Receptive Communication</span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* 5. WHAT A DAY LOOKS LIKE */}
        {/* NOTE: Placeholder detail - needs Kerry's confirmation/refinement for exact day-to-day schedule */}
        <section className="py-16 md:py-24 bg-paper transition-colors duration-200 border-b border-ink/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-green bg-green/10 px-3.5 py-1.5 rounded-full border border-green/20">
                Daily Experience
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink">
                What a typical day looks like.
              </h2>
              <p className="text-base sm:text-lg text-ink/80 font-sans">
                A warm, general overview of a day at Bright Hope — blending individualized therapy sessions, small-group learning, and play-based developmental activities.
              </p>
            </div>

            {/* Day Flow Timeline Grid */}
            <div className="max-w-4xl mx-auto space-y-4">
              
              <div className="p-6 rounded-2xl bg-paper-raised border border-ink/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-full bg-blue/10 text-blue font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Morning</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-ink">Welcome & Circle Time</h4>
                  <p className="text-sm text-ink/80 font-sans mt-0.5">Warm greetings, sensory check-in, songs, and routine-building fostering social connection and predictability.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-paper-raised border border-ink/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-full bg-gold/25 text-ink font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mid-Morning</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-ink">1-on-1 Individualized Therapy Sessions</h4>
                  <p className="text-sm text-ink/80 font-sans mt-0.5">Targeted 1-on-1 sessions with licensed OT, PT, or Speech-Language Specialists tailored directly to each child's goal plan.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-paper-raised border border-ink/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-full bg-green/15 text-green font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mid-Day</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-ink">Small-Group Learning & Discovery</h4>
                  <p className="text-sm text-ink/80 font-sans mt-0.5">Hands-on cognitive, pre-writing, and early literacy activities guided by specialized early intervention educators.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-paper-raised border border-ink/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-full bg-pink/15 text-pink font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Afternoon</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-ink">Play-Based Skill Practice & Outdoor Time</h4>
                  <p className="text-sm text-ink/80 font-sans mt-0.5">Guided peer interaction, gross-motor exploration, and creative play celebrating daily inchstone wins.</p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* 6. SHORT FAQ ACCORDION */}
        <section className="py-16 md:py-24 bg-paper-raised transition-colors duration-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            
            <div className="text-center mb-14 space-y-4">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-blue bg-blue/10 px-3.5 py-1.5 rounded-full border border-blue/20">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-ink">
                Common questions about our programs.
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq) => {
                const isOpen = openFAQId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 bg-paper ${
                      isOpen ? 'border-blue ring-2 ring-blue/20' : 'border-ink/10'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-gold rounded-2xl outline-none cursor-pointer"
                    >
                      <span className="text-lg font-bold font-heading text-ink">
                        {faq.question}
                      </span>
                      <div className={`p-1.5 rounded-full bg-paper-raised text-ink/70 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-blue/10 text-blue' : ''}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        className="px-6 pb-6 pt-1 text-sm text-ink/85 leading-relaxed font-sans border-t border-ink/10 animate-fadeIn"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      {/* Shared Reusable TourModal */}
      <TourModal isOpen={isTourModalOpen} onClose={() => setIsTourModalOpen(false)} />

      {/* Shared Footer Component */}
      <Footer />

    </div>
  );
};
