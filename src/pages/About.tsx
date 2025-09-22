import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Target, 
  Users, 
  Shield,
  CheckCircle,
  Stethoscope,
  Brain,
  Clock
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every feature is designed with the patient's well-being and peace of mind as our top priority."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "HIPAA-compliant platform ensuring your health information remains secure and confidential."
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Our recommendations are built on medical research and clinical best practices."
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 monitoring and support when you need it most during your recovery journey."
    }
  ];

  const team = [
    {
      role: "Medical Director",
      description: "Board-certified physicians specializing in infectious diseases and primary care.",
      icon: Stethoscope
    },
    {
      role: "Healthcare Engineers",
      description: "Technology experts with deep healthcare industry experience and patient safety focus.",
      icon: Brain
    },
    {
      role: "Patient Advocates",
      description: "Dedicated support team ensuring every patient receives compassionate, personalized care.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20 fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About FeverCare
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're transforming how patients manage fever recovery with intelligent monitoring, 
              personalized guidance, and peace of mind when it matters most.
            </p>
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Heart className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="medical-card-hover slide-up">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To empower patients and families with intelligent, accessible healthcare tools that provide 
              confidence and clarity during fever recovery, reducing anxiety and improving health outcomes.
            </p>
            <div className="space-y-3">
              {[
                "Reduce unnecessary emergency room visits",
                "Provide early warning for concerning symptoms", 
                "Support informed healthcare decisions",
                "Bridge the gap between clinic visits"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="medical-card-hover slide-up">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A world where every patient has access to intelligent, personalized healthcare monitoring 
              that adapts to their needs and provides support throughout their recovery journey.
            </p>
            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
              <p className="text-sm text-primary font-medium">
                "Healthcare that understands you, supports you, and empowers you to make the best 
                decisions for your health and your family's well-being."
              </p>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why FeverCare Exists
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We identified a critical gap in post-clinical care that affects millions of patients every year.
            </p>
          </div>

          <div className="medical-card scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-destructive mb-2">67%</div>
                <div className="text-sm text-muted-foreground">
                  of patients report anxiety about when to seek follow-up care
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-warning mb-2">40%</div>
                <div className="text-sm text-muted-foreground">
                  increase in unnecessary ER visits due to fever uncertainty
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24hrs</div>
                <div className="text-sm text-muted-foreground">
                  average delay in seeking appropriate care for worsening symptoms
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">The Healthcare Gap</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  After a clinical visit for fever or infection, patients often leave with general 
                  advice like "return if symptoms worsen" — but what does that really mean?
                </p>
                <p>
                  This vague guidance leaves families guessing, leading to sleepless nights, 
                  unnecessary anxiety, and either delayed care or expensive emergency visits.
                </p>
                <p>
                  Healthcare providers want to help, but they can't monitor every patient 24/7. 
                  That's where FeverCare steps in.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Our Approach</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  FeverCare uses intelligent algorithms to provide personalized monitoring and 
                  clear, actionable guidance based on each patient's unique situation.
                </p>
                <p>
                  Our platform learns from medical protocols and patient data to deliver 
                  timely alerts and recommendations that help patients make informed decisions.
                </p>
                <p>
                  We bridge the gap between clinical visits with continuous, intelligent 
                  support that adapts to your recovery progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at FeverCare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="feature-card scale-in text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full mb-4 w-fit">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Expert Team Behind FeverCare
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multidisciplinary team combines medical expertise, technology innovation, 
              and patient advocacy to deliver the best possible care experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="medical-card-hover text-center slide-up">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                  <member.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {member.role}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Compliance */}
        <section className="text-center">
          <div className="medical-card scale-in max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Your Trust is Our Foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              FeverCare is built on the highest standards of medical privacy, data security, 
              and clinical accuracy. We're HIPAA compliant and work closely with healthcare 
              professionals to ensure our platform meets the rigorous standards you expect 
              from healthcare technology.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary font-medium">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />HIPAA Compliant</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />SOC 2 Certified</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />Medical Advisory Board</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />Clinical Validation</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;