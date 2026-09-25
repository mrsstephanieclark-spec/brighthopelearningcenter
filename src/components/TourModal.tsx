import React, { useState } from 'react';
import { Phone, X, CheckCircle2 } from 'lucide-react';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setSubmitted(false);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
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
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-ink/70 hover:bg-ink/10 transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none cursor-pointer"
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
                onClick={handleClose}
                className="bg-gold text-ink font-bold px-6 py-2.5 rounded-xl shadow hover:bg-gold/90 transition-colors text-sm cursor-pointer"
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
              <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                Parent/Guardian Name <span className="text-blue">*</span>
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                required
                aria-required="true"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            {/* Email (Required) */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                Email Address <span className="text-blue">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone (Optional) */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Phone <span className="text-ink/60 text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(502) 555-0199"
                  className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              {/* Child's Age (Required) */}
              <div>
                <label htmlFor="childAge" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Child's Age <span className="text-blue">*</span>
                </label>
                <input
                  type="text"
                  id="childAge"
                  name="childAge"
                  required
                  aria-required="true"
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="e.g., 3 years old"
                  className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            {/* Short Message (Optional) */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                Message <span className="text-ink/60 text-[10px] font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a bit about your child..."
                className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
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
  );
};
