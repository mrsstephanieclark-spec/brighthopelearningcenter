import React, { useState } from 'react';
import { Phone, Heart, Users, Briefcase, ExternalLink, Calendar, X, CheckCircle2 } from 'lucide-react';

interface PathCardData {
  id: string;
  title: string;
  initials: string;
  circleBg: string;
  circleText: string;
  blurb: string;
  linkHref?: string;
  linkLabel: string;
  icon: React.ReactNode;
  external?: boolean;
  isFormTrigger?: boolean;
}

export const PathSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // NOTE: Replace this mailto fallback with a proper form backend (e.g., Formspree, Firebase Cloud Function, or API endpoint) before production launch.
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Tour & Screening Request - Bright Hope Learning Center");
    const body = encodeURIComponent(
      `Tour & Screening Request Details:\n\n` +
      `Parent/Guardian Name: ${formData.parentName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Child's Age: ${formData.childAge}\n` +
      `Message: ${formData.message || 'None'}\n\n` +
      `Submitted via Bright Hope Learning Center Website`
    );

    window.location.href = `mailto:bhlc@brighthopelc.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
  };

  const pathCards: PathCardData[] = [
    {
      id: 'parent',
      title: "I'm a Parent",
      initials: 'P',
      circleBg: 'bg-blue',
      circleText: 'text-white',
      blurb: "Curious if Bright Hope is right for your child? Reach out and we'll set up a tour and a screening — no pressure, just a conversation.",
      linkLabel: 'Request a Tour',
      icon: <Calendar className="w-4 h-4" />,
      isFormTrigger: true
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
    <section id="paths" className="py-16 md:py-24 bg-green/10 dark:bg-green/15 border-y border-green/20 transition-colors duration-200 relative overflow-hidden">
      
      {/* Decorative background path motif line at the top */}
      <div className="absolute top-3 left-0 right-0 hidden md:block pointer-events-none opacity-25">
        <svg className="w-full h-8 text-green" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 0,20 C 300,35 600,5 900,25 C 1050,35 1150,15 1200,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-green bg-green/15 px-3.5 py-1.5 rounded-full border border-green/30 mb-5 shadow-xs">
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
              className="rounded-2xl border border-ink/10 bg-paper-raised p-6 shadow-sm hover:shadow-md hover:border-green/30 transition-all duration-200 flex flex-col justify-between text-left h-full"
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

              {/* Action Buttons */}
              <div className="pt-2 mt-auto space-y-2.5">
                {card.isFormTrigger ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center justify-center gap-2 bg-blue text-white font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-blue/90 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-gold outline-none w-full text-center cursor-pointer"
                    >
                      {card.icon}
                      <span>{card.linkLabel}</span>
                    </button>

                    {/* Secondary Phone Link */}
                    <a
                      href="tel:5022065390"
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-blue hover:text-blue/80 transition-colors text-center w-full focus-visible:ring-2 focus-visible:ring-gold rounded outline-none py-0.5"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Prefer to talk? Call 502-206-5390</span>
                    </a>
                  </>
                ) : (
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
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Parent Tour & Screening Contact Form Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-lg bg-paper-raised rounded-3xl p-6 sm:p-8 shadow-2xl border border-ink/15 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full text-ink/70 hover:bg-ink/10 transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green/15 text-green mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold font-heading text-ink">
                  Tour Request Sent!
                </h3>

                <p className="text-sm text-ink/80 font-sans leading-relaxed max-w-md mx-auto">
                  Thank you! Your tour and screening request has been formatted and opened in your email client to send directly to <strong>bhlc@brighthopelc.org</strong>.
                </p>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gold text-ink font-bold px-6 py-2.5 rounded-xl shadow hover:bg-gold/90 transition-colors text-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue bg-blue/10 px-3 py-1 rounded-full border border-blue/20">
                    Set Up a Visit
                  </span>
                  <h3 id="modal-title" className="text-2xl font-bold font-heading text-ink mt-2">
                    Request a Tour & Screening
                  </h3>
                  <p className="text-xs text-ink/75 font-sans mt-1">
                    Curious if Bright Hope is right for your child? Fill out this quick form — no pressure, just a conversation.
                  </p>
                </div>

                {/* Parent/Guardian Name (Required) */}
                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1">
                    Parent/Guardian Name <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                {/* Email (Required) */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1">
                    Email Address <span className="text-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1">
                      Phone <span className="text-ink/40 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(502) 555-0199"
                      className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  {/* Child's Age (Required) */}
                  <div>
                    <label htmlFor="childAge" className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1">
                      Child's Age <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      required
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder="e.g., 3 years old"
                      className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>

                {/* Short Message (Optional) */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-ink/80 mb-1">
                    Message <span className="text-ink/40 text-[10px] font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your child..."
                    className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/90 text-ink font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm focus-visible:ring-2 focus-visible:ring-ink outline-none cursor-pointer"
                  >
                    Request a Tour
                  </button>
                </div>

                {/* Secondary Phone Link in Modal */}
                <div className="pt-2 text-center border-t border-ink/10">
                  <a
                    href="tel:5022065390"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue hover:underline text-center focus-visible:ring-2 focus-visible:ring-gold rounded outline-none py-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Prefer to talk right now? Call us at 502-206-5390</span>
                  </a>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
