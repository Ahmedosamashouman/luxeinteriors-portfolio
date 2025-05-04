import { db } from "./index";
import * as schema from "@shared/schema";

const testimonials = [
  {
    name: "Ahmed Hassan",
    title: "CEO",
    company: "Royal Furnishings",
    quote: "The AR solution developed by FurniX transformed our showroom experience. Our customers can now visualize our furniture in their homes before purchase, resulting in a 40% increase in conversion rate.",
    initials: "AH",
  },
  {
    name: "Laila Mohamed",
    title: "Marketing Director",
    company: "EliteCraft",
    quote: "Through FurniX's GCC networking program, we've established relationships with major retailers in Dubai and Qatar. Their market knowledge and connections were invaluable for our international expansion.",
    initials: "LM",
  },
  {
    name: "Karim Salah",
    title: "Owner",
    company: "Elegance Furniture",
    quote: "The marketing campaign FurniX designed for our luxury collection exceeded expectations. The professional photography and strategic digital marketing resulted in our highest quarterly sales to date.",
    initials: "KS",
  },
];

const portfolioItems = [
  {
    title: "Royal Furnishings",
    category: "Brand identity & marketing campaign",
    imageUrl: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80",
  },
  {
    title: "ModernSpace VR",
    category: "Virtual showroom experience",
    imageUrl: "https://images.unsplash.com/photo-1628152268185-c507e31e94ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Dubai Connect",
    category: "GCC market entry strategy",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b485142?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80",
  },
  {
    title: "Elegance Collection",
    category: "Product photography & catalog design",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80",
  },
  {
    title: "FurniView AR",
    category: "Mobile AR application development",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "HomeStyle Digital",
    category: "Social media marketing campaign",
    imageUrl: "https://images.unsplash.com/photo-1633505899118-4ca6fef7eb25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
  },
];

async function seed() {
  try {
    console.log("Starting database seeding...");

    // Check if testimonials already exist to avoid duplicates
    const existingTestimonials = await db.query.testimonials.findMany();
    if (existingTestimonials.length === 0) {
      console.log("Seeding testimonials...");
      await db.insert(schema.testimonials).values(testimonials);
      console.log("Testimonials seeded successfully");
    } else {
      console.log("Testimonials already exist, skipping seeding");
    }

    // Check if portfolio items already exist to avoid duplicates
    const existingPortfolioItems = await db.query.portfolioItems.findMany();
    if (existingPortfolioItems.length === 0) {
      console.log("Seeding portfolio items...");
      await db.insert(schema.portfolioItems).values(portfolioItems);
      console.log("Portfolio items seeded successfully");
    } else {
      console.log("Portfolio items already exist, skipping seeding");
    }

    console.log("Database seeding completed");
  } catch (error) {
    console.error("Error during database seeding:", error);
    process.exit(1);
  }
}

seed();
