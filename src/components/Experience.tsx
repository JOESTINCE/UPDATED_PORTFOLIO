
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    const cards = sectionRef.current?.querySelectorAll('.experience-card');
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
    <section ref={sectionRef} className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p ref={descRef} className="text-gray-300 max-w-2xl mx-auto">
            My professional journey showcasing the roles and projects that have shaped my expertise 
            in full stack development and data analysis.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="experience-card hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 hover:scale-105 border-l-4 border-l-red-600 bg-gray-800 border-red-600/30 hover:border-red-500 group">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-white mb-2 group-hover:text-red-300 transition-colors duration-300">{exp.title}</CardTitle>
                    <div className="text-red-400 font-semibold">{exp.company}</div>
                  </div>
                  <Badge variant="outline" className="border-red-600 text-red-300 mt-2 md:mt-0 w-fit hover:scale-110 transition-transform duration-200">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gray-700 text-red-300 hover:bg-red-900/50 transition-all duration-200 border border-red-600/30 hover:scale-110 hover:shadow-md"
                    >
                      {tech}
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

export default Experience;
