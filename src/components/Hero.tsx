import { Button } from "@/components/ui/button";
import { Terminal, Code2, Sparkles, ChevronRight, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import TypingAnimation from "./TypingAnimation";
import GradientText from "./GradientText";
import EnhancedCard from "./EnhancedCard";

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
      
      {/* Enhanced Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 animate-pulse-glow text-tech-green">
          <Terminal size={32} className="animate-float delay-1000" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse-glow text-cyber-purple">
          <Code2 size={28} className="animate-float delay-2000" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-pulse-glow text-neural-blue">
          <Sparkles size={24} className="animate-float delay-3000" />
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-orbitron">
          <TypingAnimation 
            text="FUELING THE FUTURE" 
            className="animate-gradient-shift font-black tracking-wider"
            delay={500}
            speed={100}
          />
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-exo font-light">
          Innovative <GradientText font="jetbrains" className="font-semibold">Software Solutions</GradientText> for Tomorrow's Challenges
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto font-poppins">
          We are a team of passionate developers creating cutting-edge educational tools, 
          interactive experiences, and innovative web applications that push the boundaries of technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
        
        <EnhancedCard variant="glass" animation="shimmer" className="max-w-2xl mx-auto">
          <blockquote className="text-lg italic text-gray-300 font-poppins font-light">
            "Innovation distinguishes between a leader and a follower."
          </blockquote>
          <cite className="block mt-2 text-sm text-gray-500 font-jetbrains">- Steve Jobs</cite>
        </EnhancedCard>
      </div>
    </section>
  );
};

export default Hero;