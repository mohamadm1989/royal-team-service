
import React from 'react';
import MapComponent from './MapComponent';
import Counter from './Counter';

const About: React.FC = () => {

  return (
    <section className="py-24 bg-slate-bg" id="warum-wir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-safety-yellow font-black uppercase tracking-widest text-sm mb-4">Warum wir?</h2>
            <h3 className="text-4xl font-black text-white mb-6 uppercase">Vorteile für Ihr Projekt</h3>
            <p className="text-slate-400 mb-8 text-lg">
              Wir kombinieren handwerkliche Präزision mit modernem Projektmanagement, um höchste Standards bei jedem Auftrag zu garantieren.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-safety-yellow text-3xl">workspace_premium</span>
                <div>
                  <h5 className="font-bold text-white uppercase text-sm mb-1">Erfahrung & Expertise</h5>
                  <p className="text-slate-400 text-xs">Jahre an Fachwissen in komplexen Bauprojekten.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-safety-yellow text-3xl">sync_alt</span>
                <div>
                  <h5 className="font-bold text-white uppercase text-sm mb-1">Flexibilität</h5>
                  <p className="text-slate-400 text-xs">Anpassung an Ihre individuellen Zeitpläne.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-safety-yellow text-3xl">payments</span>
                <div>
                  <h5 className="font-bold text-white uppercase text-sm mb-1">Faire Konditionen</h5>
                  <p className="text-slate-400 text-xs">Transparente Preisgestaltung ohne Überraschungen.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-safety-yellow text-3xl">gavel</span>
                <div>
                  <h5 className="font-bold text-white uppercase text-sm mb-1">Zertifizierte Sicherheit</h5>
                  <p className="text-slate-400 text-xs">Strikte Einhaltung aller Schutzvorschriften.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-700 h-[280px] md:h-[450px]">
              <MapComponent height="100%" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-safety-yellow text-slate-900 p-8 font-black rounded shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-default">
              <span className="text-4xl block"><Counter end={10} suffix="+" /></span>
              <span className="uppercase text-xs tracking-tighter">Jahre Erfahrung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
