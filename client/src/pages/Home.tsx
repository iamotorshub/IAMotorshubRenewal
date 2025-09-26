import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencySection from "@/components/UrgencySection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <UrgencySection />
      <WhatsAppButton />
    </div>
  );
}