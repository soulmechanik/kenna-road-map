'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Play, X, ExternalLink, CheckCircle, Layers, Eye, MessageCircle, Sparkles, Video, Grid3X3, Clock, MousePointer } from 'lucide-react';

export default function DemoPage() {
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Create Property Feature",
      description: "See how we handle property creation and management in our systems",
      youtubeId: "1pjqmi3PIuw",
      duration: "15:30",
      thumbnail: `https://img.youtube.com/vi/1pjqmi3PIuw/maxresdefault.jpg`
    },
    {
      id: 2,
      title: "Tenant Application Feature",
      description: "Watch the tenant application process we built for a client",
      youtubeId: "GExfZGusy1s",
      duration: "12:45",
      thumbnail: `https://img.youtube.com/vi/GExfZGusy1s/maxresdefault.jpg`
    }
  ];

  const openVideoModal = (index) => {
    setActiveVideo(index);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/2348094793447`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dot grid background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '35px 35px',
          backgroundPosition: '0 0'
        }}
      ></div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-gray-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-gray-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-gray-500 rounded-full opacity-25 animate-pulse delay-500"></div>

      {/* Header */}
      <div className="relative z-10 bg-white bg-opacity-70 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group text-sm font-light"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return Home
            </button>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-1">
                <Video className="w-5 h-5 text-gray-700" />
                <Sparkles className="w-4 h-4 text-gray-600" />
              </div>
              <h1 className="text-2xl font-light text-gray-900 tracking-wide">Feature Demos</h1>
              <p className="text-xs text-gray-500 font-light mt-1">See how we document features for clients</p>
            </div>

            <button 
              onClick={openWhatsApp}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-light group"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Support</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-xs font-light mb-6 border border-gray-200">
            <Grid3X3 className="w-3 h-3" />
            Quick demo for you
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">
            Just wanted to show you how we document features
          </h2>
          <p className="text-gray-600 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Since you mentioned your concerns in the meeting, I thought I'd show you exactly how we break down and document 
            every feature for our clients. This way you can see you're in the right hands - we make sure everything is 
            crystal clear and easy to follow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Video Player Section */}
          <div className="lg:col-span-2">
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-[1.01] transition-transform duration-300 border border-gray-200"
              onClick={() => openVideoModal(activeVideo)}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative group rounded-2xl overflow-hidden">
                {/* Thumbnail Background with light overlay */}
                <img
                  src={videos[activeVideo]?.thumbnail}
                  alt={videos[activeVideo]?.title}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-white bg-opacity-95"></div>
                
                {/* Content overlay - now visible with dark text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  {/* Play Button - Now with dark background for contrast */}
                  <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-28 h-28 rounded-full bg-gray-900 bg-opacity-90 backdrop-blur-sm border-2 border-gray-700 flex items-center justify-center shadow-2xl">
                      <Play className="w-14 h-14 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Title - Dark text for better contrast */}
                  <h2 className="text-4xl font-light mb-4 tracking-wide text-center text-gray-900">
                    {videos[activeVideo]?.title}
                  </h2>
                  
                  {/* Description - Dark gray for readability */}
                  <p className="text-gray-700 text-lg font-light mb-8 text-center max-w-xl leading-relaxed">
                    {videos[activeVideo]?.description}
                  </p>
                  
                  {/* Badges - Dark background with good contrast */}
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="px-5 py-2.5 bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-full border border-gray-600 flex items-center gap-2 shadow-lg">
                      <Clock className="w-4 h-4 text-white" />
                      <span className="text-sm font-light text-white">{videos[activeVideo]?.duration}</span>
                    </div>
                    <div className="px-5 py-2.5 bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-full border border-gray-600 flex items-center gap-2 shadow-lg">
                      <MousePointer className="w-4 h-4 text-white" />
                      <span className="text-sm font-light text-white">Click to Play</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            {videos[activeVideo] && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h2 className="text-xl font-light text-gray-900 mb-3 tracking-wide">
                  {videos[activeVideo].title}
                </h2>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                  {videos[activeVideo].description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-light flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {videos[activeVideo].duration}
                  </span>
                  <button
                    onClick={() => window.open(`https://youtu.be/${videos[activeVideo].youtubeId}`, '_blank')}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-xs font-light"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Open in YouTube
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Video List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-8 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-4 h-4 text-gray-700" />
                <h3 className="text-lg font-light text-gray-900">Feature Demos</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideo(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
                      activeVideo === index
                        ? 'border-gray-800 bg-gray-100 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-14 h-10 rounded-lg object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg">
                          <Play className="w-3 h-3 text-white" fill="currentColor" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-light text-gray-900 text-sm mb-1 leading-tight">
                          {video.title}
                        </h4>
                        <p className="text-gray-600 text-xs font-light line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-gray-500 font-light flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {video.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Development Approach Section */}
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-gray-700" />
                  <h4 className="font-light text-gray-900 text-sm">What this shows you</h4>
                </div>
                
                <p className="text-gray-700 text-xs font-light mb-4 leading-relaxed">
                  This is exactly how we'll handle your project - breaking it down feature by feature, with clear documentation so you always know what's happening.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-gray-700 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700 font-light leading-relaxed">
                      Every feature gets this same clear documentation
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-gray-700 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700 font-light leading-relaxed">
                      Step-by-step guides so your team knows how to use it
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-gray-700 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700 font-light leading-relaxed">
                      Always available online for reference
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 text-xs font-light mb-4 leading-relaxed">
                  No surprises, no confusion - just clear communication every step of the way.
                </p>

                <button 
                  onClick={openWhatsApp}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors text-xs font-light flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-lg font-light text-gray-900 mb-4">Have questions about your project?</h3>
            <p className="text-gray-600 text-sm font-light mb-6 max-w-2xl mx-auto leading-relaxed">
              Let's chat about your specific needs. We'll make sure you're comfortable with every step, 
              just like we've shown here with these feature demos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={openWhatsApp}
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition-colors text-sm font-light flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Message me on WhatsApp
              </button>
              <div className="text-xs text-gray-500 font-light">
                Direct line: 08094793447
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass morphism backdrop with blurred main page */}
          <div 
            className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-md transition-all duration-300"
            onClick={closeVideoModal}
          >
            {/* Dot grid background for modal backdrop */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '35px 35px',
                backgroundPosition: '0 0'
              }}
            ></div>
          </div>
          
          {/* Modal content */}
          <div className="relative w-full max-w-6xl bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl border border-gray-300 border-opacity-50 shadow-2xl transform animate-in zoom-in duration-300">
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group"
            >
              <X className="w-4 h-4 text-white group-hover:text-gray-200" />
            </button>

            {/* Video container */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-200">
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[activeVideo]?.youtubeId}?autoplay=1&rel=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={videos[activeVideo]?.title}
                />
              </div>
              
              {/* Video info in modal */}
              <div className="bg-white p-4 border-t border-gray-200">
                <h3 className="text-lg font-light text-gray-900 mb-2">
                  {videos[activeVideo]?.title}
                </h3>
                <p className="text-gray-600 text-sm font-light">
                  {videos[activeVideo]?.description}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-light flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {videos[activeVideo]?.duration}
                  </span>
                  <button
                    onClick={() => window.open(`https://youtu.be/${videos[activeVideo]?.youtubeId}`, '_blank')}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-xs font-light"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Watch on YouTube
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation: zoom-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}