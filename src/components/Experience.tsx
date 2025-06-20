
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
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

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey showcasing the roles and projects that have shaped my expertise 
            in full stack development and data analysis.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-l-4 border-l-red-600">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                    <div className="text-red-600 font-semibold">{exp.company}</div>
                  </div>
                  <Badge variant="outline" className="border-red-600 text-red-600 mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-red-100 text-red-800 hover:bg-red-200"
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
