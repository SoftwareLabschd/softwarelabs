import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - replace with actual newsletter service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
    setIsLoading(false);
  };

  return (
    <footer className="bg-background border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-3xl font-bold mb-2 animate-gradient-shift">
              <i className="fa-solid fa-code text-tech-green mr-2"></i>
              ©SoftwareLabs
            </h3>
            <p className="text-muted-foreground animate-gradient-shift">
              <i className="fa-solid fa-rocket text-cyber-purple mr-2"></i>
              Fueling the Future with Code & Creativity
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-tech-green/20 hover:text-tech-green transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="fa-brands fa-github text-xl"></i>
            </div>
            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-neural-blue/20 hover:text-neural-blue transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="fa-brands fa-x-twitter text-xl"></i>
            </div>
            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="fa-brands fa-linkedin-in text-xl"></i>
            </div>
            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-pink-500/20 hover:text-pink-500 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="fa-brands fa-instagram text-xl"></i>
            </div>
            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-red-500/20 hover:text-red-500 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="fa-brands fa-youtube text-xl"></i>
            </div>
            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-indigo-500/20 hover:text-indigo-500 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="fa-brands fa-discord text-xl"></i>
            </div>
          </div>

          {/* Organizational Structure */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold animate-gradient-shift">
              <i className="fa-solid fa-users-gear text-tech-green mr-2"></i>
              Leadership
            </h4>
            <div className="space-y-2">
              <p className="text-foreground font-medium">
                <i className="fa-solid fa-user-tie text-cyber-purple mr-2"></i>
                FOUNDER/CHAIRPERSON - PARAS DHIMAN
              </p>
              <p className="text-foreground font-medium">
                <i className="fa-solid fa-user-tie text-cyber-purple mr-2"></i>
                FOUNDER/CHAIRPERSON - ARHAN SAHA
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-secondary/30 rounded-xl p-6 max-w-md mx-auto border border-border/50">
            <h4 className="text-lg font-semibold mb-2 animate-gradient-shift">
              <i className="fa-solid fa-envelope-open-text text-tech-green mr-2"></i>
              Subscribe to Our Newsletter
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest updates, tips, and news from SoftwareLabs.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="softwarelabs.lovable.app"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 border-border/50"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-tech-green hover:bg-tech-green/80 text-background"
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  <i className="fa-solid fa-paper-plane"></i>
                )}
              </Button>
            </form>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto"></div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://softwarelabs.lovable.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tech-green hover:text-tech-green/80 transition-colors"
            >
              <i className="fa-solid fa-globe"></i>
              softwarelabs.lovable.app
            </a>
            <a 
              href="mailto:softwarelabschd@gmail.com"
              className="flex items-center gap-2 text-cyber-purple hover:text-cyber-purple/80 transition-colors"
            >
              <i className="fa-solid fa-envelope"></i>
              softwarelabschd@gmail.com
            </a>
          </div>

          {/* Copyright and Restrictions */}
          <div className="space-y-4">
            <p className="text-foreground font-medium">
              <i className="fa-solid fa-pen-nib text-tech-green mr-2"></i>
              BY-PARAS DHIMAN & ARHAN SAHA
            </p>
            
            <div className="text-sm text-muted-foreground space-y-2 max-w-2xl mx-auto">
              <p className="font-semibold">
                <i className="fa-solid fa-ban text-red-500 mr-2"></i>
                You are NOT allowed to:
              </p>
              <ul className="space-y-1 text-left">
                <li><i className="fa-solid fa-xmark text-red-500 mr-2"></i>Sell, redistribute, or modify this software without written permission from SoftwareLabs.</li>
                <li><i className="fa-solid fa-xmark text-red-500 mr-2"></i>Claim authorship or remove credits from the software.</li>
              </ul>
            </div>

            <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              <span><i className="fa-solid fa-copyright mr-1"></i>SoftwareLabs – All Rights Reserved</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                Made with 
                <i className="fa-solid fa-heart text-red-500 animate-pulse"></i>
                &
                <i className="fa-solid fa-code text-tech-green"></i>
              </span>
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span className="px-3 py-1.5 bg-secondary rounded-full flex items-center gap-2">
              <i className="fa-brands fa-python text-yellow-400"></i>
              Python
            </span>
            <span className="px-3 py-1.5 bg-secondary rounded-full flex items-center gap-2">
              <i className="fa-brands fa-js text-yellow-300"></i>
              JavaScript
            </span>
            <span className="px-3 py-1.5 bg-secondary rounded-full flex items-center gap-2">
              <i className="fa-brands fa-html5 text-orange-500"></i>
              HTML/CSS
            </span>
            <span className="px-3 py-1.5 bg-secondary rounded-full flex items-center gap-2">
              <i className="fa-solid fa-wand-magic-sparkles text-cyber-purple"></i>
              UI/UX
            </span>
            <span className="px-3 py-1.5 bg-secondary rounded-full flex items-center gap-2">
              <i className="fa-brands fa-react text-cyan-400"></i>
              React
            </span>
          </div>

          {/* Made in India */}
          <div className="pt-5">
            <div className="text-center pt-3">
              <span className="text-muted-foreground">
                Made with <i className="fa-solid fa-heart text-red-500"></i> love in 
                <span className="ml-1 inline-flex items-center">
                  <i className="fa-solid fa-flag text-orange-500"></i>
                  <span className="ml-1 font-semibold text-foreground">India</span>
                </span>
              </span>
            </div>
          </div>

          {/* Copyright Footer Note */}
          <p className="text-center text-muted-foreground border-b border-border pb-3">
            <small>
              <i className="fa-solid fa-shield-halved text-tech-green mr-2"></i>
              All Information is Copyrighted By SoftwareLabs | ©️SoftwareLabs | Paras | Arhan
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;