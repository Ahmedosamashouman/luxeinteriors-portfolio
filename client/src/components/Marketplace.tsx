import { motion } from "framer-motion";
import { Store, Globe, Glasses, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";

const marketplaceFeatures = [
  {
    icon: <Store className="h-5 w-5" />,
    title: "Vendor Storefronts",
    description: "Dedicated branded spaces for each furniture manufacturer",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Reach",
    description: "Direct access to international markets with localized experiences",
  },
  {
    icon: <Glasses className="h-5 w-5" />,
    title: "AR/VR Integration",
    description: "Interactive product visualization directly in the marketplace",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Logistics Support",
    description: "End-to-end shipping and delivery solutions specifically for furniture",
  },
];

const Marketplace = () => {
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
    <section id="marketplace" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10"></div>
      <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-primary/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-sm overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1613252036716-e1eaff75ff56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Furniture marketplace preview"
                className="object-cover h-full w-full"
              />
              <div className="absolute top-6 right-6 bg-primary text-white py-2 px-4 rounded-sm font-sans font-medium uppercase text-sm tracking-wider">
                Coming Soon
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent -z-10 rounded-sm"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Egyptian Furniture Marketplace
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="font-sans text-accent mb-6">
              Coming soon: Our revolutionary multi-vendor marketplace connecting Egyptian
              furniture manufacturers directly with global buyers, featuring:
            </p>

            <ul className="font-sans space-y-4 mb-8">
              {marketplaceFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full text-primary mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-accent/80 text-sm">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="bg-white p-6 shadow-sm rounded-sm mb-8">
              <h4 className="font-display text-xl font-semibold mb-4">Be the First to Know</h4>
              <p className="font-sans text-accent/80 text-sm mb-4">
                Subscribe to receive updates about our marketplace launch and early access opportunities.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border border-accent/20 px-4 py-2 flex-grow focus:outline-none focus:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 font-sans font-medium transition-custom hover:bg-red-800 whitespace-nowrap disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Notify Me"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
