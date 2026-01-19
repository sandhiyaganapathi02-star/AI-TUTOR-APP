
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>

        <section id="features" className="py-24 bg-white">
          <Features />
        </section>

        <section id="demo" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Experience the Magic
              </h2>
              <p className="mt-4 text-xl text-slate-600">
                Try a quick demo session with Lumina. Pick a topic and start learning.
              </p>
            </div>
            <ChatDemo />
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-white">
          <Testimonials />
        </section>

        <section id="cta" className="relative py-16 bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your learning?</h2>
            <p className="text-blue-100 text-lg mb-10">Join 50,000+ students already mastering subjects faster with Lumina.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                Get Started for Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
