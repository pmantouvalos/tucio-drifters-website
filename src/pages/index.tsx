import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LabSection from "@/components/LabSection";
import VehicleSection from "@/components/VehicleSection";
import BFMCSection from "@/components/BFMCSection";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LabSection />
        <VehicleSection />
        <BFMCSection />
        <TeamSection />
        <PartnersSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
