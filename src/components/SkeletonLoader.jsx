import React from 'react';

export const SectionSkeleton = ({ title = "Loading content..." }) => {
  return (
    <div className="w-full py-16 px-4 max-w-7xl mx-auto animate-pulse">
      <div className="flex flex-col items-center mb-10">
        <div className="h-4 w-32 bg-pista-300 rounded-full mb-3"></div>
        <div className="h-8 w-64 bg-pista-300/80 rounded-lg mb-3"></div>
        <div className="h-4 w-96 max-w-full bg-pista-200 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-cardBg rounded-2xl p-5 border border-pista-200/60 shadow-soft">
            <div className="h-60 bg-pista-200/60 rounded-xl mb-4"></div>
            <div className="h-5 bg-pista-300/70 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-pista-200 rounded w-1/2 mb-4"></div>
            <div className="h-10 bg-pista-300/50 rounded-xl w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-cardBg rounded-2xl p-4 border border-pista-200/60 shadow-soft animate-pulse">
      <div className="h-56 bg-pista-200 rounded-xl mb-3"></div>
      <div className="h-5 bg-pista-300 rounded w-4/5 mb-2"></div>
      <div className="h-4 bg-pista-200 rounded w-2/3 mb-4"></div>
      <div className="flex justify-between items-center pt-2">
        <div className="h-6 bg-pista-300 rounded w-1/4"></div>
        <div className="h-9 bg-pista-400 rounded-lg w-1/3"></div>
      </div>
    </div>
  );
};

export const Spinner = ({ size = "w-6 h-6", color = "text-pista-600" }) => (
  <svg
    className={`animate-spin ${size} ${color}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
