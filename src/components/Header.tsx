import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 signal-gradient rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-semibold font-space-grotesk">Signal Works</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
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
          
          <Button variant="signal" size="sm">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;