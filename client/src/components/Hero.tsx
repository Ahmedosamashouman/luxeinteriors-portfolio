import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Luxury furniture showroom"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10 text-white">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Elevating Furniture Industry Excellence
          </h1>
          <p className="font-sans text-lg md:text-xl opacity-90 mb-10 max-w-2xl">
            Specializing in bespoke marketing solutions, extended reality
            experiences, and GCC retail networking for the Egyptian furniture
            industry.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#services"
              className="inline-block bg-primary text-white font-sans font-medium py-3 px-8 transition-custom hover:bg-red-800 text-center"
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              className="inline-block bg-transparent border-2 border-white text-white font-sans font-medium py-3 px-8 transition-custom hover:bg-white/10 text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link href="#services" className="text-white opacity-75 hover:opacity-100 transition-custom">
          <ChevronDown size={24} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
