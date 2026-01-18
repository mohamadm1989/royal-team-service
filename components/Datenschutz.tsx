
import React from 'react';

const Datenschutz: React.FC = () => {
    return (
        <main className="flex-grow py-16">
            <section className="bg-slate-900 py-16 border-b border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight">
                        Datenschutzerklärung
                    </h1>
                    <p className="text-xl text-slate-400">
                        Informationen zur Datenverarbeitung
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-8">

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">1. Datenschutz auf einen Blick</h2>
                            <div className="text-slate-300 space-y-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Allgemeine Hinweise</h3>
                                    <p className="text-sm leading-relaxed">
                                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">2. Datenerfassung auf dieser Website</h2>
                            <div className="text-slate-300 space-y-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
                                    <p className="text-sm leading-relaxed">
                                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Wie erfassen wir Ihre Daten?</h3>
                                    <p className="text-sm leading-relaxed">
                                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">3. Ihre Rechte</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">4. Kontaktformular</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">5. Lokale Bereitstellung von Schriftarten (Google Fonts)</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts (Google Fonts). Diese werden jedoch lokal auf unseren Servern gehostet. Eine Verbindung zu Servern von Google wird dabei nicht hergestellt. Damit ist diese Nutzung der Schriftarten DSGVO-konform, da keine IP-Adressen an externe Anbieter übertragen werden.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                            <p className="text-sm text-slate-400">
                                <span className="font-semibold text-white">Hinweis:</span> Diese Datenschutzerklärung ist ein Muster. Bitte passen Sie diese an Ihre spezifischen Anforderungen an und konsultieren Sie einen Rechtsanwalt für eine vollständige DSGVO-konforme Datenschutzerklärung.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Datenschutz;
