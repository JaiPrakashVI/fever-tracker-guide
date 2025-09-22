import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  ChevronDown, 
  ExternalLink, 
  BookOpen, 
  Heart, 
  Thermometer,
  Phone,
  Clock,
  AlertTriangle,
  CheckCircle,
  Users,
  Shield
} from "lucide-react";

const Resources = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqData = [
    {
      id: "fever-basics",
      question: "What temperature is considered a fever?",
      answer: "A fever is generally considered to be a body temperature of 100.4°F (38°C) or higher when measured orally. However, normal body temperature can vary slightly between individuals and throughout the day. Rectal temperatures tend to be about 1°F higher than oral temperatures, while armpit temperatures are typically about 1°F lower."
    },
    {
      id: "when-seek-care",
      question: "When should I seek immediate medical attention for a fever?",
      answer: "Seek immediate medical care if you experience: fever above 104°F (40°C), difficulty breathing, chest pain, severe headache with neck stiffness, persistent vomiting, signs of dehydration, confusion or altered mental state, or if you have underlying health conditions like heart disease, diabetes, or a compromised immune system."
    },
    {
      id: "fever-duration",
      question: "How long should a fever last?",
      answer: "Most fevers from common viral infections last 3-5 days. However, you should contact your healthcare provider if a fever persists for more than 3 days in adults, or if it returns after being gone for 24 hours. Children under 3 months with any fever should see a doctor immediately."
    },
    {
      id: "fever-reducers",
      question: "Should I always take medication to reduce fever?",
      answer: "Not necessarily. Fever is often your body's natural way of fighting infection. However, fever reducers like acetaminophen or ibuprofen can help you feel more comfortable. Always follow dosing instructions and consult with your healthcare provider, especially if you have other medical conditions or take other medications."
    },
    {
      id: "home-care",
      question: "What home care measures can help with fever?",
      answer: "Stay well-hydrated with water, herbal teas, or broths. Get plenty of rest in a cool, comfortable room. Dress in lightweight clothing and use light blankets. Take lukewarm baths or use cool compresses. Avoid alcohol and caffeine, which can lead to dehydration."
    },
    {
      id: "contagious",
      question: "How long am I contagious with a fever?",
      answer: "This depends on the underlying cause. Generally, you're most contagious when you have a fever and for 24 hours after your fever breaks. For flu, you may be contagious from 1 day before symptoms develop to 5-7 days after becoming sick. Always consult your healthcare provider for specific guidance."
    },
    {
      id: "app-accuracy",
      question: "How accurate is the FeverCare symptom checker?",
      answer: "Our symptom checker uses evidence-based algorithms and medical protocols to provide guidance. However, it's designed to supplement, not replace, professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment, especially for serious or persistent symptoms."
    },
    {
      id: "data-privacy",
      question: "Is my health information secure with FeverCare?",
      answer: "Yes, we take your privacy seriously. FeverCare is HIPAA compliant and uses bank-level encryption to protect your health information. We never share your personal health data without your explicit consent, and you have full control over your information."
    }
  ];

  const healthArticles = [
    {
      title: "Understanding Fever: When to Worry and When to Wait",
      description: "A comprehensive guide to fever management, including when to seek medical care and effective home remedies.",
      category: "Fever Care",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "Fever in Children: A Parent's Guide",
      description: "Special considerations for managing fever in infants and children, including age-specific guidelines and warning signs.",
      category: "Pediatric Care",
      readTime: "6 min read", 
      link: "#"
    },
    {
      title: "The Science of Fever: How Your Body Fights Infection",
      description: "Learn about the biological processes behind fever and why it's often a sign that your immune system is working.",
      category: "Health Education",
      readTime: "10 min read",
      link: "#"
    },
    {
      title: "Hydration During Illness: Best Practices",
      description: "Essential guidelines for staying properly hydrated when you're sick, including what to drink and what to avoid.",
      category: "Recovery Tips",
      readTime: "5 min read",
      link: "#"
    },
    {
      title: "When to Return to Work After Being Sick",
      description: "Guidelines for determining when you're no longer contagious and safe to return to work or school activities.",
      category: "Recovery Tips",
      readTime: "4 min read",
      link: "#"
    },
    {
      title: "Building a Home Medicine Cabinet",
      description: "Essential items to keep on hand for common illnesses, including fever reducers, thermometers, and comfort aids.",
      category: "Preparedness",
      readTime: "7 min read",
      link: "#"
    }
  ];

  const careTips = [
    {
      icon: Thermometer,
      title: "Monitor Temperature Regularly",
      tips: [
        "Check temperature at the same times each day",
        "Use a reliable digital thermometer",
        "Record readings to track patterns",
        "Take temperature when feeling unwell"
      ]
    },
    {
      icon: Heart,
      title: "Stay Hydrated",
      tips: [
        "Drink water frequently, even if not thirsty", 
        "Try warm broths or herbal teas",
        "Avoid alcohol and excessive caffeine",
        "Watch for signs of dehydration"
      ]
    },
    {
      icon: Clock,
      title: "Rest and Recovery",
      tips: [
        "Get extra sleep to help your body heal",
        "Avoid strenuous activities",
        "Create a comfortable, quiet environment",
        "Listen to your body's signals"
      ]
    },
    {
      icon: Users,
      title: "When to Contact Healthcare",
      tips: [
        "Fever above 102°F (38.9°C) persists",
        "Symptoms worsen or new symptoms appear",
        "Difficulty breathing or chest pain",
        "Signs of severe dehydration"
      ]
    }
  ];

  const emergencyContacts = [
    {
      title: "Emergency Services",
      number: "911",
      description: "For life-threatening emergencies",
      availability: "24/7"
    },
    {
      title: "Poison Control",
      number: "1-800-222-1222",
      description: "For poisoning emergencies",
      availability: "24/7"
    },
    {
      title: "Mental Health Crisis",
      number: "988",
      description: "Suicide & Crisis Lifeline",
      availability: "24/7"
    },
    {
      title: "FeverCare Support",
      number: "1-555-FEVER-CARE",
      description: "Technical support and questions",
      availability: "Mon-Fri 8AM-8PM EST"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16 fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Health Resources & Support
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive guides, expert tips, and answers to help you make informed 
              healthcare decisions and manage fever symptoms effectively.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about fever care and using FeverCare.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq) => (
              <Card key={faq.id} className="medical-card scale-in">
                <Collapsible
                  open={openFaq === faq.id}
                  onOpenChange={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="flex flex-row items-center justify-between py-4 hover:bg-muted/30 transition-colors">
                      <CardTitle className="text-left text-lg font-semibold">
                        {faq.question}
                      </CardTitle>
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          openFaq === faq.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </section>

        {/* Health Articles */}
        <section id="articles" className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Health Articles & Guides
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert-reviewed articles to help you understand fever, symptoms, and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthArticles.map((article, index) => (
              <Card key={index} className="medical-card-hover scale-in">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">
                    {article.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full group">
                    Read Article
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Self-Care Tips */}
        <section id="tips" className="mb-20 bg-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Fever Self-Care Tips
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Evidence-based guidance for managing fever symptoms at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careTips.map((tip, index) => (
              <div key={index} className="medical-card scale-in">
                <div className="text-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <tip.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {tip.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tip.tips.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Important Contacts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keep these important numbers handy for health emergencies and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="medical-card scale-in text-center">
                <CardHeader className="pb-4">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {contact.number}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2">
                    {contact.description}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    Available: {contact.availability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="text-center">
          <div className="medical-card max-w-4xl mx-auto scale-in">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Medical Disclaimer
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-left">
              <p>
                The information provided on FeverCare and in these resources is for educational 
                and informational purposes only and is not intended as a substitute for professional 
                medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of your physician or other qualified health provider with 
                any questions you may have regarding a medical condition. Never disregard professional 
                medical advice or delay in seeking it because of something you have read on FeverCare.
              </p>
              <p>
                If you think you may have a medical emergency, call your doctor or 911 immediately. 
                FeverCare does not recommend or endorse any specific tests, physicians, products, 
                procedures, opinions, or other information that may be mentioned on the platform.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;