
import React, { useState } from 'react';
import { m } from 'framer-motion';
import Toast from './Toast';
import InquiryForm from './InquiryForm';
import InquirySidebar from './InquirySidebar';

const InquiryPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

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
        <m.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-slate-900 pt-32 pb-16 border-b border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-safety-yellow/5 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse-slow"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <m.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight"
            >
              Projektanfrage stellen
            </m.h1>
            <m.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-2xl"
            >
              Erzählen Sie uns von Ihrem Vorhaben. Wir erstellen Ihnen ein unverbindliches Angebot.
            </m.p>
          </div>
        </m.section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              <div className="lg:col-span-2">
                <InquiryForm
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                  onSuccess={(msg) => setToast({ message: msg, type: 'success' })}
                  onError={(msg) => setToast({ message: msg, type: 'error' })}
                />
              </div>

              <div className="lg:col-span-1">
                <InquirySidebar />
              </div>
            </m.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InquiryPage;
