import { Button } from "@/components/ui/button";
import signalWorksLogo from "@/assets/signalworks-logo-new.png";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const Header = () => {
  const activeSection = useActiveSection();
  const [open, setOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={signalWorksLogo} 
              alt="Signal Works - Boutique Advisory for Venture & Innovation" 
              width="160"
              height="32"
              className="h-8 w-auto"
            />
          </div>
          
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <Menu className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 bg-background/95 backdrop-blur-sm border border-border shadow-lg z-50" align="end">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#about"
                  onClick={() => setOpen(false)}
                  className={`text-base signal-transition px-3 py-2 rounded-md ${
                    activeSection === 'about' 
                      ? 'text-electric font-semibold bg-muted' 
                      : 'text-foreground hover:text-electric hover:bg-muted'
                  }`}
                >
                  About
                </a>
                <a 
                  href="#services"
                  onClick={() => setOpen(false)}
                  className={`text-base signal-transition px-3 py-2 rounded-md ${
                    activeSection === 'services' 
                      ? 'text-electric font-semibold bg-muted' 
                      : 'text-foreground hover:text-electric hover:bg-muted'
                  }`}
                >
                  Services
                </a>
                <a 
                  href="#testimonials"
                  onClick={() => setOpen(false)}
                  className={`text-base signal-transition px-3 py-2 rounded-md ${
                    activeSection === 'testimonials' 
                      ? 'text-electric font-semibold bg-muted' 
                      : 'text-foreground hover:text-electric hover:bg-muted'
                  }`}
                >
                  Testimonials
                </a>
                <a 
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={`text-base signal-transition px-3 py-2 rounded-md ${
                    activeSection === 'contact' 
                      ? 'text-electric font-semibold bg-muted' 
                      : 'text-foreground hover:text-electric hover:bg-muted'
                  }`}
                >
                  Contact
                </a>
                
                <div className="pt-2 border-t border-border">
                  <Button variant="signal" className="w-full" asChild>
                    <a href="https://zcal.co/diegoarias/30min" target="_blank" rel="noopener noreferrer">
                      Book a Call
                    </a>
                  </Button>
                </div>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;