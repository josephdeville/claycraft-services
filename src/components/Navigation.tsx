import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <span className="text-orange-500">Clay</span>Works
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"} size="sm">
                Home
              </Button>
            </Link>
            <Link to="/services">
              <Button variant={isActive("/services") ? "default" : "ghost"} size="sm">
                Services
              </Button>
            </Link>
            <Link to="/challenges">
              <Button
                variant={isActive("/challenges") ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-2"
              >
                <Trophy className="h-4 w-4" />
                Challenges
                <Badge variant="secondary" className="ml-1 text-xs">New</Badge>
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant={isActive("/blog") ? "default" : "ghost"} size="sm">
                Blog
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Book Session
              </Button>
            </Link>
          </div>

          {/* Mobile Menu - can be enhanced with a hamburger menu later */}
          <div className="md:hidden">
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Book Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
