import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Film, Phone, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

interface ServiceProps {
  icon: React.ComponentType<{ className?: string }>;
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

function ServiceCard({ icon: Icon, title, subtitle, problem, solution, features, result, testimonial, author, ctaText, onCtaClick }: ServiceProps) {
  return (
    <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-400/20 hover-elevate transition-all duration-300">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="h-8 w-8 text-yellow-400" />
        </div>
        <CardTitle className="text-2xl font-serif font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-yellow-400 font-medium">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-red-400 font-semibold mb-2">PROBLEMA:</h4>
          <p className="text-gray-300 text-sm">"{problem}"</p>
        </div>
        
        <div>
          <h4 className="text-green-400 font-semibold mb-2">SOLUCIÓN:</h4>
          <p className="text-white font-medium text-sm">"{solution}"</p>
        </div>
        
        <div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-200 text-sm">
                <CheckCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-yellow-400/10 rounded-lg p-4">
          <h4 className="text-yellow-400 font-semibold mb-2">RESULTADO:</h4>
          <p className="text-white font-bold">{result}</p>
        </div>
        
        <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-300 italic text-sm mb-2">"{testimonial}"</p>
          <p className="text-yellow-400 font-medium text-sm">- {author}</p>
        </div>
        
        <Button 
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
          onClick={onCtaClick}
          data-testid={`button-${ctaText.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: MessageSquare,
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
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6" data-testid="text-services-title">
            4 SERVICIOS <span className="text-yellow-400">PRINCIPALES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ecosistema completo de automatización con IA que transforma industrias
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onCtaClick={() => console.log(`${service.ctaText} clicked`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}