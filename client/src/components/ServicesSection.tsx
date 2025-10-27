import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Film,
  Phone,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  RotateCcw,
} from "lucide-react";
// Imágenes actualizadas para servicios
import rentalsImage from "@assets/hero-rentals-ai_1760656167854.png";
import probadorImage from "@assets/hero-Probador -virtual_1760656167864.jpg";
import menuImage from "@assets/hero-menu-vivo_1760656167856.jpg";
import automationImage from "@assets/hero-automatizacion-comercial_1760656167856.png";
import videoImage from "@assets/hero-storyboard-pro_1760656167864.jpg";
import phoneImage from "@assets/hero-agentes-telefonicos_1760656167864.jpg";
const scalingImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";

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

function ServiceCard({
  icon: Icon,
  image,
  title,
  subtitle,
  problem,
  solution,
  features,
  result,
  testimonial,
  author,
  ctaText,
  onCtaClick,
}: ServiceProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 group"
      data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
          <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[hsl(210,100%,55%)]/20 bg-gradient-to-br from-[hsl(220,15%,92%)] to-white shadow-lg transition-all duration-300 hover:border-[hsl(210,100%,55%)]/40 hover:shadow-[0_28px_70px_rgba(28,100,210,0.18)]">
            {/* Image Header */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-5 left-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[hsl(210,100%,55%)] shadow-xl shadow-[hsl(210,100%,55%)]/40">
                <Icon className="h-8 w-8 text-white" />
              </div>
            </div>

            <CardHeader className="space-y-2 pb-3">
              <CardTitle className="text-2xl font-serif font-bold text-[hsl(220,70%,25%)]">
                {title}
              </CardTitle>
              <CardDescription className="text-sm font-medium uppercase tracking-[0.14em] text-[hsl(210,100%,45%)]">
                {subtitle}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col justify-between space-y-6 pb-6">
              <div className="rounded-xl border border-red-200 bg-red-50/80 p-4 shadow-inner">
                <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
                  Problema
                </h4>
                <p className="mt-2 text-sm font-medium text-[hsl(220,20%,20%)]">"{problem}"</p>
              </div>

              <div className="mt-auto flex items-center gap-3">
                <Button
                  className="flex-1 rounded-full bg-[hsl(210,100%,55%)] px-6 py-3 font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[hsl(210,100%,55%)]/35 transition-all duration-300 hover:scale-[1.03] hover:bg-[hsl(210,100%,52%)]"
                  onClick={() => setIsFlipped(true)}
                  data-testid={`button-ver-solucion-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  Ver solución
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full border-[hsl(210,100%,55%)] text-[hsl(210,100%,55%)] transition-all duration-300 hover:bg-[hsl(210,100%,55%)] hover:text-white"
                  onClick={() => setIsFlipped(true)}
                  aria-label="Ver solución"
                >
                  <RotateCcw className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[hsl(210,100%,55%)]/50 bg-gradient-to-br from-[hsl(220,70%,25%)] via-[hsl(220,30%,20%)] to-[hsl(220,20%,15%)] text-white shadow-[0_36px_90px_rgba(10,40,98,0.55)]">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <CardTitle className="text-2xl font-serif font-bold text-white">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium uppercase tracking-[0.14em] text-[hsl(210,100%,75%)]">
                    {subtitle}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white transition-colors duration-300 hover:bg-white/10"
                  onClick={() => setIsFlipped(false)}
                  data-testid={`button-flip-back-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <RotateCcw className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col justify-between space-y-6 pb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(210,100%,75%)]">
                    Solución
                  </h4>
                  <p className="mt-2 text-sm font-medium text-white/95">"{solution}"</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(210,100%,75%)]">
                    Características
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white/95"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 text-[hsl(210,100%,75%)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(210,100%,75%)]">
                    Resultado
                  </h4>
                  <p className="mt-2 text-sm font-bold text-white">{result}</p>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-sm italic text-white/90">"{testimonial}"</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(210,100%,70%)]">
                    - {author}
                  </p>
                </div>
              </div>

              <Button
                className="w-full rounded-full bg-[hsl(210,100%,55%)] px-6 py-3 font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[hsl(210,100%,55%)]/35 transition-all duration-300 hover:scale-[1.03] hover:bg-[hsl(210,100%,60%)]"
                onClick={onCtaClick}
                data-testid={`button-${ctaText.toLowerCase().replace(/\s+/g, '-')}`}
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
          perspective: 1400px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: MessageSquare,
      image: rentalsImage,
      title: "RENTALS AI - INMOBILIARIAS",
      subtitle: "Para: Inmobiliarias | Propietarios | Administradores de Propiedades",
      problem: "Pierdes inquilinos por atención lenta y falta de seguimiento",
      solution: "IA que gestiona consultas, visitas y contratos automáticamente",
      features: [
        "Atención 24/7 a consultas de propiedades",
        "Agendamiento automático de visitas",
        "Calificación inteligente de potenciales inquilinos",
        "Seguimiento automatizado del proceso de alquiler",
      ],
      result: "+200% consultas atendidas | -70% tiempo administrativo",
      testimonial: "Cerramos 3x más contratos con la mitad del esfuerzo",
      author: "Inmobiliaria Premium, CABA",
      ctaText: "VER DEMO RENTALS AI",
    },
    {
      icon: Film,
      image: probadorImage,
      title: "PROBADOR VIRTUAL",
      subtitle: "Para: Locales de Ropa | Showrooms | Emprendedores de Moda",
      problem: "Clientes no compran sin probarse la ropa físicamente",
      solution: "IA que permite probar ropa virtualmente desde cualquier lugar",
      features: [
        "Prueba virtual de prendas en tiempo real",
        "Recomendaciones de talla personalizadas",
        "Visualización 3D de combinaciones de outfits",
        "Incremento de conversión online significativo",
      ],
      result: "+150% conversión online | -40% devoluciones",
      testimonial: "Las ventas online superaron las ventas en tienda",
      author: "Boutique Fashion, Palermo",
      ctaText: "PROBAR PROBADOR VIRTUAL",
    },
    {
      icon: Phone,
      image: menuImage,
      title: "MENÚ EN VIVO - BARES Y RESTAURANTES",
      subtitle: "Para: Bares | Restaurantes | Cafeterías",
      problem: "Menús desactualizados, clientes no saben qué hay disponible hoy",
      solution: "Menú digital actualizado en tiempo real con IA",
      features: [
        "Actualización instantánea de disponibilidad",
        "Fotos profesionales generadas por IA",
        "Recomendaciones personalizadas según preferencias",
        "Pedidos y reservas integrados",
      ],
      result: "+80% pedidos digitales | -50% errores en pedidos",
      testimonial: "Nuestros clientes ahora ordenan antes de llegar",
      author: "Restaurante El Buen Sabor, Bahía Blanca",
      ctaText: "VER MENÚ EN VIVO",
    },
    {
      icon: MessageSquare,
      image: automationImage,
      title: "AUTOMATIZACIÓN COMERCIAL",
      subtitle: "Para: Concesionarios | Contables | Clínicas | Servicios",
      problem: "Pierdes 70% de leads por atención manual deficiente",
      solution: "IA conversacional que atiende como humano 24/7",
      features: [
        "WhatsApp inteligente sector-específico",
        "Agendamiento automático perfecto",
        "CRM que nunca olvida un seguimiento",
        "Pipeline que se gestiona solo",
      ],
      result: "+300% leads | -60% trabajo manual",
      testimonial: "De 25 consultas/mes a 80 consultas/mes automáticamente",
      author: "Roberto Martínez, Ford Bahía Blanca",
      ctaText: "VER DEMO AUTOMATIZACIÓN",
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
        "1,000+ imágenes diarias GRATIS",
      ],
      result: "90% menos costo | 10x más velocidad",
      testimonial: "Lo que costaba $80K en 2 meses, ahora 1 semana",
      author: "Diego Fernández, Productora CABA",
      ctaText: "PROBAR STORYBOARD STUDIO",
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
        "Métricas y optimización continua",
      ],
      result: "50% menos costo | 200% más conversión",
      testimonial: "IA convierte 40% vs 15% promedio humano",
      author: "Call Center Seguros",
      ctaText: "CREAR MI AGENTE IA",
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
        "Optimización continua resultados",
      ],
      result: "De manual a automatizado en 30 días",
      testimonial: "Escaló de $50K/mes a $200K/mes automatizado",
      author: "Consultor Marketing",
      ctaText: "CONSULTA ESTRATÉGICA",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[hsl(220,15%,97%)] via-white to-[hsl(220,15%,97%)] py-24">
      <div className="container mx-auto px-6">
        <div className="animate-slide-up mb-16 text-center">
          <h2
            className="text-4xl font-serif font-black text-[hsl(220,70%,25%)] md:text-6xl"
            data-testid="text-services-title"
          >
            SERVICIOS
            <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">
              {" "}PRINCIPALES
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-[hsl(220,10%,45%)]">
            Ecosistema completo de automatización con IA que transforma industrias
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                {...service}
                onCtaClick={() =>
                  document.getElementById("asistente")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
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
