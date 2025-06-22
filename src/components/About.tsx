
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-12', '-translate-x-12', 'translate-x-12', 'scale-95', 'rotate-2', '-rotate-2');
        }
      });
    }, observerOptions);

    // Title animation - gentle slide down
    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0', 'translate-y-12', 'rotate-2', 'scale-95', 'transition-all', 'duration-800', 'ease-out', 'will-change-transform');
      observer.observe(titleRef.current);
    }

    // Content animation - gentle slide from left
    if (contentRef.current) {
      contentRef.current.classList.add('opacity-0', '-translate-x-12', 'scale-95', 'transition-all', 'duration-700', 'ease-out', 'delay-200', 'will-change-transform');
      observer.observe(contentRef.current);
    }

    // Stats animation with gentle stagger
    const statCards = statsRef.current?.querySelectorAll('.stat-card');
    statCards?.forEach((card, index) => {
      const element = card as HTMLElement;
      element.classList.add('opacity-0', 'transition-all', 'duration-600', 'ease-out', 'will-change-transform');
      element.style.transitionDelay = `${(index + 3) * 100}ms`;
      
      // Gentler animation for each stat card
      switch(index) {
        case 0: // Top-left: gentle slide from top-left
          element.classList.add('-translate-x-12', '-translate-y-12', '-rotate-2', 'scale-95');
          break;
        case 1: // Top-right: gentle slide from top-right
          element.classList.add('translate-x-12', '-translate-y-12', 'rotate-2', 'scale-95');
          break;
        case 2: // Bottom-left: gentle slide from bottom-left
          element.classList.add('-translate-x-12', 'translate-y-12', '-rotate-2', 'scale-95');
          break;
        case 3: // Bottom-right: gentle slide from bottom-right
          element.classList.add('translate-x-12', 'translate-y-12', 'rotate-2', 'scale-95');
          break;
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-red-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-red-600/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4 hover:text-red-300 transition-colors duration-500">About Me</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h3 className="text-2xl font-semibold text-white mb-6 hover:text-red-300 transition-colors duration-300">
              Crafting Digital Solutions with Passion
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              I'm a dedicated Full Stack Developer and Data Analyst with a passion for creating 
              innovative web applications and extracting meaningful insights from complex datasets. 
              My journey in technology has equipped me with a diverse skill set spanning both 
              frontend and backend development.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              With expertise in modern web frameworks like React, Angular, and backend technologies 
              including Python and Django, I build robust, scalable applications. My data analysis 
              skills complement my development work, allowing me to create data-driven solutions 
              that deliver real business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-red-400 hover:text-red-300 transition-colors duration-300 group">
                <span className="font-semibold group-hover:scale-105 inline-block transition-transform duration-200">Location:</span> 
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"> Available for Remote Work</span>
              </div>
              <div className="text-red-400 hover:text-red-300 transition-colors duration-300 group">
                <span className="font-semibold group-hover:scale-105 inline-block transition-transform duration-200">Email:</span> 
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"> Available upon request</span>
              </div>
            </div>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="stat-card text-center p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gray-800 border-red-600/30 hover:border-red-500 group cursor-pointer hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-400 mb-2 group-hover:text-red-300 group-hover:scale-110 transition-all duration-300">{stat.number}</div>
                  <div className="text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
