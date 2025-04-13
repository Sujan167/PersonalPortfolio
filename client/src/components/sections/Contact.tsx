import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Client-side only - open email client with prefilled data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`);
      window.open(`mailto:itssujan167@gmail.com?subject=${subject}&body=${body}`);
      
      toast({
        title: "Email client opened",
        description: `Thank you for your message, ${formData.name}! Please send the email through your email client.`,
      });
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error opening email client",
        description: "There was a problem opening your email client. Please contact directly at itssujan167@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-2 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <motion.h3 
            className="text-3xl font-bold mb-4 text-foreground dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get In Touch
          </motion.h3>
          <motion.p 
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Feel free to reach out if you're interested in working together or have any questions.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-sm border border-gray-100 dark:border-slate-700 h-full">
              <h4 className="text-xl font-bold mb-6 dark:text-white">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-full text-primary mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1 dark:text-slate-200">Email</h5>
                    <a href="mailto:itssujan167@gmail.com" className="text-primary hover:underline">itssujan167@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-full text-primary mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1 dark:text-slate-200">Phone</h5>
                    <a href="tel:+9779862913309" className="text-primary hover:underline">+977 9862913309</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-full text-primary mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1 dark:text-slate-200">Location</h5>
                    <p className="text-slate-600 dark:text-slate-300">Kaushaltar, Bhaktapur, Nepal</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h5 className="font-medium mb-4 dark:text-slate-200">Social Profiles</h5>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/Sujan167" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/sujan-basnet-a7503623b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-900 hover:bg-primary text-white p-3 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm border border-gray-100 dark:border-slate-700"
            >
              <h4 className="text-xl font-bold mb-6 dark:text-white">Send Me a Message</h4>
              
              <div className="mb-6">
                <Label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Your Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="subject" className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
