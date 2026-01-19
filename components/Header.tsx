
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

interface HeaderProps {
  onInquiryClick: () => void;
  onNavClick: (anchor?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onInquiryClick, onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor?: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(anchor);
  };

  const handleInquiryClick = () => {
    setIsMobileMenuOpen(false);
    onInquiryClick();
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-slate-bg/95 backdrop-blur-sm border-b border-slate-700 shadow-lg'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="header-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header-inner flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 cursor-pointer" onClick={(e) => { e.preventDefault(); onNavClick(); }}>
            <img
              src="/logo-transparent-final.webp"
              alt="Royal Team Service - Entkernung, Abbruch und Schadstoffsanierung in Reutlingen & Stuttgart"
              className="header-logo brightness-125 contrast-115 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
              width="240"
              height="96"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <a
              href="#leistungen"
              className="text-sm font-semibold hover:text-safety-yellow transition-colors"
              onClick={(e) => { e.preventDefault(); onNavClick('leistungen'); }}
              aria-label="Zu Leistungen navigieren"
            >
              Leistungen
            </a>
            <a
              href="#warum-wir"
              className="text-sm font-semibold hover:text-safety-yellow transition-colors"
              onClick={(e) => { e.preventDefault(); onNavClick('warum-wir'); }}
              aria-label="Zu Warum Wir navigieren"
            >
              Warum Wir
            </a>
            <a
              href="#prozess"
              className="text-sm font-semibold hover:text-safety-yellow transition-colors"
              onClick={(e) => { e.preventDefault(); onNavClick('prozess'); }}
              aria-label="Zu Prozess navigieren"
            >
              Prozess
            </a>
            <a
              href="#inquiry"
              className="text-sm font-semibold hover:text-safety-yellow transition-colors"
              onClick={(e) => { e.preventDefault(); onInquiryClick(); }}
              aria-label="Zu Kontakt navigieren"
            >
              Kontakt
            </a>
          </nav>

          <div className="button-group flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onInquiryClick}
              className="hidden md:block bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 px-4 md:px-6 py-2 md:py-2.5 rounded-md font-bold transition-all shadow-md active:scale-95 text-xs md:text-sm uppercase"
              aria-label="Angebot anfordern - Kontaktformular öffnen"
            >
              Angebot anfordern
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-3 hover:bg-slate-800 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <span className="material-symbols-outlined text-4xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 animate-slide-down">
          <nav className="flex flex-col p-4 space-y-2">
            <a
              href="#leistungen"
              className="text-left text-white hover:text-safety-yellow py-3 px-4 hover:bg-slate-800 rounded transition-colors font-semibold"
              onClick={(e) => { e.preventDefault(); handleNavClick('leistungen'); }}
            >
              Leistungen
            </a>
            <a
              href="#warum-wir"
              className="text-left text-white hover:text-safety-yellow py-3 px-4 hover:bg-slate-800 rounded transition-colors font-semibold"
              onClick={(e) => { e.preventDefault(); handleNavClick('warum-wir'); }}
            >
              Warum Wir
            </a>
            <a
              href="#prozess"
              className="text-left text-white hover:text-safety-yellow py-3 px-4 hover:bg-slate-800 rounded transition-colors font-semibold"
              onClick={(e) => { e.preventDefault(); handleNavClick('prozess'); }}
            >
              Prozess
            </a>
            <a
              href="#inquiry"
              className="text-left text-white hover:text-safety-yellow py-3 px-4 hover:bg-slate-800 rounded transition-colors font-semibold"
              onClick={(e) => { e.preventDefault(); handleInquiryClick(); }}
            >
              Kontakt
            </a>
            <a
              href="#inquiry"
              onClick={(e) => { e.preventDefault(); handleInquiryClick(); }}
              className="bg-safety-yellow hover:bg-safety-yellow-dark text-center text-slate-900 px-6 py-3 rounded-md font-bold transition-all shadow-md active:scale-95 text-sm uppercase mt-2"
            >
              Angebot anfordern
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
