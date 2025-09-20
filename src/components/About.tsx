import { Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-electric/10 rounded-xl mb-6">
              <Users className="w-6 h-6 text-electric" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">
              Seven Years of Venture Excellence
            </h2>
            <div className="w-24 h-1 signal-gradient mx-auto mb-8 rounded-full"></div>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Signal Works is a boutique advisory supporting funds, startups, and corporates in venture and innovation. With over seven years of experience across MENA and Europe, we bring together expertise in venture investing, fund operations, and startup growth.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our work has spanned fund setup and fundraising strategy, portfolio structuring, accelerator design, and expansion support for high-growth startups.
              </p>
              
              <div className="bg-muted/30 p-6 rounded-2xl">
                <p className="text-lg font-medium text-foreground mb-2">Our Mission</p>
                <p className="text-muted-foreground">
                  We help clients cut through the noise, frame sharper strategies, and make confident decisions in complex markets.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Experience Highlights */}
              <div className="bg-card p-6 rounded-2xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-electric mr-3" />
                  <h3 className="text-xl font-semibold font-space-grotesk">Global Reach</h3>
                </div>
                <p className="text-muted-foreground">
                  Active across MENA and European markets with deep regional expertise and cross-border transaction experience.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-electric mr-3" />
                  <h3 className="text-xl font-semibold font-space-grotesk">Proven Track Record</h3>
                </div>
                <p className="text-muted-foreground">
                  Strategy support for founders and workshop delivery for leading institutions including Plug and Play and NYU Stern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;