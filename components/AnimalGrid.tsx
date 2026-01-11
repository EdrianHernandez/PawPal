import React from 'react';

interface Animal {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  image: string;
  badge?: string;
  gender: 'Male' | 'Female';
}

interface AnimalGridProps {
  activeCategory: string;
  searchTerm: string;
}

const animals: Animal[] = [
  { id: 1, name: 'Bella', type: 'Dog', breed: 'Golden Retriever', age: '2 years', gender: 'Female', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=662&auto=format&fit=crop', badge: 'New Arrival' },
  { id: 2, name: 'Luna', type: 'Cat', breed: 'Siamese Mix', age: '4 years', gender: 'Female', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Charlie', type: 'Dog', breed: 'Beagle', age: '1 year', gender: 'Male', image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Milo', type: 'Cat', breed: 'Tabby', age: '6 months', gender: 'Male', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop', badge: 'Urgent' },
  { id: 5, name: 'Daisy', type: 'Dog', breed: 'Labrador', age: '3 years', gender: 'Female', image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?q=80&w=800&auto=format&fit=crop' },
  { id: 6, name: 'Oreo', type: 'Other', breed: 'Rabbit', age: '1 year', gender: 'Male', image: 'https://images.unsplash.com/photo-1585110396000-c9285745564f?q=80&w=800&auto=format&fit=crop' },
  { id: 7, name: 'Max', type: 'Dog', breed: 'German Shepherd', age: '5 years', gender: 'Male', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=800&auto=format&fit=crop' },
  { id: 8, name: 'Simba', type: 'Cat', breed: 'Maine Coon', age: '2 years', gender: 'Male', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop' },
];

const AnimalGrid: React.FC<AnimalGridProps> = ({ activeCategory, searchTerm }) => {
  const filteredAnimals = animals.filter((animal) => {
    const matchesCategory = activeCategory === 'All' || animal.type === activeCategory;
    const matchesSearch = 
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Meet Our Pets</h2>
          <p className="text-slate-500 mt-2">These cuties are waiting for their forever homes.</p>
        </div>
        <span className="text-slate-400 text-sm font-medium bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
          {filteredAnimals.length} pets available
        </span>
      </div>

      {filteredAnimals.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="text-6xl mb-4">😿</div>
          <h3 className="text-xl font-semibold text-slate-700">No pets found</h3>
          <p className="text-slate-500 mt-2">Try changing your filters or search term.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 text-orange-500 hover:text-orange-600 font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredAnimals.map((animal) => (
            <div key={animal.id} className="pet-card group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img 
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                {animal.badge && (
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {animal.badge}
                  </span>
                )}
                <button 
                  className="absolute bottom-3 right-3 bg-white/90 p-2.5 rounded-full shadow-lg text-slate-400 hover:text-red-500 hover:scale-110 transition-all active:scale-95"
                  aria-label="Add to favorites"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-800">{animal.name}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${
                    animal.gender === 'Female' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {animal.gender === 'Female' ? '♀' : '♂'}
                  </span>
                </div>
                
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  {animal.breed} • {animal.age}
                </p>

                <button className="adopt-btn w-full bg-slate-900 hover:bg-orange-500 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg shadow-orange-500/20">
                  Adopt Me
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AnimalGrid;
