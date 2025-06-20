
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or interesting projects. 
            Let's connect and explore how we can work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Start a Conversation</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center border border-red-600/30">
                  <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-300">Available upon request</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center border border-red-600/30">
                  <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-gray-300">Available for Remote Work</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center border border-red-600/30">
                  <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">Response Time</div>
                  <div className="text-gray-300">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="animate-fade-in bg-gray-800 border-red-600/30 hover:border-red-500 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project Collaboration" 
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell me about your project..." 
                    className="mt-1 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-all duration-300 hover:scale-105"
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
