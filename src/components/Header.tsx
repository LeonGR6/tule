import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import tule from '@/assets/tule.png';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/about', label: 'Nosotros' },
    { to: '/services', label: 'Servicios' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3">

        <img src={tule} alt="TULÉ - Event Designers" className="h-10 w-auto md:h-12 mr-3"/>

          
          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Event Designers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                isActive(link.to)
                  ? 'text-foreground font-medium'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* CTA Button - Desktop */}
          <Button
            variant="hero"
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <Link to="/contact">Cotizar</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container-wide py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-display tracking-wide transition-colors ${
                isActive(link.to)
                  ? 'text-foreground font-medium'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="hero" size="lg" className="mt-4" asChild>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Cotizar
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;