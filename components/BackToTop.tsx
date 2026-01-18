import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Back to top"
                >
                    <span className="material-symbols-outlined text-2xl">arrow_upward</span>
                </button>
            )}
        </>
    );
};

export default BackToTop;
