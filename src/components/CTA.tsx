import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const CTA = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.zcal.co/embed/v1/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <section id="contact" className="min-h-screen flex items-center py-24 bg-navy relative overflow-hidden">
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
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-6">We partner with mission-aligned teams <span className="text-electric">to turn intent into execution</span>.</h2>
            <p className="text-xl text-slate-light/80 max-w-2xl mx-auto leading-relaxed">Share a few lines on your goal, and we'll take it from there.</p>
          </div>
          
          {/* Zcal Embed */}
          <div className="mb-12 bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="zcal-inline-widget">
              <a href="https://zcal.co/i/ABLJBjJw">Intro Call with Signal Works - Schedule a meeting</a>
            </div>
          </div>
          
          {/* Alternative Contact */}
          <div className="flex justify-center">
            <Button variant="outline-light" size="lg" className="group" onClick={() => window.open('https://wa.me/+971547109660', '_blank')}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Or chat with us on WhatsApp
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 signal-transition" />
            </Button>
          </div>
          
          {/* Contact Info */}
          
        </div>
      </div>
    </section>;
};
export default CTA;