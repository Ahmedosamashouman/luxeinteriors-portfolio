import { useState, useEffect } from "react";
import { useMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-custom ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center"
        >
          <span className="text-3xl font-display font-bold text-accent">
            Ape<span className="text-primary">X</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="font-sans text-sm font-medium tracking-wide uppercase underline-animation cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="font-sans text-sm font-medium tracking-wide uppercase underline-animation cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#marketplace" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('marketplace');
                }}
                className="font-sans text-sm font-medium tracking-wide uppercase underline-animation cursor-pointer"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="font-sans text-sm font-medium tracking-wide uppercase underline-animation cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.nav 
            className="bg-white px-6 py-4 md:hidden absolute w-full shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-4">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="block font-sans text-sm font-medium tracking-wide uppercase py-2 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="block font-sans text-sm font-medium tracking-wide uppercase py-2 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#marketplace" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('marketplace');
                  }}
                  className="block font-sans text-sm font-medium tracking-wide uppercase py-2 cursor-pointer"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="block font-sans text-sm font-medium tracking-wide uppercase py-2 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
