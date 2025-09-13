import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MatrixBackground from "@/components/MatrixBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import InteractiveEffects from "@/components/InteractiveEffects";
import CyberCube from "@/components/CyberCube";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground />
      <FloatingOrbs />
      <InteractiveEffects />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <CyberCube />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
