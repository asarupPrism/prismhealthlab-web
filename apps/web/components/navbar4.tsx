'use client';
import React, { useState } from 'react';

interface Navbar4Props {
  className?: string;
}

const Navbar4: React.FC<Navbar4Props> = ({ className = '' }) => {
  return (
    <div className={`navbar4-wrapper ${className}`}>
      <header className="navbar4-container">
        <header className="navbar4-navbar-interactive">
          <img alt="logo" src="/1-03-1_white-300x65-1500h.png" className="navbar4-image1" />
          <div className="navbar4-desktop-menu">
            <nav className="navbar4-links1">
              <div className="navbar4-thq-dropdown1 list-item">
                <div className="navbar4-dropdown-toggle10">
                  <span className="navbar4-text10 nav">Our Products</span>
                  <div className="navbar4-dropdown-arrow1">
                    <svg viewBox="0 0 1024 1024" className="navbar4-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul className="navbar4-dropdown-list1">
                  <li className="navbar4-dropdown10 list-item">
                    <div className="navbar4-dropdown-toggle11">
                      <span className="navbar4-text11 nav">At-Home Oral Health Test Kit</span>
                    </div>
                  </li>
                  <li className="navbar4-dropdown11 list-item">
                    <div className="navbar4-dropdown-toggle12">
                      <span className="navbar4-text12 nav">
                        At-Home Respiratory Pathogen PCR Kit
                      </span>
                    </div>
                  </li>
                  <li className="navbar4-dropdown12 list-item">
                    <div className="navbar4-dropdown-toggle13">
                      <span className="navbar4-text13 nav">Coconut Oil Pulling Complex</span>
                    </div>
                  </li>
                </ul>
              </div>
              <span className="nav">Blog</span>
              <span className="nav">Shop</span>
              <span className="nav">Our Company</span>
              <span className="nav">Our Services</span>
            </nav>
          </div>
          <div className="navbar4-buttons">
            <div className="navbar4-action1">
              <span className="navbar4-text30">$359.97</span>
            </div>
          </div>
          <div className="navbar4-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar4-icon22">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </header>
        <div className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img alt="logo" src="/1-03-1_white-300x65-1500h.png" className="navbar4-logo" />
              <div className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon24">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links2">
              <div className="navbar4-thq-dropdown6">
                <div className="navbar4-dropdown-toggle30">
                  <span className="navbar4-text31 nav">Our Products</span>
                  <div className="navbar4-dropdown-arrow6">
                    <svg viewBox="0 0 1024 1024" className="navbar4-icon26">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul className="navbar4-dropdown-list6">
                  <li className="navbar4-dropdown25 list-item">
                    <div className="navbar4-dropdown-toggle31">
                      <span className="navbar4-text32 nav">At-Home Oral Health Test Kit</span>
                    </div>
                  </li>
                  <li className="navbar4-dropdown26 list-item">
                    <div className="navbar4-dropdown-toggle32">
                      <span className="navbar4-text33 nav">
                        At-Home Respiratory Pathogen PCR Kit
                      </span>
                    </div>
                  </li>
                  <li className="navbar4-dropdown27 list-item">
                    <div className="navbar4-dropdown-toggle33">
                      <span className="navbar4-text34 nav">Coconut Oil Pulling Complex</span>
                    </div>
                  </li>
                </ul>
              </div>
              <span className="nav">Blog</span>
              <span className="nav">Shop</span>
              <span className="nav">Our Company</span>
              <span className="nav">Our Services</span>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar4;
