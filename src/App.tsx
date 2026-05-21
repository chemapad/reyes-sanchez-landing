import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Footer from './components/Footer';

import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <Hero />
        <Services />
        <Trust />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
