
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Crafting Digital Solutions with Passion
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated Full Stack Developer and Data Analyst with a passion for creating 
              innovative web applications and extracting meaningful insights from complex datasets. 
              My journey in technology has equipped me with a diverse skill set spanning both 
              frontend and backend development.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With expertise in modern web frameworks like React, Angular, and backend technologies 
              including Python and Django, I build robust, scalable applications. My data analysis 
              skills complement my development work, allowing me to create data-driven solutions 
              that deliver real business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-red-400">
                <span className="font-semibold">Location:</span> <span className="text-gray-300">Available for Remote Work</span>
              </div>
              <div className="text-red-400">
                <span className="font-semibold">Email:</span> <span className="text-gray-300">Available upon request</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gray-800 border-red-600/30 hover:border-red-500">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
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
