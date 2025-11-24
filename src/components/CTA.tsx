import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
const CTA = () => {
  return <section id="contact" className="py-16 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 signal-glow rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 signal-glow rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 signal-glow rounded-full opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-electric/20 rounded-xl mb-4">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4">We partner with mission-aligned teams <span className="text-electric">to turn intent into execution</span>.</h2>
            <p className="text-lg text-slate-light/80 max-w-2xl mx-auto leading-relaxed">Share a few lines on your goal, and we'll take it from there.</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="signal" size="lg" className="group bg-electric hover:bg-electric-light text-white shadow-xl" asChild>
              <a href="https://zcal.co/diegoarias/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book an Intro Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 signal-transition" />
              </a>
            </Button>
            
            <Button variant="outline-light" size="lg" className="group" onClick={() => window.open('https://wa.me/+971547109660', '_blank')}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 signal-transition" />
            </Button>
          </div>
          
          {/* Contact Info */}
          
        </div>
      </div>
    </section>;
};
export default CTA;