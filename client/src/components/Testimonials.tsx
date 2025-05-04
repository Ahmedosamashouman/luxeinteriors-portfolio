import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/constants";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-accent text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="font-sans text-lg max-w-3xl mx-auto">
            What our clients say about our services and solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-white/10 backdrop-blur-sm p-8 border border-white/20 relative ${
                  index >= 3 && "hidden lg:block"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-primary text-4xl mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-4.07 2.919-4.07 4.776v2.311h4.20v8.762h-10.108zm-11.009 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-4.071 2.919-4.071 4.776v2.311h4.071v8.762h-9.996z" />
                  </svg>
                </div>
                <p className="font-sans text-white/90 mb-8">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="font-display font-bold text-lg">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold">{testimonial.name}</h4>
                    <p className="font-sans text-white/70 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                activeIndex === index ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
