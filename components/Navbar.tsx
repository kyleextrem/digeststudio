'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
  ];

  const handleContactClick = (e: any) => {
    setIsMobileMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/digest-studio-logo.jpg"
            alt="Digest Studio Newcastle - Local Marketing and Growth Agency Logo"
            className="h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Grouped at Top Right */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <div className="flex items-center gap-8 border-r border-accent/10 pr-8 mr-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-bold text-sm uppercase tracking-widest transition-colors ${pathname === link.path ? 'text-primary' : 'text-accent hover:text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={handleContactClick}
            className="bg-accent text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-lg shadow-accent/10"
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-accent p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-heading font-bold text-accent hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleContactClick}
            className="bg-primary text-white text-center py-5 rounded-2xl font-bold text-2xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
