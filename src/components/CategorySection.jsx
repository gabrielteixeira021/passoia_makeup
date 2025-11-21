import React from 'react';
import './CategorySection.css';
import { categories } from '../data/products';

const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Explore Nosso <span className="gradient-text">Universo</span>
          </h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <button className="btn btn-secondary">Explorar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
