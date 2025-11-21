import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/produto/${product.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button 
            className="btn btn-primary btn-quick-view"
            onClick={handleViewDetails}
          >
            Ver Detalhes
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-colors">
          {product.colors.slice(0, 4).map((color, index) => (
            <span 
              key={index}
              className="product-color-dot"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            ></span>
          ))}
        </div>
        
        <div className="product-footer">
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
          <button className="btn-icon-cart" aria-label="Adicionar ao carrinho">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 2L7.12 6M20.88 6L19 2M3 6h18M5 6l1 14a2 2 0 002 2h8a2 2 0 002-2l1-14"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
