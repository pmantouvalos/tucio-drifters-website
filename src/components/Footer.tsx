import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-orbitron text-2xl font-bold">
                <span className="neon-text-blue">TUC</span>
                <span className="text-foreground">.io</span>
              </span>
              <span className="font-orbitron text-lg font-medium block -mt-1 neon-text-green">
                Drifters
              </span>
            </div>
            <p className="text-muted-foreground font-rajdhani">
              Autonomous driving solutions for the Bosch Future Mobility Challenge
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["About", "Lab", "Vehicle", "BFMC", "Team", "Partners", "Join Us"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-").replace("!", "")}`}
                  className="block text-muted-foreground hover:text-primary transition-colors font-rajdhani"
                >
                  {item}
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
              <a
                href="https://www.instagram.com/tuc.io.drifters/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/panos-mantouvalos/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
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
