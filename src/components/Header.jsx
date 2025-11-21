import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h1 className="logo-text">PASSOIA</h1>
            <span className="logo-tagline">makeup</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#produtos" className="nav-link">Produtos</a>
            <a href="#lancamentos" className="nav-link">Lançamentos</a>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button className="icon-btn" aria-label="Carrinho">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 2L7.12 6M20.88 6L19 2M3 6h18M5 6l1 14a2 2 0 002 2h8a2 2 0 002-2l1-14M10 11v5M14 11v5"/>
              </svg>
              <span className="cart-badge">0</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="nav-mobile">
            <a href="#home" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#produtos" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
            <a href="#lancamentos" className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>Lançamentos</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
