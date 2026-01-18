
import React from 'react';

const Impressum: React.FC = () => {
    return (
        <main className="flex-grow py-16">
            <section className="bg-slate-900 py-16 border-b border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight">
                        Impressum
                    </h1>
                    <p className="text-xl text-slate-400">
                        Angaben gemäß § 5 TMG
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-8">

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">Firmeninformationen</h2>
                            <div className="text-slate-300 space-y-2">
                                <p className="font-bold text-white">ROYAL SERVICE</p>
                                <p>Hansenstraße 20</p>
                                <p>72770 Reutlingen-Ohmenhausen</p>
                                <p>Deutschland</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">Kontakt</h2>
                            <div className="text-slate-300 space-y-2">
                                <p><span className="font-semibold text-white">Telefon:</span> 0160 94854768</p>
                                <p><span className="font-semibold text-white">E-Mail:</span> royal.team.service25@gmail.com</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">Vertreten durch</h2>
                            <div className="text-slate-300">
                                <p>[Geschäftsführer Name]</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">Umsatzsteuer-ID</h2>
                            <div className="text-slate-300">
                                <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                                <p className="font-mono">[USt-IdNr.]</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">Haftungsausschluss</h2>
                            <div className="text-slate-300 space-y-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Haftung für Inhalte</h3>
                                    <p className="text-sm leading-relaxed">
                                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Haftung für Links</h3>
                                    <p className="text-sm leading-relaxed">
                                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Impressum;
