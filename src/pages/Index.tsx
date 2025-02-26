import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, BriefcaseIcon, BarChart2, DollarSign, Users, Rocket, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: BriefcaseIcon,
      title: "Business Planning",
      description: "AI-generated business plans and strategies tailored to your vision",
    },
    {
      icon: BarChart2,
      title: "Market Insights",
      description: "Real-time data analysis and market trend predictions",
    },
    {
      icon: DollarSign,
      title: "Smart Funding",
      description: "Intelligent matching with investors and funding sources",
    },
    {
      icon: Users,
      title: "Legal & Compliance",
      description: "Automated document generation and compliance assistance",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Connect with mentors and fellow entrepreneurs",
    },
    {
      icon: Rocket,
      title: "Growth Strategy",
      description: "AI-powered scaling and expansion planning",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-xl font-bold text-primary">Entrepreneur Hub</span>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full" onClick={() => navigate("/login")}>
              Log In
            </Button>
            <Button className="rounded-full" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50">
          <img 
            src="/lovable-uploads/39ce5f63-8b29-4f10-9a80-64b178545142.png"
            alt="Business Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto text-center z-10 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium px-4 py-2 rounded-full border inline-block mb-6 glass-morphism">
              Welcome to the Future of Entrepreneurship
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Your AI-Powered
              <br />
              Entrepreneurial Journey
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Transform your business idea into reality with our comprehensive suite of AI-powered tools
              and expert guidance.
            </p>
            <Button size="lg" className="rounded-full">
              Start Your Journey
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge AI technology with essential business
              tools to support your entrepreneurial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full glass-morphism hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of entrepreneurs who are already using our platform to build successful
              businesses.
            </p>
            <Button size="lg" className="rounded-full">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
