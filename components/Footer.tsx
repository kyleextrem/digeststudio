
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-accent/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <img
                src="/digest-studio-logo.jpg"
                alt="Digest Studio Logo"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-xl text-accent/60 leading-relaxed mb-10 max-w-sm">
              Newcastle's local marketing partner. Keep your business front of mind with built-in community reach.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-accent/40 font-bold">Email Us</p>
                <p className="font-bold text-accent">info@digeststudio.com.au</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-accent/40 font-bold">Call Us</p>
                <p className="font-bold text-accent">+61 417 668 744</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xl mb-8 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-accent/60 hover:text-primary font-bold transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-accent/60 hover:text-primary font-bold transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-accent/60 hover:text-primary font-bold transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-accent/60 hover:text-primary font-bold transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-accent/60 hover:text-primary font-bold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xl mb-8 uppercase tracking-widest text-sm">Local Focus</h4>
            <p className="text-accent/60 mb-6 font-medium">Proudly serving the Newcastle and Hunter region with growth strategies that actually work for local businesses.</p>
            <p className="text-accent/40 text-sm italic">Newcastle, NSW, Australia</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-accent/5 gap-6">
          <p className="text-accent/40 text-sm font-medium">
            © {new Date().getFullYear()} Digest Studio a product of Digest Media. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-accent/40 hover:text-accent text-sm font-medium transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-accent/40 hover:text-accent text-sm font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
