import { Button } from "@/components/ui/button";
import { Terminal, Code2, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Terminal className="w-8 h-8 text-neon opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <Code2 className="w-6 h-6 text-purple-400 opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-2000">
        <Sparkles className="w-7 h-7 text-blue-400 opacity-60" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
        <div className="mb-6">
          <span className="text-neon text-lg font-mono tracking-wider glow-text" style={{ fontFamily: 'JetBrains Mono, monospace' }}>©SoftwareLabs</span>
        </div>
        
        <TypingAnimation 
          text="Fueling the Future"
          className="text-5xl md:text-7xl font-bold mb-2 leading-tight font-orbitron text-gradient-cosmic text-glow-animate"
          delay={1000}
          speed={80}
        />
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground font-rajdhani">
          with Code & Creativity
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-rajdhani">
          Where youthful genius meets transformative thinking. We create tools that 
          <span className="text-neon font-semibold"> educate</span>, 
          <span className="text-purple-400 font-semibold"> entertain</span>, and 
          <span className="text-blue-400 font-semibold"> empower</span> through innovative software design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="cyber-glow" size="lg" className="cta-enhanced font-orbitron animate-spring-in hover-lift stagger-1">
            <i className="fas fa-rocket mr-2"></i>
            Explore Projects
          </Button>
          <Button variant="tech-outline" size="lg" className="font-rajdhani animate-spring-in hover-glow stagger-2">
            <i className="fas fa-users mr-2"></i>
            Meet the Team
          </Button>
        </div>
        
        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl italic text-muted-foreground border-l-4 border-neon pl-4 mx-auto max-w-2xl animate-elastic-in stagger-3 glass p-6 rounded-lg backdrop-blur-md font-rajdhani">
            "Our code is not just written. It is <span className="text-neon font-semibold">crafted</span>."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;