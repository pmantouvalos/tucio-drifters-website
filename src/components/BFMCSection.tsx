import { useState, useEffect, useRef } from "react";
import { Trophy, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

const stats = [
  { icon: Calendar, value: "2026", countTo: 2026, label: "Competition Year" },
  { icon: Users, value: "5", countTo: 5, label: "Team Members" },
  { icon: MapPin, value: "Romania", countTo: null, label: "Cluj-Napoca" },
  { icon: Trophy, value: "PRE-FINALS", countTo: null, label: "Qualified!" },
];

// UPDATE this to the actual competition start date
const COMPETITION_DATE = new Date("2026-05-20T09:00:00");

function useCountdown(target: Date) {
  const getTimeLeft = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(getTimeLeft);
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function StatValue({
  value,
  countTo,
  active,
}: {
  value: string;
  countTo: number | null;
  active: boolean;
}) {
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!active || countTo === null) return;
    let step = 0;
    const steps = 60;
    const timer = setInterval(() => {
      step++;
      const current = Math.floor((countTo / steps) * step);
      if (step >= steps) {
        setDisplayed(String(countTo));
        clearInterval(timer);
      } else {
        setDisplayed(String(current));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [active, countTo]);

  if (countTo === null) return <>{value}</>;
  return <>{active ? displayed : "0"}</>;
}

const BFMCSection = () => {
  const countdown = useCountdown(COMPETITION_DATE);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="bfmc" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="neon-text-blue">Bosch</span>{" "}
            <span className="text-foreground">Future Mobility</span>{" "}
            <span className="neon-text-red">Challenge</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-blue via-neon-green to-neon-red" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 border-2 border-border/50 mb-12">
            <h3 className="font-orbitron text-xl md:text-2xl font-bold mb-6 text-center">
              <span className="text-foreground">The</span>{" "}
              <span className="neon-text-green">Competition</span>
            </h3>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed mb-6 text-center">
              The{" "}
              <span className="text-neon-blue font-semibold">
                Bosch Future Mobility Challenge
              </span>{" "}
              is an international technical competition initiated by Bosch
              Engineering Center Cluj in 2017. Teams from universities worldwide
              develop{" "}
              <span className="text-neon-green font-semibold">
                autonomous driving and connectivity algorithms
              </span>{" "}
              on 1:10 scale vehicles to navigate a miniature smart city.
            </p>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed text-center">
              <span className="text-neon-red font-semibold">
                We qualified for the 2026 pre-finals
              </span>{" "}
              — and we are heading to Cluj-Napoca, Romania! Our team is ready to
              compete and showcase the autonomous driving solutions developed at
              the Technical University of Crete.
            </p>
          </div>

          {/* Stats Grid with animated counters */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat) => (
              <TiltCard
                key={stat.label}
                className="glass-card rounded-xl p-6 border border-border/50 text-center hover:border-primary/50"
              >
                <stat.icon size={28} className="text-primary mx-auto mb-3" />
                <p className="font-orbitron text-2xl md:text-3xl font-bold neon-text-blue mb-1">
                  <StatValue
                    value={stat.value}
                    countTo={stat.countTo}
                    active={statsVisible}
                  />
                </p>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  {stat.label}
                </p>
              </TiltCard>
            ))}
          </div>

          {/* Countdown */}
          <div className="mb-12">
            <p className="font-orbitron text-center text-xs text-muted-foreground tracking-widest mb-4">
              TIME UNTIL COMPETITION
            </p>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { value: countdown.days, label: "DAYS" },
                { value: countdown.hours, label: "HRS" },
                { value: countdown.minutes, label: "MIN" },
                { value: countdown.seconds, label: "SEC" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl p-2 sm:p-4 border border-neon-blue/30 text-center"
                >
                  <p className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold neon-text-blue">
                    {String(value).padStart(2, "0")}
                  </p>
                  <p className="font-orbitron text-[9px] sm:text-[10px] text-muted-foreground mt-1 tracking-widest">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <MagneticButton>
              <Button variant="neonBlue" size="lg" asChild>
                <a
                  href="http://boschfuturemobility.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More About BFMC
                </a>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BFMCSection;
