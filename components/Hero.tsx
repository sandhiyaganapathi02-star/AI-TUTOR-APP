
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              ✨ The Future of Learning is Here
            </span>
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight sm:text-6xl md:text-7xl mb-8 leading-[1.1]">
              Master any subject with your own <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Personal AI Tutor</span>
            </h1>
            <p className="mt-3 text-lg text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mb-10 leading-relaxed">
              Lumina provides personalized 1-on-1 tutoring, homework help, and interactive lessons that adapt to your unique learning style. 24/7, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 hover:-translate-y-1">
                Start Learning Now
              </button>
              <button className="bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 sm:justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src={`https://picsum.photos/seed/${i + 100}/100/100`} 
                    alt="User" 
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500">
                Joined by <span className="font-bold text-slate-900">10k+ students</span> this month
              </p>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden group">
              <img
                src="https://picsum.photos/seed/edtech/800/600"
                alt="AI Tutoring in action"
                className="w-full transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                   </div>
                   <div>
                     <p className="text-sm font-bold text-slate-900">Concept Mastered!</p>
                     <p className="text-xs text-slate-500">You just learned Quantum Entanglement.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
