import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../images/L&D-Logo.gif'; // adjust the path if needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/services', label: 'Services' },
    { path: '/', label: 'Vending Services' },
    { path: '/cash-discount', label: 'Credit Card Processing' },
    { path: '/atm-placement', label: 'ATM Placement' },
    { path: '/about', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-[50px] w-[100px] sm:h-[60px] sm:w-[120px] md:h-[70px] md:w-[140px] lg:h-[80px] lg:w-[160px]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-[#002D4C] border-b-2 border-[#002D4C] pb-1'
                    : 'text-[#064789] hover:text-[#002D4C]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex flex-shrink-0">
            <Link
              to="/#contact"
              className="bg-[#002D4C] text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-medium hover:bg-[#064789] transition duration-200 text-sm whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex-shrink-0 p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#064789]" />
            ) : (
              <Menu className="h-6 w-6 text-[#064789]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#BDD4EA] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActive(item.path)
                    ? 'text-[#002D4C] bg-[#BDD4EA]'
                    : 'text-[#064789] hover:text-[#002D4C] hover:bg-[#E6F0FA]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <Link
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-[#002D4C] text-white py-3 rounded-lg font-medium text-center hover:bg-[#064789] transition duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;