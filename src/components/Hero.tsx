import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Target, Handshake, DollarSign } from "lucide-react";
import sternLogo from "@/assets/stern-logo.webp";
import vc4aLogo from "@/assets/vc4a-logo.png";
import adbLogo from "@/assets/adb-logo.png";
import atsfLogo from "@/assets/atsf-logo.png";
import plugandplayLogo from "@/assets/plugandplay-logo.png";
import heroBackground from "@/assets/hero-gradient-bg.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-navy/40"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-electric rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-electric-light rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-electric rounded-full animate-pulse opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Service Areas */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-3 p-4 bg-electric/20 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-electric" />
              </div>
              <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Target className="w-6 h-6 text-electric" />
              </div>
              <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Handshake className="w-6 h-6 text-electric" />
              </div>
              <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <DollarSign className="w-6 h-6 text-electric" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk text-white mb-10 leading-tight">
            <span className="block text-electric font-black">Mission-Aligned.</span>
            <span className="block font-black">Outcome-Driven.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-light mb-12 max-w-3xl mx-auto leading-relaxed font-medium">Boutique advisory supporting funds, startups, and corporates in venture and innovation across the MENA region.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <Button variant="signal" size="lg" className="group" asChild>
              <a href="mailto:diego@signalworks.xyz">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 signal-transition" />
              </a>
            </Button>
            
            <Button variant="outline-light" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
          
          {/* Previous Projects */}
          <div className="pt-12 pb-20 border-t border-white/10">
            <p className="text-slate-light/80 text-sm mb-12 tracking-wide uppercase">Previous projects</p>
            <div className="overflow-hidden">
              <div className="flex items-center gap-16 md:gap-20 animate-[scroll_20s_linear_infinite] w-fit">
                <img src={plugandplayLogo} alt="Plug and Play" className="h-6 md:h-7 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                <img src={sternLogo} alt="NYU Stern" className="h-10 md:h-12 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                <img src={adbLogo} alt="African Development Bank" className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                <img src={vc4aLogo} alt="VC4A" className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                <img src={atsfLogo} alt="Africa Tech Startup Forum" className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                {/* Duplicate logos for seamless loop */}
                <img src={plugandplayLogo} alt="Plug and Play" className="h-6 md:h-7 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                <img src={sternLogo} alt="NYU Stern" className="h-10 md:h-12 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                <img src={adbLogo} alt="African Development Bank" className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                <img src={vc4aLogo} alt="VC4A" className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
                <img src={atsfLogo} alt="Africa Tech Startup Forum" className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;