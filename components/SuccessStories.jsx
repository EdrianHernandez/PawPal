import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      owner: "Sarah & Max",
      image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=800&auto=format&fit=crop",
      quote: "Max was shy at first, but now he's the king of the house. Adopting him was the best decision ever!"
    },
    {
      id: 2,
      owner: "The Chen Family",
      image: "https://images.unsplash.com/photo-1529429612779-c8e40df2b54c?q=80&w=800&auto=format&fit=crop",
      quote: "We wanted a friend for our kids, but we got a family member. Mittens brings so much joy to our lives."
    },
    {
      id: 3,
      owner: "James & Buster",
      image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=800&auto=format&fit=crop",
      quote: "Buster is my hiking buddy. I can't imagine a weekend without him on the trails with me."
    }
  ];

  return (
    <section className="bg-teal-50 py-20 border-y border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-xs bg-teal-100 px-3 py-1 rounded-full">Community Love</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-4">Happy Tails</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">See how our furry friends are thriving in their forever homes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-video w-full overflow-hidden rounded-xl mb-6 shadow-md">
                <img 
                  src={story.image} 
                  alt={story.owner} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex text-orange-400 mb-3 space-x-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-slate-600 italic mb-6 line-clamp-3 leading-relaxed">"{story.quote}"</p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-sm">
                    {story.owner.charAt(0)}
                  </div>
                  <span className="font-semibold text-slate-800 text-sm">{story.owner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="text-teal-700 font-semibold hover:text-teal-900 flex items-center justify-center gap-2 mx-auto transition-colors group">
            Read more success stories
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
