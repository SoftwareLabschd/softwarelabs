import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              <span className="text-tech-green">©</span>SoftwareLabs
            </h3>
            <p className="text-muted-foreground">
              Fueling the Future with Code & Creativity
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto"></div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              <span>©SoftwareLabs – All Rights Reserved</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                Made by Paras Dhiman with 
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                &
                <Code className="w-4 h-4 text-tech-green" />
              </span>
            </p>
            <p className="text-sm text-muted-foreground/80">
              Leading the modern technological renaissance through youthful innovation
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