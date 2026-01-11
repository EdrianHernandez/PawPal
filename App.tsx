import React, { useState } from 'react';
import PetFilterHero from './components/PetFilterHero';
import AnimalGrid from './components/AnimalGrid';
import SuccessStories from './components/SuccessStories';
import ShelterInfo from './components/ShelterInfo';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col font-sans bg-orange-50/30">
      {/* Navigation - Simple Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xl font-bold text-slate-800 tracking-tight">PawPals</span>
          </div>
          <div className="flex gap-4">
             <button className="hidden sm:block text-slate-600 hover:text-orange-500 font-medium transition-colors">
              About Us
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors text-sm shadow-md hover:shadow-lg transform active:scale-95">
              Donate Now
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <PetFilterHero 
          activeCategory={activeCategory} 
          setCategory={setActiveCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        
        <AnimalGrid 
          activeCategory={activeCategory}
          searchTerm={searchTerm}
        />
        
        <SuccessStories />
      </main>

      <ShelterInfo />
    </div>
  );
};

export default App;
