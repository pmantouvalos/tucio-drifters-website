import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Εισαγωγή του λογοτύπου
import teamLogo from "@/assets/transparent.png"; 

const navItems = [
  { label: "About", href: "#about" },
  { label: "Lab", href: "#lab" },
  { label: "Vehicle", href: "#vehicle" },
  { label: "BFMC", href: "#bfmc" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partners" },
  { label: "Join Us!", href: "#join" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", "")).filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          
          {/* Logo - Scroll to top */}
          <a 
            href="#" 
            onClick={(e) => handleScroll(e, "#")}
            className="flex items-center cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              {/* Layer Λάμψης */}
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-neon-blue/40 to-neon-green/40 rounded-full blur-2xl animate-pulse z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDuration: '4s' }} 
              />

              {/* Εικόνα Λογοτύπου */}
              <img
                src={teamLogo}
                alt="TUC.io Drifters Logo"
                className="relative z-10 h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden lg:flex items-center gap-1">
            {/* ΑΛΛΑΓΗ ΕΔΩ: slice(0, 5) αντί για (0, 4) για να πάρει και το Team */}
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`px-4 py-2 transition-colors font-rajdhani font-medium tracking-wide cursor-pointer border-b-2 ${
                  activeSection === item.href
                    ? "text-primary border-primary"
                    : "text-muted-foreground hover:text-primary border-transparent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Center Logo Area (Desktop spacer) */}
          <div className="hidden lg:block" />

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-1">
            {/* ΑΛΛΑΓΗ ΕΔΩ: slice(5, 6) αντί για (4, 6) για να μείνει μόνο το Partners */}
            {navItems.slice(5, 6).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`px-4 py-2 transition-colors font-rajdhani font-medium tracking-wide cursor-pointer border-b-2 ${
                  activeSection === item.href
                    ? "text-primary border-primary"
                    : "text-muted-foreground hover:text-primary border-transparent"
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* --- Join Us Button (Πορτοκαλί) --- */}
            <Button 
              variant="outline"
              size="sm" 
              asChild
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300"
            >
              <a 
                href="#join"
                onClick={(e) => handleScroll(e, "#join")}
              >
                {navItems[6].label}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`px-4 py-3 font-rajdhani font-medium tracking-wide transition-colors cursor-pointer ${
                    index === navItems.length - 1
                      ? "text-orange-500 font-bold"
                      : activeSection === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
