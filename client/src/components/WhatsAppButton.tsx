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
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl animate-pulse hover:animate-none transition-all duration-300"
        onClick={handleWhatsAppClick}
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>
    </div>
  );
}