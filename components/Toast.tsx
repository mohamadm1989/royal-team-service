import React, { useEffect } from 'react';

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        info: 'bg-blue-600'
    }[type];

    const icon = {
        success: 'check_circle',
        error: 'error',
        info: 'info'
    }[type];

    return (
        <div className={`fixed top-24 right-8 z-50 ${bgColor} text-white px-6 py-4 rounded-md shadow-2xl flex items-center gap-3 animate-slide-in max-w-md`}>
            <span className="material-symbols-outlined text-2xl">{icon}</span>
            <p className="flex-1 font-medium">{message}</p>
            <button
                onClick={onClose}
                className="hover:bg-white/20 p-1 rounded transition-colors"
                aria-label="Close notification"
            >
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>
    );
};

export default Toast;
