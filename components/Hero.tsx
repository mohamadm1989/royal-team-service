
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onInquiryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInquiryClick }) => {
  const imageUrl = "/hero-bg-final.webp";

  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        {/* Subtle overlay for text readability without framing the image */}
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10"></div>
        <img
          src={imageUrl}
          alt="Royal Team Service - Baustelle Abbrucharbeiten und Entkernung in Baden-Württemberg"
          className="w-full h-full object-cover scale-105"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 uppercase">
              ROYAL TEAM SERVICE<br />
              <span className="text-safety-yellow">Wir schaffen Platz für Ihre Visionen!</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
              Ihr zuverlässiger Partner für professionelle Entkernung, Abbruch und Schadstoffsanierung in <strong>Reutlingen, Stuttgart, Tübingen</strong> و Region – Prompt, sicher und fachgerecht.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onInquiryClick}
              className="bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 px-8 py-5 sm:py-4 rounded-xl font-black transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
