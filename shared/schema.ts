import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contacts table
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactsInsertSchema = createInsertSchema(contacts, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Please enter a valid email address"),
  company: (schema) => schema.min(1, "Company name is required"),
  service: (schema) => schema.min(1, "Please select a service"),
  message: (schema) => schema.min(10, "Message must be at least 10 characters"),
});

export type ContactInsert = z.infer<typeof contactsInsertSchema>;
export type Contact = typeof contacts.$inferSelect;

// Newsletter table
export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newslettersInsertSchema = createInsertSchema(newsletters, {
  email: (schema) => schema.email("Please enter a valid email address"),
});

export type NewsletterInsert = z.infer<typeof newslettersInsertSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

// Testimonials table
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  quote: text("quote").notNull(),
  initials: varchar("initials", { length: 2 }).notNull(),
});

export const testimonialsInsertSchema = createInsertSchema(testimonials);
export type TestimonialInsert = z.infer<typeof testimonialsInsertSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// Portfolio items table
export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const portfolioItemsInsertSchema = createInsertSchema(portfolioItems);
export type PortfolioItemInsert = z.infer<typeof portfolioItemsInsertSchema>;
export type PortfolioItem = typeof portfolioItems.$inferSelect;

// Keep the existing users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
