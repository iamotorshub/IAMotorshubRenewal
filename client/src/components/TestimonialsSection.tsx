import { Button } from "@/components/ui/button";
import { GlareCard } from "@/components/ui/glare-card";
import { Play, Star } from "lucide-react";
import { useState } from "react";

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  before: string;
  after: string;
  testimonial: string;
  videoThumbnail?: string;
}

function TestimonialCard({ name, position, company, before, after, testimonial, videoThumbnail }: TestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <GlareCard className="h-full">
      <div className="flex h-full flex-col gap-6 text-left text-white">
        <div className="relative">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[hsl(210,100%,55%)]/30 bg-[hsl(220,20%,15%)]/80 shadow-[0_15px_45px_rgba(11,30,61,0.35)]">
            {videoThumbnail ? (
              <img
                src={videoThumbnail}
                alt={`${name} testimonial`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
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

            <Button
              size="icon"
              className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(210,100%,55%)]/90 text-white shadow-[0_15px_45px_rgba(59,130,246,0.45)] transition-transform duration-300 hover:scale-110"
              onClick={() => {
                setIsPlaying(!isPlaying);
                console.log(`Playing testimonial video for ${name}`);
              }}
              data-testid={`button-play-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Play className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-red-400/30 bg-white/5 p-4 text-center shadow-inner shadow-red-400/10">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-red-300">Antes</p>
            <p className="text-sm font-semibold text-white/90 leading-relaxed">{before}</p>
          </div>
          <div className="rounded-2xl border border-green-400/40 bg-white/5 p-4 text-center shadow-inner shadow-green-400/10">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-300">Después</p>
            <p className="text-sm font-bold text-[hsl(210,100%,65%)] leading-relaxed">{after}</p>
          </div>
        </div>

        <div className="flex justify-start gap-1 text-[hsl(210,100%,65%)]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>

        <blockquote className="text-base italic leading-relaxed text-[hsl(220,15%,92%)]/90 text-balance">
          "{testimonial}"
        </blockquote>

        <div className="mt-auto text-[hsl(220,15%,92%)]">
          <p className="text-lg font-bold text-white">{name}</p>
          <p className="text-sm font-medium text-[hsl(210,100%,65%)]">{position}</p>
          <p className="text-xs uppercase tracking-[0.12em] text-[hsl(220,10%,65%)]">{company}</p>
        </div>
      </div>
    </GlareCard>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Roberto Martínez",
      position: "Gerente General",
      company: "Ford Bahía Blanca",
      before: "25 consultas/mes | Atención manual | Leads perdidos",
      after: "80 consultas/mes | IA 24/7 | +220% conversión",
      testimonial: "Franco implementó un asistente IA que responde sobre modelos, agenda test drives automáticamente, y hace seguimiento perfecto. Ahorramos 5 horas diarias y triplicamos ventas."
    },
    {
      name: "María González",
      position: "Directora Comercial",
      company: "Inmobiliaria Centro Bahía Blanca",
      before: "Leads perdidos de noche | Agenda manual | Consultas básicas",
      after: "IA responde al instante | Visitas automáticas | +300% consultas",
      testimonial: "Antes perdíamos leads por no contestar fuera de horario. Ahora la IA responde inmediatamente, agenda visitas sola, y califica leads perfectamente. Cambió nuestro negocio."
    },
    {
      name: "Diego Fernández",
      position: "Director Creativo",
      company: "Productora CABA",
      before: "$80K y 2 meses por proyecto | Storyboards manuales",
      after: "1 semana automatizado | Personajes consistentes perfectos",
      testimonial: "Storyboard Studio revolucionó nuestra productividad. Personajes perfectos, locaciones realistas, todo automático. Lo que costaba fortunas ahora es instantáneo."
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[hsl(220,70%,25%)] via-[hsl(220,20%,15%)] to-[hsl(220,70%,22%)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[hsl(210,100%,65%)]/20 blur-3xl animate-[pulse_9s_ease-in-out_infinite]"></div>
        <div className="absolute right-[-18%] top-24 h-80 w-80 rounded-full bg-[hsl(210,85%,55%)]/18 blur-3xl animate-[pulse_11s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-20%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[hsl(220,90%,60%)]/16 blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6" data-testid="text-testimonials-title">
            CASOS DE ÉXITO <span className="text-[hsl(210,100%,55%)]">COMPLETOS</span>
          </h2>
          <p className="text-xl text-[hsl(220,15%,92%)] max-w-3xl mx-auto">
            Resultados reales y verificables de empresas que ya transformaron su negocio
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <TestimonialCard {...testimonial} />
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
