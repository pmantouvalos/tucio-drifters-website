import { Cpu, Eye, Gauge, Wifi } from "lucide-react";
import vehicleCarImage from "@/assets/vehicle-car.png";

const specs = [
  { icon: Cpu, label: "AI-Powered", description: "Advanced neural networks" },
  { icon: Eye, label: "Computer Vision", description: "Real-time perception" },
  { icon: Gauge, label: "Optimized", description: "Maximum efficiency" },
  { icon: Wifi, label: "Connected", description: "V2X communication" },
];

const VehicleSection = () => {
  return (
    <section id="vehicle" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-foreground">Our</span>{" "}
            <span className="neon-text-red">Vehicle</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-red to-neon-blue" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vehicle Display */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-red/20 rounded-full blur-3xl animate-pulse-slow" />
                
                <div className="relative glass-card rounded-2xl p-8 border-2 border-neon-red/30 h-full flex flex-col items-center justify-center">
                  <div className="w-48 h-32 mb-4 rounded-lg overflow-hidden border-2 border-neon-red/20">
                    <img 
                      src={vehicleCarImage} 
                      alt="TUC.io Drifters Autonomous Vehicle"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-orbitron text-2xl font-bold mb-2">
                      <span className="neon-text-blue">v</span>
                      <span className="text-foreground">2025</span>
                      <span className="neon-text-green">.1</span>
                    </p>
                    <p className="text-muted-foreground font-rajdhani">First Edition</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-foreground">
                  Built for <span className="neon-text-red">Excellence</span>
                </h3>
                <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed mb-8">
                  Our 1:10 scale autonomous vehicle is engineered with cutting-edge technology, designed to navigate complex urban environments with precision and reliability.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className="glass-card rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <spec.icon
                      size={24}
                      className="text-primary mb-2 group-hover:text-neon-red transition-colors"
                    />
                    <p className="font-orbitron font-semibold text-foreground">
                      {spec.label}
                    </p>
                    <p className="text-sm text-muted-foreground font-rajdhani">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
