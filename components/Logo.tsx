import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Royal Team Service Logo"
    >
        <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BF953F" />
                <stop offset="25%" stopColor="#FCF6BA" />
                <stop offset="50%" stopColor="#B38728" />
                <stop offset="75%" stopColor="#FBF5B7" />
                <stop offset="100%" stopColor="#AA771C" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* Crown Icon */}
        <path
            d="M200 10 L230 40 L260 10 L250 60 H150 L140 10 L170 40 L200 10Z M150 70 H250 V80 H150 Z"
            fill="url(#gold-gradient)"
            stroke="url(#gold-gradient)"
            strokeWidth="2"
            strokeLinejoin="round"
        />

        {/* Decorative Wings (Simplified) */}
        <path
            d="M130 50 Q100 20 60 40 Q90 60 110 70 M270 50 Q300 20 340 40 Q310 60 290 70"
            stroke="url(#gold-gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
        />

        {/* RT Monogram (Optional, simplistic) */}
        {/* <text x="200" y="65" textAnchor="middle" fontFamily="serif" fontSize="24" fontWeight="bold" fill="#0f172a">RT</text> */}

        {/* Main Text */}
        <text
            x="200"
            y="100"
            textAnchor="middle"
            fontFamily="serif"
            fontSize="32"
            fontWeight="900"
            fill="url(#gold-gradient)"
            style={{ textTransform: 'uppercase', letterSpacing: '2px' }}
            filter="url(#glow)"
        >
            Royal Team
        </text>

        {/* Service Text */}
        <text
            x="200"
            y="118"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="12"
            fontWeight="600"
            fill="url(#gold-gradient)"
            style={{ textTransform: 'uppercase', letterSpacing: '6px' }}
        >
            Service
        </text>
    </svg>
);

export default Logo;
