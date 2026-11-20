import React from 'react';

/**
 * Animated and Decorative Mehendi SVG Motifs
 * Authentic Indian Henna Mandalas, Paisleys (Ambi), and Floral Vines
 */

export const MehendiMandala = ({ className = "w-64 h-64 text-pista-500", animated = true }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${animated ? 'animate-spin-mandala' : ''}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer decorative ring */}
      <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      
      {/* Outer Petals */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <g key={`petal-${deg}`} transform={`rotate(${deg} 100 100)`}>
          <path
            d="M100 12 C108 26, 114 36, 100 50 C86 36, 92 26, 100 12 Z"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="100" cy="22" r="2.5" fill="currentColor" opacity="0.8" />
          <path d="M100 50 L100 65" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </g>
      ))}

      {/* Middle Petal Ring */}
      <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      
      {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
        <g key={`mid-${deg}`} transform={`rotate(${deg} 100 100)`}>
          <path
            d="M100 46 C105 55, 108 62, 100 70 C92 62, 95 55, 100 46 Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Inner Rosette */}
      <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={`inner-${deg}`} transform={`rotate(${deg} 100 100)`}>
          <circle cx="100" cy="74" r="3.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
        </g>
      ))}

      {/* Central Core */}
      <circle cx="100" cy="100" r="14" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="5" fill="currentColor" />
    </svg>
  );
};

export const MehendiPaisley = ({ className = "w-24 h-24 text-pista-600" }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60 15 C75 15, 95 28, 95 55 C95 82, 75 105, 48 105 C25 105, 15 90, 15 75 C15 50, 40 45, 50 35 C58 27, 54 20, 60 15 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Inner swirls */}
      <path
        d="M48 95 C32 95, 26 84, 26 74 C26 56, 45 52, 53 44 C60 36, 56 30, 60 25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <circle cx="48" cy="75" r="8" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
      <circle cx="48" cy="75" r="3" fill="currentColor" />
      <circle cx="70" cy="55" r="2.5" fill="currentColor" />
      <circle cx="78" cy="68" r="2.5" fill="currentColor" />
      <circle cx="68" cy="85" r="2.5" fill="currentColor" />
    </svg>
  );
};

export const MehendiStrokeBanner = () => {
  return (
    <div className="flex items-center justify-center space-x-3 my-4 opacity-70">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-pista-500"></div>
      <svg className="w-6 h-6 text-pista-600 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
      <svg className="w-4 h-4 text-pista-400" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="5" />
      </svg>
      <svg className="w-6 h-6 text-pista-600 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-pista-500"></div>
    </div>
  );
};
