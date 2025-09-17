import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MatrixBackground from "@/components/MatrixBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import EnhancedFloatingShapes from "@/components/EnhancedFloatingShapes";
import InteractiveEffects from "@/components/InteractiveEffects";
import CyberCube from "@/components/CyberCube";
import ParticleSystem from "@/components/ParticleSystem";
import InteractivePlanet from "@/components/InteractivePlanet";
import ThemeSelector from "@/components/ThemeSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ThemeSelector />
      <MatrixBackground />
      <ParticleSystem />
      <FloatingOrbs />
      <EnhancedFloatingShapes />
      <div id="layer-effects" className="fixed inset-0 pointer-events-none z-[-25]" />
      <InteractiveEffects />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <InteractivePlanet />
      <CyberCube />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
