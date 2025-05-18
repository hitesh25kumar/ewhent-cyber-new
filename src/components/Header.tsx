import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Logo from './Logo';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isDropdownActive = (dropdown: string) => activeDropdown === dropdown;

  const navigationItems = [
    {
      label: 'Product',
      path: '/product',
      dropdown: [
        { label: 'Platform Overview', path: '/product' },
        { label: 'Compliance Automation', path: '/product/compliance' },
        { label: 'Risk Management', path: '/product/risk' },
        { label: 'Security', path: '/product/security' },
        { label: 'Integrations', path: '/product/integrations' },
      ],
    },
    {
      label: 'Solutions',
      path: '/solutions',
      dropdown: [
        { label: 'For Startups', path: '/solutions/startups' },
        { label: 'For Enterprise', path: '/solutions/enterprise' },
        { label: 'For Healthcare', path: '/solutions/healthcare' },
        { label: 'For Finance', path: '/solutions/finance' },
      ],
    },
    {
      label: 'Resources',
      path: '/resources',
      dropdown: [
        { label: 'Resource Center', path: '/resources' },
        { label: 'Blog', path: '/resources/blog' },
        { label: 'Documentation', path: '/resources/docs' },
        { label: 'Webinars', path: '/resources/webinars' },
      ],
    },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center text-gray-700 hover:text-primary-600 px-1 py-2 focus:outline-none"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span className="font-medium">{item.label}</span>
                      {isDropdownActive(item.label) ? (
                        <ChevronUp size={16} className="ml-1" />
                      ) : (
                        <ChevronDown size={16} className="ml-1" />
                      )}
                    </button>
                    {isDropdownActive(item.label) && (
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50 animate-fade-in">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-primary-600 px-1 py-2 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
              Contact
            </Link>
            <Button variant="outline" size="sm" as={Link} to="/login">
              Login
            </Button>
            <Button variant="primary" size="sm" as={Link} to="/demo">
              Get a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <div key={item.label} className="py-1">
                {item.dropdown ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span className="font-medium">{item.label}</span>
                      {isDropdownActive(item.label) ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {isDropdownActive(item.label) && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.path}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="py-1">
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md font-medium"
              >
                Contact
              </Link>
            </div>
            <div className="pt-2 px-3 flex flex-col space-y-2">
              <Button variant="outline" fullWidth as={Link} to="/login">
                Login
              </Button>
              <Button variant="primary" fullWidth as={Link} to="/demo">
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;