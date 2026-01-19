
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavClick()}>
            <img
              src="/logo-transparent-final.webp"
              alt="Royal Team Service - Entkernung, Abbruch und Schadstoffsanierung in Reutlingen & Stuttgart"
              className="h-24 w-auto object-contain brightness-125 contrast-115 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
              width="200"
              height="80"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <button
              className="text-sm font-semibold hover:text-safety-yellow transition-colors"
              onClick={() => onNavClick('leistungen')}
              aria-label="Zu Leistungen navigieren"
            >
              Leistungen
            </button>
            <button
              className="text-sm font-semibold hover:text-safety-yellow transition-colors"
              onClick={() => onNavClick('warum-wir')}
              aria-label="Zu Warum Wir navigieren"
            >
              Warum Wir
            </button>
            <button
              className="text-sm font-semibold hover:text-safety-yellow transition-colors"
              onClick={() => onNavClick('prozess')}
              aria-label="Zu Prozess navigieren"
            >
              Prozess
            </button>
            <button
              className="text-sm font-semibold hover:text-safety-yellow transition-colors"
              onClick={onInquiryClick}
              aria-label="Zu Kontakt navigieren"
            >
              Kontakt
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onInquiryClick}
              className="hidden md:block bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 px-4 md:px-6 py-2 md:py-2.5 rounded font-bold transition-all shadow-md active:scale-95 text-xs md:text-sm uppercase"
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
            <button
              className="text-left text-white hover:text-safety-yellow py-3 px-4 hover:bg-slate-800 rounded transition-colors font-semibold"
              onClick={() => handleNavClick('leistungen')}
            >
              Leistungen
            </button>
            <button
              className="text-left text-white hover:text-safety-yellow py-3 px-4 hover:bg-slate-800 rounded transition-colors font-semibold"
              onClick={() => handleNavClick('warum-wir')}
            >
              Warum Wir
            </button>
            <button
              className="text-left text-white hover:text-safety-yellow py-3 px-4 hover:bg-slate-800 rounded transition-colors font-semibold"
              onClick={() => handleNavClick('prozess')}
            >
              Prozess
            </button>
            <button
              className="text-left text-white hover:text-safety-yellow py-3 px-4 hover:bg-slate-800 rounded transition-colors font-semibold"
              onClick={handleInquiryClick}
            >
              Kontakt
            </button>
            <button
              onClick={handleInquiryClick}
              className="bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 px-6 py-3 rounded font-bold transition-all shadow-md active:scale-95 text-sm uppercase mt-2"
            >
              Angebot anfordern
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
