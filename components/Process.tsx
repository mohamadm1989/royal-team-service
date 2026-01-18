
import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden" id="prozess">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-safety-yellow font-black uppercase tracking-widest text-sm mb-4">Der Weg zum Erfolg</h2>
          <h3 className="text-4xl font-black text-white mb-4 uppercase">Unser Arbeitsprozess</h3>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-800 z-0"></div>
          {[
            { step: "01", title: "Analyse & Planung", desc: "Detaillierte Bestandsaufnahme und Erstellung eines individuellen Sanierungskonzepts." },
            { step: "02", title: "Effiziente Durchführung", desc: "Fachgerechte Umsetzung durch unser spezialisiertes Team unter Einhaltung aller Standards." },
            { step: "03", title: "Abschluss & Qualität", desc: "Endkontrolle, Dokumentation und besenreine Übergabe Ihres Objekts." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex-1 text-center"
            >
              <div className="w-20 h-20 bg-safety-yellow text-slate-900 text-2xl font-black rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-slate-900">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-3 uppercase">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
