import React from 'react';

interface LoadingProps {
  text?: string;
}

const LoadingComponent: React.FC<LoadingProps> = ({ text = 'Loading...' }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="relative w-24 h-24">
        {/* Generate 20 pairs of dots for the helix effect */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '50%',
              transform: `
                translateY(-50%) 
                rotate(${i * 18}deg)
              `,
              transformOrigin: '50% 50%',
            }}
          >
            {/* Left dot */}
            <div 
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                left: '-12px',
                backgroundColor: `hsl(${(i * 18) % 360}, 70%, 50%)`,
                animationDelay: `${i * 0.1}s`,
                opacity: Math.cos((i * 18 * Math.PI) / 180)
              }}
            />
            {/* Right dot */}
            <div 
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                right: '-12px',
                backgroundColor: `hsl(${((i * 18) + 180) % 360}, 70%, 50%)`,
                animationDelay: `${i * 0.1}s`,
                opacity: Math.sin((i * 18 * Math.PI) / 180)
              }}
            />
          </div>
        ))}
        
        {/* Center rotating ring */}
        <div className="absolute inset-0 border-4 border-t-transparent border-b-transparent rounded-full animate-spin" 
          style={{
            borderLeftColor: 'hsla(210, 70%, 50%, 0.5)',
            borderRightColor: 'hsla(330, 70%, 50%, 0.5)'
          }}
        />
      </div>

      {/* Loading text with rainbow animation */}
      <div className="mt-8 relative">
        <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
          {text}
        </p>
        {/* Animated underline */}
        <div 
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            width: '100%',
            animation: 'shimmer 2s linear infinite',
            backgroundSize: '200% 100%'
          }}
        />
      </div>
      
      {/* Particle effects around the edges */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingComponent;