import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, MessageSquare, Keyboard, Sparkles, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fake Terminal Simulators",
      description: "Interactive hacking terminals that simulate real command-line environments. Educational tools that make learning cybersecurity concepts engaging and fun.",
      icon: Terminal,
      category: "Educational Simulation",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "tech-green"
    },
    {
      title: "Q&A Bots",
      description: "Intelligent conversational agents designed to provide instant responses and interactive learning experiences across various domains.",
      icon: MessageSquare,
      category: "AI & Interaction",
      tech: ["Python", "JavaScript"],
      color: "cyber-purple"
    },
    {
      title: "Code Typers",
      description: "Dynamic typing simulators that create the illusion of real-time programming. Perfect for presentations and educational demonstrations.",
      icon: Keyboard,
      category: "Interactive Tools",
      tech: ["JavaScript", "CSS"],
      color: "neural-blue"
    },
    {
      title: "Interactive UI Effects",
      description: "Stunning visual effects and animations that push the boundaries of what browsers can achieve. Creative showcase of modern web capabilities.",
      icon: Sparkles,
      category: "Visual Innovation",
      tech: ["CSS", "JavaScript", "HTML"],
      color: "tech-green"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We create tools that educate through interaction, entertain through illusion, 
            and empower users through exceptional UI experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.title} className={`
                bg-gradient-card p-8 border-border/50 hover:border-${project.color}/50 
                transition-all duration-500 hover:shadow-tech group animate-fade-in-up
              `} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`
                    w-12 h-12 rounded-lg bg-${project.color}/20 flex items-center justify-center 
                    group-hover:bg-${project.color}/30 transition-colors duration-300
                  `}>
                    <IconComponent className={`w-6 h-6 text-${project.color}`} />
                  </div>
                  <div className="flex-1">
                    <span className={`text-sm font-semibold text-${project.color} mb-2 block`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-tech-green hover:text-tech-green-glow">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;