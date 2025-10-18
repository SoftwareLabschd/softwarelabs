import { Card } from "@/components/ui/card";
import { Code, Users, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Code,
      title: "Crafted Code",
      description: "Every line of code is thoughtfully written and meticulously crafted for excellence."
    },
    {
      icon: Users,
      title: "Youth Innovation",
      description: "Powered by young minds bringing fresh perspectives to technology challenges."
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Bridging creativity with technology to solve problems in unique ways."
    },
    {
      icon: Rocket,
      title: "Future-Focused",
      description: "Building tools and experiences that shape the future of digital interaction."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-color-cyber">
                About SoftwareLabs
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                In an age defined by innovation and rapid digital evolution, ©SoftwareLabs stands 
                at the forefront of the modern technological renaissance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What began as a small initiative driven by curiosity has matured into a powerhouse 
                of youthful genius, transformative thinking, and purpose-driven software design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SoftwareLabs is a digital innovation label led by young tech minds. From fake hacking 
                consoles to Python simulations and interactive UI projects, we build creative, 
                educational, and entertaining web tools for everyone.
              </p>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className={`
                  bg-gradient-card p-6 border-border/50 hover:border-tech-green/50 
                  transition-all duration-500 hover:shadow-tech group animate-fade-in-up
                `} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-tech-green/20 flex items-center justify-center group-hover:bg-tech-green/30 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-tech-green" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-card p-12 border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-color-sunset">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We create tools that push the boundaries of what browsers can simulate, 
              making technology education accessible, engaging, and entertaining for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-2 animate-color-matrix">Educate</h4>
                <p className="text-muted-foreground">Through interactive learning experiences</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 animate-color-purple-pink">Entertain</h4>
                <p className="text-muted-foreground">Through immersive simulations and illusions</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 animate-color-ocean">Empower</h4>
                <p className="text-muted-foreground">Through exceptional UI experiences</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;