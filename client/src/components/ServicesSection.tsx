import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Film,
  Phone,
  TrendingUp,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
// Imágenes actualizadas para servicios
import rentalsImage from "@assets/hero-rentals-ai_1760656167854.png";
import probadorImage from "@assets/hero-Probador -virtual_1760656167864.jpg";
import menuImage from "@assets/hero-menu-vivo_1760656167856.jpg";
import automationImage from "@assets/hero-automatizacion-comercial_1760656167856.png";
import videoImage from "@assets/hero-storyboard-pro_1760656167864.jpg";
import phoneImage from "@assets/hero-agentes-telefonicos_1760656167864.jpg";
const scalingImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";

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
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[rgba(4,12,28,0.78)] text-slate-100 shadow-[0_30px_90px_rgba(6,22,58,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_45px_120px_rgba(8,32,82,0.55)]"
      data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-[900ms] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,18,0.82)_0%,rgba(4,10,26,0.74)_45%,rgba(4,10,26,0.9)_100%)]"></div>
        <div
          className="absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-700 group-hover:opacity-60"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(96,165,250,0.35), transparent 52%), radial-gradient(circle at 82% 18%, rgba(14,165,233,0.28), transparent 55%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex h-full flex-col gap-6 p-7 sm:p-10">
        <div className="flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xl shadow-[0_18px_45px_rgba(14,116,233,0.28)]">
              <Icon className="h-7 w-7 text-sky-200" />
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold uppercase tracking-[0.22em] text-white sm:text-xl">
                {title}
              </h3>
              <p className="text-xs font-medium text-slate-200/85 sm:text-sm">{subtitle}</p>
            </div>
          </div>

          <div className="grid gap-4 text-sm text-slate-100/90 sm:text-base">
            <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 shadow-[0_15px_35px_rgba(6,20,50,0.25)] backdrop-blur-lg">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sky-200/80 sm:text-xs">
                Problema
              </p>
              <p className="mt-2 leading-relaxed">{problem}</p>
            </div>
            <div className="rounded-[1.5rem] border border-sky-400/40 bg-sky-500/10 p-5 shadow-[0_20px_48px_rgba(14,116,233,0.28)] backdrop-blur-lg">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sky-50 sm:text-xs">
                Solución
              </p>
              <p className="mt-2 font-medium leading-relaxed text-slate-50/95">{solution}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span
              key={index}
              className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-100/85 transition-all duration-300 hover:border-sky-300/60 hover:bg-sky-500/15 hover:text-white"
            >
              {feature}
            </span>
          ))}
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-5 rounded-[1.5rem] border border-white/12 bg-white/8 p-6 backdrop-blur-lg">
              <div>
                <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-sky-100/90 sm:text-xs">
                  Resultado
                </h4>
                <p className="mt-2 text-sm font-semibold text-white sm:text-base">{result}</p>
              </div>
              <div className="rounded-2xl border border-white/14 bg-black/25 p-4">
                <p className="text-sm italic text-slate-100/90">"{testimonial}"</p>
                <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sky-200/80 sm:text-xs">
                  {author}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button
            className="group/cta inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#38bdf8,#60a5fa)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_22px_55px_rgba(14,116,233,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_32px_85px_rgba(14,116,233,0.45)] sm:px-8 sm:py-4 sm:text-base"
            onClick={onCtaClick}
            data-testid={`button-${ctaText.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Button>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-100 transition-all duration-300 hover:border-sky-300/60 hover:bg-sky-500/15 hover:text-white"
          >
            {expanded ? "Ocultar caso" : "Ver caso completo"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </article>
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
        "Seguimiento automatizado del proceso de alquiler"
      ],
      result: "+200% consultas atendidas | -70% tiempo administrativo",
      testimonial: "Cerramos 3x más contratos con la mitad del esfuerzo",
      author: "Inmobiliaria Premium, CABA",
      ctaText: "VER DEMO RENTALS AI"
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
        "Incremento de conversión online significativo"
      ],
      result: "+150% conversión online | -40% devoluciones",
      testimonial: "Las ventas online superaron las ventas en tienda",
      author: "Boutique Fashion, Palermo",
      ctaText: "PROBAR PROBADOR VIRTUAL"
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
        "Pedidos y reservas integrados"
      ],
      result: "+80% pedidos digitales | -50% errores en pedidos",
      testimonial: "Nuestros clientes ahora ordenan antes de llegar",
      author: "Restaurante El Buen Sabor, Bahía Blanca",
      ctaText: "VER MENÚ EN VIVO"
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
            SERVICIOS <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">PRINCIPALES</span>
          </h2>
          <p className="text-xl text-[hsl(220,10%,45%)] max-w-3xl mx-auto">
            Ecosistema completo de automatización con IA que transforma industrias
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto lg:grid-cols-2">
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
