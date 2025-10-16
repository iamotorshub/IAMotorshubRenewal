import { Button } from "@/components/ui/button";
import { Play, ChevronRight, Sparkles } from "lucide-react";
import logoPath from "@assets/IA MOTORSHUB LOGO_1758912846792.png";
import heroImage from "@assets/stock_images/modern_business_tech_0d6cf402.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,25%)] via-[hsl(220,20%,15%)]/95 to-[hsl(220,20%,15%)]"></div>
      </div>
      
      {/* Animated Blue Accents */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(210,100%,55%)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(210,100%,55%)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Logo with Animation */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/logo-white.png" 
            alt="IA MOTORSHUB" 
            className="h-32 md:h-40 mx-auto mb-6 transition-transform hover:scale-105 duration-300"
            data-testid="img-logo"
          />
        </div>
        
        {/* Main Headline with Gradient Text */}
        <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight text-white animate-slide-up" data-testid="text-headline">
          SOLUCIONES DE IA<br />
          PARA <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">TODO TIPO DE NEGOCIO</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl font-sans mb-8 max-w-4xl mx-auto leading-relaxed text-[hsl(220,15%,92%)] animate-slide-up" style={{ animationDelay: '0.2s' }} data-testid="text-subheadline">
          Desde bares y restaurantes hasta e-commerce y empresas corporativas.<br />
          <span className="text-[hsl(210,100%,55%)] font-semibold">Posicionamiento digital</span> • 
          <span className="text-[hsl(210,100%,55%)] font-semibold">Automatización inteligente</span> • 
          <span className="text-[hsl(210,100%,55%)] font-semibold">Soluciones personalizadas</span>
        </p>
        
        {/* CTAs with Modern Design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,50%)] text-white font-bold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/50 hover:scale-105"
            data-testid="button-ecosystem"
            onClick={() => console.log('Ver Ecosistema clicked')}
          >
            <Play className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            DESCUBRE NUESTRAS SOLUCIONES
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-[hsl(210,100%,55%)] text-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,55%)] hover:text-white font-bold px-8 py-6 text-lg backdrop-blur-sm bg-white/5 transition-all duration-300 hover:scale-105"
            data-testid="button-consultation"
            onClick={() => console.log('Agendar Consulta clicked')}
          >
            <ChevronRight className="mr-2 h-5 w-5" />
            CONSULTA GRATUITA
          </Button>
        </div>
        
        {/* Social Proof Cards with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/5 backdrop-blur-md border border-[hsl(210,100%,55%)]/30 rounded-lg p-4 hover:bg-white/10 hover:border-[hsl(210,100%,55%)]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/20">
            <div className="text-[hsl(210,100%,55%)] text-2xl font-bold mb-1 flex items-center justify-center gap-1" data-testid="text-companies">
              <Sparkles className="h-5 w-5" />
              BARES Y RESTAURANTES
            </div>
            <div className="text-sm text-[hsl(220,15%,92%)]">Automatización y reservas inteligentes</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-[hsl(210,100%,55%)]/30 rounded-lg p-4 hover:bg-white/10 hover:border-[hsl(210,100%,55%)]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/20">
            <div className="text-[hsl(210,100%,55%)] text-2xl font-bold mb-1 flex items-center justify-center gap-1" data-testid="text-agents">
              <Sparkles className="h-5 w-5" />
              LOCALES DE ROPA
            </div>
            <div className="text-sm text-[hsl(220,15%,92%)]">Asistentes virtuales y ventas online</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-[hsl(210,100%,55%)]/30 rounded-lg p-4 hover:bg-white/10 hover:border-[hsl(210,100%,55%)]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/20">
            <div className="text-[hsl(210,100%,55%)] text-2xl font-bold mb-1 flex items-center justify-center gap-1" data-testid="text-storyboards">
              <Sparkles className="h-5 w-5" />
              E-COMMERCE
            </div>
            <div className="text-sm text-[hsl(220,15%,92%)]">Optimización y conversión con IA</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-[hsl(210,100%,55%)]/30 rounded-lg p-4 hover:bg-white/10 hover:border-[hsl(210,100%,55%)]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/20">
            <div className="text-[hsl(210,100%,55%)] text-2xl font-bold mb-1 flex items-center justify-center gap-1" data-testid="text-platforms">
              <Sparkles className="h-5 w-5" />
              POSICIONAMIENTO
            </div>
            <div className="text-sm text-[hsl(220,15%,92%)]">SEO y marketing digital con IA</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-[hsl(210,100%,55%)]/30 rounded-lg p-4 hover:bg-white/10 hover:border-[hsl(210,100%,55%)]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/20">
            <div className="text-[hsl(210,100%,55%)] text-2xl font-bold mb-1 flex items-center justify-center gap-1" data-testid="text-arsenal">
              <Sparkles className="h-5 w-5" />
              EMPRESAS
            </div>
            <div className="text-sm text-[hsl(220,15%,92%)]">Soluciones complejas personalizadas</div>
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
