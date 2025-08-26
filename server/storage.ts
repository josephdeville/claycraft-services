import { 
  type ContactSubmission, 
  type InsertContactSubmission,
  type NewsletterSubscription,
  type InsertNewsletterSubscription,
  type CaseStudyDownload,
  type InsertCaseStudyDownload
} from "@shared/schema";

export interface IStorage {
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Newsletter subscriptions
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
  
  // Case study downloads
  createCaseStudyDownload(download: InsertCaseStudyDownload): Promise<CaseStudyDownload>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;
  private caseStudyDownloads: Map<string, CaseStudyDownload>;

  constructor() {
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.caseStudyDownloads = new Map();
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = crypto.randomUUID();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      phone: submission.phone || null,
      newsletter: submission.newsletter || false,
      linkedinProfile: submission.linkedinProfile || null,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = crypto.randomUUID();
    const newsletterSubscription: NewsletterSubscription = {
      ...subscription,
      id,
      isActive: true,
      createdAt: new Date(),
    };
    this.newsletterSubscriptions.set(id, newsletterSubscription);
    return newsletterSubscription;
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }

  async createCaseStudyDownload(download: InsertCaseStudyDownload): Promise<CaseStudyDownload> {
    const id = crypto.randomUUID();
    const caseStudyDownload: CaseStudyDownload = {
      ...download,
      id,
      createdAt: new Date(),
    };
    this.caseStudyDownloads.set(id, caseStudyDownload);
    return caseStudyDownload;
  }
}

export const storage = new MemStorage();
