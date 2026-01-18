
import React from 'react';

const AGB: React.FC = () => {
    return (
        <main className="flex-grow py-16">
            <section className="bg-slate-900 py-16 border-b border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight">
                        Allgemeine Geschäftsbedingungen
                    </h1>
                    <p className="text-xl text-slate-400">
                        AGB für Dienstleistungen
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-8">

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">§ 1 Geltungsbereich</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen ROYAL SERVICE und seinen Kunden über die Erbringung von Dienstleistungen im Bereich Entkernung, Abbruch, Schadstoffsanierung und Entsorgungsmanagement.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">§ 2 Vertragsschluss</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Angebote von ROYAL SERVICE sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder durch Beginn der Arbeiten zustande.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">§ 3 Leistungsumfang</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Der Umfang der zu erbringenden Leistungen ergibt sich aus der Auftragsbestätigung. Zusätzliche Leistungen werden gesondert berechnet.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">§ 5 Ausführungsfristen</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Vereinbarte Fristen und Termine sind nur dann verbindlich, wenn sie ausdrücklich schriftlich als verbindlich bestätigt wurden.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">§ 6 Haftung</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    ROYAL SERVICE haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht wesentliche Vertragspflichten verletzt werden.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-safety-yellow uppercase mb-4">§ 7 Gerichtsstand</h2>
                            <div className="text-slate-300 space-y-4">
                                <p className="text-sm leading-relaxed">
                                    Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis ist Reutlingen, sofern der Kunde Kaufmann ist.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                            <p className="text-sm text-slate-400">
                                <span className="font-semibold text-white">Hinweis:</span> Diese AGB sind ein Muster. Bitte lassen Sie diese von einem Rechtsanwalt prüfen und an Ihre spezifischen Geschäftsbedingungen anpassen.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default AGB;
