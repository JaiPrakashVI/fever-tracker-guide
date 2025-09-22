import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Thermometer, 
  AlertTriangle, 
  CheckCircle, 
  Heart, 
  ArrowRight,
  ArrowLeft,
  Info,
  Phone,
  Clock
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface SymptomData {
  temperature: string;
  temperatureUnit: string;
  symptomDuration: string;
  additionalSymptoms: string[];
  ageGroup: string;
  medicalHistory: string[];
  currentMedications: string;
  painLevel: string;
}

const SymptomChecker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [symptomData, setSymptomData] = useState<SymptomData>({
    temperature: "",
    temperatureUnit: "fahrenheit",
    symptomDuration: "",
    additionalSymptoms: [],
    ageGroup: "",
    medicalHistory: [],
    currentMedications: "",
    painLevel: ""
  });
  const [assessment, setAssessment] = useState<{
    level: 'low' | 'moderate' | 'high' | 'emergency';
    message: string;
    recommendations: string[];
  } | null>(null);

  const totalSteps = 5;

  const analyzeSymptoms = () => {
    const temp = parseFloat(symptomData.temperature);
    const isHighFever = symptomData.temperatureUnit === 'fahrenheit' ? temp >= 102 : temp >= 39;
    
    if (isHighFever) {
      return {
        level: 'high' as const,
        message: "Contact your healthcare provider today",
        recommendations: [
          "Call your doctor's office for same-day appointment",
          "Continue monitoring temperature every 2-4 hours", 
          "Stay hydrated and rest"
        ]
      };
    }
    
    return {
      level: 'low' as const,
      message: "Continue home care and monitoring",
      recommendations: [
        "Monitor temperature twice daily",
        "Get plenty of rest and fluids",
        "Contact healthcare provider if symptoms change"
      ]
    };
  };

  const handleSubmit = () => {
    if (!symptomData.temperature || !symptomData.ageGroup) {
      toast({
        title: "Incomplete Information", 
        description: "Please provide temperature and age group to continue.",
        variant: "destructive"
      });
      return;
    }

    const result = analyzeSymptoms();
    setAssessment(result);
    setCurrentStep(6);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Interactive Symptom Checker
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance based on your symptoms and medical history.
          </p>
        </div>

        <Card className="medical-card scale-in">
          <CardHeader>
            <CardTitle className="text-center">Symptom Assessment</CardTitle>
            <CardDescription className="text-center">
              Please answer accurately for the best assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Thermometer className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground">Current Temperature</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="temperature">Temperature Reading *</Label>
                  <Input
                    id="temperature"
                    type="number"
                    step="0.1" 
                    placeholder="Enter temperature"
                    value={symptomData.temperature}
                    onChange={(e) => setSymptomData(prev => ({...prev, temperature: e.target.value}))}
                  />
                </div>
                
                <div>
                  <Label>Age Group *</Label>
                  <RadioGroup 
                    value={symptomData.ageGroup}
                    onValueChange={(value) => setSymptomData(prev => ({...prev, ageGroup: value}))}
                  >
                    <div className="symptom-option">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-18" id="under-18" />
                        <Label htmlFor="under-18">Under 18</Label>
                      </div>
                    </div>
                    <div className="symptom-option">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="18-64" id="18-64" />
                        <Label htmlFor="18-64">18-64</Label>
                      </div>
                    </div>
                    <div className="symptom-option">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="65+" id="65+" />
                        <Label htmlFor="65+">65 and older</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {assessment && (
                <div className="space-y-6">
                  <Alert>
                    <AlertTitle>{assessment.message}</AlertTitle>
                    <AlertDescription>
                      <div className="mt-4">
                        <p className="font-medium mb-3">Recommendations:</p>
                        <ul className="space-y-2">
                          {assessment.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 mt-1" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AlertDescription>
                  </Alert>
                </div>
              )}

              <div className="flex justify-center pt-6">
                {!assessment ? (
                  <Button onClick={handleSubmit} className="btn-medical">
                    Get Assessment
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={() => {setAssessment(null); setSymptomData({temperature: "", temperatureUnit: "fahrenheit", symptomDuration: "", additionalSymptoms: [], ageGroup: "", medicalHistory: [], currentMedications: "", painLevel: ""});}} className="btn-medical">
                    Start New Assessment
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SymptomChecker;