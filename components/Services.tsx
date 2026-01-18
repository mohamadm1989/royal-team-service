
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: "engineering",
              title: "Entkernung & Demontage",
              desc: "Vollständiger Rückbau von Decken, Wänden und Bodenbelägen bis auf die statische Grundsubstanz – präzise und effizient."
            },
            {
              icon: "architecture",
              title: "Abbrucharbeiten",
              desc: "Kontrollierter Abbruch von Dächern, Gebäudeteilen und komplexen Industrieanlagen mit modernstem Equipment."
            },
            {
              icon: "warning",
              title: "Schadstoffsanierung",
              desc: "Fachgerechte Sanierung von Gefahrstoffen wie <span class=\"text-safety-yellow font-bold\">ASBEST</span> nach TRGS 519, 521 und 524."
            },
            {
              icon: "delete_sweep",
              title: "Fachgerechte Entsorgung",
              desc: "Systematische Trennung und Entsorgung aller Materialien nach ökologischen und gesetzlichen Standards."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-slate-800 p-8 rounded border-b-4 border-transparent hover:border-safety-yellow transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-700 rounded flex items-center justify-center mb-6 group-hover:bg-safety-yellow transition-colors">
                <span className="material-symbols-outlined text-3xl text-safety-yellow group-hover:text-slate-900">{service.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: service.desc }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
