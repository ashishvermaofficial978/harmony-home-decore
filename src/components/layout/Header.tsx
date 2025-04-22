import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home as HomeIcon } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <HomeIcon className={`h-6 w-6 ${isScrolled ? 'text-accent-700' : 'text-accent-700'} group-hover:text-accent-600 transition-colors`} />
            <span className={`font-serif text-xl font-semibold ${isScrolled ? 'text-primary-800' : 'text-primary-800'} group-hover:text-accent-600 transition-colors ml-2`}>
              Harmony Home Decor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" isScrolled={isScrolled} />
            <NavLink to="/services" label="Services" isScrolled={isScrolled} />
            <NavLink to="/about" label="About" isScrolled={isScrolled} />
            <NavLink to="/blog" label="Blog" isScrolled={isScrolled} />
            <NavLink to="/contact" label="Contact" isScrolled={isScrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-primary-800' : 'text-primary-800'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary-800' : 'text-primary-800'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" label="Home" />
              <MobileNavLink to="/services" label="Services" />
              <MobileNavLink to="/about" label="About" />
              <MobileNavLink to="/blog" label="Blog" />
              <MobileNavLink to="/contact" label="Contact" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`font-medium transition-colors duration-200 relative ${
        isActive
          ? 'text-accent-700'
          : isScrolled
          ? 'text-primary-700 hover:text-accent-600'
          : 'text-primary-800 hover:text-accent-600'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-600 transform translate-y-1"></span>
      )}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`text-lg py-2 px-4 rounded font-medium transition-colors duration-200 ${
        isActive ? 'text-accent-700 bg-accent-50' : 'text-primary-800 hover:text-accent-600'
      }`}
    >
      {label}
    </Link>
  );
};