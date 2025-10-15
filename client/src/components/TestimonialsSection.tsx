import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";
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
    <Card className="bg-gradient-to-br from-[hsl(220,70%,25%)] to-[hsl(220,20%,15%)] border-[hsl(210,100%,55%)]/30 hover-elevate transition-all duration-300 hover:border-[hsl(210,100%,55%)]/50 hover:shadow-xl hover:shadow-[hsl(210,100%,55%)]/30 group hover:scale-105">
      <CardContent className="p-8">
        {/* Video Thumbnail */}
        <div className="relative mb-6">
          <div className="aspect-video bg-[hsl(220,20%,15%)] rounded-lg flex items-center justify-center relative overflow-hidden border-2 border-[hsl(210,100%,55%)]/20">
            {videoThumbnail ? (
              <img src={videoThumbnail} alt={`${name} testimonial`} className="w-full h-full object-cover" />
            ) : (
              <div className="bg-gradient-to-br from-[hsl(210,100%,55%)]/20 to-[hsl(210,100%,70%)]/20 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[hsl(210,100%,55%)]/30 rounded-full mx-auto mb-2 flex items-center justify-center border-2 border-[hsl(210,100%,55%)]">
                    <span className="text-2xl font-bold text-[hsl(210,100%,55%)]">{name.charAt(0)}</span>
                  </div>
                  <p className="text-[hsl(210,100%,55%)] font-medium">{name}</p>
                </div>
              </div>
            )}
            
            <Button
              size="icon"
              className="absolute inset-0 w-16 h-16 m-auto bg-[hsl(210,100%,55%)]/90 hover:bg-[hsl(210,100%,55%)] text-white rounded-full shadow-lg shadow-[hsl(210,100%,55%)]/50 transition-all duration-300 hover:scale-110"
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
        
        {/* Before/After Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center bg-white/5 rounded-lg p-3 border border-red-400/30">
            <p className="text-red-400 font-semibold text-sm mb-1">ANTES</p>
            <p className="text-white font-bold text-sm leading-relaxed">{before}</p>
          </div>
          <div className="text-center bg-white/5 rounded-lg p-3 border border-green-400/30">
            <p className="text-green-400 font-semibold text-sm mb-1">DESPUÉS</p>
            <p className="text-[hsl(210,100%,55%)] font-bold text-sm leading-relaxed">{after}</p>
          </div>
        </div>
        
        {/* Stars */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-[hsl(210,100%,55%)] fill-current" />
          ))}
        </div>
        
        {/* Testimonial */}
        <blockquote className="text-[hsl(220,15%,92%)] italic text-center mb-6 text-base leading-relaxed">
          "{testimonial}"
        </blockquote>
        
        {/* Author */}
        <div className="text-center">
          <p className="text-white font-bold">{name}</p>
          <p className="text-[hsl(210,100%,55%)] font-medium">{position}</p>
          <p className="text-[hsl(220,5%,65%)]">{company}</p>
        </div>
      </CardContent>
    </Card>
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
    <section className="py-24 bg-gradient-to-b from-[hsl(220,70%,25%)] via-[hsl(220,20%,15%)] to-[hsl(220,70%,25%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6" data-testid="text-testimonials-title">
            CASOS DE ÉXITO <span className="text-[hsl(210,100%,55%)]">COMPLETOS</span>
          </h2>
          <p className="text-xl text-[hsl(220,15%,92%)] max-w-3xl mx-auto">
            Resultados reales y verificables de empresas que ya transformaron su negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
