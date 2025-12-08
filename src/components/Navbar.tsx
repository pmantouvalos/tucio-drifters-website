import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <span className="font-orbitron text-2xl font-bold">
                <span className="neon-text-blue">TUC</span>
                <span className="text-foreground">.io</span>
              </span>
              <span className="font-orbitron text-lg font-medium block -mt-1 neon-text-green">
                Drifters
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors font-rajdhani font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Center Logo Area (Desktop) */}
          <div className="hidden lg:block" />

          {/* Desktop Navigation Right */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(4, 6).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors font-rajdhani font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <Button variant="neonGreen" size="sm" asChild>
              <a href="#join">{navItems[6].label}</a>
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
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 font-rajdhani font-medium tracking-wide transition-colors ${
                    index === navItems.length - 1
                      ? "text-neon-green"
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
