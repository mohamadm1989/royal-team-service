
import React from 'react';

interface FooterProps {
  onNavClick: (anchor?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavClick()}>
                <div className="w-12 h-12 bg-safety-yellow rounded-lg flex items-center justify-center p-1 overflow-hidden shadow-lg">
                  <img src="/logo.png?v=1" alt="ROYAL SERVICE Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tighter text-white leading-none">ROYAL SERVICE</h4>
                  <p className="text-[10px] text-safety-yellow font-bold tracking-widest uppercase mt-1">Bauen & Rückbau</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Ihr kompetenter Partner für Bau- und Industriedienstleistungen in Deutschland und ganz Europa.
              </p>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Impressum / Kontakt</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-safety-yellow text-lg">location_on</span>
                <span>Hansenstraße 20,<br />72770 Ohmenhausen</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-safety-yellow text-lg">call</span>
                <a href="tel:+4916094854768" className="hover:text-safety-yellow transition-colors">
                  Mobil: 0160 94854768
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-safety-yellow text-lg">mail</span>
                <a href="mailto:royal.team.service25@gmail.com" className="hover:text-safety-yellow transition-colors">
                  royal.team.service25@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Leistungen Schnellzugriff</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => onNavClick('leistungen')} className="hover:text-safety-yellow transition-colors text-left">Entkernung</button></li>
              <li><button onClick={() => onNavClick('leistungen')} className="hover:text-safety-yellow transition-colors text-left">Abbruch & Demontage</button></li>
              <li><button onClick={() => onNavClick('leistungen')} className="hover:text-safety-yellow transition-colors text-left">Schadstoffsanierung (Asbest)</button></li>
              <li><button onClick={() => onNavClick('leistungen')} className="hover:text-safety-yellow transition-colors text-left">Entsorgungsmanagement</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-medium">
          <p>© 2026 ROYAL SERVICE. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 uppercase">
            <a className="hover:text-safety-yellow cursor-pointer" onClick={() => { window.location.hash = 'impressum'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Impressum</a>
            <a className="hover:text-safety-yellow cursor-pointer" onClick={() => { window.location.hash = 'datenschutz'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Datenschutz</a>
            <a className="hover:text-safety-yellow cursor-pointer" onClick={() => { window.location.hash = 'agb'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}>AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
