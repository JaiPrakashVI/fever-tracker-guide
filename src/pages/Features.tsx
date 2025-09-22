import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  Thermometer, 
  Clock, 
  Bell, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Brain,
  Shield,
  Activity,
  MessageCircle,
  Calendar,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
import featuresImage from "@/assets/features-mobile.jpg";
import symptomIcon from "@/assets/symptom-checker-icon.png";

const Features = () => {
  const coreFeatures = [
    {
      icon: Thermometer,
      title: "Intelligent Symptom Tracking",
      description: "Log fever readings, symptoms, and medications with our intuitive interface. Our AI analyzes patterns and provides personalized insights.",
      features: ["Temperature logging", "Symptom severity tracking", "Medication reminders", "Pattern recognition"],
      badge: "Core Feature"
    },
    {
      icon: Clock,
      title: "Automated Follow-up Care",
      description: "Receive timely check-ins and reminders based on your recovery timeline and symptom progression.",
      features: ["Smart reminders", "Recovery timeline", "Progress tracking", "Adaptive scheduling"],
      badge: "Popular"
    },
    {
      icon: Bell,
      title: "Real-time Health Alerts",
      description: "Get immediate notifications when symptoms indicate you should seek medical attention.",
      features: ["Fever threshold alerts", "Symptom escalation warnings", "Emergency indicators", "Care recommendations"],
      badge: "Critical"
    },
    {
      icon: Users,
      title: "Caregiver Network",
      description: "Keep family members and caregivers informed with automatic updates and shared access to health data.",
      features: ["Family notifications", "Shared dashboards", "Care team access", "Emergency contacts"],
      badge: "Family"
    }
  ];

  const additionalFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms analyze your data to provide personalized health recommendations.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your health data anywhere with our responsive, mobile-optimized interface.",
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Bank-level encryption and compliance ensure your health information stays private and secure.",
    },
    {
      icon: Activity,
      title: "Health Data Integration",
      description: "Connect with popular health apps and devices for comprehensive health monitoring.",
    },
    {
      icon: MessageCircle,
      title: "24/7 Support Chat",
      description: "Get help when you need it with our round-the-clock support team.",
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Book follow-up appointments directly through the platform when care is recommended.",
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Complete a quick health questionnaire and log your current symptoms and fever readings.",
      icon: Thermometer
    },
    {
      step: "2", 
      title: "Smart Monitoring",
      description: "FeverCare tracks your symptoms and provides daily check-ins tailored to your condition.",
      icon: TrendingUp
    },
    {
      step: "3",
      title: "Intelligent Alerts",
      description: "Receive personalized notifications and recommendations based on your symptom patterns.",
      icon: AlertTriangle
    },
    {
      step: "4",
      title: "Guided Care",
      description: "Get clear guidance on when to rest, when to call your doctor, or when to seek immediate care.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20 fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Fever Care Features
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Everything you need to monitor, track, and manage fever symptoms with confidence and peace of mind.
            </p>
            <NavLink to="/symptom-checker">
              <Button size="lg" className="btn-medical px-8 py-3">
                Try Symptom Checker
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </NavLink>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools designed to give you confidence and control during fever recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="medical-card-hover scale-in">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {feature.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Showcase */}
        <section className="mb-20 bg-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-up">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Symptom Tracking Made Simple
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our intuitive interface makes it easy to log symptoms, track fever patterns, 
                  and receive personalized recommendations based on your unique health profile.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Thermometer className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quick Temperature Logging</h3>
                    <p className="text-muted-foreground text-sm">
                      Log fever readings in seconds with automatic timestamp and trend analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-lg mt-1">
                    <Brain className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Smart Pattern Recognition</h3>
                    <p className="text-muted-foreground text-sm">
                      AI algorithms identify concerning patterns and provide early warning alerts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg mt-1">
                    <Bell className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Personalized Alerts</h3>
                    <p className="text-muted-foreground text-sm">
                      Receive customized notifications based on your health history and risk factors.
                    </p>
                  </div>
                </div>
              </div>

              <NavLink to="/symptom-checker">
                <Button className="btn-medical">
                  Try Interactive Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </NavLink>
            </div>

            <div className="relative scale-in">
              <img 
                src={featuresImage} 
                alt="FeverCare mobile app interface showing symptom tracking features"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <img 
                  src={symptomIcon} 
                  alt="Digital thermometer icon"
                  className="h-12 w-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              How FeverCare Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to better fever management and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center slide-up">
                <div className="relative mb-6">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-2 bg-white rounded-full shadow-lg border border-border">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Additional Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to support your entire healthcare journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="medical-card scale-in">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="medical-card-hover max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join thousands of patients who trust FeverCare for intelligent symptom monitoring 
                and confident healthcare decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink to="/symptom-checker">
                  <Button size="lg" className="btn-medical px-8 py-3">
                    Start Free Symptom Check
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </NavLink>
                <NavLink to="/contact">
                  <Button variant="outline" size="lg" className="btn-outline-medical px-8 py-3">
                    Contact Our Team
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;