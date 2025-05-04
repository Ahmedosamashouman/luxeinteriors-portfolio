import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(1, "Company name is required."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (values: FormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      setIsFormSubmitted(true);
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: FormValues) => {
    contactMutation.mutate(values);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="font-sans text-accent mb-12">
              Ready to transform your furniture business? Get in touch with our team to discuss how
              our services can help you reach new markets and customers.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="text-primary mr-6 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold mb-2">Visit Us</h4>
                  <p className="font-sans text-accent/80">
                    New Cairo Business District
                    <br />
                    Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-6 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold mb-2">Email Us</h4>
                  <p className="font-sans text-accent/80">
                    info@furnixagency.com
                    <br />
                    support@furnixagency.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-6 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold mb-2">Call Us</h4>
                  <p className="font-sans text-accent/80">
                    +20 2 2345 6789
                    <br />
                    +20 2 9876 5432
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-accent text-white flex items-center justify-center hover:bg-primary transition-custom"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent text-white flex items-center justify-center hover:bg-primary transition-custom"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent text-white flex items-center justify-center hover:bg-primary transition-custom"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent text-white flex items-center justify-center hover:bg-primary transition-custom"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {isFormSubmitted ? (
              <div className="bg-background p-8 shadow-sm flex flex-col items-center justify-center text-center h-full">
                <h3 className="font-display text-2xl font-semibold mb-4">Thank You!</h3>
                <p className="text-accent mb-6">
                  We've received your message and will get back to you as soon as possible.
                </p>
                <Button 
                  variant="default" 
                  className="bg-primary hover:bg-red-800"
                  onClick={() => setIsFormSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-background p-8 shadow-sm">
                  <h3 className="font-display text-2xl font-semibold mb-6">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans text-sm font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="border border-accent/20 px-4 py-3 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans text-sm font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" className="border border-accent/20 px-4 py-3 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="font-sans text-sm font-medium">Company Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="border border-accent/20 px-4 py-3 focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="font-sans text-sm font-medium">Service of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border border-accent/20 px-4 py-6 focus:border-primary h-auto">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="marketing">Marketing & Media Production</SelectItem>
                            <SelectItem value="ar-vr">AR/VR Solutions</SelectItem>
                            <SelectItem value="gcc">GCC Retail Networking</SelectItem>
                            <SelectItem value="marketplace">Marketplace Information</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-8">
                        <FormLabel className="font-sans text-sm font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="border border-accent/20 px-4 py-3 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white py-6 font-sans font-medium transition-custom hover:bg-red-800 h-auto"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
