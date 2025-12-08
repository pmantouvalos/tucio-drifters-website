import { Button } from "@/components/ui/button";
import NvidiaLogo from "@/assets/sponsors/nvidia.png";
import GoogleLogo from "@/assets/sponsors/google.png";
import { Handshake, Mail } from "lucide-react";

// Easy to add/remove sponsors - just edit this array!
const sponsors: { name: string; logo?: string; url?: string; tier: "platinum" | "gold" | "silver" | "bronze" }[] = [
  { name: "Nvidia", logo: NvidiaLogo, url: "https://www.nvidia.com/", tier: "platinum" },
  { name: "Google", logo: GoogleLogo, url: "https://about.google/", tier: "platinum" }
];

// 15 sponsor slots with tier distribution: 2 platinum, 4 gold, 4 silver, 5 bronze
const sponsorSlots = [
  { tier: "platinum" as const, index: 1 },
  { tier: "platinum" as const, index: 2 },
  { tier: "gold" as const, index: 1 },
  { tier: "gold" as const, index: 2 },
  { tier: "gold" as const, index: 3 },
  { tier: "gold" as const, index: 4 },
  { tier: "silver" as const, index: 1 },
  { tier: "silver" as const, index: 2 },
  { tier: "silver" as const, index: 3 },
  { tier: "silver" as const, index: 4 },
  { tier: "bronze" as const, index: 1 },
  { tier: "bronze" as const, index: 2 },
  { tier: "bronze" as const, index: 3 },
  { tier: "bronze" as const, index: 4 },
  { tier: "bronze" as const, index: 5 },
];

const tierStyles = {
  platinum: {
    border: "border-primary/50 hover:border-primary",
    glow: "hover:shadow-[0_0_40px_hsl(200_100%_50%/0.4)]",
    text: "text-primary",
    label: "Platinum Partner",
    labelBg: "bg-primary/20",
  },
  gold: {
    border: "border-neon-green/50 hover:border-neon-green",
    glow: "hover:shadow-[0_0_30px_hsl(150_100%_45%/0.3)]",
    text: "text-neon-green",
    label: "Gold Partner",
    labelBg: "bg-neon-green/20",
  },
  silver: {
    border: "border-muted-foreground/30 hover:border-muted-foreground",
    glow: "hover:shadow-[0_0_20px_hsl(215_20%_65%/0.3)]",
    text: "text-muted-foreground",
    label: "Silver Partner",
    labelBg: "bg-muted-foreground/20",
  },
  bronze: {
    border: "border-neon-red/30 hover:border-neon-red/60",
    glow: "hover:shadow-[0_0_15px_hsl(0_100%_55%/0.2)]",
    text: "text-neon-red/80",
    label: "Bronze Partner",
    labelBg: "bg-neon-red/20",
  },
};

const PartnersSection = () => {
  // Map sponsors to slots by tier
  const getSponsorForSlot = (tier: string, index: number) => {
    const tierSponsors = sponsors.filter(s => s.tier === tier);
    return tierSponsors[index - 1];
  };

  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-foreground">Our</span>{" "}
            <span className="neon-text-blue">Partners</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-blue to-neon-green" />
          <p className="mt-6 text-lg text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            We're seeking partners who share our vision for the future of autonomous mobility
          </p>
        </div>

        {/* Tier Sections */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Platinum - 2 large slots */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-primary mb-4 text-center">Platinum Partners</h3>
            <div className="grid grid-cols-2 gap-6">
              {sponsorSlots.filter(s => s.tier === "platinum").map((slot) => {
                const sponsor = getSponsorForSlot(slot.tier, slot.index);
                const styles = tierStyles[slot.tier];
                return (
                  <div
                    key={`${slot.tier}-${slot.index}`}
                    onClick={() => sponsor?.url && window.open(sponsor.url, "_blank")}
                    className={`glass-card rounded-xl border-2 ${styles.border} ${styles.glow} h-40 flex items-center justify-center transition-all duration-500 cursor-pointer group bg-background/80`}
                  >
                    {sponsor ? (
                      <div className="text-center p-4">
                        {sponsor.logo ? (
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 max-w-full mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        ) : (
                          <Handshake className={`mx-auto ${styles.text} mb-2`} size={40} />
                        )}
                        <p className={`font-rajdhani font-semibold ${styles.text}`}>{sponsor.name}</p>
                      </div>
                    ) : (
                      <div className="text-center p-4">
                        <Handshake className={`mx-auto ${styles.text} opacity-30 mb-2`} size={40} />
                        <p className={`font-rajdhani text-sm ${styles.text} opacity-50`}>{styles.label}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gold - 4 medium slots */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-neon-green mb-4 text-center">Gold Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsorSlots.filter(s => s.tier === "gold").map((slot) => {
                const sponsor = getSponsorForSlot(slot.tier, slot.index);
                const styles = tierStyles[slot.tier];
                return (
                  <div
                    key={`${slot.tier}-${slot.index}`}
                    onClick={() => sponsor?.url && window.open(sponsor.url, "_blank")}
                    className={`glass-card rounded-xl border-2 ${styles.border} ${styles.glow} h-32 flex items-center justify-center transition-all duration-500 cursor-pointer group bg-background/80`}
                  >
                    {sponsor ? (
                      <div className="text-center p-3">
                        {sponsor.logo ? (
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-14 max-w-full mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        ) : (
                          <Handshake className={`mx-auto ${styles.text} mb-2`} size={32} />
                        )}
                        <p className={`font-rajdhani text-sm font-semibold ${styles.text}`}>{sponsor.name}</p>
                      </div>
                    ) : (
                      <div className="text-center p-3">
                        <Handshake className={`mx-auto ${styles.text} opacity-30 mb-2`} size={32} />
                        <p className={`font-rajdhani text-xs ${styles.text} opacity-50`}>{styles.label}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Silver - 4 medium slots */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-muted-foreground mb-4 text-center">Silver Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsorSlots.filter(s => s.tier === "silver").map((slot) => {
                const sponsor = getSponsorForSlot(slot.tier, slot.index);
                const styles = tierStyles[slot.tier];
                return (
                  <div
                    key={`${slot.tier}-${slot.index}`}
                    onClick={() => sponsor?.url && window.open(sponsor.url, "_blank")}
                    className={`glass-card rounded-xl border-2 ${styles.border} ${styles.glow} h-28 flex items-center justify-center transition-all duration-500 cursor-pointer group bg-background/80`}
                  >
                    {sponsor ? (
                      <div className="text-center p-3">
                        {sponsor.logo ? (
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-12 max-w-full mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        ) : (
                          <Handshake className={`mx-auto ${styles.text} mb-1`} size={28} />
                        )}
                        <p className={`font-rajdhani text-sm font-semibold ${styles.text}`}>{sponsor.name}</p>
                      </div>
                    ) : (
                      <div className="text-center p-3">
                        <Handshake className={`mx-auto ${styles.text} opacity-30 mb-1`} size={28} />
                        <p className={`font-rajdhani text-xs ${styles.text} opacity-50`}>{styles.label}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bronze - 5 small slots */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-neon-red/80 mb-4 text-center">Bronze Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {sponsorSlots.filter(s => s.tier === "bronze").map((slot) => {
                const sponsor = getSponsorForSlot(slot.tier, slot.index);
                const styles = tierStyles[slot.tier];
                return (
                  <div
                    key={`${slot.tier}-${slot.index}`}
                    onClick={() => sponsor?.url && window.open(sponsor.url, "_blank")}
                    className={`glass-card rounded-xl border-2 ${styles.border} ${styles.glow} h-24 flex items-center justify-center transition-all duration-500 cursor-pointer group bg-background/80`}
                  >
                    {sponsor ? (
                      <div className="text-center p-2">
                        {sponsor.logo ? (
                          <img src={sponsor.logo} alt={sponsor.name} className="max-h-10 max-w-full mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        ) : (
                          <Handshake className={`mx-auto ${styles.text} mb-1`} size={24} />
                        )}
                        <p className={`font-rajdhani text-xs font-semibold ${styles.text}`}>{sponsor.name}</p>
                      </div>
                    ) : (
                      <div className="text-center p-2">
                        <Handshake className={`mx-auto ${styles.text} opacity-30 mb-1`} size={24} />
                        <p className={`font-rajdhani text-xs ${styles.text} opacity-50`}>{styles.label}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card rounded-2xl p-8 md:p-12 border-2 border-primary/30 max-w-4xl mx-auto text-center mt-16">
          <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
            <span className="text-foreground">Become a</span>{" "}
            <span className="neon-text-green">Sponsor</span>
          </h3>
          
          <p className="text-lg text-muted-foreground font-rajdhani mb-8 max-w-2xl mx-auto">
            Partner with TUC.io Drifters and be part of the next generation of autonomous vehicle innovation. Your support helps us compete on the international stage and advance research in autonomous driving technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* ΕΔΩ ΕΓΙΝΕ Η ΑΛΛΑΓΗ - ΕΠΙΣΤΡΟΦΗ ΣΤΟ ΑΣΦΑΛΕΣ MAILTO */}
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:echaralampopoulo@tuc.gr" className="inline-flex items-center gap-2">
                <Mail size={20} />
                Contact Us
              </a>
            </Button>
            
            <Button variant="neonBlue" size="lg" asChild>
              <a href="#" className="inline-flex items-center gap-2">
                <Handshake size={20} />
                Sponsorship Tiers
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;