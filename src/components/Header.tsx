import { Button } from "@/components/ui/button";
import signalWorksLogo from "@/assets/signalworks-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center w-full">
          <div className="flex items-center space-x-2 justify-self-start">
            <img 
              src={signalWorksLogo} 
              alt="Signal Works Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground signal-transition">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground signal-transition">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground signal-transition">
              Contact
            </a>
          </nav>
          
          <div className="justify-self-end">
            <Button variant="signal" size="sm" asChild>
              <a href="https://zcal.co/diegoarias" target="_blank" rel="noopener noreferrer">
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