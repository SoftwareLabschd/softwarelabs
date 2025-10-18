import { Card } from "@/components/ui/card";
import { Code, Search, Palette } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Paras Dhiman",
      role: "Founder/Chairperson",
      description: "Coding prodigy and architect of SoftwareLabs, bridging creativity with code.",
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      projects: ["Fake Terminal Simulators", "Q&A Bots", "Code Typers", "Interactive UI Effects"],
      icon: Code,
      gradient: "from-tech-green to-cyber-purple"
    },
    {
      name: "Arhan Saha",
      role: "Founder/Chairperson",
      description: "Bug spotter and logic debugger who ensures every idea is stable before release. Precision and test reports help polish each build.",
      focus: "Bug Reporter & Feature Analyst",
      icon: Search,
      gradient: "from-cyber-purple to-neural-blue"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-shift">
            Meet the Minds
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Young tech innovators pushing the boundaries of what's possible in software development
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card key={member.name} className={`
                bg-gradient-card p-8 border-border/50 hover:border-tech-green/50 
                transition-all duration-500 hover:shadow-tech group animate-fade-in-up
              `} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-center mb-6">
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} 
                    flex items-center justify-center group-hover:animate-glow-pulse
                  `}>
                    <IconComponent className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-tech-green font-semibold mb-1">{member.role}</p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.description}
                </p>

                {member.skills && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {member.projects && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Notable Projects</h4>
                    <ul className="space-y-1">
                      {member.projects.map((project) => (
                        <li key={project} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-tech-green rounded-full mr-2"></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.focus && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Focus Area</h4>
                    <p className="text-sm text-muted-foreground">{member.focus}</p>
                  </div>
                )}

              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;