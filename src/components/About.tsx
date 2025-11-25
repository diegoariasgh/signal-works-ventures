import { Users, Globe, TrendingUp, Mic } from "lucide-react";
import founderProfile from "@/assets/founder-profile.png";
import sternLogo from "@/assets/stern-logo.webp";
import plugandplayLogo from "@/assets/plugandplay-logo.png";
import adbLogo from "@/assets/adb-logo.png";
import atsfLogo from "@/assets/atsf-logo.png";
import vc4aLogo from "@/assets/vc4a-logo.png";

const About = () => {
  return <section id="about" className="min-h-screen flex items-center py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-electric/10 rounded-xl mb-6">
              <Users className="w-6 h-6 text-electric" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Experience across GCC, North Africa & Europe</h2>
            <div className="w-24 h-1 signal-gradient mx-auto mb-8 rounded-full"></div>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Company Narrative + Diego Profile */}
            <div className="space-y-8">
              {/* Company Overview */}
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">Signal Works is a boutique advisory for funds, corporates, and startups in venture and innovation. With 7+ years across the GCC, North Africa, and Europe, we combine early-stage investing, fund operations, and GTM/partnership strategy to deliver clear, actionable plans.</p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">Our work spans fund setup and strategy, fundraising & LP engagement, portfolio structuring/secondaries, accelerator and partnership programs, and regional expansion for high-growth startups.</p>
              </div>

              {/* Diego's Profile */}
              <div className="bg-card p-8 rounded-2xl shadow-sm border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={founderProfile} 
                      alt="Diego Arias García - Founder profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold font-space-grotesk text-foreground mb-3">Led by Diego Arias García</h3>
                    <p className="text-muted-foreground leading-relaxed">Background with global VC platforms and accelerators and boutique funds, operating across the GCC & North Africa. Built fund ops from the ground up, managed LP engagement, and supported VC-backed startups on fundraising and GTM.</p>
                  </div>
                </div>

                {/* Speaking Logos */}
                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4 font-medium">Featured speaker & mentor at:</p>
                  <div className="flex flex-wrap items-center gap-6">
                    <img src={sternLogo} alt="NYU Stern" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                    <img src={plugandplayLogo} alt="Plug and Play" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                    <img src={adbLogo} alt="African Development Bank" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                    <img src={atsfLogo} alt="Africa Tech Startup Festival" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                    <img src={vc4aLogo} alt="VC4A" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Consolidated Highlights Card */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border space-y-8 lg:sticky lg:top-24">
              {/* Regional Depth */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-electric/10 rounded-lg mr-3">
                    <Globe className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-xl font-semibold font-space-grotesk">Regional Depth</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">Active across UAE, KSA, Morocco, Egypt and beyond. Cross-border diligence, market entry, and transaction support with local networks and context.</p>
              </div>

              <div className="h-px bg-border"></div>

              {/* Proven Track Record */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-electric/10 rounded-lg mr-3">
                    <TrendingUp className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-xl font-semibold font-space-grotesk">Proven Track Record</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">Strategy support and workshops for founders and teams; engagements with Plug and Play, Open Startup (OST), NYU Stern, and programs backed by the African Development Bank.</p>
              </div>

              <div className="h-px bg-border"></div>

              {/* Speaking & Mentoring */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-electric/10 rounded-lg mr-3">
                    <Mic className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-xl font-semibold font-space-grotesk">Speaking & Mentoring</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">Featured speaker and mentor at leading institutions and accelerators, delivering workshops on fundraising strategy, investor relations, and international expansion across GCC, North Africa, and Europe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;