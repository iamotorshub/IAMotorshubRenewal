import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola Franco! Vengo de la landing de IA MOTORSHUB. Me interesa conocer más sobre automatización con IA para mi empresa."
    );
    const whatsappUrl = `https://wa.me/5492915206692?text=${message}`;
    window.open(whatsappUrl, '_blank');
    console.log('WhatsApp button clicked');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-16 right-4 z-50 sm:bottom-16 sm:right-6 md:bottom-6">
      <Button
        size="lg"
        className="animate-pulse rounded-full bg-green-500 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-sm transition-all duration-300 hover:bg-green-600 hover:animate-none sm:px-5 sm:py-3.5 sm:text-base md:px-5 md:py-4"
        onClick={handleWhatsAppClick}
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>
    </div>
  );
}