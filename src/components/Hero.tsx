
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-8');
          }, index * 200); // Staggered animation
        }
      });
    }, observerOptions);

    const elements = [
      nameRef.current,
      titleRef.current,
      descriptionRef.current,
      badgesRef.current,
      buttonsRef.current,
      imageRef.current
    ];

    elements.forEach((el, index) => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
        if (index % 2 === 0) {
          el.classList.add('translate-x-8');
        } else {
          el.classList.add('-translate-x-8');
        }
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-red-500/30 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-red-400/20 rounded-full blur-2xl animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)` }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span 
              ref={nameRef}
              className="text-red-400 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent block text-6xl lg:text-8xl mt-8 hover:scale-110 transition-all duration-500 cursor-pointer"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              JESTUS
            </span>
          </h1>
          <h2 
            ref={titleRef} 
            className="text-2xl lg:text-3xl text-gray-300 mb-6 hover:text-red-300 transition-colors duration-300"
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          >
            Full Stack Developer & Data Analyst
          </h2>
          <p 
            ref={descriptionRef} 
            className="text-lg text-gray-400 mb-8 leading-relaxed hover:text-gray-300 transition-colors duration-300"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            Passionate about creating innovative web applications and extracting insights from data. 
            I specialize in modern web technologies and data analysis to build solutions that make a difference.
          </p>
          <div ref={badgesRef} className="flex flex-wrap gap-3 mb-8">
            {["React", "Python", "Data Analysis", "Machine Learning"].map((skill, index) => (
              <Badge 
                key={skill}
                variant="secondary" 
                className="bg-red-900/50 text-red-300 hover:bg-red-800/50 border border-red-600 hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 cursor-pointer"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${scrollY * 0.01}px)`
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div ref={buttonsRef} className="flex gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-red-600/50 hover:-translate-y-1">
              View My Work
            </Button>
            <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-900/20 px-8 py-3 rounded-lg transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-red-400/30 hover:-translate-y-1">
              Download CV
            </Button>
          </div>
        </div>
        <div ref={imageRef} className="flex justify-center lg:justify-end relative">
          <div className="relative">
            <div 
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-red-500 to-red-700 p-2 hover:scale-110 transition-all duration-700 hover:rotate-3"
              style={{ transform: `translateY(${scrollY * 0.08}px) rotateY(${scrollY * 0.1}deg)` }}
            >
              <div className="w-full h-full rounded-full bg-gray-800 p-4 border-2 border-red-400/30 hover:border-red-400/60 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Jestus - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-red-400/20 rounded-full animate-bounce hover:bg-red-400/40 transition-colors duration-300"
              style={{ transform: `translateY(${scrollY * 0.12}px)` }}
            ></div>
            <div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500/30 rounded-full animate-pulse hover:bg-red-500/50 transition-colors duration-300"
              style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
            ></div>
            
            {/* Enhanced name overlay */}
            <div 
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 rounded-lg shadow-xl border border-red-400 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/50 cursor-pointer"
              style={{ transform: `translateX(-50%) translateY(${scrollY * 0.06}px)` }}
            >
              <span className="text-white font-bold text-2xl tracking-wider hover:tracking-widest transition-all duration-300">JESTUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
