import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate, useLocation } from 'react-router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-xl font-bold">C</span>
            </div>
            <span className="text-2xl font-semibold text-slate-900">Chirus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about')
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`transition-colors ${
                isActive('/products')
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/technology"
              className={`transition-colors ${
                isActive('/technology')
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Technology
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact')
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Contact
            </Link>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 ${
                isActive('/about')
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 ${
                isActive('/products')
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/technology"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 ${
                isActive('/technology')
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Technology
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 ${
                isActive('/contact')
                  ? 'text-teal-600 font-medium'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                navigate('/contact');
                setIsMenuOpen(false);
              }}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}