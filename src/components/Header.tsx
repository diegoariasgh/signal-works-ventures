import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center w-full">
          <div className="flex items-center space-x-2 justify-self-start">
            <div className="relative w-8 h-8">
              {/* Satellite/Signal Icon */}
              <svg viewBox="0 0 32 32" className="w-8 h-8">
                {/* Central signal point */}
                <circle cx="16" cy="16" r="2" className="fill-electric" />
                
                {/* Orbit rings */}
                <circle cx="16" cy="16" r="6" className="stroke-navy stroke-[1.5] fill-none opacity-80" />
                <circle cx="16" cy="16" r="11" className="stroke-electric stroke-[1] fill-none opacity-60" />
                
                {/* Signal waves */}
                <path d="M8 16 Q12 12, 16 16 Q20 20, 24 16" className="stroke-electric stroke-[1.5] fill-none opacity-70" />
                <path d="M6 16 Q11 10, 16 16 Q21 22, 26 16" className="stroke-navy stroke-[1] fill-none opacity-50" />
              </svg>
            </div>
            <span className="text-xl font-semibold font-space-grotesk">Signal Works</span>
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