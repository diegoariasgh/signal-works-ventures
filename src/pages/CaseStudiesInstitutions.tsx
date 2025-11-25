import { ArrowLeft, Building2, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudiesInstitutions = () => {
  const caseStudies = [
    {
      title: "Startup Offering Refinement",
      client: "Global technology services company",
      challenges: ["Messaging unclear to startups and investors", "No structured GTM approach with accelerators and VC funds"],
      solutions: ["Conducted product suite audit and gap analysis", "Refined positioning and updated sales/marketing collateral", "Designed GTM and partnership framework for ecosystem partners"],
      results: ["Clear, competitive startup offering defined", "Consistent and aligned collateral for investors and accelerators", "GTM roadmap in place to embed into programs"],
      category: "Go-to-market & Positioning"
    },
    {
      title: "Corporate Innovation in Fintech",
      client: "Leading government and financial institutions",
      challenges: ["Corporates lacked structured ways to engage fintech startups", "Needed mechanisms for piloting and partnerships"],
      solutions: ["Designed and delivered multi-stakeholder programs", "Curated startup cohorts and organized dealflow sessions", "Structured pilots and facilitated co-investment discussions"],
      results: ["Pilots launched with fintech startups", "Corporates engaged systematically with innovation", "New co-investment opportunities and expanded fintech access"],
      category: "Program Design & Delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-slate-light/30">
          <div className="container mx-auto px-6">
            <Button variant="ghost" className="mb-6" asChild>
              <a href="/#services" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </a>
            </Button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-electric" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground">
                  Institutions & Accelerators
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Case Studies & Success Stories
                </p>
              </div>
            </div>
            
            <div className="w-24 h-1 signal-gradient rounded-full mb-8"></div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 max-w-4xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border hover:border-electric/20 signal-transition">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-space-grotesk text-foreground mb-2">
                          {study.title}
                        </CardTitle>
                        <p className="text-electric font-medium">{study.client}</p>
                        <span className="inline-block bg-electric/10 text-electric px-3 py-1 rounded-full text-sm mt-3">
                          {study.category}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-electric" />
                          Challenge
                        </h4>
                        <ul className="space-y-2">
                          {study.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4 text-electric" />
                          Solution
                        </h4>
                        <ul className="space-y-2">
                          {study.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-electric" />
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesInstitutions;
