import { Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-foreground">Follow Our</span>{" "}
            <span className="neon-text-blue">Journey</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />
        </div>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">

          {/* Instagram */}
          <div className="glass-card rounded-2xl p-8 border-2 border-border/50 text-center flex flex-col items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
              }}
            >
              <Instagram size={32} className="text-white" />
            </div>
            <div>
              <p className="font-orbitron font-bold text-foreground mb-1">Instagram</p>
              <p className="text-sm text-muted-foreground font-rajdhani">@tuc.io.drifters</p>
            </div>
            <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
              Behind-the-scenes moments, progress updates, and race day content.
            </p>
            <Button
              size="sm"
              className="mt-auto bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 transition-opacity text-white border-0 w-full"
              asChild
            >
              <a
                href="https://www.instagram.com/tuc.io.drifters/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} className="mr-2" />
                Follow us
              </a>
            </Button>
          </div>

          {/* YouTube */}
          <div className="glass-card rounded-2xl p-8 border-2 border-border/50 text-center flex flex-col items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "#FF0000" }}
            >
              <Youtube size={32} className="text-white" />
            </div>
            <div>
              <p className="font-orbitron font-bold text-foreground mb-1">YouTube</p>
              <p className="text-sm text-muted-foreground font-rajdhani">@TUCioDrifters</p>
            </div>
            <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
              Full runs, technical breakdowns, and competition footage from Cluj-Napoca.
            </p>
            <Button
              size="sm"
              className="mt-auto bg-[#FF0000] hover:bg-[#cc0000] transition-colors text-white border-0 w-full"
              asChild
            >
              <a
                href="https://www.youtube.com/@TUCioDrifters"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={16} className="mr-2" />
                Subscribe
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
