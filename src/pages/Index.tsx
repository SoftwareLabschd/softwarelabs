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
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header with Auth/Profile */}
      <div className="fixed top-4 left-4 z-50">
        {user ? (
          <ProfileAvatar />
        ) : (
          <Button asChild variant="cyber" className="animate-pulse-glow">
            <Link to="/auth">Login</Link>
          </Button>
        )}
      </div>
      
      
      <ThemeSelector />
      <MatrixBackground />
      <ParticleSystem />
      <FloatingOrbs />
      <EnhancedFloatingShapes />
      <div id="layer-effects" className="fixed inset-0 pointer-events-none z-[-25]" />
      <InteractiveEffects />
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AboutSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <ProjectsSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <InteractivePlanet />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <CyberCube />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <TeamSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
