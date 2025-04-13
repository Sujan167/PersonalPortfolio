import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-200 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-primary">
            Sujan<span className="text-dark">.dev</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Nav Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-dark focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Nav Menu */}
        <div className={`md:hidden pt-4 pb-2 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-dark hover:text-primary transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
