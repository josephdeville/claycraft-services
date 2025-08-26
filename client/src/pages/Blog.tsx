import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, TrendingUp, BookOpen, Target } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Clay Data Enrichment in 2025",
      excerpt: "Master the art of data enrichment with Clay's latest features. Learn advanced techniques for better lead qualification and higher conversion rates.",
      category: "Tutorial",
      readTime: "12 min read",
      publishDate: "Jan 15, 2025",
      author: "Clay Team",
      featured: true,
      tags: ["Data Enrichment", "Clay Tutorial", "Lead Generation"]
    },
    {
      id: 2,
      title: "How We Generated 1,200 Qualified Leads in 30 Days",
      excerpt: "A detailed breakdown of the exact Clay workflows and strategies we used to 4x our client's lead generation results.",
      category: "Case Study",
      readTime: "8 min read",
      publishDate: "Jan 12, 2025",
      author: "Marketing Team",
      featured: false,
      tags: ["Case Study", "Lead Generation", "Results"]
    },
    {
      id: 3,
      title: "5 Clay Automation Mistakes That Kill Your Conversion Rates",
      excerpt: "Avoid these common pitfalls that prevent businesses from maximizing their Clay automation ROI and lead quality.",
      category: "Best Practices",
      readTime: "10 min read",
      publishDate: "Jan 10, 2025",
      author: "Clay Experts",
      featured: false,
      tags: ["Best Practices", "Optimization", "Common Mistakes"]
    },
    {
      id: 4,
      title: "Building Multi-Step Clay Workflows for Enterprise Sales",
      excerpt: "Learn how to design complex automation workflows that handle enterprise sales processes with multiple stakeholders.",
      category: "Advanced",
      readTime: "15 min read",
      publishDate: "Jan 8, 2025",
      author: "Sales Automation Team",
      featured: false,
      tags: ["Enterprise", "Workflows", "Sales Automation"]
    },
    {
      id: 5,
      title: "Clay AI Agents: The Future of Lead Qualification",
      excerpt: "Explore how AI agents are revolutionizing lead qualification and what it means for your sales process in 2025.",
      category: "Innovation",
      readTime: "7 min read",
      publishDate: "Jan 5, 2025",
      author: "AI Team",
      featured: false,
      tags: ["AI Agents", "Future", "Lead Qualification"]
    }
  ];

  const categories = ["All Posts", "Tutorial", "Case Study", "Best Practices", "Advanced", "Innovation"];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Clay Automation Blog',
    description: 'Latest insights, tutorials, and best practices for Clay automation and lead generation.',
    url: '/blog'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4">Blog & Insights</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Master <span className="text-orange-500">Clay Automation</span> with Expert Insights
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Stay ahead with the latest Clay automation strategies, case studies, and best practices from our team of experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <section key={post.id} className="py-8 md:py-16 bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <Badge className="mb-4 bg-orange-500 text-white">Featured</Badge>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-8 md:p-12 flex items-center">
                      <div>
                        <Badge variant="outline" className="mb-4 text-orange-600 border-orange-200">
                          {post.category}
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.publishDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Button asChild>
                          <Link to={`/blog/${post.id}`} data-testid={`link-featured-post-${post.id}`}>
                            Read Full Article
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-100 to-gray-200 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                        <p className="text-muted-foreground">Featured Article</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        ))}

        {/* Blog Posts Grid */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All Posts" ? "default" : "outline"}
                    size="sm"
                    className={category === "All Posts" ? "" : "hover:bg-orange-50 hover:text-orange-600"}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map((post) => (
                  <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-br from-slate-100 to-gray-200 p-8 text-center">
                      <TrendingUp className="h-12 w-12 text-orange-500 mx-auto" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-orange-600 border-orange-200">
                          {post.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/blog/${post.id}`} data-testid={`link-blog-post-${post.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;