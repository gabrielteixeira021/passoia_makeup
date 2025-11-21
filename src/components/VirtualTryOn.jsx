import React, { useState } from 'react';
import './VirtualTryOn.css';
import { skinTones } from '../data/skinTones';
import { products } from '../data/products';
import SkinToneSelector from './SkinToneSelector';

const VirtualTryOn = () => {
  const [selectedTone, setSelectedTone] = useState('medium');
  const [selectedProduct, setSelectedProduct] = useState(products[1]);
  const [selectedColor, setSelectedColor] = useState(products[1].colors[1]);

  const currentTone = skinTones.find(tone => tone.id === selectedTone);

  return (
    <section className="virtual-tryon" id="experimente">
      <div className="container">
        <div className="section-header">
          <span className="section-label">EXPERIMENTE VIRTUALMENTE</span>
          <h2 className="section-title">
            Teste o Tom <span className="gradient-text">Perfeito</span>
          </h2>
          <p className="section-description">
            Visualize como os produtos ficam em diferentes tons de pele antes de comprar
          </p>
        </div>

        <div className="tryon-content">
          {/* Model Display */}
          <div className="model-display">
            <div className="model-wrapper">
              <img 
                src={currentTone.modelImage} 
                alt={`Modelo com ${currentTone.name}`}
                className="model-image"
              />
              <div className="product-tag">
                <span className="product-name">{selectedProduct.name}</span>
                <span className="color-name">{selectedColor.name}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="tryon-controls">
            <SkinToneSelector 
              selectedTone={selectedTone}
              onToneChange={setSelectedTone}
            />

            {/* Product Selector */}
            <div className="product-selector">
              <h3 className="selector-title">Escolha o produto:</h3>
              <div className="product-grid">
                {products.slice(0, 3).map((product) => (
                  <button
                    key={product.id}
                    className={`product-option ${selectedProduct.id === product.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedColor(product.colors[0]);
                    }}
                  >
                    <span className="product-option-name">{product.name}</span>
                    <span className="product-option-price">R$ {product.price.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="color-selector">
              <h3 className="selector-title">Escolha a cor:</h3>
              <div className="color-swatches">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-swatch ${selectedColor.name === color.name ? 'active' : ''}`}
                    style={{ '--swatch-color': color.hex }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={color.name}
                  >
                    <span className="swatch-color"></span>
                    <span className="swatch-name">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className="btn btn-primary btn-add-cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 2L7.12 6M20.88 6L19 2M3 6h18M5 6l1 14a2 2 0 002 2h8a2 2 0 002-2l1-14"/>
              </svg>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;
