import React from 'react';
import { m } from 'framer-motion';

interface HeroProps {
  onInquiryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInquiryClick }) => {
  const imageUrl = "/hero-bg-final.webp";

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <div className="hero-content">
            <h1 className="hero-title text-4xl md:text-6xl font-black text-white leading-tight mb-6 uppercase">
              ROYAL TEAM SERVICE<br />
              <span className="text-safety-yellow">Wir schaffen Platz für Ihre Visionen!</span>
            </h1>
            <p className="hero-description text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
              Ihr Experte für Abbruch & Entkernung in der Region – <strong>Sicher. Sauber. Termingerecht.</strong> Von Reutlingen bis Stuttgart Ihr Partner für anspruchsvolle Projekte.
            </p>


            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onInquiryClick}
                className="bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 px-8 py-4 rounded-md font-black transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
              >
                Jetzt Angebot anfordern
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <a
                href="#leistungen"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-bold transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                Unsere Leistungen
              </a>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
