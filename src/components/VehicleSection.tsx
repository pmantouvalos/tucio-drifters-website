import { useState } from "react";
import { Cpu, Eye, Gauge, Wifi, CheckCircle2 } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import vehicleImg from "@/assets/vehicle-car.png";
import elenipistaImg from "@/assets/eleni.jpeg";
import packageImg from "@/assets/package.jpeg";
import qualificationVideo from "@/assets/QualificaionFinal 1.mp4";
import report1Video from "@/assets/TUC io Drifters Status Report 1.mp4";
import report2Video from "@/assets/TUCio Drifters - Status Report 2.mp4";

type PhaseStatus = "done" | "current" | "upcoming";

type Phase = {
  id: number;
  title: string;
  description: string;
  status: PhaseStatus;
  image?: string;
  video?: string;
};

const phases: Phase[] = [
  {
    id: 1,
    title: "Unboxing & First Setup",
    description:
      "Received the Bosch BFMC kit, unboxed all components and performed the initial hardware inspection and assembly.",
    status: "done",
    image: packageImg,
  },
  {
    id: 2,
    title: "Track Making",
    description:
      "Built our 20×14m test track to simulate the BFMC smart city environment as closely as possible.",
    status: "done",
    image: elenipistaImg,
  },
  {
    id: 3,
    title: "First Report",
    description:
      "Submitted our first technical report to Bosch, documenting hardware setup and initial software milestones.",
    status: "done",
    video: report1Video,
  },
  {
    id: 4,
    title: "Second Report",
    description:
      "Delivered the second report covering algorithm development, sensor integration, and test results.",
    status: "done",
    video: report2Video,
  },
  {
    id: 5,
    title: "Qualification",
    description:
      "We qualified for the BFMC 2026 pre-finals in Cluj-Napoca, Romania — a milestone we are incredibly proud of.",
    status: "current",
    video: qualificationVideo,
  },
  {
    id: 6,
    title: "Funny Moments",
    description:
      "Behind the scenes — the laughs, the late nights, and everything in between.",
    status: "upcoming",
    // image: phaseImage6,
  },
];

const specs = [
  { icon: Cpu, label: "AI-Powered", description: "Advanced neural networks" },
  { icon: Eye, label: "Computer Vision", description: "Real-time perception" },
  { icon: Gauge, label: "Optimized", description: "Maximum efficiency" },
  { icon: Wifi, label: "Connected", description: "V2X communication" },
];

const VehicleSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const phase = phases[selectedIndex];
  const displayImage = phase.image ?? vehicleImg;

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
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: Car showcase + phase info */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-red/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative glass-card rounded-2xl p-6 border-2 border-neon-red/30">

                {/* Header */}
                <div className="flex items-center justify-between mb-4 border-b border-border/50 pb-2 gap-2">
                  <span className="font-orbitron font-bold text-base text-foreground truncate">
                    Phase {phase.id} — {phase.title}
                  </span>
                  <span
                    className={`text-xs font-orbitron px-2 py-0.5 rounded border shrink-0 ${
                      phase.status === "done"
                        ? "border-neon-green text-neon-green"
                        : phase.status === "current"
                        ? "border-neon-blue text-neon-blue animate-pulse"
                        : "border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    {phase.status === "done"
                      ? "DONE"
                      : phase.status === "current"
                      ? "CURRENT"
                      : "UPCOMING"}
                  </span>
                </div>

                {/* Media area */}
                <div className="w-full h-[22rem] mb-4 rounded-lg overflow-hidden border border-neon-red/20 bg-black/60 flex items-center justify-center">
                  {phase.video ? (
                    <video
                      key={phase.video + phase.id}
                      src={phase.video}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover rounded-lg"
                      style={{ boxShadow: "0 0 20px rgba(255,51,85,0.15)" }}
                    />
                  ) : (
                    <img
                      src={displayImage}
                      alt={phase.title}
                      className="car-3d max-w-full max-h-full object-contain px-8"
                    />
                  )}
                </div>

                {/* Phase description */}
                <p className="text-center text-sm text-muted-foreground font-rajdhani leading-relaxed px-2">
                  {phase.description}
                </p>
              </div>
            </div>

            {/* RIGHT: Timeline + Specs */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                  Our <span className="neon-text-red">Journey</span>
                </h3>
                <div className="relative">
                  <div className="absolute left-[15px] top-0 bottom-0 w-px bg-border/50" />
                  <div className="space-y-1">
                    {phases.map((p, index) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedIndex(index)}
                        className={`w-full text-left pl-10 pr-4 py-3 rounded-lg transition-all duration-200 relative border ${
                          selectedIndex === index
                            ? "bg-primary/10 border-primary/30"
                            : "border-transparent hover:bg-muted/30"
                        }`}
                      >
                        <div
                          className={`absolute left-[11px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full border-2 transition-all ${
                            p.status === "done"
                              ? "bg-neon-green border-neon-green"
                              : p.status === "current"
                              ? "bg-neon-blue border-neon-blue animate-pulse"
                              : "bg-transparent border-muted-foreground/50"
                          }`}
                        />
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`font-orbitron text-sm font-semibold ${
                              selectedIndex === index ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {p.title}
                          </span>
                          {p.status === "done" && (
                            <CheckCircle2 size={14} className="text-neon-green shrink-0" />
                          )}
                          {p.status === "current" && (
                            <span className="text-[10px] font-orbitron text-neon-blue shrink-0 border border-neon-blue/50 px-1 py-0.5 rounded">
                              NOW
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec) => (
                  <TiltCard
                    key={spec.label}
                    className="glass-card rounded-lg p-4 border border-border/50 hover:border-primary/50 group"
                  >
                    <spec.icon
                      size={24}
                      className="text-primary mb-2 group-hover:text-neon-red transition-colors"
                    />
                    <p className="font-orbitron font-semibold text-foreground">{spec.label}</p>
                    <p className="text-sm text-muted-foreground font-rajdhani">{spec.description}</p>
                  </TiltCard>
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
