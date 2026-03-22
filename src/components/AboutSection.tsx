import { Users, Target } from "lucide-react"; // Αφαίρεσα το MapPin που δεν χρειάζεται πια

const aboutItems = [
  {
    icon: Users,
    title: "Who We Are",
    description:
      "The TUC.io Drifters is a newly formed team of engineering students from the Technical University of Crete (TUC). We are part of the undergraduate team of SenseLab Research Group, under the supervision of Professor Panagiotis Partsinevelos.",
    color: "blue" as const,
  },
  {
    icon: Target,
    title: "What We Do",
    description:
      "We are currently focused on the design and construction of a fully autonomous vehicle for the Bosch Future Mobility Challenge. As first-time participants in this competition, our team is dedicated to showcasing the highest level of commitment and skill in our inaugural year. This ambitious project allows us to gain deep practical expertise in advanced technical disciplines, including Automation, Machine Learning, Computer Vision, Robotics and Control Systems.",
    color: "orange" as const,
  },
  // ΤΟ WHERE WE ARE ΔΙΑΓΡΑΦΗΚΕ ΑΠΟ ΕΔΩ
];

const colorClasses = {
  blue: {
    icon: "text-neon-blue",
    border: "border-neon-blue/30 hover:border-neon-blue",
    glow: "hover:shadow-[0_0_30px_hsl(200_100%_50%/0.2)]",
  },
  orange: {
    icon: "text-orange-500",
    border: "border-orange-500/30 hover:border-orange-500",
    glow: "hover:shadow-[0_0_30px_hsl(30_100%_50%/0.2)]",
  },
  // Κρατάμε τα υπόλοιπα χρώματα αν χρειαστούν στο μέλλον ή τα σβήνεις αν θες
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

        {/* ΑΛΛΑΓΗ ΕΔΩ: 
            1. md:grid-cols-2 (αντί για 3) για να έχουμε 2 στήλες.
            2. max-w-5xl (αντί για 6xl) για να έρθουν πιο κεντρικά και μαζεμένα. 
        */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
