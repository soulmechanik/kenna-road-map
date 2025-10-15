'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Code, ArrowLeft, Target, Rocket, Zap, CheckCircle2 } from 'lucide-react';

const FloatingObject = ({ delay, duration, size, left, top, Icon, color, rotate }) => (
  <div
    className={`absolute ${size} ${color} rounded-2xl opacity-[0.08] flex items-center justify-center`}
    style={{
      left,
      top,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      transform: `rotate(${rotate}deg)`
    }}
  >
    <Icon className="w-full h-full p-4" strokeWidth={1} />
  </div>
);

export default function Continuation() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dot grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }}
      ></div>

      {/* Floating decorative objects */}
      <FloatingObject delay={0} duration={25} size="w-32 h-32" left="8%" top="12%" Icon={Code} color="text-violet-400" rotate={-15} />
      <FloatingObject delay={3} duration={30} size="w-40 h-40" left="75%" top="8%" Icon={Rocket} color="text-blue-400" rotate={20} />
      <FloatingObject delay={6} duration={28} size="w-36 h-36" left="15%" top="70%" Icon={Target} color="text-emerald-400" rotate={-25} />
      <FloatingObject delay={9} duration={32} size="w-28 h-28" left="82%" top="65%" Icon={Zap} color="text-amber-400" rotate={15} />
      <FloatingObject delay={12} duration={27} size="w-32 h-32" left="45%" top="85%" Icon={CheckCircle2} color="text-indigo-400" rotate={-10} />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center">
          <button
            onClick={() => router.push('/')}
            className="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Selection
          </button>
          
          <div className="bg-white rounded-3xl p-12 md:p-16 border-2 border-gray-200 shadow-xl">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 mx-auto">
              <Code className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Continuation Build Timeline
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Content will be updated once we have access to the codebase. This timeline will show optimized phases for seamless continuation.
            </p>
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Back to Selection
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}