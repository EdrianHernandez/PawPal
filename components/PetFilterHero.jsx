import React from 'react';

const PetFilterHero = ({ activeCategory, setCategory, searchTerm, setSearchTerm }) => {
  const categories = ['All', 'Dog', 'Cat', 'Other'];

  return (
    <div className="relative bg-slate-900 py-24 sm:py-32 isolate overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1450779333025-3a2d55a96695?q=80&w=2072&auto=format&fit=crop" 
        alt="Happy dog being petted" 
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 drop-shadow-md">
          Find Your New <span className="text-orange-400">Best Friend</span>
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-200 mb-10 max-w-2xl mx-auto">
          Thousands of homeless pets are waiting for a loving family. 
          Search our database and give a furry friend a forever home today.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-full leading-5 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-orange-500/30 sm:text-lg shadow-xl transition-all"
              placeholder="Search by name, breed, or personality..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`filter-pill px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-md flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white scale-105 ring-2 ring-orange-300 ring-offset-2 ring-offset-slate-900'
                  : 'bg-white/90 text-slate-700 hover:bg-white hover:scale-105'
              }`}
            >
              {cat === 'Dog' && '🐕'}
              {cat === 'Cat' && '🐈'}
              {cat === 'Other' && '🐇'}
              {cat === 'All' && '🐾'}
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetFilterHero;
