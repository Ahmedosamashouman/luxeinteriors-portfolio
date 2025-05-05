import { motion } from "framer-motion";

const AboutStats = [
  { number: "15+", label: "Years Industry Experience" },
  { number: "120+", label: "Successful Projects" },
  { number: "40+", label: "GCC Retail Partners" },
  { number: "85%", label: "Client Retention Rate" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Transforming the Furniture Industry
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="font-sans text-accent mb-6">
              At ApeX, we blend innovative technology with industry expertise to revolutionize how furniture brands market, showcase, and sell their products both locally and internationally.
            </p>
            <p className="font-sans text-accent mb-8">
              Our specialized approach combines marketing excellence, cutting-edge extended reality solutions, and strategic networking opportunities to position Egyptian furniture manufacturers at the forefront of the global market.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {AboutStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-primary font-display text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <p className="font-sans text-sm text-accent">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://calendly.com/apex-agency/partnership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-sans font-medium py-3 px-8 transition-custom hover:bg-red-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Us
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded">
                <motion.img
                  src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=652&q=80"
                  alt="Modern interior design"
                  className="object-cover h-64 w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="overflow-hidden rounded">
                <motion.img
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Elegant office space"
                  className="object-cover h-48 w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded">
                <motion.img
                  src="https://images.unsplash.com/photo-1609695001873-0ef8f3e4bc92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                  alt="AR/VR furniture visualization"
                  className="object-cover h-48 w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="overflow-hidden rounded">
                <motion.img
                  src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="Luxury furniture showroom"
                  className="object-cover h-64 w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
