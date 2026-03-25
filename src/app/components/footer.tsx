import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Chirus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced diagnostic solutions for modern healthcare across the UK and Ireland.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-teal-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="hover:text-teal-400 transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-teal-400 transition-colors">
                  Point of Care Testing
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-teal-400 transition-colors">
                  Clinical Chemistry
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-teal-400 transition-colors">
                  Microbiology
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-teal-400 transition-colors">
                  Laboratory Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@chirus.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  info@chirus.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+442012345678"
                  className="hover:text-teal-400 transition-colors"
                >
                  +44 20 1234 5678
                </a>
              </li>
              <li className="pt-2">
                <p className="text-gray-400">
                  London, United Kingdom
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Chirus. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@chirus.com"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}