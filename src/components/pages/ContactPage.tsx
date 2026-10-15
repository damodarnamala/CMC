import React, { useState } from 'react';
import { STUDIO_INFO } from '../../data/studioData.ts';
import { Mail, MapPin, Building2, ShieldAlert, Send, CheckCircle2, PhoneCall } from 'lucide-react';
import { AppRoute } from '../../types.ts';

interface ContactPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Business & Partnerships',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    { name: 'Business & Partnerships', email: 'business@crystolytemedia.com', desc: 'Co-productions, slate financing, institutional alliances' },
    { name: 'Distribution & Licensing', email: 'distribution@crystolytemedia.com', desc: 'Worldwide OTT, territorial rights, format remakes' },
    { name: 'Press & Media', email: 'press@crystolytemedia.com', desc: 'Editorial inquiries, press credentials, interviews' },
    { name: 'Talent & Casting', email: 'talent@crystolytemedia.com', desc: 'Agent & manager talent submissions' },
    { name: 'Careers', email: 'careers@crystolytemedia.com', desc: 'Production crews, writers room, post-production talent' },
    { name: 'General Inquiries', email: 'info@crystolytemedia.com', desc: 'Corporate information and official queries' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 cmc-eyebrow mb-3">
            <span className="w-5 h-px bg-amber-400" />
            <span>CONTACT & COMMUNICATIONS</span>
          </div>

          <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed">
            Direct routing to our executive offices, legal counsel, distribution desks, and press communications in Hyderabad.
          </p>
        </div>

        {/* Mandatory Legal Policy Box: Strict Unsolicited Materials Disclaimer */}
        <div className="rounded-3xl p-6 sm:p-8 bg-amber-500/10 border-2 border-amber-500/30 mb-16 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">
                Studio Policy Regarding Unsolicited Creative Materials
              </h2>
              <p className="text-sm sm:text-sm text-slate-200 leading-relaxed font-normal">
                <strong className="text-amber-200">Crystolyte Media does not accept unsolicited scripts, treatments, concepts, pitch decks, screenplays, or other creative materials</strong> unless submitted through an authorized entertainment representative, literary agent, or licensed attorney. Any unsolicited materials received via email or standard mail will be deleted or returned unread without review, to protect both creators and the studio from potential intellectual property conflicts.
              </p>
            </div>
          </div>
        </div>

        {/* Main 2-Column: Department Directory + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left: Department Directory & Headquarters */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className="font-cinzel text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Headquarters & Offices</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Crystolyte Media Creations</strong>
                    <span className="text-slate-300">Hyderabad, Telangana, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-300 block text-xs">Primary Corporate Desk</span>
                    <a href="mailto:business@crystolytemedia.com" className="text-white hover:text-amber-400 font-medium">
                      business@crystolytemedia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Email Matrix */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
              <h3 className="font-cinzel text-base font-bold text-white mb-2">
                Departmental Inquiries
              </h3>

              <div className="space-y-3.5 text-xs">
                {departments.map((d, i) => (
                  <div key={i} className="pb-3 border-b border-white/5 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-white">{d.name}</span>
                      <a href={`mailto:${d.email}`} className="text-amber-200 hover:underline font-sans font-semibold text-sm">
                        {d.email}
                      </a>
                    </div>
                    <span className="text-slate-300 text-xs block">{d.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Direct Corporate Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
              <h2 className="cmc-title text-white mb-2">
                Send an Executive Inquiry
              </h2>
              <p className="text-slate-300 text-sm sm:text-sm font-normal mb-8">
                Please complete the form below. Messages are routed to the appropriate department within one business day.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    Message Dispatched
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your communication has been routed to the <strong className="text-white">{formData.department}</strong> desk.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="cmc-btn cmc-btn-primary px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="cmc-label block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="cmc-label block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="cmc-label block mb-2">
                        Target Department *
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        {departments.map((d, idx) => (
                          <option key={idx} value={d.name}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="cmc-label block mb-2">
                        Organization (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Studio, Agency, or Fund"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="cmc-label block mb-2">
                      Inquiry Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize your corporate inquiry or business communication..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cmc-btn cmc-btn-primary w-full py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Crystolyte Media</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
