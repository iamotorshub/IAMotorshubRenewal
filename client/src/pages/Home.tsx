import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AssistantSection from "@/components/AssistantSection";
import UrgencySection from "@/components/UrgencySection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <div id="servicios">
        <ServicesSection />
      </div>
      <div id="diferenciadores">
        <DifferentiatorsSection />
      </div>
      <div id="testimonios">
        <TestimonialsSection />
      </div>
      <div id="asistente">
        <AssistantSection />
      </div>
      <UrgencySection />
      <WhatsAppButton />
    </div>
  );
}