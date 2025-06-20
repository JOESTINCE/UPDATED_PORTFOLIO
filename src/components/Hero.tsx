
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{" "}
            <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Jestus
            </span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">
            Full Stack Developer & Data Analyst
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Passionate about creating innovative web applications and extracting insights from data. 
            I specialize in modern web technologies and data analysis to build solutions that make a difference.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">
              React
            </Badge>
            <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">
              Python
            </Badge>
            <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">
              Data Analysis
            </Badge>
            <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">
              Machine Learning
            </Badge>
          </div>
          <div className="flex gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              View My Work
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              Download CV
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-red-400 to-red-600 p-2 animate-pulse">
              <div className="w-full h-full rounded-full bg-white p-4">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Jestus - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-200 rounded-full animate-bounce opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-300 rounded-full animate-pulse opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
