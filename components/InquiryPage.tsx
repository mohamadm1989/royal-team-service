
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MapComponent from './MapComponent';
import Toast from './Toast';
import emailjs from '@emailjs/browser';

const InquiryPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const maxSize = 10 * 1024 * 1024; // 10MB

    const validFiles = fileArray.filter((file: File) => {
      if (file.size > maxSize) {
        setToast({
          message: `Datei "${file.name}" ist zu groß. Maximale Größe: 10MB`,
          type: 'error'
        });
        return false;
      }
      return true;
    });

    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Prepare email parameters
      const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company') || 'Nicht angegeben',
        project_type: formData.get('projectType'),
        project_size: formData.get('projectSize'),
        message: formData.get('message'),
        files_count: uploadedFiles.length,
        files_info: uploadedFiles.map(f => `${f.name} (${(f.size / 1024).toFixed(1)}KB)`).join(', ') || 'Keine Dateien'
      };

      // Send email using EmailJS
      // Send email using EmailJS
      const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
      const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS ist nicht konfiguriert. Bitte Umgebungsvariablen überprüfen.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setToast({
        message: `Vielen Dank! Ihre Anfrage${uploadedFiles.length > 0 ? ` mit ${uploadedFiles.length} Datei(en)` : ''} wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.`,
        type: 'success'
      });

      // Reset form and files
      form.reset();
      setUploadedFiles([]);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setToast({
        message: 'Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <main className="flex-grow">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-slate-900 pt-32 pb-16 border-b border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-safety-yellow/5 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse-slow"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight"
            >
              Projektanfrage stellen
            </motion.h1>
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-2xl"
            >
              Erzählen Sie uns von Ihrem Vorhaben. Wir erstellen Ihnen ein unverbindliches Angebot.
            </motion.p>
          </div>
        </motion.section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8 bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Kontaktdaten */}
                    <motion.div variants={itemVariants} className="space-y-6">
                      <h3 className="text-lg font-bold flex items-center gap-2 text-safety-yellow uppercase mb-2">
                        <span className="material-symbols-outlined">person</span> Kontaktdaten
                      </h3>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="full-name">Vollständiger Name *</label>
                        <input className="w-full" id="full-name" name="full-name" placeholder="Ihr Name" required type="text" />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="company">Firmenname (Optional)</label>
                        <input className="w-full" id="company" name="company" placeholder="Unternehmen GmbH" type="text" />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="email">E-Mail Adresse *</label>
                        <input className="w-full" id="email" name="email" placeholder="beispiel@mail.de" required type="email" />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="phone">Telefonnummer *</label>
                        <input className="w-full" id="phone" name="phone" placeholder="+49 123 456789" required type="tel" />
                      </div>
                    </motion.div>

                    {/* Projektdetails */}
                    <motion.div variants={itemVariants} className="space-y-6">
                      <h3 className="text-lg font-bold flex items-center gap-2 text-safety-yellow uppercase mb-2">
                        <span className="material-symbols-outlined">assignment</span> Projektdetails
                      </h3>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="service-type">Leistungsart</label>
                        <select className="w-full" id="service-type" name="service-type">
                          <option value="entkernung">Entkernung</option>
                          <option value="abbruch">Abbrucharbeiten</option>
                          <option value="montage">Montage und Demontage</option>
                          <option value="schadstoffe">Schadstoffsanierung (Asbest)</option>
                          <option value="entruempelung">Entrümpelung</option>
                          <option value="reinigung">Reinigungsarbeiten</option>
                          <option value="entsorgung">Entsorgungsmanagement</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="start-date">Gewünschter Starttermin</label>
                        <input className="w-full" id="start-date" name="start-date" type="date" />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="description">Projektbeschreibung</label>
                        <textarea className="w-full" id="description" name="description" placeholder="Details zum Projekt, Größe (qm) und Standort..." rows={5}></textarea>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} className="mt-8">
                    <label className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Pläne oder Fotos hochladen (Optional)</label>
                    <div className="border-2 border-dashed border-slate-700 rounded-2xl p-10 text-center hover:border-safety-yellow/50 hover:bg-safety-yellow/5 transition-all group cursor-pointer relative overflow-hidden">
                      <div className="relative z-10">
                        <span className="material-symbols-outlined text-4xl text-slate-500 group-hover:text-safety-yellow mb-2 transition-transform group-hover:scale-110 duration-300">cloud_upload</span>
                        <p className="text-slate-400 group-hover:text-slate-200">Dateien هنا ziehen oder <span className="text-safety-yellow underline font-bold">auswählen</span></p>
                        <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">PNG, JPG, PDF (Max. 10MB)</p>
                      </div>
                      <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" multiple type="file" />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-4">
                    <button
                      disabled={isSubmitting}
                      className="w-full bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 py-5 rounded-2xl font-black text-xl uppercase transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden relative"
                      type="submit"
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                          >
                            <svg className="animate-spin h-6 w-6 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Wird gesendet...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="submit"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                          >
                            Anfrage absenden
                            <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">send</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-6 uppercase tracking-wider">
                      Sichere SSL-Verschlüsselung &middot; Datenschutz garantiert
                    </p>
                  </motion.div>
                </form>
              </div>

              {/* Sidebar Contact Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-800 sticky top-28 shadow-2xl">
                  <h4 className="text-xl font-bold mb-8 text-white uppercase tracking-tight border-b border-slate-800 pb-4">Direkter Kontakt</h4>
                  <div className="space-y-8 mb-10">
                    <div className="flex items-start gap-4 group cursor-default">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-safety-yellow transition-colors">
                        <span className="material-symbols-outlined text-safety-yellow group-hover:text-slate-900 transition-colors">location_on</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase mb-1 tracking-widest">Standort</p>
                        <p className="text-slate-200 text-sm leading-relaxed">Hansenstraße 20,<br />72770 Reutlingen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group cursor-default">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-safety-yellow transition-colors">
                        <span className="material-symbols-outlined text-safety-yellow group-hover:text-slate-900 transition-colors">call</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase mb-1 tracking-widest">Mobil</p>
                        <a href="tel:+4916094854768" className="text-slate-200 text-base md:text-sm font-black hover:text-safety-yellow transition-colors py-1 block">
                          0160 94854768
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group cursor-default">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-safety-yellow transition-colors">
                        <span className="material-symbols-outlined text-safety-yellow group-hover:text-slate-900 transition-colors">mail</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase mb-1 tracking-widest">E-Mail</p>
                        <p className="text-slate-200 text-sm break-all font-medium">royal.team.service25@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-800">
                    <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Standort auf der Karte</h5>
                    <MapComponent />
                    <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">
                      📍 Interaktive Karte - Zoom & Navigation möglich
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-800">
                    <div className="flex items-center gap-3 bg-green-500/10 text-green-400 px-4 py-3 rounded-2xl border border-green-500/20 mb-4">
                      <span className="material-symbols-outlined text-sm">verified_user</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest">24h Express Antwort</span>
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase leading-relaxed tracking-widest">
                      Wir bearbeiten Anfragen auch an Wochenenden.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InquiryPage;
