import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, type Engine} from "@tsparticles/engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Αρχικοποίηση της μηχανής των particles (τρέχει μόνο μια φορά)
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine as any);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Ρυθμίσεις εμφάνισης (Cyberpunk Style)
  const options: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Όταν κάνεις κλικ προσθέτει particles
        },
        onHover: {
          enable: true,
          mode: "grab", // Όταν περνάς το ποντίκι συνδέονται οι γραμμές
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: ["#00f3ff", "#00ff9d"], // Neon Blue και Neon Green
      },
      links: {
        color: "#00f3ff", // Χρώμα γραμμών σύνδεσης
        distance: 150,
        enable: true,
        opacity: 0.2, // Χαμηλό opacity για να μην ενοχλεί το κείμενο
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1, // Αργή κίνηση για να είναι διακριτικό
        straight: false,
      },
      number: {
        density: {
          enable: true,
          // area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        // Το style εδώ είναι ΚΡΙΣΙΜΟ για να μπει πίσω από όλα
        className="absolute inset-0 z-[3]"
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;