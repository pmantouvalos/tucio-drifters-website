import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Team Name */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-rajdhani tracking-widest uppercase">
              SenseLab Research Team
            </span>
          </div>

          <h1 className="section-title mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="neon-text-blue">TUC</span>
            <span className="text-foreground">.io</span>
            <br />
            <span className="neon-text-green">Drifters</span>
          </h1>

          <div className="h-1 w-32 mx-auto mb-8 bg-gradient-to-r from-neon-blue via-neon-green to-neon-red animate-fade-in" style={{ animationDelay: "0.2s" }} />

          <h2 className="text-2xl md:text-4xl font-rajdhani font-light text-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Autonomous. Driving. Innovation.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in font-rajdhani" style={{ animationDelay: "0.4s" }}>
            Pioneering autonomous driving solutions for the{" "}
            <span className="text-neon-red font-semibold">Bosch Future Mobility Challenge</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#about">Discover More</a>
            </Button>
            <Button variant="neonBlue" size="xl" asChild>
              <a href="#partners">Become a Sponsor</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
