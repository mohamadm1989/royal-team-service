
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';
import AboutSummary from './components/AboutSummary';

import { LazyMotion, m, AnimatePresence } from 'framer-motion';

// Dynamically load Framer Motion features
const loadFeatures = () => import('./framer-features').then(res => res.default);

// Lazy load non-critical components
const InquiryPage = React.lazy(() => import('./components/InquiryPage'));
const Impressum = React.lazy(() => import('./components/Impressum'));
const Datenschutz = React.lazy(() => import('./components/Datenschutz'));
const AGB = React.lazy(() => import('./components/AGB'));

// Below-the-fold components are grouped via Vite manualChunks
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
const Process = React.lazy(() => import('./components/Process'));

const PageLoader = () => (
  <div className="flex-grow flex items-center justify-center bg-slate-bg min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-safety-yellow border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const SectionLoader = ({ height = '400px' }: { height?: string }) => (
  <div
    className="w-full bg-slate-900 animate-pulse flex items-center justify-center border-y border-slate-800"
    style={{ height }}
  >
    <div className="w-8 h-8 border-2 border-slate-700 border-t-safety-yellow rounded-full animate-spin"></div>
  </div>
);

const LazyView: React.FC<{ children: React.ReactNode; height?: string }> = ({ children, height }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } // Increased margin for smoother transition
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isInView ? 'auto' : (height || '300px') }}>
      {isInView ? <React.Suspense fallback={<SectionLoader height={height} />}>{children}</React.Suspense> : null}
    </div>
  );
};

// Tiny components are now statically imported to flatten the waterfall

// Combine small common components into the main bundle if preferred, 
// but here we keep them lazy as requested but minimize dependencies.

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
    <LazyMotion features={loadFeatures}>
      <div className="antialiased bg-slate-bg text-white font-sans flex flex-col min-h-screen">
        <Header
          onInquiryClick={navigateToInquiry}
          onNavClick={navigateToHome}
        />

        <AnimatePresence mode="wait">
          <React.Suspense fallback={<PageLoader />}>
            {currentPage === 'home' ? (
              <m.main
                key="home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                <Hero onInquiryClick={navigateToInquiry} />
                <LazyView height="800px">
                  <Services />
                </LazyView>
                <LazyView height="600px">
                  <About />
                </LazyView>
                <LazyView height="500px">
                  <Process />
                </LazyView>
                <AboutSummary />
              </m.main>
            ) : currentPage === 'inquiry' ? (
              <m.div
                key="inquiry"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-grow"
              >
                <InquiryPage />
              </m.div>
            ) : currentPage === 'impressum' ? (
              <m.div
                key="impressum"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                <Impressum />
              </m.div>
            ) : currentPage === 'datenschutz' ? (
              <m.div
                key="datenschutz"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                <Datenschutz />
              </m.div>
            ) : (
              <m.div
                key="agb"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                <AGB />
              </m.div>
            )}
          </React.Suspense>
        </AnimatePresence>

        <Footer onNavClick={navigateToHome} />
        <BackToTop />
        <CookieConsent onSettingsClick={() => navigateToHome('datenschutz')} />
      </div>
    </LazyMotion>
  );
};

export default App;
