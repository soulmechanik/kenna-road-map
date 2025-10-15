import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Users, DollarSign, Clock, Briefcase, CheckCircle2, Play, Calendar, Target, Zap } from 'lucide-react';

const TimelineItem = ({ phase, index, isVisible, isLast, isActive }) => {
  const icons = [Sparkles, Users, DollarSign, Clock, Briefcase, CheckCircle2];
  const Icon = icons[index];
  
  const colors = [
    { bg: 'bg-violet-50', icon: 'bg-violet-600', text: 'text-violet-700', border: 'border-violet-200', dot: 'bg-violet-600', ring: 'ring-violet-600' },
    { bg: 'bg-blue-50', icon: 'bg-blue-600', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-600', ring: 'ring-blue-600' },
    { bg: 'bg-emerald-50', icon: 'bg-emerald-600', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-600', ring: 'ring-emerald-600' },
    { bg: 'bg-amber-50', icon: 'bg-amber-600', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-600', ring: 'ring-amber-600' },
    { bg: 'bg-indigo-50', icon: 'bg-indigo-600', text: 'text-indigo-700', border: 'border-indigo-200', dot: 'bg-indigo-600', ring: 'ring-indigo-600' },
    { bg: 'bg-teal-50', icon: 'bg-teal-600', text: 'text-teal-700', border: 'border-teal-200', dot: 'bg-teal-600', ring: 'ring-teal-600' },
  ];

  const color = colors[index];

  return (
    <div 
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isActive ? 'scale-[1.02]' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex gap-4 md:gap-6 pb-8 md:pb-12">
        {/* Left side - Icon and connector */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl ${color.icon} flex items-center justify-center shadow-sm transition-all duration-300 ${
            isActive ? `ring-4 ${color.ring} ring-opacity-20 scale-110` : ''
          }`}>
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
            {isActive && (
              <div className={`absolute inset-0 rounded-xl ${color.icon} animate-ping opacity-20`}></div>
            )}
          </div>
          {!isLast && (
            <div className={`w-0.5 flex-1 mt-3 transition-all duration-500 ${
              isActive ? color.dot : 'bg-gray-200'
            }`}></div>
          )}
        </div>

        {/* Right side - Content */}
        <div className="flex-1 pb-4">
          <div className={`${isActive ? color.bg : 'bg-gray-50'} rounded-xl p-5 md:p-6 border ${
            isActive ? color.border : 'border-gray-200'
          } hover:shadow-lg transition-all duration-300 cursor-pointer`}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-500">PHASE {index + 1}</span>
                  {isActive && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      Active
                    </span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {phase.title}
                </h3>
              </div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${
                isActive ? color.icon : 'bg-gray-600'
              } text-white text-sm font-semibold whitespace-nowrap`}>
                <Clock className="w-3.5 h-3.5" />
                {phase.duration}
              </span>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {phase.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingShape = ({ delay, duration, size, left, top, color }) => (
  <div
    className={`absolute ${size} ${color} rounded-full opacity-5 blur-xl`}
    style={{
      left,
      top,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  ></div>
);

export default function KennaTimeline() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const observerRefs = useRef([]);
  const intervalRef = useRef(null);

  const phases = [
    {
      title: "UI/UX Design",
      description: "Full user interface and experience design across all modules",
      duration: "5 weeks"
    },
    {
      title: "HRM Module (Phase 1 – Core)",
      description: "Employee lifecycle management: hiring, onboarding, transition, and exit",
      duration: "8 weeks"
    },
    {
      title: "Payroll & Finance Module (Phase 2)",
      description: "Payroll automation, payslips, payment gateways, and financial requests",
      duration: "4 weeks"
    },
    {
      title: "Leave & Attendance Module (Phase 3)",
      description: "Attendance tracking, shifts, and leave management",
      duration: "2 weeks"
    },
    {
      title: "Case & Operations Module (Phase 4)",
      description: "Case handling, internal document sharing, and workflow assignment",
      duration: "4 weeks"
    },
    {
      title: "System Testing, Documentation & Deployment",
      description: "Quality assurance, documentation, and final deployment",
      duration: "4 weeks"
    }
  ];

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % phases.length);
      }, 2500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, phases.length]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const selectPhase = (index) => {
    setActivePhase(index);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle tiny grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 0.5px, transparent 0.5px),
            linear-gradient(to bottom, #000 0.5px, transparent 0.5px)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Floating shapes */}
      <FloatingShape delay={0} duration={20} size="w-96 h-96" left="10%" top="5%" color="bg-violet-400" />
      <FloatingShape delay={2} duration={25} size="w-80 h-80" left="70%" top="15%" color="bg-blue-400" />
      <FloatingShape delay={4} duration={22} size="w-72 h-72" left="40%" top="60%" color="bg-emerald-400" />
      <FloatingShape delay={6} duration={28} size="w-64 h-64" left="80%" top="70%" color="bg-amber-400" />

      {/* Header */}
      <div className="relative z-10 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-6 border border-gray-200">
              <Target className="w-4 h-4" />
              Development Roadmap
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
              KENNA ERP
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Strategic execution across 6 phases, delivering enterprise excellence
            </p>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlayback}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isPlaying
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {isPlaying ? (
                  <>
                    <div className="w-4 h-4 flex items-center gap-0.5">
                      <div className="w-1 h-4 bg-white rounded"></div>
                      <div className="w-1 h-4 bg-white rounded"></div>
                    </div>
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" fill="white" />
                    Auto Play
                  </>
                )}
              </button>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">Total: 5-6 months</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {phases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => selectPhase(index)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                    activePhase === index
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Phase {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10">
          {phases.map((phase, index) => (
            <div
              key={index}
              ref={(el) => (observerRefs.current[index] = el)}
              onClick={() => selectPhase(index)}
            >
              <TimelineItem
                phase={phase}
                index={index}
                isVisible={visibleItems.includes(index)}
                isLast={index === phases.length - 1}
                isActive={activePhase === index}
              />
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-violet-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">6</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Major Phases</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">27</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Total Weeks</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">100%</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Test Coverage</p>
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