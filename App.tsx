
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Footer from './components/Footer';
import InquiryPage from './components/InquiryPage';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import AGB from './components/AGB';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'inquiry' | 'impressum' | 'datenschutz' | 'agb'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#inquiry') {
        setCurrentPage('inquiry');
      } else if (hash === '#impressum') {
        setCurrentPage('impressum');
      } else if (hash === '#datenschutz') {
        setCurrentPage('datenschutz');
      } else if (hash === '#agb') {
        setCurrentPage('agb');
      } else {
        setCurrentPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToInquiry = () => {
    setCurrentPage('inquiry');
    window.location.hash = 'inquiry';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (anchor?: string) => {
    setCurrentPage('home');
    if (anchor) {
      window.location.hash = anchor;
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased bg-slate-bg text-white font-sans flex flex-col min-h-screen">
      <Header
        onInquiryClick={navigateToInquiry}
        onNavClick={navigateToHome}
      />

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex-grow"
          >
            <Hero onInquiryClick={navigateToInquiry} />
            <Services />
            <About />
            <Process />
            <section className="py-24 bg-slate-bg border-y border-slate-800" id="ueber-uns">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-safety-yellow font-black uppercase tracking-widest text-sm mb-6"
                >
                  Über ROYAL SERVICE
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-slate-800/50 p-8 md:p-12 border-l-4 border-safety-yellow rounded-r shadow-2xl"
                >
                  <p className="text-xl text-slate-200 leading-relaxed font-light mb-6">
                    Qualität, Zuverlässigkeit und technische Präzision sind die Grundpfeiler unserer Arbeit. ROYAL SERVICE steht für höchste Professionalität bei jedem Projekt – egal ob klein oder großflächig.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Wir legen besonderen Wert auf die strikte Einhaltung aller gesetzlichen und technischen Vorschriften in Deutschland. Unser Team ist umfassend geschult, um auch schwierigste Schadstoffsanierungen sicher und rechtskonform durchzuführen.
                  </p>
                </motion.div>
              </div>
            </section>
          </motion.main>
        ) : currentPage === 'inquiry' ? (
          <motion.div
            key="inquiry"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-grow"
          >
            <InquiryPage />
          </motion.div>
        ) : currentPage === 'impressum' ? (
          <motion.div
            key="impressum"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex-grow"
          >
            <Impressum />
          </motion.div>
        ) : currentPage === 'datenschutz' ? (
          <motion.div
            key="datenschutz"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex-grow"
          >
            <Datenschutz />
          </motion.div>
        ) : (
          <motion.div
            key="agb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex-grow"
          >
            <AGB />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer onNavClick={navigateToHome} />
    </div>
  );
};

export default App;
