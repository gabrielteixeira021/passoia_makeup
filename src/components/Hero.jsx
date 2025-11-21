import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-label">REVITALIZE SEU VISUAL</span>
            <h2 className="hero-title">
              Descubra o Tom <br />
              <span className="gradient-text">Perfeito para Você</span>
            </h2>
            <p className="hero-description">
              Teste virtualmente nossos produtos em diferentes tons de pele 
              e encontre a maquiagem ideal antes de comprar.
            </p>
            <div className="hero-buttons">
              <a href="#experimente" className="btn btn-primary">
                Experimentar Agora
              </a>
              <a href="#produtos" className="btn btn-secondary">
                Ver Produtos
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img src="/hero-model.png" alt="Modelo Passoia Makeup" />
              <div className="hero-badge">
                <div className="badge-icon">✨</div>
                <div className="badge-text">
                  <strong>Teste Virtual</strong>
                  <span>Experimente sem sair de casa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-gradient-bg"></div>
    </section>
  );
};

export default Hero;
