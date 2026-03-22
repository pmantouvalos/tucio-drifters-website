import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

// --- IMPORTS ΕΙΚΟΝΩΝ ---
import senselabImage from "@/assets/lab/senselab.png";
import labWorkImg from "@/assets/lab/labwork.jpg";
import labPanoImg from "@/assets/lab/labentos.jpg";
import labOutdoorImg from "@/assets/lab/labektos.jpg";

// 1. ΕΠΑΝΑΦΟΡΑ ΤΗΣ ΣΩΣΤΗΣ ΣΕΙΡΑΣ
const labImages = [
  senselabImage, // Index 0: Logo
  labWorkImg,    // Index 1: Work
  labPanoImg,    // Index 2: Pano
  labOutdoorImg  // Index 3: Outdoor
];

const LabSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % labImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="lab" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-foreground">Our</span>{" "}
            <span className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">Lab</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-orange-500 to-neon-blue" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* ΑΡΙΣΤΕΡΑ: Κείμενο */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
              We are proudly hosted by the <span className="text-neon-blue font-bold">SenseLab</span>, the world-leading Research Group of Spatial Informatics at the Technical University of Crete in Chania, Greece.
            </p>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
              SenseLab is dedicated to providing research and education in core disciplines such as Geographic Information Systems (GIS), Remote Sensing, and Unmanned Aerial Vehicles (UAVs). Its scope expands into critical <span className="text-neon-red font-bold">multidisciplinary</span> areas, including databases, algorithms, image processing, photogrammetry, and neuroscience.
            </p>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
              Beyond its primary research mandate, the laboratory actively supports <span className="text-orange-500 font-bold">undergraduate</span> engagement. SenseLab hosts student teams like TUC.io Drifters, providing a space to develop simpler or more complex projects across diverse areas of interest.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:shadow-[0_0_25px_rgba(249,115,22,0.7)] transition-all duration-300 border-none"
            >
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

          {/* ΔΕΞΙΑ: Carousel Εικόνων */}
          <div className="relative">
            <a
              href="http://senselab.tuc.gr/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="w-full h-[280px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden border-2 border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.2)] relative">

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-neon-blue/10 z-20 pointer-events-none" />

                {labImages.map((img, index) => {
                  // 2. Η ΛΥΣΗ:
                  // Αν είναι η πρώτη εικόνα (Logo, index 0), χρησιμοποίησε 'object-contain' για να μην κοπεί.
                  // Για όλες τις άλλες (συμπεριλαμβανομένης της τελευταίας), χρησιμοποίησε 'object-cover' για να γεμίσουν το πλαίσιο χωρίς borders.
                  const fitMode = index === 0 ? "object-contain" : "object-cover";

                  return (
                  <img
                    key={index}
                    src={img}
                    alt={`SenseLab view ${index + 1}`}
                    className={`absolute inset-0 w-full h-full ${fitMode} transition-opacity duration-1000 ease-in-out ${
                      index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                  );
                })}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;