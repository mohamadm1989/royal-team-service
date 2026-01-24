
import React from 'react';

interface BrandLogoProps {
  className?: string;
  onNavClick?: () => void;
  showText?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", onNavClick, showText = true }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onNavClick) {
      e.preventDefault();
      onNavClick();
    }
  };

  return (
    <a
      href="/"
      className={`flex items-center gap-3 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center">
        <img
          src="/logo-new.webp"
          alt="Royal Team Service Logo"
          className="h-20 w-auto object-contain"
          width="80"
          height="80"
          loading="eager"
        />
        {showText && (
          <div className="flex flex-col items-center leading-none -mt-7">
            <span className="text-sm font-black tracking-tighter text-white uppercase">Royal Team</span>
            <span className="text-[7px] font-bold tracking-[0.4em] text-safety-yellow uppercase">Service</span>
          </div>
        )}
      </div>
    </a>
  );
};

export default BrandLogo;
