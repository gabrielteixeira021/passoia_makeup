import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import VirtualTryOn from './components/VirtualTryOn';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <VirtualTryOn />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
