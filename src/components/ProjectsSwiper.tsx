import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

declare global {
  interface Window {
    Swiper: any;
  }
}

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
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper && swiperRef.current) {
        new window.Swiper('.projects-swiper', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });
      } else {
        setTimeout(initSwiper, 100);
      }
    };

    initSwiper();
  }, []);

  return (
    <div className="relative" ref={swiperRef}>
      <div className="swiper projects-swiper">
        <div className="swiper-wrapper">
          {projects.map((project, index) => (
            <div key={index} className="swiper-slide">
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
            </div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="swiper-button-next text-primary"></div>
        <div className="swiper-button-prev text-primary"></div>
        
        {/* Pagination */}
        <div className="swiper-pagination mt-8"></div>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: hsl(var(--primary));
        }
        
        .swiper-pagination-bullet {
          background: hsl(var(--primary));
        }
        
        .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
        }
      `}</style>
    </div>
  );
};
