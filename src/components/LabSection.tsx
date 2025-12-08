import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import senselabImage from "@/assets/lab/senselab.png";

const LabSection = () => {
  return (
    <section id="lab" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-foreground">Our</span>{" "}
            <span className="neon-text-green">Lab</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-green to-neon-blue" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
              Our development facilities at the Technical University of Crete house a complete{" "}
              <span className="text-neon-blue font-semibold">test track</span> and simulation environment for our autonomous vehicle research.
            </p>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
              Based on the official <span className="text-neon-green font-semibold">BFMC Competition Track</span>, our custom tracks allow us to test every challenge scenario, ensuring our vehicle performs flawlessly in competition conditions.
            </p>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
              The lab features <span className="text-neon-red font-semibold">smart city simulation servers</span>, high-speed cameras, and advanced computing resources for developing and optimizing our autonomous driving algorithms.
            </p>

            <Button variant="neonGreen" size="lg" asChild>
              <a
                href="https://maps.app.goo.gl/7HFFBPFPrVomSnv6A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MapPin size={20} />
                Visit Us
              </a>
            </Button>
          </div>

<div className="relative">
            {/* ΠΡΟΣΘΗΚΗ: Τυλίγουμε το περιεχόμενο σε ένα <a> tag */}
            <a 
              href="http://senselab.tuc.gr/" 
              target="_blank" 
              rel="noopener noreferrer"
              // Προαιρετικά: προσθέτουμε το 'block' για να πιάσει όλο τον χώρο
              // και ένα μικρό εφέ στο hover για να καταλαβαίνει ο χρήστης ότι πατιέται
              className="block transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-neon-green/30 neon-border-green">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-blue/10" />
                <img 
                  src={senselabImage} 
                  alt="SenseLab at Technical University of Crete"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            {/* ΤΕΛΟΣ ΠΡΟΣΘΗΚΗΣ */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
