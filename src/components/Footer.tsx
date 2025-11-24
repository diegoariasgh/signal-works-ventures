import { Signal } from "lucide-react";
import signalWorksLogo from "@/assets/signalworks-logo-new.png";
const Footer = () => {
  return <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img src={signalWorksLogo} alt="Signal Works Logo" className="h-10 w-auto" />
              <div>
                
              </div>
            </div>
            
            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center md:text-left">
              
              
              <a href="https://signalworks.xyz" className="text-muted-foreground hover:text-electric signal-transition font-medium">
                signalworks.xyz
              </a>
              <span className="hidden sm:block text-muted-foreground/40">•</span>
              <a href="https://www.linkedin.com/company/signalworksxyz/" className="text-muted-foreground hover:text-electric signal-transition font-medium">
                LinkedIn
              </a>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-border mb-8"></div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="mb-4 md:mb-0">© signalworks, 2025</p>
            <p className="text-center md:text-right max-w-md">Boutique advisory supporting funds, startups, and corporates across the MENA region.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;