
import React, { useState } from 'react';
import { m } from 'framer-motion';
import Toast from './Toast';

interface InquiryFormProps {
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
    isSubmitting: boolean;
    setIsSubmitting: (val: boolean) => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ onSuccess, onError, isSubmitting, setIsSubmitting }) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const fileArray = Array.from(files);
        const maxSize = 10 * 1024 * 1024; // 10MB

        const validFiles = fileArray.filter((file: File) => {
            if (file.size > maxSize) {
                onError(`Datei "${file.name}" ist zu groß. Maximale Größe: 10MB`);
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
            const templateParams = {
                from_name: formData.get('full-name'),
                from_email: formData.get('email'),
                phone: formData.get('phone'),
                company: formData.get('company') || 'Nicht angegeben',
                project_type: formData.get('service-type'),
                project_size: 'In Beschreibung angegeben',
                message: formData.get('description'),
                files_count: uploadedFiles.length,
                files_info: uploadedFiles.map(f => `${f.name} (${(f.size / 1024).toFixed(1)}KB)`).join(', ') || 'Keine Dateien'
            };

            const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
            const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS ist nicht konfiguriert.');
            }

            const emailjs = (await import('@emailjs/browser')).default;
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            onSuccess(`Vielen Dank! Ihre Anfrage${uploadedFiles.length > 0 ? ` mit ${uploadedFiles.length} Datei(en)` : ''} wurde erfolgreich gesendet.`);
            form.reset();
            setUploadedFiles([]);
        } catch (error) {
            console.error('EmailJS Error:', error);
            onError('Es gab ein Problem beim Senden Ihrer Anfrage.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-slate-800/30 p-8 md:p-10 rounded-md border border-slate-800 shadow-xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kontaktdaten */}
                <m.div variants={itemVariants} className="space-y-6">
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
                </m.div>

                {/* Projektdetails */}
                <m.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-safety-yellow uppercase mb-2">
                        <span className="material-symbols-outlined">assignment</span> Projektdetails
                    </h3>
                    <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="service-type">Leistungsart</label>
                        <select className="w-full" id="service-type" name="service-type">
                            <option value="entkernung">Entkernung</option>
                            <option value="abbruch">Abbrucharbeiten</option>
                            <option value="montage">Montage/Demontage</option>
                            <option value="entruempelung">Entrümpelung</option>
                            <option value="reinigung">Reinigungsarbeiten</option>
                            <option value="sonstiges">Sonstiges</option>
                        </select>
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5 uppercase tracking-wider group-focus-within:text-safety-yellow transition-colors" htmlFor="description">Projektbeschreibung *</label>
                        <textarea className="w-full min-h-[145px]" id="description" name="description" placeholder="Bitte beschreiben Sie Ihr Vorhaben so detailliert wie möglich..." required></textarea>
                    </div>
                </m.div>
            </div>

            {/* Dateiupload */}
            <m.div variants={itemVariants} className="space-y-4 pt-4 border-t border-slate-700/50">
                <label className="block text-sm font-semibold text-slate-300 uppercase tracking-wider">Bilder أو Dokumente hochladen (Optional)</label>
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-700 border-dashed rounded-lg cursor-pointer bg-slate-800/50 hover:bg-slate-800 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <span className="material-symbols-outlined text-slate-500 mb-2">cloud_upload</span>
                            <p className="mb-2 text-sm text-slate-400"><span className="font-bold">Klicken</span> أو ziehen</p>
                            <p className="text-xs text-slate-500">JPG, PNG, PDF (Max. 10MB pro Datei)</p>
                        </div>
                        <input type="file" className="hidden" multiple onChange={handleFileUpload} />
                    </label>
                </div>

                {uploadedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center gap-2 bg-slate-700 px-3 py-1.5 rounded text-xs text-slate-300">
                                <span className="truncate max-w-[150px]">{file.name}</span>
                                <button type="button" onClick={() => removeFile(index)} className="text-slate-500 hover:text-red-400">
                                    <span className="material-symbols-outlined text-sm">close</span>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </m.div>

            <m.div variants={itemVariants} className="pt-6">
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 py-4 rounded font-black transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-wait uppercase tracking-widest`}
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                            Wird gesendet...
                        </>
                    ) : (
                        <>
                            Anfrage jetzt senden
                            <span className="material-symbols-outlined">send</span>
                        </>
                    )}
                </button>
            </m.div>
        </form>
    );
};

export default InquiryForm;
