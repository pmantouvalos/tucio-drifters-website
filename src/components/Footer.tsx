// 1. Άλλαξα τα imports: Έβγαλα το Linkedin και έβαλα το Youtube
import { Mail, MapPin, Instagram, Youtube } from "lucide-react";
import teamLogo from "@/assets/transparent.png"; 

const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Lab", href: "#lab" },
    { name: "Vehicle", href: "#vehicle" },
    { name: "BFMC", href: "#bfmc" },
    { name: "Team", href: "#team" },
    { name: "Partners", href: "#partners" },
    { name: "Join Us", href: "#join" },
  ];

  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand - Logo */}
          <div>
            <div className="mb-6">
              <a 
                href="#" 
                onClick={(e) => handleScroll(e, "#")}
                className="inline-block relative group cursor-pointer"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-neon-blue/30 to-neon-green/30 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={teamLogo} 
                  alt="TUC.io Drifters" 
                  className="relative z-10 h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
            <p className="text-muted-foreground font-rajdhani max-w-sm">
              Autonomous driving solutions for the Bosch Future Mobility Challenge. Pioneering innovation at the Technical University of Crete.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors font-rajdhani cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:echaralampopoulo@tuc.gr"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-rajdhani"
              >
                <Mail size={18} />
                echaralampopoulo@tuc.gr
              </a>
              <div className="flex items-start gap-3 text-muted-foreground font-rajdhani">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Technical University of Crete
                  <br />
                  Chania, Greece
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/tuc.io.drifters/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* YouTube (ΝΕΟ) */}
              <a
                href="https://www.youtube.com/@TUCioDrifters" // <--- ΒΑΛΕ ΕΔΩ ΤΟ LINK TOY YOUTUBE ΜΟΛΙΣ ΤΟ ΦΤΙΑΞΕΤΕ
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground font-rajdhani">
            © {new Date().getFullYear()} TUC.io Drifters. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 font-rajdhani mt-2">
            A SenseLab Research Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;