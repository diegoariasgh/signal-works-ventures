import { Button } from "@/components/ui/button";
import signalWorksLogo from "@/assets/signalworks-logo-new.png";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  const activeSection = useActiveSection();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={signalWorksLogo} 
              alt="Signal Works Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-[300px] fixed right-0 top-0 bottom-0 rounded-none">
              <DrawerHeader className="flex items-center justify-between border-b border-border pb-4">
                <DrawerTitle>Menu</DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              
              <nav className="flex flex-col p-6 space-y-6">
                <DrawerClose asChild>
                  <a 
                    href="#about" 
                    className={`text-lg signal-transition ${
                      activeSection === 'about' 
                        ? 'text-electric font-semibold' 
                        : 'text-foreground hover:text-electric'
                    }`}
                  >
                    About
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a 
                    href="#services" 
                    className={`text-lg signal-transition ${
                      activeSection === 'services' 
                        ? 'text-electric font-semibold' 
                        : 'text-foreground hover:text-electric'
                    }`}
                  >
                    Services
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a 
                    href="#testimonials" 
                    className={`text-lg signal-transition ${
                      activeSection === 'testimonials' 
                        ? 'text-electric font-semibold' 
                        : 'text-foreground hover:text-electric'
                    }`}
                  >
                    Testimonials
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a 
                    href="#contact" 
                    className={`text-lg signal-transition ${
                      activeSection === 'contact' 
                        ? 'text-electric font-semibold' 
                        : 'text-foreground hover:text-electric'
                    }`}
                  >
                    Contact
                  </a>
                </DrawerClose>
                
                <div className="pt-4 border-t border-border">
                  <Button variant="signal" className="w-full" asChild>
                    <a href="https://zcal.co/diegoarias/30min" target="_blank" rel="noopener noreferrer">
                      Book a Call
                    </a>
                  </Button>
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;