import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageSquare } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Yaya Mbaoua",
    role: "Founder & CEO",
    company: "Zencey",
    content: "Diego's support has been instrumental in advancing our fundraising strategy. His proactive approach, from facilitating high-value investor introductions to providing diligent follow-ups, ensured we maintained strong momentum throughout the process. His meticulous attention to detail and creative negotiation insights consistently elevated the quality of our discussions and outcomes.",
    rating: 5
  }, {
    name: "Hania Tarek",
    role: "Senior Program & Operations Manager",
    company: "Plug and Play Tech Center",
    content: "Diego is one of the best people I know to ever give feedback to our founders; constructive and insightful. He also has an eye for detail that is unmatched. We've received the best feedback from startups about his level of knowledge in various sectors and regions, his ability to bring in an investor's perspective while also connecting founders to the right people.",
    rating: 5
  }, {
    name: "",
    role: "",
    company: "",
    content: "More quotes coming soon...",
    rating: 0,
    isPlaceholder: true
  }];
  return <section id="testimonials" className="min-h-screen flex items-center py-32 bg-slate-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-electric/10 rounded-xl mb-6">
            <MessageSquare className="w-6 h-6 text-electric" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Testimonials</h2>
          <div className="w-24 h-1 signal-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by founders, investors, and corporate leaders across the innovation ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className={`bg-card/50 backdrop-blur-sm border hover:border-electric/20 signal-transition hover-scale h-full ${testimonial.isPlaceholder ? 'flex items-center justify-center' : ''}`}>
              <CardContent className={`p-8 h-full flex flex-col ${testimonial.isPlaceholder ? 'items-center justify-center' : ''}`}>
                {!testimonial.isPlaceholder && (
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-electric text-electric" />)}
                  </div>
                )}
                
                <div className={`relative ${testimonial.isPlaceholder ? 'text-center' : 'mb-6 flex-grow'}`}>
                  {!testimonial.isPlaceholder && <Quote className="w-8 h-8 text-electric/20 absolute -top-2 -left-2" />}
                  <p className={`leading-relaxed ${testimonial.isPlaceholder ? 'text-muted-foreground/60 text-lg italic' : 'text-muted-foreground pl-6'}`}>
                    {testimonial.isPlaceholder ? testimonial.content : `"${testimonial.content}"`}
                  </p>
                </div>
                
                {!testimonial.isPlaceholder && (
                  <div className="border-t border-border pt-4 mt-auto">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-electric font-medium">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                )}
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;