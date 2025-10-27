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

function ServiceCard({ icon: Icon, image, title, subtitle, problem, solution, features, result, testimonial, author, ctaText, onCtaClick }: ServiceProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardId = title.toLowerCase().replace(/\s+/g, "-");
  const ctaId = ctaText.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="group perspective-1200" data-testid={`card-${cardId}`}>
      <div
        className={`relative h-[660px] w-full transition-transform duration-700 [transform-style:preserve-3d] sm:h-[700px] lg:h-[760px] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
          <div className="group/front relative flex h-full w-full flex-col overflow-hidden rounded-[2.25rem] border border-[rgba(255,255,255,0.12)] bg-slate-950/40 shadow-[0_32px_90px_rgba(6,16,38,0.58)]">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] group-hover/front:scale-[1.05]"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[rgba(2,10,24,0.85)] via-[rgba(2,10,24,0.45)] to-transparent"></div>

            <div className="pointer-events-auto absolute right-6 top-6 z-20 sm:right-8 sm:top-8">
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-white/20 bg-[rgba(255,255,255,0.12)] text-white transition-colors duration-300 hover:bg-white/25"
                onClick={() => setIsFlipped((prev) => !prev)}
                data-testid={`button-flip-${cardId}`}
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
            </div>

            <div className="relative z-10 flex flex-1 flex-col justify-between px-8 pb-8 pt-16 sm:px-10 sm:pb-10 sm:pt-20">
              <div className="flex items-start gap-4 text-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.75rem] border border-white/30 bg-white/15 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-slate-200/85 sm:text-xs">
                    {subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-serif font-bold leading-tight drop-shadow-[0_12px_30px_rgba(2,8,20,0.75)] sm:text-3xl">
                    {title}
                  </h3>
                </div>
              </div>

              <div className="mt-auto space-y-5">
                <div className="rounded-3xl border border-[rgba(255,255,255,0.25)] bg-[rgba(0,0,0,0.35)] p-6 text-white shadow-[0_22px_55px_rgba(2,8,22,0.6)] backdrop-blur-md">
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-sky-200/90">Problema</h4>
                  <p className="mt-3 text-base font-medium leading-relaxed text-slate-100 sm:text-lg">“{problem}”</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Button
                    className="flex-1 rounded-full bg-white/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/25 sm:text-sm"
                    onClick={() => setIsFlipped(true)}
                    data-testid={`button-ver-solucion-${cardId}`}
                  >
                    Ver solución
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    className="rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.18)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white/60 hover:bg-[rgba(255,255,255,0.28)] sm:text-sm"
                    onClick={onCtaClick}
                    data-testid={`button-${ctaId}`}
                  >
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-sky-400/25 bg-gradient-to-br from-[hsl(220,70%,20%)] via-[hsl(220,62%,16%)] to-[hsl(220,68%,12%)] text-white shadow-[0_36px_105px_rgba(4,16,40,0.68)]">
            <div className="flex items-start justify-between gap-4 px-8 pt-8 sm:px-10 sm:pt-10">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-sky-200/80 sm:text-xs">{subtitle}</p>
                <h3 className="mt-2 text-3xl font-serif font-bold leading-tight drop-shadow-[0_16px_45px_rgba(2,10,28,0.65)] sm:text-4xl">
                  {title}
                </h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-white/15 bg-[rgba(255,255,255,0.12)] text-white transition-colors duration-300 hover:bg-white/25"
                onClick={() => setIsFlipped((prev) => !prev)}
                data-testid={`button-flip-back-${cardId}`}
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
            </div>

            <div className="hide-scrollbar flex-1 overflow-y-auto px-8 pb-10 pt-6 sm:px-10 sm:pb-12 sm:pt-8">
              <div className="space-y-6 pr-1">
                <div className="rounded-3xl border border-sky-300/30 bg-sky-300/15 p-6 text-slate-100">
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-sky-100/85">Solución</h4>
                  <p className="mt-3 text-base font-semibold leading-relaxed text-white/95 sm:text-lg">“{solution}”</p>
                </div>

                <div>
                  <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-sky-100/80">Características clave</h4>
                  <ul className="mt-4 grid gap-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 text-sm leading-relaxed text-slate-100/95">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-200" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-sky-300/25 bg-sky-400/20 p-5">
                    <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-sky-100/85">Resultado</h4>
                    <p className="mt-3 text-lg font-bold text-white">{result}</p>
                  </div>
                  <div className="rounded-3xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.12)] p-5 backdrop-blur-md">
                    <p className="text-sm italic text-white/90">“{testimonial}”</p>
                    <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-sky-100/85">{author}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 pb-8 sm:px-10 sm:pb-10">
              <Button
                className="w-full rounded-full bg-[rgba(255,255,255,0.22)] py-4 text-xs font-bold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.32)] sm:text-sm"
                onClick={onCtaClick}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1200 {
          perspective: 1200px;
        }
        .transform-style-3d,
        .group [transform-style\:preserve-3d] {
          transform-style: preserve-3d;
        }
        .backface-hidden,
        .group [backface-visibility\:hidden] {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180,
        .group [transform\:rotateY(180deg)] {
          transform: rotateY(180deg);
        }
        .hide-scrollbar {
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
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
