import React from 'react';
import { m } from 'framer-motion';
import MapComponent from './MapComponent';
import Counter from './Counter';

const About: React.FC = () => {

  return (
    <section className="py-24 bg-slate-bg overflow-hidden" id="warum-wir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-safety-yellow font-black uppercase tracking-widest text-sm mb-4">Warum wir?</h2>
            <h3 className="text-4xl font-black text-white mb-6 uppercase">Vorteile für Ihr Projekt</h3>
            <p className="text-slate-400 mb-8 text-lg">
              Wir kombinieren handwerkliche Präzision mit modernem Projektmanagement, um höchste Standards bei jedem Auftrag zu garantieren.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "workspace_premium", title: "Erfahrung & Expertise", text: "Jahre an Fachwissen in komplexen Bauprojekten." },
                { icon: "sync_alt", title: "Flexibilität", text: "Anpassung an Ihre individuellen Zeitpläne." },
                { icon: "payments", title: "Faire Konditionen", text: "Transparente Preisgestaltung ohne Überraschungen." },
                { icon: "gavel", title: "Zertifizierte Sicherheit", text: "Strikte Einhaltung aller Schutzvorschriften." }
              ].map((item, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="material-symbols-outlined text-safety-yellow text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs">{item.text}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-700 h-[280px] md:h-[450px]">
              <MapComponent height="100%" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-safety-yellow text-slate-900 p-8 font-black rounded shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-default">
              <span className="text-4xl block"><Counter end={10} suffix="+" /></span>
              <span className="uppercase text-xs tracking-tighter">Jahre Erfahrung</span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default About;
