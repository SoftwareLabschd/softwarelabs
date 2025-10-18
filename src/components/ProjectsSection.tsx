import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, MessageSquare, Keyboard, Sparkles, ExternalLink } from "lucide-react";
import { ProjectsSwiper } from "./ProjectsSwiper";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-shift" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Our Projects
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
                glass-strong p-8 hover-lift animate-spring-in stagger-${index + 1}
                transition-all duration-500 hover:border-cyan-400/40 group
              `} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="
                    w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center 
                    group-hover:scale-110 hover-glow transition-all duration-300
                  ">
                    <IconComponent className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-neon mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 glass text-secondary-foreground rounded-full text-sm hover-scale">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-tech-green hover:text-tech-green-glow hover-lift">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Projects Swiper */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 animate-gradient-shift">
            Featured Projects
          </h3>
          <ProjectsSwiper />
        </div>

        <div className="text-center">
          <Button variant="cyber-glow" size="lg" className="group hover-lift animate-elastic-in delay-3000">
            <i className="fas fa-folder-open mr-2"></i>
            View All Projects
            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;