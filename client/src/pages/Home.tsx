import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FeatureSpotlight from "@/components/FeatureSpotlight";
import Portfolio from "@/components/Portfolio";
import Marketplace from "@/components/Marketplace";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    // Set the page title
    document.title = "ApeX Agency | Furniture Industry Specialists";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main 
        className="pt-20 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Services />
        <About />
        <FeatureSpotlight />
        <Portfolio />
        <Marketplace />
        <Testimonials />
        <ContactForm />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Home;
