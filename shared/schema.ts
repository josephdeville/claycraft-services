import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, varchar, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: text("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  projectType: varchar("project_type", { length: 100 }).notNull(),
  budget: varchar("budget", { length: 50 }).notNull(),
  timeline: varchar("timeline", { length: 50 }).notNull(),
  message: text("message").notNull(),
  newsletter: boolean("newsletter").default(false),
  linkedinProfile: varchar("linkedin_profile", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Newsletter subscriptions
export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: text("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email", { length: 255 }).notNull().unique(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Case study downloads
export const caseStudyDownloads = pgTable("case_study_downloads", {
  id: text("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  caseStudyId: varchar("case_study_id", { length: 100 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Export types
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
export type InsertNewsletterSubscription = typeof newsletterSubscriptions.$inferInsert;

export type CaseStudyDownload = typeof caseStudyDownloads.$inferSelect;
export type InsertCaseStudyDownload = typeof caseStudyDownloads.$inferInsert;

// Schemas for validation
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  isActive: true,
  createdAt: true,
});

export const insertCaseStudyDownloadSchema = createInsertSchema(caseStudyDownloads).omit({
  id: true,
  createdAt: true,
});