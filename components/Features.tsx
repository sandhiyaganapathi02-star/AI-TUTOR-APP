
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Adaptive Learning",
      description: "Our AI tailors every lesson to your pace, identifying your strengths and filling your knowledge gaps instantly.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "24/7 Availability",
      description: "Stuck on a problem at 3 AM? Lumina is always awake and ready to help you solve it step-by-step.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "All Subjects Covered",
      description: "From Quantum Physics to Renaissance Art, Lumina is trained on millions of educational resources.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Visual Explanations",
      description: "Complex concepts are explained with interactive diagrams and AI-generated visualizations.",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Exam Preparation",
      description: "Custom practice quizzes and mock exams that predict where you need more practice.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      color: "bg-rose-100 text-rose-600"
    },
    {
      title: "Progress Tracking",
      description: "Detailed insights into your mastery level across different topics and sub-topics.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Lumina?</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Everything you need to succeed
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="relative p-8 bg-slate-50 rounded-3xl transition-all hover:bg-white hover:shadow-xl group border border-transparent hover:border-slate-100">
              <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
