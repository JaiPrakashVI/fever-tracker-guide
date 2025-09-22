import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { 
  Thermometer, 
  CheckCircle, 
  Heart,
  ArrowRight
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
          <div className="space-y-8 fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              FeverCare
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Know when to seek care. Track your fever with confidence.
            </p>
            
            <div className="pt-4">
              <NavLink to="/symptom-checker">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-12 py-4 text-lg">
                  Start Symptom Check
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Problem Statement */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Stop Guessing About Your Fever
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get clear guidance on when your symptoms need medical attention. 
            Simple questions, instant answers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Thermometer className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Track</h3>
              <p className="text-muted-foreground">Log your temperature</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Analyze</h3>
              <p className="text-muted-foreground">Get instant feedback</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Care</h3>
              <p className="text-muted-foreground">Know what to do next</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6">
            It takes less than 2 minutes to get personalized guidance.
          </p>
          <NavLink to="/symptom-checker">
            <Button size="lg" className="btn-medical px-8 py-3">
              Check My Symptoms
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;