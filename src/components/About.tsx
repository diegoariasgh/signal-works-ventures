import { Users, Globe, TrendingUp } from "lucide-react";
const About = () => {
  return <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-electric/10 rounded-xl mb-6">
              <Users className="w-6 h-6 text-electric" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Experience across GCC, North Africa & Europe</h2>
            <div className="w-24 h-1 signal-gradient mx-auto mb-8 rounded-full"></div>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Signal Works is a boutique advisory for funds, corporates, and startups in venture and innovation. With 7+ years across the GCC, North Africa, and Europe, we combine early-stage investing, fund operations, and GTM/partnership strategy to deliver clear, actionable plans.

Signal Works is a boutique advisory supporting funds, startups, and corporates in venture and innovation. With over seven years of experience across MENA and the GCC, we bring together expertise in early-stage investing, fund strategy and operations, partnership and go-to-market.</p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">Our work spans fund setup and strategy, fundraising & LP engagement, portfolio structuring/secondaries, accelerator and partnership programs, and regional expansion for high-growth startups.</p>
              
              
            </div>
            
            <div className="space-y-8">
              {/* Experience Highlights */}
              <div className="bg-card p-6 rounded-2xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-electric mr-3" />
                  <h3 className="text-xl font-semibold font-space-grotesk">Regional Depth</h3>
                </div>
                <p className="text-muted-foreground">Active across UAE, KSA, Morocco, Egypt and beyond. Cross-border diligence, market entry, and transaction support with local networks and context.</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-electric mr-3" />
                  <h3 className="text-xl font-semibold font-space-grotesk">Proven Track Record</h3>
                </div>
                <p className="text-muted-foreground">Strategy support and workshops for founders and teams; engagements with Plug and Play, Open Startup (OST), NYU Stern, and programs backed by the African Development Bank.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;