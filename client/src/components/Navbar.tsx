import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/IA MOTORSHUB LOGO_1758912846792.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-[hsl(210,100%,55%)]/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 py-2 h-full flex items-center">
            <img 
              src={logoPath}
              alt="IA MOTORSHUB" 
              className="h-full max-h-[96px] w-auto brightness-0 invert"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('diferenciadores')}
              className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors"
            >
              Diferenciadores
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors"
            >
              Testimonios
            </button>
            <Button
              onClick={() => scrollToSection('asistente')}
              className="bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,50%)] text-white font-bold"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('diferenciadores')}
                className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors text-left"
              >
                Diferenciadores
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors text-left"
              >
                Testimonios
              </button>
              <Button
                onClick={() => scrollToSection('asistente')}
                className="bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,50%)] text-white font-bold w-full"
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
