import React, { useState } from 'react';

interface CMCLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const CMCLogo: React.FC<CMCLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-10 sm:h-11 max-w-[160px]',
    md: 'h-20 sm:h-24 max-w-[320px]',
    lg: 'h-32 sm:h-36 max-w-[480px]',
    xl: 'h-44 sm:h-52 max-w-[620px]'
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      {!imageError ? (
        <img
          src="./logo.png"
          alt="CMC Creative Works"
          className={`${sizeClasses} w-auto object-contain drop-shadow-[0_12px_32px_rgba(212,175,55,0.3)] transition-transform duration-500`}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.dataset.retried) {
              img.dataset.retried = 'true';
              img.src = '/logo.png';
            } else {
              setImageError(true);
            }
          }}
        />
      ) : (
        /* Vector fallback if image cannot be loaded */
        <div className="flex flex-col items-center justify-center">
          <span className="font-cinzel text-2xl font-black text-amber-400 tracking-wider">CMC</span>
          {showSubtitle && (
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-300 font-semibold mt-1">
              CREATIVE WORKS
            </span>
          )}
        </div>
      )}
    </div>
  );
};
