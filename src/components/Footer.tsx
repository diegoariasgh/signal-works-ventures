import { Signal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 signal-gradient rounded-lg flex items-center justify-center">
                <Signal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-space-grotesk text-foreground">
                  Signal Works
                </h3>
                <p className="text-sm text-muted-foreground">
                  Boutique Advisory
                </p>
              </div>
            </div>
            
            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center md:text-left">
              <a 
                href="mailto:hello@signalworks.xyz" 
                className="text-muted-foreground hover:text-electric signal-transition font-medium"
              >
                hello@signalworks.xyz
              </a>
              <span className="hidden sm:block text-muted-foreground/40">•</span>
              <a 
                href="https://signalworks.xyz" 
                className="text-muted-foreground hover:text-electric signal-transition font-medium"
              >
                signalworks.xyz
              </a>
              <span className="hidden sm:block text-muted-foreground/40">•</span>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-electric signal-transition font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-border mb-8"></div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="mb-4 md:mb-0">
              © 2024 Signal Works. All rights reserved.
            </p>
            <p className="text-center md:text-right max-w-md">
              Boutique advisory supporting funds, startups, and corporates across MENA and Europe.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;