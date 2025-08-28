import { Heart, Code, ExternalLink, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">
              <span className="text-tech-green">©</span>SoftwareLabs
            </h3>
            <p className="text-muted-foreground">
              Fueling the Future with Code & Creativity
            </p>
          </div>

          {/* Organizational Structure */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-tech-green">Leadership</h4>
            <div className="space-y-2">
              <p className="text-foreground font-medium">FOUNDER/CHAIRPERSON - PARAS DHIMAN</p>
              <p className="text-foreground font-medium">FOUNDER/CHAIRPERSON - ARHAN SAHA</p>
            </div>
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
              <ExternalLink className="w-4 h-4" />
              softwarelabs.lovable.app
            </a>
            <a 
              href="mailto:softwarelabschd@gmail.com"
              className="flex items-center gap-2 text-cyber-purple hover:text-cyber-purple/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              softwarelabschd@gmail.com
            </a>
          </div>

          {/* Copyright and Restrictions */}
          <div className="space-y-4">
            <p className="text-foreground font-medium">BY-PARAS DHIMAN & ARHAN SAHA</p>
            
            <div className="text-sm text-muted-foreground space-y-2 max-w-2xl mx-auto">
              <p className="font-semibold">You are NOT allowed to:</p>
              <ul className="space-y-1 text-left">
                <li>• Sell, redistribute, or modify this software without written permission from SoftwareLabs.</li>
                <li>• Claim authorship or remove credits from the software.</li>
              </ul>
            </div>

            <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              <span>©SoftwareLabs – All Rights Reserved</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                Made with 
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                &
                <Code className="w-4 h-4 text-tech-green" />
              </span>
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-2 py-1 bg-secondary rounded">Python</span>
            <span className="px-2 py-1 bg-secondary rounded">JavaScript</span>
            <span className="px-2 py-1 bg-secondary rounded">HTML/CSS</span>
            <span className="px-2 py-1 bg-secondary rounded">UI/UX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;