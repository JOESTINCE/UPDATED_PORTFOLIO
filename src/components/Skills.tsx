
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Backend Development",
      skills: ["Python", "Django", "Node.js", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Data Analysis & ML",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "SQL", "Power BI"],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "VS Code", "Jupyter", "Postman", "Linux", "Agile"],
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences and data-driven solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`${category.color} hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in`}>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-white text-red-700 hover:bg-red-100 transition-colors duration-200"
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
