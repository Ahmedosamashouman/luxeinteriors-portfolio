import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/constants";

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="font-sans text-accent text-lg max-w-3xl mx-auto">
            Discover our latest projects showcasing our expertise in marketing, extended reality, and retail networking.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                className="object-cover h-full w-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredItem === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-white/80 text-sm">{item.category}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
