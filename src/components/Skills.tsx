
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "bg-gray-800 border-red-600/30",
      icon: "🎨"
    },
    {
      title: "Backend Development",
      skills: ["Python", "Django", "Node.js", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
      color: "bg-gray-800 border-red-600/30",
      icon: "⚙️"
    },
    {
      title: "Data Analysis & ML",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "SQL", "Power BI"],
      color: "bg-gray-800 border-red-600/30",
      icon: "📊"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "VS Code", "Jupyter", "Postman", "Linux", "Agile"],
      color: "bg-gray-800 border-red-600/30",
      icon: "🛠️"
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
            entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
          }, index * 150); // Staggered animation
        }
      });
    }, observerOptions);

    const cards = sectionRef.current?.querySelectorAll('.skill-card');
    const headerElements = [titleRef.current, descRef.current];

    [...headerElements, ...(cards || [])].forEach((el, index) => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-12', 'scale-95', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4 hover:text-red-300 transition-colors duration-500">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
          <p ref={descRef} className="text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences and data-driven solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`skill-card ${category.color} hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:scale-105 hover:border-red-500 group cursor-pointer hover:-translate-y-3`}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">{category.icon}</div>
                <CardTitle className="text-xl text-white group-hover:text-red-300 transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-gray-700 text-red-300 hover:bg-red-900/50 transition-all duration-300 border border-red-600/30 hover:scale-110 hover:shadow-md hover:shadow-red-500/50 cursor-pointer"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
