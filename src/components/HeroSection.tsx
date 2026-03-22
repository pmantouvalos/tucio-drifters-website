import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";

import heroImage1 from "@/assets/hero-car1.jpg";
import heroImage2 from "@/assets/hero-car2.jpg";
import heroImage3 from "@/assets/hero-car3.jpg";
import heroImage4 from "@/assets/hero-car4.jpg";
import teamLogo from "@/assets/transparent.png";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];
const TYPEWRITER_TEXT = "Autonomous. Driving. Innovation.";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const sliderOuterRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  // Slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter with keyboard click sound
  useEffect(() => {
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const audioCtx = new AudioCtxClass();

    // Try to unlock immediately (works if user has interacted with browser before)
    audioCtx.resume().catch(() => {});

    const playClick = () => {
      if (audioCtx.state !== "running") return;
      const now = audioCtx.currentTime;
      const sampleRate = audioCtx.sampleRate;

      // Sharp transient noise burst (the "click" of the key)
      const bufLen = Math.floor(sampleRate * 0.015);
      const buf = audioCtx.createBuffer(1, bufLen, sampleRate);
      const data = buf.getChannelData(0);
      for (let j = 0; j < bufLen; j++) {
        data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (sampleRate * 0.003));
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = buf;

      // Bandpass filter — shapes noise into a "clicky" mid-freq keyboard tone
      const bp = audioCtx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 4000;
      bp.Q.value = 0.8;

      const gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.35, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      noise.connect(bp);
      bp.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      noise.start(now);
      noise.stop(now + 0.05);

      // Soft body tone (low thud of keycap)
      const osc = audioCtx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.03);

      const oscGain = audioCtx.createGain();
      oscGain.gain.setValueAtTime(0.12, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(oscGain);
      oscGain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.035);
    };

    const unlock = () => {
      audioCtx.resume().catch(() => {});
    };
    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });

    let timer: ReturnType<typeof setInterval>;
    const delay = setTimeout(() => {
      let i = 0;
      timer = setInterval(() => {
        i++;
        setTyped(TYPEWRITER_TEXT.slice(0, i));
        playClick();
        if (i >= TYPEWRITER_TEXT.length) clearInterval(timer);
      }, 75);
    }, 600);
    return () => {
      clearTimeout(delay);
      clearInterval(timer);
    };
  }, []);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  // Mouse parallax (desktop only)
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (sliderOuterRef.current) {
        sliderOuterRef.current.style.transform = `translate(${x * -18}px, ${y * -12}px) scale(1.08)`;
      }
      if (logoWrapperRef.current) {
        logoWrapperRef.current.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Slider background */}
      <div
        ref={sliderOuterRef}
        className="absolute inset-0 z-0"
        style={{ transition: "transform 0.15s ease-out" }}
      >
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background z-[1] pointer-events-none" />
      <div className="absolute inset-0 hero-gradient z-[1] pointer-events-none opacity-80" />
      <div className="absolute inset-0 grid-pattern opacity-30 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 md:pt-20">
        <div className="max-w-5xl mx-auto text-center">

          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-rajdhani tracking-widest uppercase bg-background/50 backdrop-blur-sm">
              SenseLab Research Team
            </span>
          </div>

          {/* Logo with parallax */}
          <div
            ref={logoWrapperRef}
            className="flex justify-center mb-6 md:mb-10 animate-fade-in"
            style={{ animationDelay: "0.1s", transition: "transform 0.2s ease-out" }}
          >
            <img
              src={teamLogo}
              alt="TUC.io Drifters Logo"
              className="w-44 h-44 sm:w-64 sm:h-64 md:w-[450px] md:h-[450px] object-contain drop-shadow-[0_0_35px_rgba(0,255,255,0.4)]"
            />
          </div>

          {/* Typewriter */}
          <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-foreground/90 mb-8 min-h-[1.4em]">
            {typed}
            <span
              className="text-primary"
              style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.1s" }}
            >|</span>
          </h2>

          <p
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-in font-rajdhani"
            style={{ animationDelay: "0.4s" }}
          >
            Pioneering autonomous driving solutions for the{" "}
            <span className="text-neon-red font-semibold">Bosch Future Mobility Challenge</span>
          </p>

          <div
            className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <MagneticButton>
              <Button variant="hero" size="xl" asChild className="min-w-[200px]">
                <a href="#about" onClick={(e) => handleScroll(e, "#about")}>Discover More</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="neonBlue" size="xl" asChild className="min-w-[200px]">
                <a href="#partners" onClick={(e) => handleScroll(e, "#partners")}>Become a Sponsor</a>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
