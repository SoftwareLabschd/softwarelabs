import { Button } from "@/components/ui/button";
import { Terminal, Code2, Sparkles, ChevronRight, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import TypingAnimation from "./TypingAnimation";
import GradientText from "./GradientText";
import EnhancedCard from "./EnhancedCard";
import { useGsap } from "@/hooks/useGsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRef = useGsap<HTMLDivElement>({ animation: "fadeInDown", duration: 1, delay: 0.2, scrollTrigger: false });
  const headingRef = useGsap<HTMLHeadingElement>({ animation: "scale", duration: 1.2, delay: 0.5, scrollTrigger: false });
  const subtitleRef = useGsap<HTMLParagraphElement>({ animation: "fadeInUp", duration: 0.8, delay: 0.8, scrollTrigger: false });
  const descriptionRef = useGsap<HTMLParagraphElement>({ animation: "fadeIn", duration: 0.8, delay: 1, scrollTrigger: false });
  const buttonsRef = useGsap<HTMLDivElement>({ animation: "fadeInUp", duration: 0.8, delay: 1.2, scrollTrigger: false });
  const quoteRef = useGsap<HTMLDivElement>({ animation: "scale", duration: 1, delay: 1.5, scrollTrigger: false });

  // Floating icons parallax effect on scroll
  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const icons = sectionRef.current?.querySelectorAll('.floating-icon');
    if (icons) {
      icons.forEach((icon, index) => {
        gsap.to(icon, {
          y: -100 - (index * 30),
          rotation: 360,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Enhanced Floating Tech Icons with GSAP Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-icon absolute top-1/4 left-1/6 animate-pulse-glow text-tech-green">
          <Terminal size={32} className="animate-float delay-1000" />
        </div>
        <div className="floating-icon absolute top-1/3 right-1/4 animate-pulse-glow text-cyber-purple">
          <Code2 size={28} className="animate-float delay-2000" />
        </div>
        <div className="floating-icon absolute bottom-1/3 left-1/3 animate-pulse-glow text-neural-blue">
          <Sparkles size={24} className="animate-float delay-3000" />
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* SOFTWARELABS Brand */}
        <div ref={brandRef} className="mb-8">
          <GradientText 
            font="jetbrains" 
            animation="shift" 
            className="text-2xl md:text-3xl font-bold tracking-[0.2em] mb-2"
          >
            ©SOFTWARELABS
          </GradientText>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow"></div>
        </div>

        <h1 ref={headingRef} className="text-6xl md:text-8xl font-bold mb-6 font-orbitron">
          <TypingAnimation 
            text="FUELING THE FUTURE" 
            className="animate-gradient-shift font-black tracking-wider"
            delay={500}
            speed={100}
          />
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-4 font-exo font-light">
          Innovative <GradientText font="jetbrains" className="font-semibold">Software Solutions</GradientText> for Tomorrow's Challenges
        </p>
        
        <p ref={descriptionRef} className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto font-poppins">
          We are a team of passionate developers creating cutting-edge educational tools, 
          interactive experiences, and innovative web applications that push the boundaries of technology.
        </p>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-rajdhani font-semibold tracking-wide animate-shimmer">
            <span className="mr-2">Explore Projects</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group border-2 border-white/30 text-white hover:bg-white/10 font-rajdhani font-semibold tracking-wide glass-card"
          >
            <Users className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Meet the Team
          </Button>
        </div>
        
        <div ref={quoteRef}>
          <EnhancedCard variant="glass" animation="shimmer" className="max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-gray-300 font-poppins font-light">
              "Innovation distinguishes between a leader and a follower."
            </blockquote>
            <cite className="block mt-2 text-sm text-gray-500 font-jetbrains">- Steve Jobs</cite>
          </EnhancedCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
