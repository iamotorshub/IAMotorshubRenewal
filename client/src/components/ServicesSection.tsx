import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Film, Phone, TrendingUp, ArrowRight, CheckCircle, RotateCcw } from "lucide-react";
import automationImage from "@assets/stock_images/business_automation__3dd54533.jpg";
import videoImage from "@assets/stock_images/video_production_stu_94b3e9d0.jpg";
import phoneImage from "@assets/stock_images/customer_service_cal_e6f7035d.jpg";
import scalingImage from "@assets/stock_images/digital_marketing_gr_d641b0a4.jpg";

interface ServiceProps {
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  features: string[];
  result: string;
  testimonial: string;
  author: string;
  ctaText: string;
  onCtaClick: () => void;
}

function ServiceCard({ icon: Icon, image, title, subtitle, problem, solution, features, result, testimonial, author, ctaText, onCtaClick }: ServiceProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 group" data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={`relative w-full h-[600px] transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="h-full bg-gradient-to-br from-[hsl(220,15%,92%)] to-white border-[hsl(210,100%,55%)]/20 hover-elevate transition-all duration-300 hover:border-[hsl(210,100%,55%)]/40 hover:shadow-xl hover:shadow-[hsl(210,100%,55%)]/20 overflow-hidden group-hover:scale-[1.02]">
            {/* Image Header with Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,25%)]/90 to-transparent"></div>
              <div className="absolute top-4 left-4 w-14 h-14 bg-[hsl(210,100%,55%)] rounded-full flex items-center justify-center shadow-lg">
                <Icon className="h-7 w-7 text-white" />
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif font-bold text-[hsl(220,70%,25%)]">{title}</CardTitle>
              <CardDescription className="text-[hsl(210,100%,55%)] font-medium">{subtitle}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                <h4 className="text-red-600 font-semibold text-sm mb-1">PROBLEMA:</h4>
                <p className="text-[hsl(220,20%,15%)] text-sm">"{problem}"</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                <h4 className="text-green-700 font-semibold text-sm mb-1">SOLUCIÓN:</h4>
                <p className="text-[hsl(220,20%,15%)] font-medium text-sm">"{solution}"</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,50%)] text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/30"
                  onClick={onCtaClick}
                  data-testid={`button-${ctaText.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[hsl(210,100%,55%)] text-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,55%)] hover:text-white"
                  onClick={() => setIsFlipped(true)}
                  data-testid={`button-flip-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="h-full bg-gradient-to-br from-[hsl(220,70%,25%)] to-[hsl(220,20%,15%)] border-[hsl(210,100%,55%)]/40 text-white overflow-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-serif font-bold text-white">{title}</CardTitle>
                  <CardDescription className="text-[hsl(210,100%,55%)] font-medium">{subtitle}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setIsFlipped(false)}
                  data-testid={`button-flip-back-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-[hsl(210,100%,55%)] font-semibold mb-3">CARACTERÍSTICAS:</h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-[hsl(220,15%,92%)] text-sm">
                      <CheckCircle className="h-4 w-4 text-[hsl(210,100%,55%)] mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[hsl(210,100%,55%)]/20 rounded-lg p-4 border border-[hsl(210,100%,55%)]/30">
                <h4 className="text-[hsl(210,100%,55%)] font-semibold mb-2">RESULTADO:</h4>
                <p className="text-white font-bold">{result}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-[hsl(220,15%,92%)] italic text-sm mb-2">"{testimonial}"</p>
                <p className="text-[hsl(210,100%,55%)] font-medium text-sm">- {author}</p>
              </div>
              
              <Button 
                className="w-full bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,60%)] text-white font-bold"
                onClick={onCtaClick}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* 3D Transform Styles */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: MessageSquare,
      image: automationImage,
      title: "AUTOMATIZACIÓN COMERCIAL",
      subtitle: "Para: Concesionarios | Inmobiliarias | Contables | Clínicas",
      problem: "Pierdes 70% de leads por atención manual deficiente",
      solution: "IA conversacional que atiende como humano 24/7",
      features: [
        "WhatsApp inteligente sector-específico",
        "Agendamiento automático perfecto",
        "CRM que nunca olvida un seguimiento",
        "Pipeline que se gestiona solo"
      ],
      result: "+300% leads | -60% trabajo manual",
      testimonial: "De 25 consultas/mes a 80 consultas/mes automáticamente",
      author: "Roberto Martínez, Ford Bahía Blanca",
      ctaText: "VER DEMO AUTOMATIZACIÓN"
    },
    {
      icon: Film,
      image: videoImage,
      title: "PRODUCCIÓN AUDIOVISUAL IA",
      subtitle: "Para: Agencias | Productoras | Creadores de Contenido",
      problem: "Producción audiovisual cuesta $50K+ y demora meses",
      solution: "Storyboards 8K + Personajes consistentes en días",
      features: [
        "Character Studio: 3 imágenes → personaje perfecto",
        "Art Department IA: locaciones + props automáticos",
        "Storyboards cinematográficos profesionales",
        "1,000+ imágenes diarias GRATIS"
      ],
      result: "90% menos costo | 10x más velocidad",
      testimonial: "Lo que costaba $80K en 2 meses, ahora 1 semana",
      author: "Diego Fernández, Productora CABA",
      ctaText: "PROBAR STORYBOARD STUDIO"
    },
    {
      icon: Phone,
      image: phoneImage,
      title: "AGENTES TELEFÓNICOS IA",
      subtitle: "Para: Call Centers | Empresas de Ventas",
      problem: "Agentes humanos caros, inconsistentes, se cansan",
      solution: "IA clonada de tus mejores vendedores",
      features: [
        "Voz y personalidad idéntica a tu top seller",
        "Nunca se cansa, enferma o renuncia",
        "Scripts perfectos siempre",
        "Métricas y optimización continua"
      ],
      result: "50% menos costo | 200% más conversión",
      testimonial: "IA convierte 40% vs 15% promedio humano",
      author: "Call Center Seguros",
      ctaText: "CREAR MI AGENTE IA"
    },
    {
      icon: TrendingUp,
      image: scalingImage,
      title: "ESCALAMIENTO DIGITAL",
      subtitle: "Para: Emprendedores | Consultores | CEO's",
      problem: "No sé cómo escalar mi negocio con IA real",
      solution: "Consultoría + implementación completa",
      features: [
        "Audit de automatización personalizado",
        "Estrategia de IA sector-específica",
        "Implementación hands-on completa",
        "Optimización continua resultados"
      ],
      result: "De manual a automatizado en 30 días",
      testimonial: "Escaló de $50K/mes a $200K/mes automatizado",
      author: "Consultor Marketing",
      ctaText: "CONSULTA ESTRATÉGICA"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(220,15%,97%)] via-white to-[hsl(220,15%,97%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[hsl(220,70%,25%)] mb-6" data-testid="text-services-title">
            4 SERVICIOS <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">PRINCIPALES</span>
          </h2>
          <p className="text-xl text-[hsl(220,10%,45%)] max-w-3xl mx-auto">
            Ecosistema completo de automatización con IA que transforma industrias
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                {...service}
                onCtaClick={() => console.log(`${service.ctaText} clicked`)}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Animation Styles */}
      <style>{`
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
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
