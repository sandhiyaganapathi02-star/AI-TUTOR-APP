
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "High School Student",
      avatar: "https://picsum.photos/seed/alex/100/100",
      quote: "Lumina helped me go from a C to an A in Calculus. It explains things in a way that just clicks!"
    },
    {
      name: "Sarah Chen",
      role: "Medical Student",
      avatar: "https://picsum.photos/seed/sarah/100/100",
      quote: "The visual diagrams Lumina generates for anatomy are lifesavers. It's like having a private tutor 24/7."
    },
    {
      name: "Marcus Thorne",
      role: "Lifelong Learner",
      avatar: "https://picsum.photos/seed/marcus/100/100",
      quote: "I'm using Lumina to learn Python. It debugs my code and explains the 'why' behind every error. Incredible."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900">Loved by students worldwide</h2>
        <p className="mt-4 text-lg text-slate-600">Hear from those who've transformed their learning journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-blue-100" />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-xs text-blue-600 font-semibold">{t.role}</p>
              </div>
            </div>
            <p className="text-slate-600 italic leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(s => (
                <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
