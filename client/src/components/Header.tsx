import { useState, useEffect } from "react";
import { Link } from "wouter";
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
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-display font-bold text-accent">
            Ape<span className="text-primary">X</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="#services" className="font-sans text-sm font-medium tracking-wide uppercase underline-animation">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="font-sans text-sm font-medium tracking-wide uppercase underline-animation">
                About
              </Link>
            </li>
            <li>
              <Link href="#marketplace" className="font-sans text-sm font-medium tracking-wide uppercase underline-animation">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="#contact" className="font-sans text-sm font-medium tracking-wide uppercase underline-animation">
                Contact
              </Link>
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
                <Link href="#services" className="block font-sans text-sm font-medium tracking-wide uppercase py-2" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="block font-sans text-sm font-medium tracking-wide uppercase py-2" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#marketplace" className="block font-sans text-sm font-medium tracking-wide uppercase py-2" onClick={closeMenu}>
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#contact" className="block font-sans text-sm font-medium tracking-wide uppercase py-2" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
