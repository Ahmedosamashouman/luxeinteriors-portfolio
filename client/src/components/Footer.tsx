import { Link } from "wouter";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Linkedin, Twitter, Layers } from "lucide-react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/newsletter", { email });
      
      toast({
        title: "Success",
        description: "Thank you for subscribing to our newsletter!",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe to newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-accent text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-display font-bold text-white">
                Ape<span className="text-primary">X</span>
              </span>
            </Link>
            <p className="font-sans text-white/70 mb-6">
              Transforming the furniture industry with innovative marketing, extended reality, and
              retail networking solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-primary transition-custom" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-custom" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-custom" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-custom" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Services</h4>
            <ul className="font-sans space-y-3">
              <li>
                <Link href="#services" className="text-white/70 hover:text-primary transition-custom">
                  Marketing & Media
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-primary transition-custom">
                  AR/VR Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-primary transition-custom">
                  GCC Retail Networking
                </Link>
              </li>
              <li>
                <Link href="#marketplace" className="text-white/70 hover:text-primary transition-custom">
                  Furniture Marketplace
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-primary transition-custom">
                  Brand Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Company</h4>
            <ul className="font-sans space-y-3">
              <li>
                <Link href="#about" className="text-white/70 hover:text-primary transition-custom">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-custom">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-custom">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-custom">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-custom">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Newsletter</h4>
            <p className="font-sans text-white/70 mb-4">
              Subscribe to receive the latest news about our services and marketplace launch.
            </p>
            <form onSubmit={handleSubmit} className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full focus:outline-none text-accent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 hover:bg-red-800 transition-custom flex items-center justify-center disabled:opacity-70"
                disabled={isSubmitting}
                aria-label="Subscribe"
              >
                <Layers className="h-4 w-4" />
              </button>
            </form>
            <p className="font-sans text-white/50 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ApeX Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="font-sans text-white/50 text-sm hover:text-primary transition-custom">
              Terms of Service
            </Link>
            <Link href="#" className="font-sans text-white/50 text-sm hover:text-primary transition-custom">
              Privacy Policy
            </Link>
            <Link href="#" className="font-sans text-white/50 text-sm hover:text-primary transition-custom">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
