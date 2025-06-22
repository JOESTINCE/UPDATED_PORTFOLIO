
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of web applications using React and Django, implemented data visualization dashboards, and collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Django", "Python", "PostgreSQL", "AWS"]
    },
    {
      title: "Data Analyst",
      company: "DataTech Analytics",
      period: "2021 - 2022",
      description: "Analyzed large datasets to extract business insights, created interactive dashboards using Power BI, and automated data processing workflows using Python scripts.",
      technologies: ["Python", "Pandas", "Power BI", "SQL", "Excel"]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      period: "2020 - 2021",
      description: "Developed responsive web applications, collaborated on frontend design implementation, and gained experience in modern web development practices and version control.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Git", "Bootstrap"]
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
            entry.target.classList.remove('opacity-0', 'translate-y-12', 'translate-x-12');
          }, index * 200); // Staggered animation
        }
      });
    }, observerOptions);

    const cards = sectionRef.current?.querySelectorAll('.experience-card');
    const headerElements = [titleRef.current, descRef.current];
    const timeline = timelineRef.current;

    if (timeline) {
      timeline.classList.add('opacity-0', 'scale-y-0', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(timeline);
    }

    [...headerElements, ...(cards || [])].forEach((el, index) => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-700', 'ease-out');
        if (index % 2 === 0) {
          el.classList.add('translate-x-12');
        } else {
          el.classList.add('-translate-x-12');
        }
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500/30 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-red-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4 hover:text-red-300 transition-colors duration-500">Work Experience</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
          <p ref={descRef} className="text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            My professional journey showcasing the roles and projects that have shaped my expertise 
            in full stack development and data analysis.
          </p>
        </div>
        
        {/* Timeline line */}
        <div ref={timelineRef} className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-400 h-full hidden lg:block origin-top"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-gray-900 z-10 hover:scale-150 transition-transform duration-300 cursor-pointer"></div>
              
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <Card className="experience-card hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:scale-105 border-l-4 border-l-red-600 bg-gray-800 border-red-600/30 hover:border-red-500 group cursor-pointer hover:-translate-y-3">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-white mb-2 group-hover:text-red-300 transition-colors duration-300 group-hover:scale-105 inline-block">{exp.title}</CardTitle>
                        <div className="text-red-400 font-semibold group-hover:text-red-300 transition-colors duration-300">{exp.company}</div>
                      </div>
                      <Badge variant="outline" className="border-red-600 text-red-300 mt-2 md:mt-0 w-fit hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-gray-700 text-red-300 hover:bg-red-900/50 transition-all duration-300 border border-red-600/30 hover:scale-125 hover:shadow-md hover:shadow-red-500/50 cursor-pointer"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="w-full lg:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
