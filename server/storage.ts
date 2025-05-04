import { db } from "@db";
import { contacts, newsletters, testimonials, portfolioItems } from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  // Contact form submissions
  async createContact(data: typeof contacts.$inferInsert) {
    return await db.insert(contacts).values(data).returning();
  },

  async getContacts() {
    return await db.query.contacts.findMany({
      orderBy: (contacts, { desc }) => [desc(contacts.createdAt)]
    });
  },

  // Newsletter subscriptions
  async createNewsletter(data: typeof newsletters.$inferInsert) {
    // Check if email already exists
    const existing = await db.query.newsletters.findFirst({
      where: eq(newsletters.email, data.email)
    });

    if (existing) {
      return existing;
    }

    return await db.insert(newsletters).values(data).returning();
  },

  async getNewsletters() {
    return await db.query.newsletters.findMany({
      orderBy: (newsletters, { desc }) => [desc(newsletters.createdAt)]
    });
  },

  // Testimonials
  async getTestimonials() {
    return await db.query.testimonials.findMany();
  },

  // Portfolio items
  async getPortfolioItems() {
    return await db.query.portfolioItems.findMany();
  }
};
