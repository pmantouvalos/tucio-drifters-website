import { Linkedin, Mail, GraduationCap } from "lucide-react";

// --- 1. IMPORT ΤΩΝ ΦΩΤΟΓΡΑΦΙΩΝ ΕΔΩ ---
// Βεβαιώσου ότι τα ονόματα των αρχείων είναι ΣΩΣΤΑ (png vs jpeg vs jpg)
import mantouvalosImg from "@/assets/team/mantouvalos.png";
import spandagosImg from "@/assets/team/spandagos.jpeg";
import androulakisImg from "@/assets/team/androulakis.jpeg";
import partsinevelosImg from "@/assets/team/partsinevelos.jpeg";
import alexImg from "@/assets/team/alex.png";
import giorgosImg from "@/assets/team/mantis.png";
import eleniImg from "@/assets/team/eleni.png";
import koukiImg from "@/assets/team/kouki.jpg";
import angelosImg from "@/assets/team/antonopoulos.png";

// --- TEAM DATA (Students - Αναδιάταξη με βάση την εικόνα) ---
const teamMembers = [
  {
    name: "Eleni Charalampopoulou",
    role: "Project Leader",
    department: "Leadership",
    color: "blue" as const,
    photo: eleniImg,
    linkedin: null,
    email: "echaralampopoulo@tuc.gr",
  },
  {
    name: "Maria Kouki",
    role: "Software Engineer",
    department: "Software",
    color: "green" as const,
    photo: koukiImg,
    linkedin: null,
    email: "mkouki@tuc.gr",
  },
  {
    name: "Alexios Damaskinos",
    role: "Software Engineer",
    department: "Software",
    color: "green" as const,
    photo: alexImg,
    linkedin: null,
    email: "adamaskinos@tuc.gr",
  },
  {
    name: "Giorgos Mantis",
    role: "AI Engineer",
    department: "Artificial Intelligence",
    color: "red" as const,
    photo: giorgosImg,
    linkedin: null,
    email: "gmantis@tuc.gr",
  },
  {
    name: "Panagiotis Mantouvalos",
    role: "Mechatronics Engineer",
    department: "Mechatronics",
    color: "cyan" as const,
    photo: mantouvalosImg, 
    linkedin: "https://www.linkedin.com/in/panos-mantouvalos/", 
    email: "pmantouvalos@tuc.gr",
  },
];

// --- ADVISORS DATA ---
const advisors = [
  {
    name: "Leonidas Spandagos",
    role: "Scientific Advisor",
    department: "Advisory Board",
    color: "orange" as const,
    photo: spandagosImg, 
    linkedin: "https://www.linkedin.com/in/leonidas-spandagos-78aa7a218/",
    email: "lspandagos@tuc.gr",
    scholar: null, 
  },
  {
    name: "Vasilis Androulakis",
    role: "Scientific Advisor",
    department: "Advisory Board",
    color: "orange" as const,
    photo: androulakisImg, 
    linkedin: "https://www.linkedin.com/in/vandroulakis/",
    email: "vandroulakis@tuc.gr",
    scholar: "https://scholar.google.com/citations?user=7PgY25gAAAAJ&hl=en",
  },
    {
    name: "Angelos Antonopoulos",
    role: "Scientific Advisor",
    department: "Advisory Board",
    color: "orange" as const,
    photo: angelosImg, 
    linkedin: "https://www.linkedin.com/in/angelos-antonopoulos-a4669a118/",
    email: "a_antonopoulos@tuc.gr",
    scholar: "https://scholar.google.gr/citations?user=Fx96MzgAAAAJ&hl=en",
  }
];

// --- MENTORS DATA ---
const mentors = [
  {
    name: "Panagiotis Partsinevelos",
    role: "Faculty Supervisor",
    department: "SenseLab Director",
    color: "purple" as const,
    photo: partsinevelosImg, 
    linkedin: null, 
    email: "ppartsi@tuc.gr",
    scholar: "https://scholar.google.com/citations?user=7lVomA0AAAAJ&hl=en",
  },
];

// Στυλ χρωμάτων
const colorClasses: any = {
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
  orange: {
    border: "border-orange-500/50 hover:border-orange-500",
    glow: "hover:shadow-[0_0_30px_hsl(30_100%_50%/0.3)]",
    text: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  purple: {
    border: "border-purple-500/50 hover:border-purple-500",
    glow: "hover:shadow-[0_0_30px_hsl(270_100%_50%/0.3)]",
    text: "text-purple-500",
    bg: "bg-purple-500/10",
  },
};

// Component Κάρτας
const MemberCard = ({ member }: { member: any }) => {
  const colors = colorClasses[member.color] || colorClasses.cyan;
  
  return (
    <div className={`glass-card rounded-xl p-6 border-2 ${colors.border} ${colors.glow} transition-all duration-500 group h-full`}>
      {/* Photo Placeholder */}
      <div className={`w-20 h-20 mx-auto rounded-full ${colors.bg} flex items-center justify-center mb-4 border-2 ${colors.border} overflow-hidden`}>
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <span className={`font-orbitron text-2xl font-bold ${colors.text}`}>
            {member.name.split(" ").map((n: string) => n[0]).join("")}
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
        {member.linkedin && member.linkedin !== "#" && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors">
            <Linkedin size={16} className="text-muted-foreground hover:text-primary" />
          </a>
        )}
        
        {member.linkedin === "#" && (
           <a href="#" className="p-2 rounded-full bg-muted/30 cursor-not-allowed">
             <Linkedin size={16} className="text-muted-foreground/50" />
           </a>
        )}

        {member.email && (
          <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors">
            <Mail size={16} className="text-muted-foreground hover:text-primary" />
          </a>
        )}
        
        {member.scholar && member.scholar !== "#" && (
          <a href={member.scholar} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors" aria-label="Google Scholar">
            <GraduationCap size={16} className="text-muted-foreground hover:text-primary" />
          </a>
        )}
         {member.scholar === "#" && (
           <a href="#" className="p-2 rounded-full bg-muted/30 cursor-not-allowed">
             <GraduationCap size={16} className="text-muted-foreground/50" />
           </a>
        )}
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- 1. OUR TEAM (Students) --- */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              <span className="text-foreground">Our</span>{" "}
              <span className="neon-text-green">Team</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-green to-neon-blue" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* --- 2. ADVISORS --- */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              <span className="neon-text-blue">Advisors</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-blue to-neon-green" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {advisors.map((member) => (
              <div key={member.name} className="w-full sm:w-[300px]">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* --- 3. MENTORS --- */}
        <div>
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              <span className="text-foreground">Mentors</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-neon-red" />
          </div>

          <div className="flex justify-center max-w-4xl mx-auto">
            <div className="w-full sm:w-[300px]">
              {mentors.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;