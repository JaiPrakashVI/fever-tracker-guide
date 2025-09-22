import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Heart,
  Shield,
  Users
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@fevercare.com",
      description: "Get help with your account or technical issues",
      availability: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 123-CARE",
      description: "Speak directly with our support team",
      availability: "Mon-Fri 8AM-8PM EST"
    },
    {
      icon: MapPin,
      title: "Mailing Address",
      details: "123 Healthcare Innovation Drive, Medical City, HC 12345",
      description: "For official correspondence",
      availability: "Business days only"
    },
    {
      icon: Clock,
      title: "Live Chat",
      details: "Available on platform",
      description: "Instant support during business hours",
      availability: "Mon-Fri 9AM-6PM EST"
    }
  ];

  const supportCategories = [
    { value: "technical", label: "Technical Support" },
    { value: "medical", label: "Medical Questions" },
    { value: "billing", label: "Billing & Account" },
    { value: "feedback", label: "Feedback & Suggestions" },
    { value: "partnership", label: "Partnership Inquiry" },
    { value: "other", label: "Other" }
  ];

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({ title: "Valid email is required", variant: "destructive" });
      return false;
    }
    if (!formData.subject.trim()) {
      toast({ title: "Subject is required", variant: "destructive" });
      return false;
    }
    if (!formData.category) {
      toast({ title: "Please select a category", variant: "destructive" });
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({ title: "Please provide a detailed message (min 10 characters)", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="medical-card scale-in">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-success/10 rounded-full">
                  <CheckCircle className="h-16 w-16 text-success" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Your message has been sent successfully. Our support team will review your 
                inquiry and respond within 24 hours.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>What happens next?</strong><br />
                  • You'll receive a confirmation email shortly<br />
                  • Our team will review your message<br />
                  • We'll respond with helpful information or next steps<br />
                  • Urgent matters will receive priority attention
                </p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                className="btn-medical"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16 fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about FeverCare? Need technical support? Want to provide feedback? 
              We're here to help and would love to hear from you.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="medical-card scale-in">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(Optional)"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide detailed information about your question or issue..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                    <div className="text-sm text-muted-foreground text-right">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      Your information is protected by our privacy policy and will never be shared 
                      with third parties. For medical emergencies, please call 911 or visit your 
                      nearest emergency room.
                    </AlertDescription>
                  </Alert>

                  <Button 
                    type="submit" 
                    className="w-full btn-medical" 
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground fade-in">
                Other Ways to Reach Us
              </h2>
              {contactInfo.map((contact, index) => (
                <Card key={index} className="medical-card scale-in">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {contact.details}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          {contact.description}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                          {contact.availability}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Link */}
            <Card className="medical-card-hover scale-in">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Need Quick Answers?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check our comprehensive FAQ section for instant answers to common questions.
                  </p>
                  <Button variant="outline" className="w-full btn-outline-medical">
                    Browse FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Support Hours */}
            <Card className="medical-card scale-in">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Support Team Hours
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM EST</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM EST</p>
                    <p><strong>Sunday:</strong> Emergency support only</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <section className="mt-16 text-center">
          <Alert className="max-w-4xl mx-auto border-destructive/30 bg-destructive/5">
            <Phone className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-left">
              <strong className="text-destructive">Medical Emergency Notice:</strong> 
              {" "}This contact form is for general inquiries and support only. If you are 
              experiencing a medical emergency, please call 911 immediately or go to your 
              nearest emergency room. Do not use this form for urgent medical situations.
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </div>
  );
};

export default Contact;