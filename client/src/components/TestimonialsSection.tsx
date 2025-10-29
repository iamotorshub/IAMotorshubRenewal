import { GlareCard } from "@/components/ui/glare-card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  position: string;
  company?: string;
  before: string;
  after: string;
  testimonial: string;
  videoSrc?: string;
  poster?: string;
}

function TestimonialCard({ name, position, company, before, after, testimonial, videoSrc, poster }: TestimonialProps) {
  return (
    <GlareCard className="h-full">
      <div className="flex h-full flex-col gap-5 text-left text-white sm:gap-6">
        <div className="relative">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[hsl(210,100%,55%)]/30 bg-[hsl(220,20%,15%)]/80 shadow-[0_15px_45px_rgba(11,30,61,0.35)]">
            {videoSrc ? (
              <video
                src={videoSrc}
                poster={poster}
                controls
                preload="metadata"
                className="h-full w-full object-cover rounded-2xl"
              >
                Tu navegador no soporta videos HTML5
              </video>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[hsl(210,100%,55%)]/20 to-[hsl(210,100%,70%)]/20">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[hsl(210,100%,55%)] bg-[hsl(210,100%,55%)]/30">
                    <span className="text-2xl font-bold text-[hsl(210,100%,55%)]">{name.charAt(0)}</span>
                  </div>
                  <p className="font-medium text-[hsl(210,100%,55%)]">{name}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-red-400/30 bg-white/5 p-4 text-center shadow-inner shadow-red-400/10">
            <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-red-300">Antes</p>
            <p className="text-sm font-semibold leading-relaxed text-white/90 sm:text-base">{before}</p>
          </div>
          <div className="rounded-2xl border border-green-400/40 bg-white/5 p-4 text-center shadow-inner shadow-green-400/10">
            <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-emerald-300">Después</p>
            <p className="text-sm font-bold leading-relaxed text-[hsl(210,100%,65%)] sm:text-base">{after}</p>
          </div>
        </div>

        <div className="flex justify-start gap-1 text-[hsl(210,100%,65%)]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
          ))}
        </div>

        <blockquote className="text-sm italic leading-relaxed text-[hsl(220,15%,92%)]/90 text-balance sm:text-base">
          "{testimonial}"
        </blockquote>

        <div className="mt-auto text-[hsl(220,15%,92%)]">
          <p className="text-base font-bold text-white sm:text-lg">
            {name}
            <span className="block text-xs font-medium text-[hsl(210,100%,65%)] sm:inline sm:text-sm"> - {position}</span>
          </p>
          {company && (
            <p className="text-xs uppercase tracking-[0.12em] text-[hsl(220,10%,65%)]">{company}</p>
          )}
        </div>
      </div>
    </GlareCard>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Roberto Martínez",
      position: "Gerente General Concesionario Oficial Ford",
      company: "",
      before: "25 consultas/mes | Atención manual | Leads perdidos",
      after: "80 consultas/mes | IA 24/7 | +220% conversión",
      testimonial:
        "Implementamos un agente de ventas que responde sobre modelos, califica leads fríos y calientes, hace seguimiento perfecto. Ahorramos 5 horas diarias y triplicamos ventas.",
      videoSrc: "/videos/ROBERTO-TESTIMONIO.mp4",
      poster: "/videos/ROBERTO-TESTIMONIO.mp4#t=0.1"
    },
    {
      name: "María González",
      position: "Agente Inmobiliaria CABA",
      company: "",
      before: "Leads perdidos de noche | Agenda manual | Consultas básicas",
      after: "IA responde al instante | Visitas automáticas | +300% consultas",
      testimonial: "Antes perdíamos leads por no contestar fuera de horario. Ahora la IA responde inmediatamente, agenda visitas sola, y califica leads perfectamente. Cambió nuestro negocio.",
      videoSrc: "/videos/MARIA-TESTIMONIO.mp4",
      poster: "/videos/MARIA-TESTIMONIO.mp4#t=0.1"
    },
    {
      name: "Diego Fernández",
      position: "Director Creativo Storyboard Studio",
      company: "",
      before: "$80K y 2 meses por proyecto | Storyboards manuales",
      after: "1 semana automatizado | Personajes consistentes perfectos",
      testimonial: "Storyboard Studio revolucionó nuestra productividad. Personajes perfectos, locaciones realistas, todo automático. Lo que costaba fortunas ahora es instantáneo.",
      videoSrc: "/videos/DIEGO-TESTIMONIO.mp4",
      poster: "/videos/DIEGO-TESTIMONIO.mp4#t=0.1"
    }
  ];

  return (
    <section id="testimonios" className="relative overflow-hidden py-16 bg-gradient-to-b from-[hsl(220,70%,25%)] via-[hsl(220,20%,15%)] to-[hsl(220,70%,22%)] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[hsl(210,100%,65%)]/20 blur-3xl animate-[pulse_9s_ease-in-out_infinite]"></div>
        <div className="absolute right-[-18%] top-24 h-80 w-80 rounded-full bg-[hsl(210,85%,55%)]/18 blur-3xl animate-[pulse_11s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-20%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[hsl(220,90%,60%)]/16 blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center animate-slide-up sm:mb-16">
          <h2 className="mb-6 text-3xl font-serif font-black text-white sm:text-4xl md:text-6xl" data-testid="text-testimonials-title">
            CASOS DE ÉXITO <span className="text-[hsl(210,100%,55%)]">COMPLETOS</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[hsl(220,15%,92%)] sm:text-lg">
            Resultados reales y verificables de empresas que ya transformaron su negocio
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
