import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

// Validation schemas
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(1, "Company name is required."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export async function registerRoutes(app: Express): Promise<Server> {
  const apiPrefix = "/api";

  // API endpoint for contact form submissions
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      const contact = await storage.createContact({
        ...validatedData,
        createdAt: new Date(),
      });
      
      return res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contact: contact[0] 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // API endpoint for newsletter subscriptions
  app.post(`${apiPrefix}/newsletter`, async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      const newsletter = await storage.createNewsletter({
        email: validatedData.email,
        createdAt: new Date(),
      });
      
      return res.status(201).json({ 
        success: true, 
        message: "Newsletter subscription successful",
        newsletter: newsletter[0]
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      console.error("Error subscribing to newsletter:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // API endpoint to get testimonials
  app.get(`${apiPrefix}/testimonials`, async (_req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      return res.status(200).json({ testimonials });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // API endpoint to get portfolio items
  app.get(`${apiPrefix}/portfolio`, async (_req, res) => {
    try {
      const portfolioItems = await storage.getPortfolioItems();
      return res.status(200).json({ portfolioItems });
    } catch (error) {
      console.error("Error fetching portfolio items:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
