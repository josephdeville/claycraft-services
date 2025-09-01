import clayLogo from "@/assets/logos/clay-official.png";
import smartleadLogo from "@/assets/logos/smartlead-official.png";
import apolloLogo from "@/assets/logos/apollo-official.png";
import hubspotLogo from "@/assets/logos/hubspot-official.png";
import zapierLogo from "@/assets/logos/zapier-official.png";
import outreachLogo from "@/assets/logos/outreach-official.png";
import cursorLogo from "@/assets/logos/cursor-official.png";
import apifyLogo from "@/assets/logos/apify-official.png";
import commonroomLogo from "@/assets/logos/commonroom-official.png";
import netlifyLogo from "@assets/netlify_1756711653418.png";
import lovableLogo from "@/assets/logos/lovable-official.png";
import replitLogo from "@assets/replit_1756711653418.png";
import n8nLogo from "@/assets/logos/n8n-official.png";
import oceanLogo from "@/assets/logos/ocean-official.png";
import pocusLogo from "@assets/Pocus_1756711653418.png";
import elevenlabsLogo from "@/assets/logos/elevenlabs-official.png";
import plusvibeLogo from "@/assets/logos/plusvibe-official.png";
import exaLogo from "@assets/exa_1756711653417.png";

const ToolsSection = () => {
  const tools = [
    {
      name: "Clay",
      description: "Data enrichment & automation",
      logo: clayLogo
    },
    {
      name: "Smartlead",
      description: "Email outreach & sequences", 
      logo: smartleadLogo
    },
    {
      name: "Apollo",
      description: "Sales intelligence & CRM",
      logo: apolloLogo
    },
    {
      name: "HubSpot",
      description: "Marketing automation & CRM",
      logo: hubspotLogo
    },
    {
      name: "Zapier",
      description: "Workflow automation",
      logo: zapierLogo
    },
    {
      name: "Outreach",
      description: "Sales engagement platform",
      logo: outreachLogo
    },
    {
      name: "Cursor",
      description: "AI-powered code editor",
      logo: cursorLogo
    },
    {
      name: "Apify",
      description: "Web scraping & automation",
      logo: apifyLogo
    },
    {
      name: "Common Room",
      description: "Community intelligence",
      logo: commonroomLogo
    },
    {
      name: "Netlify",
      description: "Web deployment & hosting",
      logo: netlifyLogo
    },
    {
      name: "Lovable",
      description: "AI web development",
      logo: lovableLogo
    },
    {
      name: "Replit",
      description: "Online IDE & hosting",
      logo: replitLogo
    },
    {
      name: "n8n",
      description: "Workflow automation",
      logo: n8nLogo
    },
    {
      name: "Ocean.io",
      description: "B2B lead generation",
      logo: oceanLogo
    },
    {
      name: "Pocus",
      description: "Product-led sales",
      logo: pocusLogo
    },
    {
      name: "Eleven Labs",
      description: "AI voice generation",
      logo: elevenlabsLogo
    },
    {
      name: "Plusvibe",
      description: "People search & identity resolution",
      logo: plusvibeLogo
    },
    {
      name: "Exa",
      description: "AI-powered search API",
      logo: exaLogo
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
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
              <div className="mb-4 transition-transform group-hover:scale-110 bg-white/10 rounded-lg p-3">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 mx-auto object-contain"
                  style={{ imageRendering: 'crisp-edges' }}
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