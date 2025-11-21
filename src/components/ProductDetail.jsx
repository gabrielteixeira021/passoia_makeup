import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Produto não encontrado</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Voltar para Home
        </button>
      </div>
    );
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star filled">★</span>);
    }
    const remaining = 5 - Math.ceil(rating);
    for (let i = 0; i < remaining; i++) {
      stars.push(<span key={`empty-${i}`} className="star">★</span>);
    }
    return stars;
  };

  return (
    <section className="product-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <span className="separator">/</span>
          <a href="/#produtos" onClick={(e) => { e.preventDefault(); navigate('/#produtos'); }}>Produtos</a>
          <span className="separator">/</span>
          <span className="current">{product.name}</span>
        </nav>

        <div className="product-detail-content">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="main-image"
              />
            </div>
            <div className="gallery-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} - ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-detail">
            <h1 className="product-title">{product.name}</h1>
            
            {/* Rating */}
            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            {/* Price */}
            <div className="product-price-section">
              <span className="price">R$ {product.price.toFixed(2)}</span>
            </div>

            {/* Colors */}
            <div className="product-colors-section">
              <h3 className="section-title">Cores Disponíveis</h3>
              <div className="color-selector">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-option ${selectedColor === index ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(index)}
                    title={color.name}
                  >
                    <span 
                      className="color-dot" 
                      style={{ backgroundColor: color.hex }}
                    ></span>
                    <span className="color-name">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="btn btn-primary btn-add-to-cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 2L7.12 6M20.88 6L19 2M3 6h18M5 6l1 14a2 2 0 002 2h8a2 2 0 002-2l1-14"/>
              </svg>
              Adicionar ao Carrinho
            </button>

            {/* Description */}
            <div className="product-description-section">
              <h3 className="section-title">Descrição</h3>
              <p className="description-text">{product.fullDescription}</p>
            </div>

            {/* Benefits */}
            {product.benefits && (
              <div className="product-benefits-section">
                <h3 className="section-title">Benefícios</h3>
                <ul className="benefits-list">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
