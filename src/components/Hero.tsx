import { Button } from "@/components/ui/button";
import { ArrowRight, Signal } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-navy/60"></div>
      </div>
      
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
            <Button variant="signal" size="lg" className="group">
              Book an Intro Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 signal-transition" />
            </Button>
            
            <Button variant="outline-light" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-slate-light/80 text-sm mb-4">Trusted by leading institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-light/60">
              <span className="font-medium">Plug and Play</span>
              <span className="font-medium">Open Startup (OST)</span>
              <span className="font-medium">NYU Stern</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;