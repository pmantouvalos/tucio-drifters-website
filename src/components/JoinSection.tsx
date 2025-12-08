import { Button } from "@/components/ui/button";
import { Code, Brain, Wrench, FileText, Users } from "lucide-react";

const positions = [
  {
    icon: Code,
    title: "Software Development",
    description: "Python, ROS, OpenCV, Neural Networks",
    color: "green" as const,
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Computer Vision, Deep Learning, Algorithm Optimization",
    color: "red" as const,
  },
  {
    icon: Wrench,
    title: "Hardware & Mechatronics",
    description: "3D Design, Sensors, Electronics",
    color: "blue" as const,
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Progress Reports, Technical Writing",
    color: "cyan" as const,
  },
];

const colorClasses = {
  blue: "text-neon-blue border-neon-blue/30 hover:border-neon-blue",
  green: "text-neon-green border-neon-green/30 hover:border-neon-green",
  red: "text-neon-red border-neon-red/30 hover:border-neon-red",
  cyan: "text-neon-cyan border-neon-cyan/30 hover:border-neon-cyan",
};

const JoinSection = () => {
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="neon-text-red">Join</span>{" "}
            <span className="text-foreground">Us!</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-red to-neon-green" />
          <p className="mt-6 text-lg text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Are you passionate about autonomous vehicles and cutting-edge technology? Join our team!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="font-orbitron text-xl font-bold text-center mb-8 text-foreground">
            What You'll Work On
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {positions.map((position) => (
              <div
                key={position.title}
                className={`glass-card rounded-xl p-6 border-2 ${colorClasses[position.color]} transition-all duration-300 hover:scale-105`}
              >
                <position.icon size={32} className={`mb-4 ${colorClasses[position.color].split(" ")[0]}`} />
                <h4 className="font-orbitron font-bold text-foreground mb-2">
                  {position.title}
                </h4>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  {position.description}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8 border-2 border-neon-green/30 text-center">
            <Users size={48} className="mx-auto mb-4 text-neon-green" />
            <h3 className="font-orbitron text-2xl font-bold mb-4 text-foreground">
              Ready to Make an Impact?
            </h3>
            <p className="text-lg text-muted-foreground font-rajdhani mb-8 max-w-2xl mx-auto">
              We're looking for motivated students who want to gain hands-on experience in autonomous vehicle development, work with cutting-edge technology, and represent TUC on the international stage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neonGreen" size="lg" asChild>
                <a href="mailto:echaralampopoulo@tuc.gr" target="_blank" rel="noopener noreferrer">Apply Now</a>
              </Button>
              <Button variant="neonBlue" size="lg" asChild>
                <a href="#">Open Positions</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
