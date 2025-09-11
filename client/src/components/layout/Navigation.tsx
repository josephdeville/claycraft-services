import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" }
  ];

  const handleNavClick = (label: string) => {
    trackEvent("navigation_click", "navigation", label);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-white hover:text-orange-200 transition-colors"
            onClick={() => handleNavClick("logo")}
          >
            Clay Works of Art
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-200 ${
                  location.pathname === item.href
                    ? "text-orange-200 border-b-2 border-orange-200 pb-1"
                    : "text-white"
                }`}
                onClick={() => handleNavClick(item.label)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="ml-4 bg-white text-orange-500 hover:bg-orange-50 border-white"
              onClick={() => handleNavClick("get_started_nav")}
            >
              <Link to="/contact" data-testid="button-nav-contact">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-orange-200"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 bg-black">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-200 px-4 py-2 ${
                    location.pathname === item.href
                      ? "text-orange-200 bg-orange-500/20"
                      : "text-white"
                  }`}
                  onClick={() => handleNavClick(item.label)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  asChild 
                  className="w-full"
                  onClick={() => handleNavClick("get_started_mobile")}
                >
                  <Link to="/contact" data-testid="button-mobile-contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;