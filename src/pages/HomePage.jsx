import React from 'react';
import { Link } from 'react-router-dom';
import { WavyBackground } from '../components/ui/wavy-background';
import { Spotlight } from '../components/ui/spotlight-new';

function HomePage() {
  return (
    <WavyBackground>
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-50 w-full text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 bg-opacity-50">
          PIZZA RANKR
        </h1>
        <Link
          to="/rankings"
          className="inline-block bg-blue-600 text-white px-8 py-4 mt-8 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition"
        >
          VIEW CURRENT STANDINGS
        </Link>
      </div>
    </WavyBackground>
  );
}

export default HomePage;
