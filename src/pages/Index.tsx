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
import ParticleSystem from "@/components/ParticleSystem";
import ParallaxContainer from "@/components/ParallaxContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground />
      <ParticleSystem />
      <FloatingOrbs />
      <InteractiveEffects />
      <Hero />
      <ParallaxContainer speed={0.3}>
        <AboutSection />
      </ParallaxContainer>
      <ParallaxContainer speed={0.5}>
        <ProjectsSection />
      </ParallaxContainer>
      <ParallaxContainer speed={0.2}>
        <CyberCube />
      </ParallaxContainer>
      <ParallaxContainer speed={0.4}>
        <TeamSection />
      </ParallaxContainer>
      <ParallaxContainer speed={0.3}>
        <ContactSection />
      </ParallaxContainer>
      <Footer />
    </div>
  );
};

export default Index;
