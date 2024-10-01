import React from 'react';

const GradientBackground = ({ children }:any) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-green-100" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-radial from-yellow-200 to-transparent opacity-50" />
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;