import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to collaborate or learn more about our projects? 
          We'd love to hear from you and discuss the future of technology.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-card p-8 border-border/50 hover:border-tech-green/50 transition-all duration-500">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tech-green/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-tech-green" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Visit Our Website</h3>
              <p className="text-muted-foreground mb-6">
                Explore our complete portfolio and interactive projects
              </p>
              <Button variant="tech" size="lg" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                www.dhimanparas605.wixsite.com/pd-pythonfy
              </Button>
            </div>
          </Card>

          <Card className="bg-gradient-card p-8 border-border/50 hover:border-cyber-purple/50 transition-all duration-500">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-cyber-purple" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Direct Contact</h3>
              <p className="text-muted-foreground mb-6">
                Reach out to our founder directly for collaborations
              </p>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Paras Dhiman</p>
                <div className="space-y-2">
                  <Button variant="cyber" size="sm" className="w-full">
                    +91 99147 01780
                  </Button>
                  <Button variant="cyber" size="sm" className="w-full">
                    +91 70874 01780
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-card p-8 border-border/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Let's Build the Future Together</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're interested in our projects, want to collaborate, or have ideas to share, 
              we're always excited to connect with fellow innovators and tech enthusiasts.
            </p>
            <Button variant="hero" size="lg">
              Start a Conversation
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;