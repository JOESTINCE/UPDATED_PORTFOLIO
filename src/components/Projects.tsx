
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const projects = [
    {
      title: "E-Commerce Analytics Platform",
      description: "A comprehensive dashboard for analyzing e-commerce data with real-time insights, sales forecasting, and customer behavior analysis.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["React", "Python", "Django", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["Angular", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with multiple chart types, filtering options, and export capabilities.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["React", "D3.js", "Python", "Flask", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, index * 150); // Stagger the animations
        }
      });
    }, observerOptions);

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    const headerElements = [titleRef.current, descRef.current];

    [...headerElements, ...(cards || [])].forEach((el) => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p ref={descRef} className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full stack development, 
            data analysis, and creating user-centered digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 hover:scale-105 bg-gray-800 border-red-600/30 hover:border-red-500 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-red-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-red-300 transition-colors duration-300">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gray-700 text-red-300 hover:bg-red-900/50 transition-all duration-200 border border-red-600/30 hover:scale-110 hover:shadow-md"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white flex-1 hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-red-600/50"
                  >
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-red-600 text-red-300 hover:bg-red-900/50 flex-1 hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-red-400/30"
                  >
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
