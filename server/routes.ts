import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSubmissionSchema,
  insertNewsletterSubscriptionSchema,
  insertCaseStudyDownloadSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real app, you'd send email notifications here
      console.log("New contact submission:", submission);
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        id: submission.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        message: "Invalid form data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existing) {
        return res.status(200).json({ 
          message: "Email already subscribed",
          id: existing.id 
        });
      }
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      // In a real app, you'd integrate with email service here
      console.log("New newsletter subscription:", subscription);
      
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter",
        id: subscription.id 
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ 
        message: "Invalid subscription data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Case study download
  app.post("/api/case-study-download", async (req, res) => {
    try {
      const validatedData = insertCaseStudyDownloadSchema.parse(req.body);
      const download = await storage.createCaseStudyDownload(validatedData);
      
      // In a real app, you'd send the download email here
      console.log("New case study download:", download);
      
      res.status(201).json({ 
        message: "Case study download initiated",
        id: download.id,
        downloadUrl: `/downloads/${validatedData.caseStudyId}.pdf`
      });
    } catch (error) {
      console.error("Case study download error:", error);
      res.status(400).json({ 
        message: "Invalid download request",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
