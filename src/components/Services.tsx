import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Rocket, Building2, TrendingUp } from "lucide-react";
const Services = () => {
  const services = [{
    icon: TrendingUp,
    title: "Funds & Investors",
    description: "Strategic support for institutional capital",
    features: ["Fund setup and strategy", "Fundraising support and LP engagement", "Portfolio structuring and secondaries"],
    color: "text-electric"
  }, {
    icon: Building2,
    title: "Corporates & Accelerators",
    description: "Innovation programs and partnerships",
    features: ["Program and partnership design", "Startup scouting and evaluation", "Market entry and innovation strategy"],
    color: "text-electric"
  }, {
    icon: Rocket,
    title: "Startups & Founders",
    description: "Growth strategy and market expansion",
    features: ["Fundraising preparation and investor materials", "Go-to-market and partnership strategy", "Regional expansion and growth planning"],
    color: "text-electric"
  }];
  return <section id="services" className="py-24 bg-slate-light/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-electric/10 rounded-xl mb-6">
            <Settings className="w-6 h-6 text-electric" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Services</h2>
          <div className="w-24 h-1 signal-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored advisory services across the venture ecosystem
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className="group hover:shadow-lg signal-transition bg-card/50 backdrop-blur-sm border hover:border-electric/20">
                <CardContent className="p-8 py-[33px]">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center group-hover:signal-glow signal-transition">
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold font-space-grotesk text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  
                   {/* CTA */}
                   <Button 
                     variant="outline" 
                     className="w-full hover:bg-electric/10 hover:border-electric/50"
                     asChild
                   >
                     <a href={`/case-studies/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}>
                       View Case Studies
                     </a>
                   </Button>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Services;