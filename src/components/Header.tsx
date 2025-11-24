import { Button } from "@/components/ui/button";
import signalWorksLogo from "@/assets/signalworks-logo-new.png";
import { useActiveSection } from "@/hooks/use-active-section";

const Header = () => {
  const activeSection = useActiveSection();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between md:grid md:grid-cols-3 w-full">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src={signalWorksLogo} 
              alt="Signal Works Logo" 
              className="h-8 w-auto flex-shrink-0"
            />
          </div>
          
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <a 
              href="#about" 
              className={`signal-transition ${
                activeSection === 'about' 
                  ? 'text-electric font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`signal-transition ${
                activeSection === 'services' 
                  ? 'text-electric font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className={`signal-transition ${
                activeSection === 'testimonials' 
                  ? 'text-electric font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className={`signal-transition ${
                activeSection === 'contact' 
                  ? 'text-electric font-semibold' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Contact
            </a>
          </nav>
          
          <div className="md:justify-self-end">
            <Button variant="signal" size="sm" asChild>
              <a href="https://zcal.co/diegoarias/30min" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;