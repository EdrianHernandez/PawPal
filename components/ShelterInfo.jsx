import React from 'react';

const ShelterInfo = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-2xl font-bold text-white tracking-tight">PawPals</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We are a non-profit organization dedicated to finding loving homes for abandoned and abused animals. Every life matters.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current opacity-70"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Visit Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="group-hover:text-white transition-colors">123 Puppy Lane,<br />Barktown, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 group">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-white transition-colors">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-white transition-colors">adopt@pawpals.org</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2 hover:border-slate-700 transition-colors">
                <span>Mon - Fri</span>
                <span className="text-white">10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2 hover:border-slate-700 transition-colors">
                <span>Saturday</span>
                <span className="text-white">10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2 hover:border-slate-700 transition-colors">
                <span>Sunday</span>
                <span className="text-orange-400 font-medium">Closed</span>
              </li>
            </ul>
          </div>

          {/* Volunteer CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
            <h3 className="text-white font-semibold text-lg mb-2">Want to help?</h3>
            <p className="text-slate-400 text-sm mb-4">We are always looking for volunteers to walk dogs and cuddle cats.</p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg active:scale-95">
              Become a Volunteer
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2024 PawPals Adoption Center. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ShelterInfo;
