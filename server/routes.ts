import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSubmissionSchema,
  insertNewsletterSubscriptionSchema,
  insertCaseStudyDownloadSchema 
} from "@shared/schema";
import { executeAirOpsWorkflow, uploadToAirOpsKnowledgeBase, type WorkflowExecutePayload } from "./airopsClient";

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

  // AirOps workflow execution endpoint
  app.post("/api/airops/execute", async (req, res) => {
    try {
      const { appId, version, inputs } = req.body;
      
      if (!appId) {
        return res.status(400).json({ 
          message: "appId is required" 
        });
      }
      
      const payload: WorkflowExecutePayload = {
        appId: parseInt(appId, 10),
        version: version ? parseInt(version, 10) : undefined,
        inputs: inputs || {}
      };
      
      const result = await executeAirOpsWorkflow(payload);
      
      res.status(200).json({
        message: "Workflow executed successfully",
        ...result
      });
    } catch (error) {
      console.error("AirOps workflow error:", error);
      res.status(500).json({ 
        message: "Failed to execute workflow",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // AirOps content upload endpoint
  app.post("/api/airops/upload", async (req, res) => {
    try {
      const { title, content, contentType, metadata, appId } = req.body;
      
      if (!title || !content || !contentType) {
        return res.status(400).json({ 
          message: "title, content, and contentType are required" 
        });
      }
      
      if (appId) {
        const result = await executeAirOpsWorkflow({
          appId: parseInt(appId, 10),
          inputs: { title, content, contentType, metadata }
        });
        
        res.status(200).json({
          message: "Content uploaded and processed via AirOps workflow",
          ...result
        });
      } else {
        res.status(200).json({
          message: "Content received successfully",
          title,
          contentType,
          receivedAt: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error("AirOps upload error:", error);
      res.status(500).json({ 
        message: "Failed to upload content",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // AirOps status check endpoint
  app.get("/api/airops/status", async (req, res) => {
    try {
      const hasApiKey = !!process.env.AIROPS_API_KEY;
      const hasWorkspaceId = !!process.env.AIROPS_WORKSPACE_ID;
      
      res.status(200).json({
        configured: hasApiKey && hasWorkspaceId,
        apiKeySet: hasApiKey,
        workspaceIdSet: hasWorkspaceId
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to check AirOps status",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // AirOps knowledge base upload endpoint
  app.post("/api/airops/knowledge-base", async (req, res) => {
    try {
      const { memoryStoreId, text, name, metadata } = req.body;
      
      if (!memoryStoreId || !text || !name) {
        return res.status(400).json({ 
          message: "memoryStoreId, text, and name are required" 
        });
      }
      
      const result = await uploadToAirOpsKnowledgeBase(memoryStoreId, {
        text,
        name,
        metadata
      });
      
      res.status(200).json({
        message: "Document uploaded to knowledge base",
        ...result
      });
    } catch (error) {
      console.error("AirOps knowledge base error:", error);
      res.status(500).json({ 
        message: "Failed to upload to knowledge base",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
