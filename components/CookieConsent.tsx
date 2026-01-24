
import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

interface CookieConsentProps {
    onSettingsClick: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onSettingsClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if consent was already given
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000); // Show after 2s
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookie-consent', 'all');
        setIsVisible(false);
    };

    const handleAcceptEssential = () => {
        localStorage.setItem('cookie-consent', 'essential');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <m.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-2xl rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-white font-bold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
                                    <span className="material-symbols-outlined text-safety-yellow">cookie</span>
                                    Wir schätzen Ihre Privatsphäre
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                                    Wir verwenden Cookies, um die Benutzererfahrung zu verbessern und den Website-Traffic zu analysieren.
                                    Einige sind für den Betrieb der Seite notwendig (essenziell), während andere uns helfen, unser Angebot zu optimieren.
                                    Weitere Informationen finden Sie in unserer <a href="#datenschutz" onClick={(e) => { e.preventDefault(); onSettingsClick(); }} className="text-safety-yellow hover:underline font-medium">Datenschutzerklärung</a>.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                                <button
                                    onClick={handleAcceptEssential}
                                    className="px-6 py-2.5 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors text-sm font-bold uppercase tracking-wider"
                                >
                                    Nur essenzielle
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-6 py-2.5 rounded-md bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 transition-all shadow-lg hover:shadow-safety-yellow/20 text-sm font-bold uppercase tracking-wider"
                                >
                                    Alle akzeptieren
                                </button>
                            </div>
                        </div>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
