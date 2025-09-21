import { Button } from "@/components/ui/button";
import { ArrowRight, Signal } from "lucide-react";
import sternLogo from "@/assets/stern-logo.webp";
import vc4aLogo from "@/assets/vc4a-logo.png";
import adbLogo from "@/assets/adb-logo.png";
import atsfLogo from "@/assets/atsf-logo.png";
import plugandplayLogo from "@/assets/plugandplay-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-lighter">
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-electric rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-electric-light rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-electric rounded-full animate-pulse opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Signal Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-electric/10 rounded-2xl backdrop-blur-sm">
              <Signal className="w-12 h-12 text-electric" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk text-white mb-6 leading-tight">
            <span className="block text-electric font-black">Mission-Aligned.</span>
            <span className="block font-black">Outcome-Driven.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-light mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Boutique advisory supporting funds, startups, and corporates in venture and innovation across MENA and Europe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="signal" size="lg" className="group" asChild>
              <a href="mailto:diego@signalworks.xyz">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 signal-transition" />
              </a>
            </Button>
            
            <Button variant="outline-light" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Previous Projects */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-slate-light/80 text-sm mb-6">Previous projects</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <img 
                src={plugandplayLogo} 
                alt="Plug and Play" 
                className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:opacity-90 transition-all duration-300 drop-shadow-sm"
              />
              <img 
                src={sternLogo} 
                alt="NYU Stern" 
                className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:opacity-90 transition-all duration-300 drop-shadow-sm"
              />
              <img 
                src={adbLogo} 
                alt="African Development Bank" 
                className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:opacity-90 transition-all duration-300 drop-shadow-sm"
              />
              <img 
                src={vc4aLogo} 
                alt="VC4A" 
                className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:opacity-90 transition-all duration-300 drop-shadow-sm"
              />
              <img 
                src={atsfLogo} 
                alt="Africa Tech Startup Forum" 
                className="h-8 md:h-10 filter brightness-0 invert opacity-70 hover:opacity-90 transition-all duration-300 drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;