import React from 'react';
import { m } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900" id="leistungen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-safety-yellow font-black uppercase tracking-widest text-sm mb-4">Leistungsspektrum</h2>
          <h3 className="text-4xl font-black text-white mb-4 uppercase">Unsere Expertise am Bau</h3>
          <div className="h-1 w-20 bg-safety-yellow mx-auto"></div>
        </div>
        <m.div
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        >
          {[
            {
              icon: "engineering",
              title: "Entkernung",
              desc: "Systematischer Rückbau von Gebäudeteilen bis auf die statische Grundsubstanz – präzise und fachgerecht."
            },
            {
              icon: "architecture",
              title: "Abbrucharbeiten",
              desc: "Professionelle Durchführung von Abbrucharbeiten aller Art, von einzelnen Wänden bis hin zu komplexen Strukturen."
            },
            {
              icon: "construction",
              title: "Montage und Demontage",
              desc: "Fachgerechte Montage und Demontage von Bauteilen, Anlagen und Industrie-Komponenten."
            },
            {
              icon: "warning",
              title: "Schadstoffsanierung (Asbest)",
              desc: "Sicherer Umgang und Sanierung von Gefahrstoffen nach höchsten Sicherheitsstandards (TRGS 519)."
            },
            {
              icon: "delete_sweep",
              title: "Entrümpelung",
              desc: "Vollständige und besenreine Räumung von Objekten, Wohnungen und Industriehallen."
            },
            {
              icon: "cleaning_services",
              title: "Reinigungsarbeiten",
              desc: "Gründliche Bau- und Grundreinigung nach Abschluss der Arbeiten für eine perfekte Übergabe."
            },
            {
              icon: "recycling",
              title: "Entsorgungsmanagement",
              desc: "Ökologische Trennung und fachgerechte Entsorgung aller anfallenden Materialien nach gesetzlichen Richtlinien."
            }
          ].map((service, index) => (
            <m.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className={`bg-safety-yellow p-8 rounded border-b-4 border-slate-900 transition-all duration-300 group shadow-lg ${index === 6 ? 'lg:col-start-2' : ''
                }`}
            >
              <div className="w-14 h-14 bg-slate-900 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-safety-yellow">{service.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
              <p className="text-slate-800 text-sm leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: service.desc }} />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Services;
