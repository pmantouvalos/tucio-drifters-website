import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LabSection from "@/components/LabSection";
import VehicleSection from "@/components/VehicleSection";
import BFMCSection from "@/components/BFMCSection";
import InstagramSection from "@/components/InstagramSection";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import GlowCursor from "@/components/GlowCursor";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Reveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.08 }}
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);

const Aurora = () => (
  <div
    className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    aria-hidden
  >
    <div className="aurora-blob aurora-1" />
    <div className="aurora-blob aurora-2" />
    <div className="aurora-blob aurora-3" />
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <GlowCursor />
    <Aurora />
    <Navbar />
    <main>
      <HeroSection />
      <Reveal><AboutSection /></Reveal>
      <Reveal><LabSection /></Reveal>
      <Reveal><VehicleSection /></Reveal>
      <Reveal><BFMCSection /></Reveal>
      <Reveal><InstagramSection /></Reveal>
      <Reveal><TeamSection /></Reveal>
      <Reveal><PartnersSection /></Reveal>
      <Reveal><JoinSection /></Reveal>
    </main>
    <Footer />
  </div>
);

export default Index;
