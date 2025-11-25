import { Users, Globe, TrendingUp } from "lucide-react";
import founderProfile from "@/assets/founder-profile.png";
const About = () => {
  return <section id="about" className="min-h-screen flex items-center py-24 bg-background">
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Signal Works is a boutique advisory for funds, corporates, and startups in venture and innovation. With 7+ years across the GCC, North Africa, and Europe, we combine early-stage investing, fund operations, and GTM/partnership strategy to deliver clear, actionable plans.</p>
              
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
          
          {/* Founder Card - Full Width Below */}
          <div className="mt-16 space-y-6">
            <div className="bg-card p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={founderProfile} 
                    alt="Diego Arias García - Founder profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-space-grotesk text-foreground mb-3">Led by Diego Arias García</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-4xl">Background with global VC platforms and accelerators and boutique funds, operating across the GCC & North Africa. Built fund ops from the ground up, managed LP engagement, and supported VC-backed startups on fundraising and GTM.</p>
                </div>
              </div>
            </div>

            {/* Thought Leadership Section */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-electric/10 rounded-lg">
                  <Users className="w-6 h-6 text-electric" />
                </div>
                <h3 className="text-xl font-semibold font-space-grotesk text-foreground">Speaker & Mentor</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Featured speaker and mentor at leading institutions and accelerators, delivering workshops on fundraising strategy, investor relations, and international expansion across GCC, North Africa, and Europe.
              </p>
              
              {/* Organization Logos */}
              <div className="flex flex-wrap items-center gap-8 pt-6 border-t">
                <img src="/src/assets/stern-logo.webp" alt="NYU Stern School of Business" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/src/assets/plugandplay-logo.png" alt="Plug and Play Ventures" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/src/assets/adb-logo.png" alt="African Development Bank" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/src/assets/atsf-logo.png" alt="Africa Tech Startup Festival" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/src/assets/vc4a-logo.png" alt="VC4A" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;