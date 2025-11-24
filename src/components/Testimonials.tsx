import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechVenture Labs",
    content: "The strategic guidance provided was instrumental in securing our Series A. The team's deep understanding of the venture ecosystem and their network of connections made all the difference.",
    rating: 5
  }, {
    name: "Michael Rodriguez",
    role: "Managing Partner",
    company: "Growth Capital Partners",
    content: "Outstanding support in structuring our fund operations. The attention to detail and industry expertise helped us navigate complex regulatory requirements with confidence.",
    rating: 5
  }, {
    name: "Dr. Amira Hassan",
    role: "Chief Innovation Officer",
    company: "Global Financial Services",
    content: "The corporate innovation program they designed exceeded our expectations. We successfully launched 3 pilot projects with fintech startups within 6 months.",
    rating: 5
  }];
  return <section id="testimonials" className="py-32 bg-slate-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by founders, investors, and corporate leaders across the innovation ecosystem
          </p>
          <div className="w-24 h-1 signal-gradient rounded-full mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-card/50 backdrop-blur-sm border hover:border-electric/20 signal-transition hover-scale h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-electric text-electric" />)}
                </div>
                
                <div className="relative mb-6 flex-grow">
                  <Quote className="w-8 h-8 text-electric/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="border-t border-border pt-4 mt-auto">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-electric font-medium">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;