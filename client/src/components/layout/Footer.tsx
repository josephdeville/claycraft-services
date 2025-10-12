import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, PlayCircle, PauseCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import clayWorksLogo from "@assets/clayworksofart-logo.png";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('reduceMotion');
    setIsReducedMotion(storedPreference === 'true');
  }, []);

  const handleLinkClick = (label: string) => {
    trackEvent("footer_link_click", "footer", label);
  };

  const toggleReducedMotion = () => {
    const newValue = !isReducedMotion;
    setIsReducedMotion(newValue);
    localStorage.setItem('reduceMotion', String(newValue));
    window.dispatchEvent(new Event('storage'));
    trackEvent("reduce_motion_toggle", "accessibility", newValue ? "enabled" : "disabled");
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={clayWorksLogo} 
                alt="Clay Works of Art" 
                className="h-8 w-auto"
                data-testid="footer-logo"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">Startup anad IT Growth Hackers with advanced Clay Implementations, data enrichment, and GTM engineering.</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Mail className="h-4 w-4" />
                <span className="font-medium text-[14px]">info@clayworksofart.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-CLAY</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-orange-400 transition-colors"
                  onClick={() => handleLinkClick("clay_automation")}
                >
                  Clay Automation
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-orange-400 transition-colors"
                  onClick={() => handleLinkClick("lead_generation")}
                >
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-orange-400 transition-colors"
                  onClick={() => handleLinkClick("data_enrichment")}
                >
                  Data Enrichment
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-orange-400 transition-colors"
                  onClick={() => handleLinkClick("gtm_engineering")}
                >
                  GTM Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link 
                  to="/blog" 
                  className="hover:text-orange-400 transition-colors"
                  onClick={() => handleLinkClick("blog")}
                >
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="hover:text-orange-400 transition-colors"
                  onClick={() => handleLinkClick("case_studies")}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="hover:text-orange-400 transition-colors"
                  onClick={() => handleLinkClick("clay_classroom")}
                >
                  Clay Classroom
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="hover:text-orange-400 transition-colors"
                  onClick={() => handleLinkClick("templates")}
                >
                  Templates & Workflows
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Get Started</h4>
            <p className="text-sm text-slate-300">
              Ready to scale your lead generation?
            </p>
            <div className="space-y-3">
              <Link 
                to="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                onClick={() => handleLinkClick("footer_contact")}
                data-testid="link-footer-contact"
              >
                Schedule Consultation
              </Link>
              <div className="flex space-x-2">
                <Badge variant="secondary" className="text-xs">
                  Free Strategy Session
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-slate-400">
                © 2025 Clay Automation. All rights reserved.
              </p>
              <button
                onClick={toggleReducedMotion}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                data-testid="button-reduce-motion"
                aria-label={isReducedMotion ? "Enable animations" : "Reduce motion"}
              >
                {isReducedMotion ? (
                  <>
                    <PlayCircle className="h-4 w-4" />
                    <span>Enable Animations</span>
                  </>
                ) : (
                  <>
                    <PauseCircle className="h-4 w-4" />
                    <span>Reduce Motion</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link 
                to="/privacy" 
                className="hover:text-orange-400 transition-colors"
                onClick={() => handleLinkClick("privacy")}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-orange-400 transition-colors"
                onClick={() => handleLinkClick("terms")}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;