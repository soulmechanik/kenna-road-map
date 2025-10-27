'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Target, ArrowRight, Rocket, Code, Zap, CheckCircle2, Play } from 'lucide-react';

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

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Tiny dot grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
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
        <div className="max-w-5xl w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-6 border border-gray-200">
              <Target className="w-4 h-4" />
              Development Roadmap
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              KENNA ERP Timeline
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-4">
              Choose your development path
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Option 1 - Full Build */}
            <button
              onClick={() => router.push('/timeline')}
              className="group bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-2xl text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Timeline for Full Build
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Complete development roadmap from ground zero to deployment. Perfect for understanding the entire project scope and timeline.
              </p>
              <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-4 transition-all duration-300">
                View Timeline
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>

            {/* Option 2 - Continuation Build */}
            <button
              onClick={() => router.push('/continuation')}
              className="group bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-2xl text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Timeline for Continuation Build
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Building upon existing codebase with seamless integration. Optimized timeline for continued development and enhancement.
              </p>
              <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-4 transition-all duration-300">
                View Timeline
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>

          {/* Watch Sample Demo Box */}
          <div className="max-w-4xl mx-auto mt-12 md:mt-16">
            <button
              onClick={() => router.push('/demo')}
              className="group w-full bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-2xl text-left"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Play className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Watch Sample Demo
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      See our ERP system in action with a comprehensive walkthrough of key features and functionalities.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-4 transition-all duration-300 md:ml-4">
                  Watch Demo
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
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