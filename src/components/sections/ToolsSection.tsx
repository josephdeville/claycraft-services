const ToolsSection = () => {
  const tools = [
    {
      name: "Clay",
      description: "Data enrichment & automation",
      logo: "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23FF6B35'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EClay%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Smartlead",
      description: "Email outreach & sequences", 
      logo: "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%234F46E5'/%3E%3Ctext x='50' y='45' text-anchor='middle' fill='white' font-size='10' font-weight='bold'%3ESmart%3C/text%3E%3Ctext x='50' y='58' text-anchor='middle' fill='white' font-size='10' font-weight='bold'%3ELead%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Apollo",
      description: "Sales intelligence & CRM",
      logo: "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%2310B981'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='white' font-size='12' font-weight='bold'%3EApollo%3C/text%3E%3C/svg%3E"
    },
    {
      name: "HubSpot",
      description: "Marketing automation & CRM",
      logo: "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23FF7A59'/%3E%3Ctext x='50' y='45' text-anchor='middle' fill='white' font-size='10' font-weight='bold'%3EHub%3C/text%3E%3Ctext x='50' y='58' text-anchor='middle' fill='white' font-size='10' font-weight='bold'%3ESpot%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Zapier",
      description: "Workflow automation",
      logo: "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23FF4A00'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='white' font-size='12' font-weight='bold'%3EZapier%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Outreach",
      description: "Sales engagement platform",
      logo: "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%236366F1'/%3E%3Ctext x='50' y='45' text-anchor='middle' fill='white' font-size='8' font-weight='bold'%3EOut%3C/text%3E%3Ctext x='50' y='58' text-anchor='middle' fill='white' font-size='8' font-weight='bold'%3EReach%3C/text%3E%3C/svg%3E"
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