
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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
            entry.target.classList.remove('opacity-0', 'translate-y-56', '-translate-y-56', 'translate-x-56', '-translate-x-56', 'scale-0', 'rotate-360', '-rotate-360', 'skew-x-45', 'skew-y-45');
          }, index * 400);
        }
      });
    }, observerOptions);

    // Header animations with full rotation effects
    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0', '-translate-y-56', 'rotate-360', 'scale-0', 'skew-x-45', 'transition-all', 'duration-1500', 'ease-out');
      observer.observe(titleRef.current);
    }

    if (descRef.current) {
      descRef.current.classList.add('opacity-0', 'translate-y-56', '-rotate-360', 'scale-0', 'skew-y-45', 'transition-all', 'duration-1500', 'ease-out', 'delay-400');
      observer.observe(descRef.current);
    }

    // Content and form with opposite spiral effects
    if (contentRef.current) {
      contentRef.current.classList.add('opacity-0', '-translate-x-56', 'translate-y-56', 'rotate-360', 'scale-0', 'skew-x-45', '-skew-y-45', 'transition-all', 'duration-1400', 'ease-out', 'delay-800');
      observer.observe(contentRef.current);
    }

    if (formRef.current) {
      formRef.current.classList.add('opacity-0', 'translate-x-56', '-translate-y-56', '-rotate-360', 'scale-0', '-skew-x-45', 'skew-y-45', 'transition-all', 'duration-1400', 'ease-out', 'delay-1200');
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-48 bg-red-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-600/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-700/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-white mb-4 hover:text-red-300 transition-colors duration-500">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
          <p ref={descRef} className="text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            I'm always open to discussing new opportunities, collaborations, or interesting projects. 
            Let's connect and explore how we can work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={contentRef}>
            <h3 className="text-2xl font-semibold text-white mb-6 hover:text-red-300 transition-colors duration-300">Let's Start a Conversation</h3>
            <div className="space-y-6">
              {[
                { icon: "📧", title: "Email", desc: "Available upon request" },
                { icon: "🌍", title: "Location", desc: "Available for Remote Work" },
                { icon: "⚡", title: "Response Time", desc: "Within 24 hours" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center border border-red-600/30 group-hover:border-red-500 group-hover:scale-110 transition-all duration-300">
                    <span className="text-xl group-hover:scale-125 transition-transform duration-200">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-red-300 transition-colors duration-300">{item.title}</div>
                    <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card ref={formRef} className="bg-gray-800 border-red-600/30 hover:border-red-500 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 hover:scale-105 group">
            <CardHeader>
              <CardTitle className="text-white group-hover:text-red-300 transition-colors duration-300">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <Label htmlFor="firstName" className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 hover:border-red-600 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="lastName" className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 hover:border-red-600 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
                <div className="group">
                  <Label htmlFor="email" className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 hover:border-red-600 transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="group">
                  <Label htmlFor="subject" className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project Collaboration" 
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 hover:border-red-600 transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="group">
                  <Label htmlFor="message" className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">Message</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell me about your project..." 
                    className="mt-1 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 hover:border-red-600 transition-all duration-300 focus:scale-105"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-red-600/50 hover:-translate-y-1"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
