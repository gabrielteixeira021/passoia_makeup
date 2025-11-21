import React from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard';
import { newArrivals } from '../data/products';

const ProductGrid = () => {
  return (
    <section className="product-grid-section" id="lancamentos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">NOVIDADES</span>
          <h2 className="section-title">
            Novos <span className="gradient-text">Lançamentos</span>
          </h2>
          <p className="section-description">
            Descubra as últimas novidades em maquiagem
          </p>
        </div>

        <div className="products-grid">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="grid-footer">
          <a href="#produtos" className="btn btn-secondary btn-see-more">
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
