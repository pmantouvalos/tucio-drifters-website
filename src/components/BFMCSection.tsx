import { Trophy, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Calendar, value: "2025", label: "First Participation" },
  { icon: Users, value: "5", label: "Team Members" },
  { icon: MapPin, value: "Romania", label: "Cluj-Napoca" },
  { icon: Trophy, value: "1st", label: "Our Goal" },
];

const BFMCSection = () => {
  return (
    <section id="bfmc" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="neon-text-blue">Bosch</span>{" "}
            <span className="text-foreground">Future Mobility</span>{" "}
            <span className="neon-text-red">Challenge</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-blue via-neon-green to-neon-red" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 border-2 border-border/50 mb-12">
            <h3 className="font-orbitron text-xl md:text-2xl font-bold mb-6 text-center">
              <span className="text-foreground">The</span>{" "}
              <span className="neon-text-green">Competition</span>
            </h3>
            
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed mb-6 text-center">
              The <span className="text-neon-blue font-semibold">Bosch Future Mobility Challenge</span> is an international technical competition initiated by Bosch Engineering Center Cluj in 2017. Teams from universities worldwide develop{" "}
              <span className="text-neon-green font-semibold">autonomous driving and connectivity algorithms</span> on 1:10 scale vehicles to navigate a miniature smart city.
            </p>

            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed text-center">
              <span className="text-neon-red font-semibold">2025 marks our debut</span> in this prestigious competition. Our team is determined to make a strong first impression, showcasing innovative solutions developed right here at the Technical University of Crete.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-6 border border-border/50 text-center hover:border-primary/50 transition-all duration-300"
              >
                <stat.icon size={28} className="text-primary mx-auto mb-3" />
                <p className="font-orbitron text-2xl md:text-3xl font-bold neon-text-blue mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="neonBlue" size="lg" asChild>
              <a
                href="http://boschfuturemobility.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About BFMC
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BFMCSection;
