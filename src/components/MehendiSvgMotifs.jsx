import React from 'react';

/**
 * Animated and Decorative Mehendi SVG Motifs
 * Authentic Indian Henna Mandalas, Paisleys (Ambi), and Floral Vines
 */



// export const MehendiMandala = ({ className = "w-64 h-64 text-pista-500", animated = true }) => {
//   return (
//     <svg
//       viewBox="0 0 200 200"
//       className={`${className} ${animated ? 'animate-spin-mandala' : ''}`}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       {/* Outer decorative ring */}
//       <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
//       <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      
//       {/* Outer Petals */}
//       {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
//         <g key={`petal-${deg}`} transform={`rotate(${deg} 100 100)`}>
//           <path
//             d="M100 12 C108 26, 114 36, 100 50 C86 36, 92 26, 100 12 Z"
//             fill="currentColor"
//             fillOpacity="0.12"
//             stroke="currentColor"
//             strokeWidth="1.2"
//           />
//           <circle cx="100" cy="22" r="2.5" fill="currentColor" opacity="0.8" />
//           <path d="M100 50 L100 65" stroke="currentColor" strokeWidth="1" opacity="0.5" />
//         </g>
//       ))}

//       {/* Middle Petal Ring */}
//       <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="1" />
//       <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      
//       {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
//         <g key={`mid-${deg}`} transform={`rotate(${deg} 100 100)`}>
//           <path
//             d="M100 46 C105 55, 108 62, 100 70 C92 62, 95 55, 100 46 Z"
//             fill="currentColor"
//             fillOpacity="0.2"
//             stroke="currentColor"
//             strokeWidth="1"
//           />
//         </g>
//       ))}

//       {/* Inner Rosette */}
//       <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1.5" />
//       {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
//         <g key={`inner-${deg}`} transform={`rotate(${deg} 100 100)`}>
//           <circle cx="100" cy="74" r="3.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
//         </g>
//       ))}

//       {/* Central Core */}
//       <circle cx="100" cy="100" r="14" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
//       <circle cx="100" cy="100" r="5" fill="currentColor" />
//     </svg>
//   );
// };

// export const MehendiPaisley = ({ className = "w-24 h-24 text-pista-600" }) => {
//   return (
//     <svg
//       viewBox="0 0 120 120"
//       className={className}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <path
//         d="M60 15 C75 15, 95 28, 95 55 C95 82, 75 105, 48 105 C25 105, 15 90, 15 75 C15 50, 40 45, 50 35 C58 27, 54 20, 60 15 Z"
//         stroke="currentColor"
//         strokeWidth="2"
//         fill="currentColor"
//         fillOpacity="0.08"
//       />
//       {/* Inner swirls */}
//       <path
//         d="M48 95 C32 95, 26 84, 26 74 C26 56, 45 52, 53 44 C60 36, 56 30, 60 25"
//         stroke="currentColor"
//         strokeWidth="1.2"
//         strokeDasharray="3 3"
//       />
//       <circle cx="48" cy="75" r="8" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
//       <circle cx="48" cy="75" r="3" fill="currentColor" />
//       <circle cx="70" cy="55" r="2.5" fill="currentColor" />
//       <circle cx="78" cy="68" r="2.5" fill="currentColor" />
//       <circle cx="68" cy="85" r="2.5" fill="currentColor" />
//     </svg>
//   );
// };

// export const MehendiStrokeBanner = () => {
//   return (
//     <div className="flex items-center justify-center my-4 space-x-3 opacity-70">
//       <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-pista-500"></div>
//       <svg className="w-6 h-6 text-pista-600 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
//       </svg>
//       <svg className="w-4 h-4 text-pista-400" viewBox="0 0 24 24" fill="currentColor">
//         <circle cx="12" cy="12" r="5" />
//       </svg>
//       <svg className="w-6 h-6 text-pista-600 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
//       </svg>
//       <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-pista-500"></div>
//     </div>
//   );
// };











/**
 * Subtle Animated Butterfly Motifs
 * Styled with soft sage/pista green and warm sand/tan tones
 */

const ButterflyArtwork = ({
  animated = true,
  variant = 'sage', // 'sage' | 'sand'
  flapDuration = '1.9s',
  floatDuration = '13s',
  delay = '0s',
}) => {
  const palette =
    variant === 'sand'
      ? {
        upperFill: '#D8B782',
        upperOpacity: 0.42,
        lowerFill: '#C7A268',
        lowerOpacity: 0.34,
        stroke: '#B89156',
        strokeOpacity: 0.45,
        spot: '#A87F43',
        body: '#9E763B',
      }
      : {
        upperFill: '#B9CEBE',
        upperOpacity: 0.42,
        lowerFill: '#A3BEAA',
        lowerOpacity: 0.34,
        stroke: '#8FA996',
        strokeOpacity: 0.45,
        spot: '#7D9884',
        body: '#738E7A',
      };

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full overflow-visible"
      style={
        animated
          ? {
            animation: `mjButterflyFloat ${floatDuration} ease-in-out ${delay} infinite`,
          }
          : undefined
      }
    >
      {/* Left Upper & Lower Wings */}
      <g
        style={
          animated
            ? {
              transformOrigin: '60px 60px',
              animation: `mjWingLeft ${flapDuration} ease-in-out ${delay} infinite`,
            }
            : undefined
        }
      >
        <path
          d="M57 57 C40 26, 12 22, 15 48 C17 62, 36 63, 57 59 Z"
          fill={palette.upperFill}
          fillOpacity={palette.upperOpacity}
          stroke={palette.stroke}
          strokeWidth="1.2"
          strokeOpacity={palette.strokeOpacity}
        />
        <path
          d="M57 62 C36 65, 20 78, 29 95 C37 107, 52 88, 58 66 Z"
          fill={palette.lowerFill}
          fillOpacity={palette.lowerOpacity}
          stroke={palette.stroke}
          strokeWidth="1.1"
          strokeOpacity={palette.strokeOpacity}
        />
        <circle
          cx="31"
          cy="44"
          r="2.8"
          fill={palette.spot}
          fillOpacity="0.32"
        />
      </g>

      {/* Right Upper & Lower Wings */}
      <g
        style={
          animated
            ? {
              transformOrigin: '60px 60px',
              animation: `mjWingRight ${flapDuration} ease-in-out ${delay} infinite`,
            }
            : undefined
        }
      >
        <path
          d="M63 57 C80 26, 108 22, 105 48 C103 62, 84 63, 63 59 Z"
          fill={palette.upperFill}
          fillOpacity={palette.upperOpacity}
          stroke={palette.stroke}
          strokeWidth="1.2"
          strokeOpacity={palette.strokeOpacity}
        />
        <path
          d="M63 62 C84 65, 100 78, 91 95 C83 107, 68 88, 62 66 Z"
          fill={palette.lowerFill}
          fillOpacity={palette.lowerOpacity}
          stroke={palette.stroke}
          strokeWidth="1.1"
          strokeOpacity={palette.strokeOpacity}
        />
        <circle
          cx="89"
          cy="44"
          r="2.8"
          fill={palette.spot}
          fillOpacity="0.32"
        />
      </g>

      {/* Slender Body & Antennae */}
      <line
        x1="60"
        y1="40"
        x2="60"
        y2="84"
        stroke={palette.body}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
      <path
        d="M58 40 Q51 27 44 26 M62 40 Q69 27 76 26"
        stroke={palette.body}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.48"
        fill="none"
      />
    </svg>
  );
};

const BACKGROUND_BUTTERFLIES = [
  // Mobile-friendly edge & corner butterflies (always visible on small screens)
  { id: 'bf-m1', top: '6%', left: '4%', size: 'w-10 h-10', variant: 'sage', flap: '1.8s', float: '12s', delay: '0s', mobileOnly: true },
  { id: 'bf-m2', top: '12%', right: '4%', size: 'w-11 h-11', variant: 'sand', flap: '1.9s', float: '13s', delay: '-1.5s', mobileOnly: true },
  { id: 'bf-m3', top: '44%', left: '3%', size: 'w-9 h-9', variant: 'sage', flap: '1.7s', float: '11s', delay: '-3s', mobileOnly: true },
  { id: 'bf-m4', top: '68%', right: '4%', size: 'w-10 h-10', variant: 'sand', flap: '2.0s', float: '14s', delay: '-4.5s', mobileOnly: true },
  { id: 'bf-m5', top: '84%', left: '5%', size: 'w-10 h-10', variant: 'sage', flap: '1.8s', float: '12s', delay: '-2.2s', mobileOnly: true },

  // Desktop butterflies (md and up)
  { id: 'bf-1', top: '5%', left: '6%', size: 'w-14 h-14', variant: 'sage', flap: '1.8s', float: '12s', delay: '0s' },
  { id: 'bf-2', top: '8%', left: '24%', size: 'w-8 h-8', variant: 'sand', flap: '2.1s', float: '14s', delay: '-2.5s' },
  { id: 'bf-3', top: '6%', right: '26%', size: 'w-9 h-9', variant: 'sage', flap: '1.7s', float: '11s', delay: '-4s' },
  { id: 'bf-4', top: '11%', right: '7%', size: 'w-14 h-14', variant: 'sand', flap: '1.9s', float: '13s', delay: '-1.5s' },

  { id: 'bf-5', top: '22%', left: '4%', size: 'w-10 h-10', variant: 'sand', flap: '2.0s', float: '15s', delay: '-5s' },
  { id: 'bf-6', top: '25%', left: '19%', size: 'w-7 h-7', variant: 'sage', flap: '1.6s', float: '10s', delay: '-3.2s' },
  { id: 'bf-7', top: '28%', right: '18%', size: 'w-8 h-8', variant: 'sand', flap: '2.2s', float: '14s', delay: '-6.5s' },
  { id: 'bf-8', top: '30%', right: '5%', size: 'w-12 h-12', variant: 'sage', flap: '1.8s', float: '12s', delay: '-2s' },

  { id: 'bf-9', top: '46%', left: '7%', size: 'w-11 h-11', variant: 'sage', flap: '1.9s', float: '13s', delay: '-4.8s' },
  { id: 'bf-10', top: '52%', left: '22%', size: 'w-8 h-8', variant: 'sand', flap: '1.7s', float: '11s', delay: '-7s' },
  { id: 'bf-11', top: '49%', right: '20%', size: 'w-7 h-7', variant: 'sage', flap: '2.0s', float: '15s', delay: '-1s' },
  { id: 'bf-12', top: '54%', right: '6%', size: 'w-13 h-13', variant: 'sand', flap: '1.8s', float: '12s', delay: '-5.5s' },

  { id: 'bf-13', top: '72%', left: '5%', size: 'w-12 h-12', variant: 'sand', flap: '2.1s', float: '14s', delay: '-3.8s' },
  { id: 'bf-14', top: '78%', left: '26%', size: 'w-9 h-9', variant: 'sage', flap: '1.7s', float: '11s', delay: '-6s' },
  { id: 'bf-15', top: '76%', right: '24%', size: 'w-8 h-8', variant: 'sand', flap: '1.9s', float: '13s', delay: '-2.8s' },
  { id: 'bf-16', top: '84%', right: '8%', size: 'w-11 h-11', variant: 'sage', flap: '2.0s', float: '15s', delay: '-4.2s' },
];

export const ButterflyBackground = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden select-none ${className}`}
    >
      {BACKGROUND_BUTTERFLIES.map((bf) => (
        <div
          key={bf.id}
          className={`absolute ${bf.size} ${bf.mobileOnly ? 'block md:hidden' : 'hidden md:block'}`}
          style={{
            top: bf.top,
            left: bf.left,
            right: bf.right,
          }}
        >
          <ButterflyArtwork
            animated={true}
            variant={bf.variant}
            flapDuration={bf.flap}
            floatDuration={bf.float}
            delay={bf.delay}
          />
        </div>
      ))}
    </div>
  );
};

export const MehendiMandala = ({
  className = "w-20 h-20",
  animated = true,
  variant = "sage",
  flapDuration = "1.9s",
  floatDuration = "13s",
  delay = "0s",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none inline-flex items-center justify-center ${className}`}
    >
      <ButterflyArtwork
        animated={animated}
        variant={variant}
        flapDuration={flapDuration}
        floatDuration={floatDuration}
        delay={delay}
      />
    </div>
  );
};

export const MehendiPaisley = ({
  className = "w-16 h-16",
  animated = true,
  variant = "sand",
  flapDuration = "1.7s",
  floatDuration = "11s",
  delay = "-2s",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none inline-flex items-center justify-center ${className}`}
    >
      <ButterflyArtwork
        animated={animated}
        variant={variant}
        flapDuration={flapDuration}
        floatDuration={floatDuration}
        delay={delay}
      />
    </div>
  );
};

export const MehendiStrokeBanner = () => {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center my-4 space-x-3 pointer-events-none select-none opacity-80"
    >
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#9FB6A5]" />
      <div className="w-5 h-5">
        <ButterflyArtwork animated={true} variant="sage" flapDuration="1.8s" floatDuration="9s" />
      </div>
      <span className="w-1.5 h-1.5 rounded-full bg-[#D8B782]/80" />
      <div className="w-5 h-5">
        <ButterflyArtwork animated={true} variant="sand" flapDuration="2.0s" floatDuration="10s" delay="-1.5s" />
      </div>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#9FB6A5]" />
    </div>
  );
};