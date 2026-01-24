
import React from 'react';
import { m } from 'framer-motion';

const AboutSummary: React.FC = () => {
  return (
    <section className="py-24 bg-slate-bg border-y border-slate-800" id="ueber-uns">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <m.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-safety-yellow font-black uppercase tracking-widest text-sm mb-6"
        >
          Über ROYAL SERVICE
        </m.h2>
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-800/50 p-8 md:p-12 border-l-4 border-safety-yellow rounded-r shadow-2xl"
        >
          <p className="text-xl text-slate-200 leading-relaxed font-light mb-6">
            Qualität, Zuverlässigkeit und technische Präzision sind die Grundpfeiler unserer Arbeit. ROYAL SERVICE steht für höchste Professionalität bei jedem Projekt – egal ob klein oder großflächig.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            Wir legen besonderen Wert auf die strikte Einhaltung aller gesetzlichen und technischen Vorschriften in Deutschland. Unser Team ist umfassend geschult, um auch schwierigste Schadstoffsanierungen sicher und rechtskonform durchzuführen.
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default AboutSummary;
