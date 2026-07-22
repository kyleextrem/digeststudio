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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Our Brands', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Free Audit', path: '/visibility-audit', highlight: true },
    { name: 'FAQ', path: '/faq' },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md border-b border-[#ececec]/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/logo-lightning.png"
            alt="Digest Studio"
            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        <div className="hidden md:flex items-center gap-7 ml-auto">
          <div className="flex items-center gap-7 border-r border-accent/10 pr-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-[13px] font-semibold tracking-wide transition-colors ${
                  link.highlight
                    ? pathname === link.path
                      ? 'text-primary'
                      : 'text-accent/70 hover:text-primary'
                    : pathname === link.path
                      ? 'text-primary'
                      : 'text-accent/70 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={handleContactClick}
            className="bg-accent text-white text-[13px] font-semibold tracking-[-0.01em] px-5 py-2.5 rounded-xl hover:bg-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          className="md:hidden text-accent p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full p-8 pt-24 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-heading font-bold transition-colors ${
                link.highlight
                  ? 'text-primary'
                  : 'text-accent hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleContactClick}
            className="ds-btn-primary mt-4 w-full justify-center text-lg py-4"
          >
            Book a free strategy call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
