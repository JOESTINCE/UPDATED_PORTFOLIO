
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
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-24', '-translate-y-24', 'translate-x-24', '-translate-x-24', 'scale-95', 'rotate-3', '-rotate-3');
          }, index * 200);
        }
      });
    }, observerOptions);

    // Header animations with gentle spiral effect
    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0', '-translate-y-24', 'rotate-3', 'scale-95', 'transition-all', 'duration-900', 'ease-out', 'will-change-transform');
      observer.observe(titleRef.current);
    }

    if (descRef.current) {
      descRef.current.classList.add('opacity-0', 'translate-y-24', '-rotate-3', 'scale-95', 'transition-all', 'duration-900', 'ease-out', 'delay-300', 'will-change-transform');
      observer.observe(descRef.current);
    }

    // Project cards with gentle animations
    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card, index) => {
      const element = card as HTMLElement;
      element.classList.add('opacity-0', 'transition-all', 'duration-800', 'ease-out', 'will-change-transform');
      element.style.transitionDelay = `${(index + 2) * 250}ms`;

      // Gentle effect for each project card
      switch(index) {
        case 0: // First project: gentle slide from top-left
          element.classList.add('-translate-x-24', '-translate-y-24', 'rotate-3', 'scale-95');
          break;
        case 1: // Second project: gentle slide from top-right
          element.classList.add('translate-x-24', '-translate-y-24', '-rotate-3', 'scale-95');
          break;
        case 2: // Third project: gentle slide from bottom center
          element.classList.add('translate-y-24', 'rotate-3', 'scale-95');
          break;
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-600/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4 hover:text-red-300 transition-colors duration-500">Featured Projects</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
          <p ref={descRef} className="text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            A showcase of my recent work, demonstrating my skills in full stack development, 
            data analysis, and creating user-centered digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:scale-105 bg-gray-800 border-red-600/30 hover:border-red-500 group cursor-pointer hover:-translate-y-3 hover:rotate-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-red-300 transition-colors duration-300 group-hover:scale-102 inline-block">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gray-700 text-red-300 hover:bg-red-900/50 transition-all duration-300 border border-red-600/30 hover:scale-110 hover:shadow-md hover:shadow-red-500/50 cursor-pointer"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white flex-1 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/50 hover:-translate-y-1"
                  >
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-red-600 text-red-300 hover:bg-red-900/50 flex-1 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-400/30 hover:-translate-y-1"
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
