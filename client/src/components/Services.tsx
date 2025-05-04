import { motion } from "framer-motion";
import { BellRing, Glasses, Network } from "lucide-react";
import { Link } from "wouter";
import { services } from "@/lib/constants";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "marketing":
        return <BellRing className="h-10 w-10" />;
      case "arvr":
        return <Glasses className="h-10 w-10" />;
      case "gcc":
        return <Network className="h-10 w-10" />;
      default:
        return <BellRing className="h-10 w-10" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="font-sans text-accent text-lg max-w-3xl mx-auto">
            Comprehensive solutions tailored for the furniture industry, from marketing to immersive experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-background p-8 shadow-sm hover:shadow-md transition-custom hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="text-primary mb-6">
                {getServiceIcon(service.id)}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="font-sans text-accent mb-6">
                {service.description}
              </p>
              <ul className="font-sans text-sm space-y-2 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-primary mt-1 mr-3" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="inline-block text-primary font-sans font-medium underline-animation">
                Learn more <span className="ml-1">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
