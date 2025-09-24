import { ArrowLeft, TrendingUp, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudiesFunds = () => {
  const caseStudies = [
    {
      title: "Fund Launch & Setup",
      client: "$30M early-stage VC fund",
      challenge: "Needed to incorporate a new fund under tight timelines with limited experience with Delaware structures and providers.",
      solution: "Coordinated legal incorporation in Delaware for fund and management company. Prepared Limited Partnership Agreement and governance documents. Benchmarked fund admin platforms and negotiated service fees.",
      results: ["Entities incorporated successfully", "Legal documentation aligned with industry standards", "Infrastructure ready for fundraising launch"],
      category: "Fund Launch & Setup"
    },
    {
      title: "Regional Expansion & Investment Activity",
      client: "International investor and accelerator",
      challenge: "No established footprint in North Africa and needed to demonstrate early-stage investment activity to attract partners.",
      solution: "Launched operations in new markets and signed institutional partnerships. Built sourcing engine across ecosystems and led due diligence on startups. Delivered founder support through accelerator programming.",
      results: ["16+ investments deployed at pre-seed and seed", "Recognized as one of the most active investors in the region", "Established trusted reputation with public and private stakeholders"],
      category: "Market Expansion & Portfolio Building"
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