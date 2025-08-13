import { Button } from "@/components/ui/button";
import { Terminal, Code2, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

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
        <Terminal className="w-8 h-8 text-tech-green opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <Code2 className="w-6 h-6 text-cyber-purple opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-2000">
        <Sparkles className="w-7 h-7 text-neural-blue opacity-60" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
        <div className="mb-6">
          <span className="text-tech-green text-lg font-mono tracking-wider">©SoftwareLabs</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Fueling the Future
          </span>
          <br />
          <span className="text-foreground">with Code & Creativity</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Where youthful genius meets transformative thinking. We create tools that 
          <span className="text-tech-green"> educate</span>, 
          <span className="text-cyber-purple"> entertain</span>, and 
          <span className="text-neural-blue"> empower</span> through innovative software design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="animate-glow-pulse">
            Explore Projects
          </Button>
          <Button variant="tech-outline" size="lg">
            Meet the Team
          </Button>
        </div>
        
        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl italic text-muted-foreground border-l-4 border-tech-green pl-4 mx-auto max-w-2xl">
            "Our code is not just written. It is crafted."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;