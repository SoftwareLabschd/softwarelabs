import { useState, lazy, Suspense, memo } from "react";
import Hero from "@/components/Hero";
import MatrixBackground from "@/components/MatrixBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import EnhancedFloatingShapes from "@/components/EnhancedFloatingShapes";
import InteractiveEffects from "@/components/InteractiveEffects";
import ParticleSystem from "@/components/ParticleSystem";
import ThemeSelector from "@/components/ThemeSelector";
import Preloader from "@/components/Preloader";
import StickyNav from "@/components/StickyNav";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SuspenseFallback from "@/components/SuspenseFallback";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Lazy load heavy sections for better performance
const AboutSection = lazy(() => import("@/components/AboutSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const CyberCube = lazy(() => import("@/components/CyberCube"));
const InteractivePlanet = lazy(() => import("@/components/InteractivePlanet"));

// Memoized auth button for performance
const AuthButton = memo(({ user }: { user: any }) => {
  if (user) {
    return <ProfileAvatar />;
  }
  return (
    <Button asChild variant="cyber" className="animate-pulse-glow">
      <Link to="/auth">
        <i className="fa-solid fa-right-to-bracket mr-2"></i>
        Login
      </Link>
    </Button>
  );
});

AuthButton.displayName = 'AuthButton';

const Index = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <SEOHead 
        title="©SoftwareLabs - Fueling the Future with Code & Creativity"
        description="SoftwareLabs is a digital innovation label led by young tech minds. We create educational, entertaining web tools."
        keywords={['software development', 'web development', 'React', 'JavaScript', 'Python', 'innovation', 'youth tech']}
      />
      
      <div className="min-h-screen bg-background relative animate-fade-in" id="main-content">
        {/* Sticky Navigation */}
        <StickyNav />
        
        {/* Initial Header with Auth/Profile */}
        <header className="fixed top-4 left-4 z-50" role="banner">
          <AuthButton user={user} />
        </header>
        
        <ThemeSelector />
        
        {/* Background Effects */}
        <MatrixBackground />
        <ParticleSystem />
        <FloatingOrbs />
        <EnhancedFloatingShapes />
        <div id="layer-effects" className="fixed inset-0 pointer-events-none z-[-25]" aria-hidden="true" />
        <InteractiveEffects />
        
        {/* Main Content */}
        <main>
          <section id="hero" className="relative z-10">
            <Hero />
          </section>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <section id="about" className="relative z-10">
              <Suspense fallback={<SuspenseFallback />}>
                <AboutSection />
              </Suspense>
            </section>
          </AnimatedSection>
          
          <AnimatedSection animation="scale" delay={150}>
            <section id="projects" className="relative z-10">
              <Suspense fallback={<SuspenseFallback />}>
                <ProjectsSection />
              </Suspense>
            </section>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <div className="relative z-10">
              <Suspense fallback={<SuspenseFallback />}>
                <InteractivePlanet />
              </Suspense>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="rotate" delay={150}>
            <div className="relative z-10">
              <Suspense fallback={<SuspenseFallback />}>
                <CyberCube />
              </Suspense>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <section id="team" className="relative z-10">
              <Suspense fallback={<SuspenseFallback />}>
                <TeamSection />
              </Suspense>
            </section>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={100}>
            <section id="contact" className="relative z-10">
              <Suspense fallback={<SuspenseFallback />}>
                <ContactSection />
              </Suspense>
            </section>
          </AnimatedSection>
        </main>
        
        <Suspense fallback={<SuspenseFallback />}>
          <Footer />
        </Suspense>
        
        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
