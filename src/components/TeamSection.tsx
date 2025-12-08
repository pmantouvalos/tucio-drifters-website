import { Linkedin, Mail } from "lucide-react";

// Import team photos
import panagiotisMantouvalosPhoto from "@/assets/team/panagiotis-mantouvalos.jpg";
import eleniCharalampopoulouPhoto from "@/assets/team/eleni-charalampopoulou.jpg";
import mariaCookiePhoto from "@/assets/team/maria-cookie.png";
import giorgosMantisPhoto from "@/assets/team/giorgos-mantis.jpg";
import alexiosDamaskinosPhoto from "@/assets/team/alexios-damaskinos.jpg";

// Easy to edit team members array
const teamMembers = [
  {
    name: "Panagiotis Mantouvalos",
    role: "Mechatronics Engineer",
    department: "Mechatronics",
    color: "cyan" as const,
    photo: panagiotisMantouvalosPhoto,
    linkedin: "https://www.linkedin.com/in/panos-mantouvalos/",
    email: "pmantouvalos@tuc.gr",
  },
  {
    name: "Eleni Charalampopoulou",
    role: "Project Leader",
    department: "Leadership",
    color: "blue" as const,
    photo: eleniCharalampopoulouPhoto,
    linkedin: "https://www.linkedin.com/in/panos-mantouvalos/",
    email: "echaralampopoulo@tuc.gr",
  },
  {
    name: "Maria Cookie",
    role: "Software Engineer",
    department: "Software",
    color: "green" as const,
    photo: mariaCookiePhoto,
    linkedin: "https://www.linkedin.com/in/panos-mantouvalos/",
    email: "mkouki@tuc.gr",
  },
  {
    name: "Giorgos Mantis",
    role: "AI Engineer",
    department: "Artificial Intelligence",
    color: "red" as const,
    photo: giorgosMantisPhoto,
    linkedin: "https://www.linkedin.com/in/panos-mantouvalos/",
    email: "gmantis@tuc.gr",
  },
  {
    name: "Alexios Damaskinos",
    role: "Software Engineer",
    department: "Software",
    color: "green" as const,
    photo: alexiosDamaskinosPhoto,
    linkedin: "https://www.linkedin.com/in/panos-mantouvalos/",
    email: "adamaskinos@tuc.gr",
  },
];

const colorClasses = {
  blue: {
    border: "border-neon-blue/50 hover:border-neon-blue",
    glow: "hover:shadow-[0_0_30px_hsl(200_100%_50%/0.3)]",
    text: "text-neon-blue",
    bg: "bg-neon-blue/10",
  },
  green: {
    border: "border-neon-green/50 hover:border-neon-green",
    glow: "hover:shadow-[0_0_30px_hsl(150_100%_45%/0.3)]",
    text: "text-neon-green",
    bg: "bg-neon-green/10",
  },
  red: {
    border: "border-neon-red/50 hover:border-neon-red",
    glow: "hover:shadow-[0_0_30px_hsl(0_100%_55%/0.3)]",
    text: "text-neon-red",
    bg: "bg-neon-red/10",
  },
  cyan: {
    border: "border-neon-cyan/50 hover:border-neon-cyan",
    glow: "hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]",
    text: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
  },
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-foreground">Our</span>{" "}
            <span className="neon-text-green">Team</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-green to-neon-blue" />
          <p className="mt-6 text-lg text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Meet the talented engineers driving innovation at TUC.io Drifters
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member) => {
            const colors = colorClasses[member.color];
            return (
              <div
                key={member.name}
                className={`glass-card rounded-xl p-6 border-2 ${colors.border} ${colors.glow} transition-all duration-500 group`}
              >
                {/* Photo or Avatar Placeholder */}
                <div className={`w-20 h-20 mx-auto rounded-full ${colors.bg} flex items-center justify-center mb-4 border-2 ${colors.border} overflow-hidden`}>
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className={`font-orbitron text-2xl font-bold ${colors.text}`}>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>

                <h3 className="font-orbitron text-lg font-bold text-foreground text-center mb-1">
                  {member.name}
                </h3>
                <p className={`text-sm font-rajdhani font-semibold text-center mb-1 ${colors.text}`}>
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground font-rajdhani text-center mb-4">
                  {member.department}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={16} className="text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors"
                      aria-label={`${member.name} Email`}
                    >
                      <Mail size={16} className="text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
