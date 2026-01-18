import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-shift">
          <i className="fa-solid fa-comments text-tech-green mr-3"></i>
          Get in Touch
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to collaborate or learn more about our projects? 
          We'd love to hear from you and discuss the future of technology.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-card p-8 border-border/50 hover:border-tech-green/50 transition-all duration-500">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tech-green/20 flex items-center justify-center">
                <i className="fa-solid fa-globe text-3xl text-tech-green"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 animate-gradient-shift">Visit Our Website</h3>
              <p className="text-muted-foreground mb-6">
                Explore our complete portfolio and interactive projects
              </p>
              <Button variant="tech" size="lg" className="w-full">
                <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                www.dhimanparas605.wixsite.com/pd-pythonfy
              </Button>
            </div>
          </Card>

          <Card className="bg-gradient-card p-8 border-border/50 hover:border-cyber-purple/50 transition-all duration-500">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                <i className="fa-solid fa-envelope text-3xl text-cyber-purple"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 animate-gradient-shift">Direct Contact</h3>
              <p className="text-muted-foreground mb-6">
                Reach out to our founder directly for collaborations
              </p>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <i className="fa-solid fa-user mr-2"></i>
                  Paras Dhiman
                </p>
                <Button variant="cyber" size="lg" className="w-full">
                  <i className="fa-solid fa-paper-plane mr-2"></i>
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Social Connect Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-gradient-card p-4 border-border/50 hover:border-foreground/30 transition-all duration-300 group cursor-pointer">
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-github text-3xl mb-2 group-hover:text-foreground transition-colors"></i>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
            </div>
          </Card>
          <Card className="bg-gradient-card p-4 border-border/50 hover:border-neural-blue/50 transition-all duration-300 group cursor-pointer">
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-x-twitter text-3xl mb-2 group-hover:text-neural-blue transition-colors"></i>
              <span className="text-sm text-muted-foreground group-hover:text-neural-blue transition-colors">Twitter</span>
            </div>
          </Card>
          <Card className="bg-gradient-card p-4 border-border/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-linkedin text-3xl mb-2 group-hover:text-blue-500 transition-colors"></i>
              <span className="text-sm text-muted-foreground group-hover:text-blue-500 transition-colors">LinkedIn</span>
            </div>
          </Card>
          <Card className="bg-gradient-card p-4 border-border/50 hover:border-indigo-500/50 transition-all duration-300 group cursor-pointer">
            <div className="flex flex-col items-center">
              <i className="fa-brands fa-discord text-3xl mb-2 group-hover:text-indigo-500 transition-colors"></i>
              <span className="text-sm text-muted-foreground group-hover:text-indigo-500 transition-colors">Discord</span>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-card p-8 border-border/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 animate-gradient-shift">
              <i className="fa-solid fa-handshake text-tech-green mr-2"></i>
              Let's Build the Future Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're interested in our projects, want to collaborate, or have ideas to share, 
              we're always excited to connect with fellow innovators and tech enthusiasts.
            </p>
            <Button variant="hero" size="lg">
              <i className="fa-solid fa-message mr-2"></i>
              Start a Conversation
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;