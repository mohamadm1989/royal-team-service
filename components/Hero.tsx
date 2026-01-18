
import React from 'react';

interface HeroProps {
  onInquiryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInquiryClick }) => {
  const imageUrl = "/hero-bg.png";

  return (
    <section className="relative h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
        <img
          src={imageUrl}
          alt="ROYAL SERVICE - Professionelle Entkernung und Abbruch"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 uppercase">
            ROYAL SERVICE<br />
            <span className="text-safety-yellow">Wir schaffen Platz für Ihre Visionen!</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
            Ihr zuverlässiger und flexibler Partner für professionelle Entkernung, Abbruch und Schadstoffsanierung in der Region und europaweit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onInquiryClick}
              className="bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 px-8 py-4 rounded font-black transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Jetzt Angebot anfordern
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <a
              href="#leistungen"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded font-bold transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
