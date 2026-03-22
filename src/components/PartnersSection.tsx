import { Button } from "@/components/ui/button";
import NoonLogo from "@/assets/sponsors/noon_informatics.png";
import nanakisLogo from "@/assets/sponsors/nanakis.png";
import electrolisisLogo from "@/assets/sponsors/electrolisis.jpg";
import isomatLogo from "@/assets/sponsors/-_ISOMAT for a sustainable future -- Black Background.png";
import { Handshake, Mail } from "lucide-react";

const sponsors = [
  { name: "Noon Informatics", logo: NoonLogo, url: "https://noon.gr/", tier: "platinum" },
  { name: "isomat", logo: isomatLogo, url: "https://www.isomat.gr/", tier: "gold" },
  { name: "ΝΑΝΑΚΗΣ", logo: nanakisLogo, url: "https://nanakis.gr/", tier: "bronze" },
  { name: "ELECTROΛύσεις", logo: electrolisisLogo, url: "https://www.electrolysis.gr/", tier: "bronze" },
];

const tierStyles = {
  platinum: {
    border: "border-primary/50 hover:border-primary",
    glow: "hover:shadow-[0_0_50px_hsl(200_100%_50%/0.4)]",
    container: "min-w-[280px] md:min-w-[450px] p-10 md:p-16",
    imageH: "h-32 md:h-48",
    title: "text-primary text-2xl md:text-3xl",
    textColor: "text-primary"
  },
  gold: {
    border: "border-yellow-500/40 hover:border-yellow-400",
    glow: "hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]",
    container: "min-w-[240px] md:min-w-[350px] p-8",
    imageH: "h-24 md:h-32",
    title: "text-yellow-500 text-xl md:text-2xl",
    textColor: "text-yellow-500"
  },
  silver: {
    border: "border-slate-400/40 hover:border-slate-300",
    glow: "hover:shadow-[0_0_30px_rgba(148,163,184,0.3)]",
    container: "min-w-[200px] md:min-w-[280px] p-6",
    imageH: "h-20 md:h-24",
    title: "text-slate-300 text-lg md:text-xl",
    textColor: "text-slate-300"
  },
  bronze: {
    border: "border-orange-700/40 hover:border-orange-600",
    glow: "hover:shadow-[0_0_25px_rgba(194,120,57,0.2)]",
    container: "min-w-[180px] md:min-w-[240px] p-6",
    imageH: "h-16 md:h-20",
    title: "text-orange-600 text-lg",
    textColor: "text-orange-600"
  },
};

const PartnersSection = () => {
  const email = "echaralampopoulo@tuc.gr";
  const subject = "Sponsorship Inquiry for TUC.io Drifters";

  const RenderTier = (tierName) => {
    const filteredSponsors = sponsors.filter(s => s.tier === tierName);
    if (filteredSponsors.length === 0) return null;

    const styles = tierStyles[tierName];

    return (
      <div className="mb-20">
        <h3 className={`font-orbitron font-bold mb-10 text-center uppercase tracking-[0.2em] ${styles.title}`}>
          {tierName} Partners
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {filteredSponsors.map((sponsor, idx) => (
            <div
              key={`${tierName}-${idx}`}
              onClick={() => sponsor.url && window.open(sponsor.url, "_blank")}
              className={`
                glass-card relative overflow-hidden flex flex-col items-center justify-center 
                rounded-2xl border-2 transition-all duration-500 cursor-pointer group bg-background/80
                ${styles.border} ${styles.glow} ${styles.container}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {sponsor.logo ? (
                <div className="relative z-10 flex flex-col items-center">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className={`
                      ${styles.imageH} w-auto object-contain 
                      transition-all duration-500 
                      group-hover:scale-110 group-hover:-translate-y-2
                    `} 
                  />
                  <span className={`
                    mt-4 font-rajdhani font-bold tracking-wider opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500
                    ${styles.textColor}
                  `}>
                    {sponsor.name}
                  </span>
                </div>
              ) : (
                <div className="relative z-10 text-center">
                  <Handshake className={`${styles.textColor} mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity`} size={48} />
                  <p className={`font-rajdhani font-bold ${styles.textColor}`}>{sponsor.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="section-title mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="neon-text-blue">Partners</span>
          </h2>
          <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-neon-blue via-primary to-neon-green rounded-full" />
          <p className="mt-8 text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto italic">
            "Accelerating innovation through strategic collaboration"
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {RenderTier("platinum")}
          {RenderTier("gold")}
          {RenderTier("silver")}
          {RenderTier("bronze")}
        </div> 

        {/* CTA Section - Glow Removed */}
        <div className="mt-24">
          <div className="glass-card relative rounded-3xl p-10 md:p-16 border-2 border-white/10 max-w-4xl mx-auto text-center">
            <h3 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Join the</span>{" "}
              <span className="neon-text-green">Evolution</span>
            </h3>
            <p className="text-lg text-muted-foreground font-rajdhani mb-10 max-w-2xl mx-auto">
              Ready to showcase your brand alongside the future of autonomous mobility? 
              Let's build something extraordinary together.
            </p>
            <div className="flex justify-center">
              <Button variant="hero" size="lg" asChild className="px-10 py-7 text-lg hover:scale-105 transition-transform">
                <a href={`mailto:${email}?subject=${subject}`} className="inline-flex items-center gap-3">
                  <Mail size={24} />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;