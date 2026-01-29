
import React, { useState } from 'react';

interface ContactFormProps {
  dark?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ dark = false }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`p-8 text-center rounded-2xl ${dark ? 'bg-white/10' : 'bg-accent/5'}`}>
        <h3 className="text-2xl font-heading font-bold mb-2">Message Sent!</h3>
        <p className={dark ? 'text-white/70' : 'text-accent/70'}>We'll review your business and be in touch shortly.</p>
      </div>
    );
  }

  const inputClasses = `w-full p-4 rounded-xl border-2 transition-all outline-none ${
    dark 
      ? 'bg-white/5 border-white/10 text-white focus:border-primary' 
      : 'bg-white border-accent/10 text-accent focus:border-primary'
  }`;

  const labelClasses = `block text-sm font-bold mb-2 ${dark ? 'text-white/60' : 'text-accent/60'}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>First Name</label>
          <input type="text" required placeholder="John" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Last Name</label>
          <input type="text" required placeholder="Doe" className={inputClasses} />
        </div>
      </div>
      <div>
        <label className={labelClasses}>Business Email</label>
        <input type="email" required placeholder="john@company.com" className={inputClasses} />
      </div>
      <div>
        <label className={labelClasses}>Service Interest</label>
        <select className={inputClasses}>
          <option>Visibility Boost ($750)</option>
          <option>Local Launch Pack ($1,500)</option>
          <option>Growth Partner Plan ($997/mo)</option>
          <option>Not sure yet - Help me choose</option>
        </select>
      </div>
      <button 
        type="submit" 
        className="w-full bg-primary text-white py-5 rounded-xl font-bold text-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20"
      >
        Send My Inquiry
      </button>
      <p className={`text-xs text-center mt-4 ${dark ? 'text-white/40' : 'text-accent/40'}`}>
        No spam. Only high-impact local results.
      </p>
    </form>
  );
};

export default ContactForm;
