import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: "AI Terminal Simulator",
    description: "An interactive fake hacking terminal with realistic command responses and visual effects.",
    tags: ["JavaScript", "CSS", "Terminal"],
    github: "#",
    demo: "#",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Q&A Bot Platform",
    description: "Smart conversational bot powered by AI for educational and support purposes.",
    tags: ["Python", "AI/ML", "NLP"],
    github: "#",
    demo: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Interactive UI Effects",
    description: "Collection of modern web animations and interactive UI components.",
    tags: ["React", "Three.js", "GSAP"],
    github: "#",
    demo: "#",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Code Playground",
    description: "Browser-based code editor with live preview and syntax highlighting.",
    tags: ["TypeScript", "Monaco", "WebAssembly"],
    github: "#",
    demo: "#",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Real-time Collaboration Tool",
    description: "Collaborative whiteboard with real-time sync and drawing tools.",
    tags: ["WebRTC", "Socket.io", "Canvas"],
    github: "#",
    demo: "#",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const ProjectsSwiper = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3500,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${project.gradient} mb-4`} />
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-primary border-primary/50 hover:bg-primary/10" />
      <CarouselNext className="text-primary border-primary/50 hover:bg-primary/10" />
    </Carousel>
  );
};
