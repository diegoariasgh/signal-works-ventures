import { Button } from "@/components/ui/button";
import { Calendar, Mail, ArrowRight } from "lucide-react";
const CTA = () => {
  return <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 signal-glow rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 signal-glow rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 signal-glow rounded-full opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-electric/20 rounded-xl mb-6">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-6">
              Ready to Cut Through
              <span className="block text-electric">the Noise?</span>
            </h2>
            <p className="text-xl text-slate-light/80 max-w-2xl mx-auto leading-relaxed">Let's discuss how we can help you r strategies and make confident decisions in complex markets.</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="signal" size="lg" className="group bg-electric hover:bg-electric-light text-white shadow-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Book an Intro Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 signal-transition" />
            </Button>
            
            <Button variant="outline-light" size="lg" className="group">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 signal-transition" />
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-light/60 text-sm mb-4">
              Or reach out directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-slate-light">
              <a href="mailto:hello@signalworks.xyz" className="flex items-center hover:text-electric signal-transition">
                <Mail className="w-4 h-4 mr-2" />
                hello@signalworks.xyz
              </a>
              <span className="hidden sm:block text-slate-light/40">•</span>
              <span className="text-slate-light/80">Calendly link available</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;