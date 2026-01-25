
import React from 'react';
import { m } from 'framer-motion';

const MapComponent = React.lazy(() => import('./MapComponent'));

const MapLoader = () => (
    <div className="h-[250px] w-full bg-slate-800 animate-pulse rounded-md flex items-center justify-center border border-slate-700">
        <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Karte wird geladen...</span>
    </div>
);

const InquirySidebar: React.FC = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-8">
            <m.div variants={itemVariants} className="bg-slate-800/30 p-8 rounded-md border border-slate-800 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-safety-yellow uppercase mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined">contact_support</span> Kontaktdaten
                </h3>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 border border-slate-700">
                            <span className="material-symbols-outlined text-safety-yellow">location_on</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Standort</p>
                            <p className="text-slate-200">Hansenstraße 20<br />72770 Reutlingen</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 border border-slate-700">
                            <span className="material-symbols-outlined text-safety-yellow">call</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Telefon / WhatsApp</p>
                            <a href="tel:+4916094854768" className="text-slate-200 hover:text-safety-yellow transition-colors">0160 94854768</a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 border border-slate-700">
                            <span className="material-symbols-outlined text-safety-yellow">mail</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">E-Mail</p>
                            <a href="mailto:info@royalteam-service.de" className="text-slate-200 hover:text-safety-yellow transition-colors">info@royalteam-service.de</a>
                        </div>
                    </div>
                </div>
            </m.div>

            <m.div variants={itemVariants} className="bg-slate-800/30 p-8 rounded-md border border-slate-800 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-safety-yellow uppercase mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined">map</span> Einsatzgebiete
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Ihr Experte für Abbruch & Entkernung in der Region – Sicher. Sauber. Termingerecht. Deutschlandweit und Europaweit ihr Partner vor anspruchsvolle Projekte.
                </p>
                <div className="bg-slate-900 rounded-md overflow-hidden shadow-2xl">
                    <React.Suspense fallback={<MapLoader />}>
                        <MapComponent />
                    </React.Suspense>
                </div>
            </m.div>
        </div>
    );
};

export default InquirySidebar;
