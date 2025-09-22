import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { 
  Thermometer, 
  Clock, 
  Bell, 
  Users, 
  CheckCircle, 
  Heart,
  ArrowRight,
  Shield,
  Smartphone
} from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";
import featuresImage from "@/assets/features-mobile.jpg";

const Home = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Smart Symptom Tracking",
      description: "Easy-to-use interface for logging fever readings and symptoms with intelligent analysis."
    },
    {
      icon: Clock,
      title: "Automated Follow-up",
      description: "Receive timely reminders and guidance based on your symptom patterns and recovery progress."
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Get immediate notifications when symptoms require medical attention or professional care."
    },
    {
      icon: Users,
      title: "Caregiver Notifications",
      description: "Keep family members informed with automatic updates and important health alerts."
    }
  ];

  const stats = [
    { number: "95%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Monitoring Available" },
    { number: "50K+", label: "Symptoms Tracked" },
    { number: "99.9%", label: "Uptime Reliability" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Smart Fever Care
                  <span className="block text-3xl lg:text-5xl text-white/90">
                    When You Need It Most
                  </span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                  Empowering patients with intelligent symptom tracking and automated follow-up 
                  care to make informed healthcare decisions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to="/symptom-checker">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
                    Check Symptoms Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </NavLink>
                <NavLink to="/features">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                  >
                    Learn More
                  </Button>
                </NavLink>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2 text-white/80">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-sm">Mobile Friendly</span>
                </div>
              </div>
            </div>

            <div className="relative scale-in">
              <img 
                src={heroImage} 
                alt="Healthcare professional using digital health monitoring"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg fade-in">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Fever Tracked</p>
                    <p className="text-xs text-muted-foreground">Normal range detected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center slide-up">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              The Challenge We Solve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Patients with resolving fevers often struggle with knowing when to seek 
              re-consultation if symptoms worsen or persist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 slide-up">
              <div className="medical-card">
                <h3 className="text-xl font-semibold mb-3 text-destructive">The Problem</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Uncertainty about when fever symptoms require medical attention</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Lack of guided tracking for symptom progression</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Delayed care leading to complications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Caregiver anxiety and unnecessary emergency visits</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 slide-up">
              <div className="medical-card">
                <h3 className="text-xl font-semibold mb-3 text-success">Our Solution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Intelligent symptom tracking with automated analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Real-time alerts for concerning symptom patterns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Guided follow-up care recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Peace of mind for patients and families</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Comprehensive Fever Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to monitor, track, and manage fever symptoms with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card scale-in">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-3 bg-primary/10 rounded-full mb-4 w-fit">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="medical-card-hover">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Take Control of Your Health Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of patients who trust FeverCare for intelligent symptom monitoring 
              and peace of mind during recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/symptom-checker">
                <Button size="lg" className="btn-medical px-8 py-3">
                  Start Symptom Check
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button variant="outline" size="lg" className="btn-outline-medical px-8 py-3">
                  Contact Support
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;