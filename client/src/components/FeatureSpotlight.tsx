import { motion } from "framer-motion";
import { Smartphone, Glasses, Palette } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "AR Room Visualization",
    description: "Allow customers to place virtual furniture in their own space using smartphone AR technology, increasing purchase confidence."
  },
  {
    icon: <Glasses className="h-8 w-8" />,
    title: "Virtual Showrooms",
    description: "Create immersive VR showrooms that let customers explore your furniture collections from anywhere in the world."
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Interactive Customization",
    description: "Enable real-time furniture customization in 3D, allowing customers to change materials, colors, and configurations instantly."
  }
];

const FeatureSpotlight = () => {
  return (
    <section className="py-24 bg-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt="AR/VR furniture experience"
          className="object-cover h-full w-full opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Extended Reality Solutions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-sans text-lg">
            Experience the future of furniture shopping with our innovative AR and VR solutions that help brands showcase products in immersive, interactive environments.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 hover:bg-white/15 transition-custom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="font-sans text-white/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://calendly.com/apex-agency/xr-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button 
              className="inline-block bg-primary text-white font-sans font-medium py-3 px-8 transition-custom hover:bg-red-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore XR Solutions
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
