import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackground3DProps {
  className?: string;
}

const AnimatedBackground3D: React.FC<AnimatedBackground3DProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* 3D Cube */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="relative w-full h-full perspective-1000">
          <motion.div
            className="absolute w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Cube faces */}
            <div className="absolute w-full h-full transform-style-3d">
              {/* Front face */}
              <motion.div
                className="absolute w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 backdrop-blur-md rounded-2xl border border-white/20"
                style={{ transform: 'translateZ(8rem)' }}
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Back face */}
              <motion.div
                className="absolute w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-white/20"
                style={{ transform: 'rotateY(180deg) translateZ(8rem)' }}
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              
              {/* Top face */}
              <motion.div
                className="absolute w-full h-full bg-gradient-to-br from-teal-400/20 to-blue-500/20 backdrop-blur-md rounded-2xl border border-white/20"
                style={{ transform: 'rotateX(90deg) translateZ(8rem)' }}
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              
              {/* Bottom face */}
              <motion.div
                className="absolute w-full h-full bg-gradient-to-br from-amber-400/20 to-red-500/20 backdrop-blur-md rounded-2xl border border-white/20"
                style={{ transform: 'rotateX(-90deg) translateZ(8rem)' }}
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
              
              {/* Right face */}
              <motion.div
                className="absolute w-full h-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 backdrop-blur-md rounded-2xl border border-white/20"
                style={{ transform: 'rotateY(90deg) translateZ(8rem)' }}
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              
              {/* Left face */}
              <motion.div
                className="absolute w-full h-full bg-gradient-to-br from-indigo-400/20 to-violet-500/20 backdrop-blur-md rounded-2xl border border-white/20"
                style={{ transform: 'rotateY(-90deg) translateZ(8rem)' }}
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-blue-400/10 blur-xl"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: '20%', left: '30%' }}
      />
      
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-purple-400/10 blur-xl"
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ top: '50%', left: '20%' }}
      />
    </div>
  );
};

export default AnimatedBackground3D;
