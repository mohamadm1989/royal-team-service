
import React, { useState } from 'react';

interface HeaderProps {
  onInquiryClick: () => void;
  onNavClick: (anchor?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onInquiryClick, onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (anchor?: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(anchor);
  };

  const handleInquiryClick = () => {
    setIsMobileMenuOpen(false);
    onInquiryClick();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-bg/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavClick()}>
            <div className="bg-safety-yellow p-1.5 rounded shadow-lg">
              <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-base md:text-xl font-black uppercase tracking-tight text-white">ROYAL SERVICE</span>
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
            <button
              onClick={onInquiryClick}
              className="hidden md:block bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 px-4 md:px-6 py-2 md:py-2.5 rounded font-bold transition-all shadow-md active:scale-95 text-xs md:text-sm uppercase"
              aria-label="Angebot anfordern - Kontaktformular öffnen"
            >
              Angebot anfordern
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-slate-800 rounded transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
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
