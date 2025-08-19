const ToolsSection = () => {
  const tools = [
    {
      name: "Clay",
      description: "Data enrichment & automation",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v10/icons/clay.svg"
    },
    {
      name: "Smartlead",
      description: "Email outreach & sequences", 
      logo: "https://smartlead.ai/favicon.ico"
    },
    {
      name: "Apollo",
      description: "Sales intelligence & CRM",
      logo: "https://apollo.io/favicon.ico"
    },
    {
      name: "HubSpot",
      description: "Marketing automation & CRM",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v10/icons/hubspot.svg"
    },
    {
      name: "Zapier",
      description: "Workflow automation",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v10/icons/zapier.svg"
    },
    {
      name: "Outreach",
      description: "Sales engagement platform",
      logo: "https://outreach.io/favicon.ico"
    },
    {
      name: "Cursor",
      description: "AI-powered code editor",
      logo: "https://cursor.sh/favicon.ico"
    },
    {
      name: "Apify",
      description: "Web scraping & automation",
      logo: "https://apify.com/favicon.ico"
    },
    {
      name: "Common Room",
      description: "Community intelligence",
      logo: "https://commonroom.io/favicon.ico"
    },
    {
      name: "Netlify",
      description: "Web deployment & hosting",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v10/icons/netlify.svg"
    },
    {
      name: "Lovable",
      description: "AI web development",
      logo: "https://lovable.dev/favicon.ico"
    },
    {
      name: "Replit",
      description: "Online IDE & hosting",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v10/icons/replit.svg"
    },
    {
      name: "n8n",
      description: "Workflow automation",
      logo: "https://n8n.io/favicon.ico"
    },
    {
      name: "Ocean.io",
      description: "B2B lead generation",
      logo: "https://ocean.io/favicon.ico"
    },
    {
      name: "Pocus",
      description: "Product-led sales",
      logo: "https://pocus.com/favicon.ico"
    },
    {
      name: "Eleven Labs",
      description: "AI voice generation",
      logo: "https://elevenlabs.io/favicon.ico"
    },
    {
      name: "Plusvibe",
      description: "People search & identity resolution",
      logo: "https://plusvibe.com/favicon.ico"
    },
    {
      name: "Exa",
      description: "AI-powered search API",
      logo: "https://exa.ai/favicon.ico"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            GTM Tools We Master
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert implementation and automation across the entire GTM tech stack
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <div key={tool.name} className="text-center group">
              <div className="mb-4 transition-transform group-hover:scale-110">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="w-16 h-16 mx-auto rounded-lg shadow-sm"
                />
              </div>
              <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
              <p className="text-xs text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;