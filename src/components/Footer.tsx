import { Signal } from "lucide-react";
const Footer = () => {
  return <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative w-10 h-10">
                {/* Satellite/Signal Icon */}
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  {/* Central signal point */}
                  <circle cx="20" cy="20" r="2.5" className="fill-electric" />
                  
                  {/* Orbit rings */}
                  <circle cx="20" cy="20" r="7.5" className="stroke-navy stroke-[2] fill-none opacity-80" />
                  <circle cx="20" cy="20" r="14" className="stroke-electric stroke-[1.5] fill-none opacity-60" />
                  
                  {/* Signal waves */}
                  <path d="M10 20 Q15 15, 20 20 Q25 25, 30 20" className="stroke-electric stroke-[2] fill-none opacity-70" />
                  <path d="M7 20 Q14 12, 20 20 Q26 28, 33 20" className="stroke-navy stroke-[1.5] fill-none opacity-50" />
                </svg>
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
            
          </div>
          
          {/* Divider */}
          <div className="h-px bg-border mb-8"></div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="mb-4 md:mb-0">
              © Signal Works — Mission-Aligned. Outcome-Driven.
            </p>
            <p className="text-center md:text-right max-w-md">Boutique advisory supporting funds, startups, and corporates across the MENA region.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;