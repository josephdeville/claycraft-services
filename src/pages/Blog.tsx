import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Zap, Database, Target, TrendingUp } from "lucide-react";

const Blog = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Clay Automation Blog',
    description: 'Expert insights on Clay workflows, automation strategies, and lead generation best practices.',
    url: '/blog',
  };

  const blogPosts = [
    {
      title: "The Complete Guide to Clay Signal Stacking for B2B Lead Generation",
      excerpt: "Learn how to layer multiple data signals in Clay to identify high-intent prospects and trigger automated outreach sequences.",
      category: "Clay Workflows",
      readTime: "8 min read",
      date: "December 10, 2024",
      image: "🎯",
      icon: Target,
      featured: true
    },
    {
      title: "10 Advanced Clay Integrations That Will 10x Your Lead Quality",
      excerpt: "Discover powerful Clay integrations with Apollo, ZoomInfo, and custom APIs that most people don't know about.",
      category: "Integrations",
      readTime: "12 min read", 
      date: "December 8, 2024",
      image: "⚡",
      icon: Zap,
      featured: true
    },
    {
      title: "How We Generated 500+ Qualified Leads in 30 Days Using Clay Automation",
      excerpt: "Step-by-step breakdown of the exact Clay workflow that generated $2M in pipeline for our client.",
      category: "Case Study",
      readTime: "15 min read",
      date: "December 5, 2024", 
      image: "📈",
      icon: TrendingUp,
      featured: true
    },
    {
      title: "Clay vs. Apollo vs. Outreach: The Ultimate Comparison for 2024",
      excerpt: "In-depth comparison of the leading sales automation platforms and when to use each one.",
      category: "Tools",
      readTime: "10 min read",
      date: "December 3, 2024",
      image: "⚖️",
      icon: Database
    },
    {
      title: "Building Your First Clay Workflow: A Beginner's Guide",
      excerpt: "Everything you need to know to set up your first automated lead generation workflow in Clay.",
      category: "Tutorials",
      readTime: "6 min read",
      date: "December 1, 2024",
      image: "🚀",
      icon: Zap
    },
    {
      title: "5 Clay Automation Mistakes That Are Costing You Qualified Leads",
      excerpt: "Common pitfalls in Clay automation and how to avoid them to maximize your lead generation results.",
      category: "Best Practices",
      readTime: "7 min read",
      date: "November 28, 2024",
      image: "⚠️",
      icon: Target
    }
  ];

  const categories = ["All", "Clay Workflows", "Case Studies", "Tutorials", "Best Practices", "Tools", "Integrations"];

  const BlogCard = ({ post, featured = false }: { post: any, featured?: boolean }) => (
    <Card className={`h-full hover:shadow-lg transition-shadow ${featured ? 'border-orange-500/50' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <Badge variant={featured ? "default" : "secondary"} className={featured ? "bg-orange-500" : ""}>
            {post.category}
          </Badge>
          {featured && <Badge variant="destructive" className="bg-red-500">Featured</Badge>}
        </div>
        <div className="text-4xl mb-3">{post.image}</div>
        <CardTitle className="text-xl leading-tight hover:text-orange-500 transition-colors">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-between p-0 h-auto hover:bg-transparent group">
          <span className="group-hover:text-orange-500 transition-colors">Read Article</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge>Clay Automation Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Master <span className="text-orange-500">Clay Automation</span> & Lead Generation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, tutorials, and case studies to help you build scalable Clay workflows that generate more qualified leads.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card/30 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Featured Articles</h2>
            <p className="text-muted-foreground">Our most popular Clay automation guides and case studies</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {blogPosts.slice(0, 3).map((post, index) => (
              <BlogCard key={index} post={post} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Stay updated with the latest Clay automation strategies and tips</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(3).map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-orange-500/10 to-orange-600/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Never Miss a Clay Automation Tip</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get weekly insights on Clay workflows, automation strategies, and lead generation tips delivered to your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
};

export default Blog;