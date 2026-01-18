
import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900" id="leistungen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-safety-yellow font-black uppercase tracking-widest text-sm mb-4">Leistungsspektrum</h2>
          <h3 className="text-4xl font-black text-white mb-4 uppercase">Unsere Expertise am Bau</h3>
          <div className="h-1 w-20 bg-safety-yellow mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800 p-8 rounded border-b-4 border-transparent hover:border-safety-yellow transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-700 rounded flex items-center justify-center mb-6 group-hover:bg-safety-yellow transition-colors">
              <span className="material-symbols-outlined text-3xl text-safety-yellow group-hover:text-slate-900">engineering</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Entkernung & Demontage</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vollständiger Rückbau von Decken, Wänden und Bodenbelägen bis auf die statische Grundsubstanz – präzise und effizient.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded border-b-4 border-transparent hover:border-safety-yellow transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-700 rounded flex items-center justify-center mb-6 group-hover:bg-safety-yellow transition-colors">
              <span className="material-symbols-outlined text-3xl text-safety-yellow group-hover:text-slate-900">architecture</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Abbrucharbeiten</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kontrollierter Abbruch von Dächern, Gebäudeteilen und komplexen Industrieanlagen mit modernstem Equipment.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded border-b-4 border-transparent hover:border-safety-yellow transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-700 rounded flex items-center justify-center mb-6 group-hover:bg-safety-yellow transition-colors">
              <span className="material-symbols-outlined text-3xl text-safety-yellow group-hover:text-slate-900">warning</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Schadstoffsanierung</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fachgerechte Sanierung von Gefahrstoffen wie <span className="text-safety-yellow font-bold">ASBEST</span> nach TRGS 519, 521 und 524.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded border-b-4 border-transparent hover:border-safety-yellow transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-700 rounded flex items-center justify-center mb-6 group-hover:bg-safety-yellow transition-colors">
              <span className="material-symbols-outlined text-3xl text-safety-yellow group-hover:text-slate-900">delete_sweep</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Fachgerechte Entsorgung</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Systematische Trennung und Entsorgung aller Materialien nach ökologischen und gesetzlichen Standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
