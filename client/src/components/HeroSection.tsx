import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";
import logoPath from "@assets/IA MOTORSHUB LOGO_1758912846792.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 z-20"></div>
      
      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center text-white">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logoPath} 
            alt="IA MOTORSHUB" 
            className="h-16 mx-auto mb-6"
            data-testid="img-logo"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight" data-testid="text-headline">
          EL ÚNICO DIRECTOR DE CINE<br />
          QUE <span className="text-yellow-400">REVOLUCIONA EMPRESAS</span><br />
          CON IA
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl font-sans mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200" data-testid="text-subheadline">
          Franco Larrarte pasó de dirigir actores a entrenar IA que vende mejor que humanos.<br />
          <span className="text-yellow-400 font-semibold">4 plataformas tecnológicas propias</span> • 
          <span className="text-yellow-400 font-semibold">+50 empresas automatizadas</span> • 
          <span className="text-yellow-400 font-semibold">+300% crecimiento promedio</span>
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg"
            data-testid="button-ecosystem"
            onClick={() => console.log('Ver Ecosistema clicked')}
          >
            <Play className="mr-2 h-5 w-5" />
            VER ECOSISTEMA COMPLETO EN VIVO
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 text-lg"
            data-testid="button-consultation"
            onClick={() => console.log('Agendar Consulta clicked')}
          >
            <ChevronRight className="mr-2 h-5 w-5" />
            AGENDAR CONSULTA ESTRATÉGICA
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center max-w-6xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-1" data-testid="text-companies">+50</div>
            <div className="text-sm text-gray-300">EMPRESAS automatizadas exitosamente</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-1" data-testid="text-agents">+1,000</div>
            <div className="text-sm text-gray-300">AGENTES IA creados y funcionando</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-1" data-testid="text-storyboards">+10,000</div>
            <div className="text-sm text-gray-300">STORYBOARDS profesionales generados</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-1" data-testid="text-platforms">4</div>
            <div className="text-sm text-gray-300">PLATAFORMAS tecnológicas propias</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
            <div className="text-yellow-400 text-2xl font-bold mb-1" data-testid="text-arsenal">+$500K</div>
            <div className="text-sm text-gray-300">ARSENAL TÉCNICO valorado en USD</div>
          </div>
        </div>
      </div>
    </section>
  );
}