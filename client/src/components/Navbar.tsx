import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/IA MOTORSHUB LOGO_1758912846792.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-transparent border-b border-[hsl(210,100%,55%)]/20">
      <div className="relative w-full h-[200px] flex items-center justify-center">
        {/* Logo gigante fijo */}
        <img
          src={logoPath}
          alt="IA MOTORSHUB"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[200px] w-auto brightness-0 invert"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Menú oculto (solo por si más adelante lo querés usar) */}
      <div className="hidden md:flex items-center justify-center space-x-10 pb-6">
        <button
          onClick={() => scrollToSection("servicios")}
          className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors"
        >
          Servicios
        </button>
        <button
          onClick={() => scrollToSection("diferenciadores")}
          className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors"
        >
          Diferenciadores
        </button>
        <button
          onClick={() => scrollToSection("testimonios")}
          className="text-white hover:text-[hsl(210,100%,55%)] font-semibold transition-colors"
        >
          Testimonios
        </button>
        <Button
          onClick={() => scrollToSection("asistente")}
          className="bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,50%)] text-white font-bold"
        >
          Contacto
        </Button>
      </div>
    </nav>
  );
}
