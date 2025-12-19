import { useState } from "react";
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
import Preloader from "@/components/Preloader";
import StickyNav from "@/components/StickyNav";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background relative animate-fade-in">
      {/* Sticky Navigation */}
      <StickyNav />
      
      {/* Initial Header with Auth/Profile (visible before scroll) */}
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
      
      <div id="hero" className="relative z-10">
        <Hero />
      </div>
      <div id="about" className="relative z-10">
        <AboutSection />
      </div>
      <div id="projects" className="relative z-10">
        <ProjectsSection />
      </div>
      <div className="relative z-10">
        <InteractivePlanet />
      </div>
      <div className="relative z-10">
        <CyberCube />
      </div>
      <div id="team" className="relative z-10">
        <TeamSection />
      </div>
      <div id="contact" className="relative z-10">
        <ContactSection />
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
