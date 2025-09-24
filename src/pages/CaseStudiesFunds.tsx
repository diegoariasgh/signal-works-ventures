import { ArrowLeft, TrendingUp, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudiesFunds = () => {
  const caseStudies = [
    {
      title: "European VC Fund Launch",
      client: "Confidential European VC",
      challenge: "Launch of €50M early-stage fund focused on B2B software",
      solution: "Complete fund setup, LP strategy, and operational framework",
      results: ["Successfully raised €50M", "Secured 15 institutional LPs", "Completed first close in 8 months"],
      category: "Fund Setup"
    },
    {
      title: "Secondary Market Transaction",
      client: "Growth Equity Fund",
      challenge: "Portfolio restructuring and secondary market opportunities",
      solution: "Structured secondary transaction and portfolio optimization",
      results: ["€25M secondary transaction", "Portfolio IRR improvement", "Enhanced LP relations"],
      category: "Portfolio Management"
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
                <TrendingUp className="w-8 h-8 text-electric" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground">
                  Funds & Investors
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
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4 text-electric" />
                          Solution
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {study.solution}
                        </p>
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

export default CaseStudiesFunds;