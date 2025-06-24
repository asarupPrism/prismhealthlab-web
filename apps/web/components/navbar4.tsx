'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface Navbar4Props {
  className?: string;
}

const Navbar4: React.FC<Navbar4Props> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const products = [
    'At-Home Oral Health Test Kit',
    'At-Home Respiratory Pathogen PCR Kit',
    'Coconut Oil Pulling Complex',
  ];

  return (
    <header className={`bg-[#002e53] text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/1-03-1_white-300x65-1500h.png"
              alt="Prism Health Lab"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Our Products</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {activeDropdown === 'products' && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-900 rounded-md shadow-lg z-50"
                  onMouseEnter={() => setActiveDropdown('products')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="#" className="hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Shop
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Our Company
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Our Services
            </Link>

            <button className="bg-[#0d4a7d] hover:bg-[#0a3d6b] px-4 py-2 rounded-md transition-colors">
              $359.97
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-600">
            <div className="space-y-4">
              <div>
                <button
                  className="block w-full text-left py-2"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === 'products-mobile' ? null : 'products-mobile',
                    )
                  }
                >
                  Our Products
                </button>
                {activeDropdown === 'products-mobile' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {products.map((product, index) => (
                      <Link key={index} href="#" className="block py-1 text-gray-300">
                        {product}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="#" className="block py-2">
                Blog
              </Link>
              <Link href="#" className="block py-2">
                Shop
              </Link>
              <Link href="#" className="block py-2">
                Our Company
              </Link>
              <Link href="#" className="block py-2">
                Our Services
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar4;
