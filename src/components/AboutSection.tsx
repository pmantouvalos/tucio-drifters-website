import { Users, Target, MapPin } from "lucide-react";

const aboutItems = [
  {
    icon: Users,
    title: "Who We Are",
    description:
      "TUC.io Drifters is a passionate team of engineering students from the Technical University of Crete, united under the SenseLab research center. We're on a mission to push the boundaries of autonomous vehicle technology.",
    color: "blue" as const,
  },
  {
    icon: Target,
    title: "What We Do",
    description:
      "We develop cutting-edge autonomous driving solutions for scaled vehicles. This year marks our debut in the prestigious Bosch Future Mobility Challenge, where we'll showcase our innovative algorithms and engineering excellence.",
    color: "green" as const,
  },
  {
    icon: MapPin,
    title: "Where We Are",
    description:
      "Based at the Technical University of Crete, our team operates from state-of-the-art facilities equipped with everything needed to design, build, and test our autonomous vehicle systems.",
    color: "red" as const,
  },
];

const colorClasses = {
  blue: {
    icon: "text-neon-blue",
    border: "border-neon-blue/30 hover:border-neon-blue",
    glow: "hover:shadow-[0_0_30px_hsl(200_100%_50%/0.2)]",
  },
  green: {
    icon: "text-neon-green",
    border: "border-neon-green/30 hover:border-neon-green",
    glow: "hover:shadow-[0_0_30px_hsl(150_100%_45%/0.2)]",
  },
  red: {
    icon: "text-neon-red",
    border: "border-neon-red/30 hover:border-neon-red",
    glow: "hover:shadow-[0_0_30px_hsl(0_100%_55%/0.2)]",
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-foreground">About</span>{" "}
            <span className="neon-text-blue">Us</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-blue to-neon-green" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutItems.map((item, index) => {
            const colors = colorClasses[item.color];
            return (
              <div
                key={item.title}
                className={`glass-card rounded-xl p-8 border-2 ${colors.border} ${colors.glow} transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-lg bg-muted/50 mb-6 ${colors.icon}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="font-orbitron text-xl font-bold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
