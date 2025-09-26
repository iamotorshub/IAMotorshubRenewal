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
    <Card className="bg-gradient-to-br from-black/50 to-gray-900/50 border-yellow-400/20 hover-elevate transition-all duration-300">
      <CardContent className="p-8">
        {/* Video Thumbnail */}
        <div className="relative mb-6">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
            {videoThumbnail ? (
              <img src={videoThumbnail} alt={`${name} testimonial`} className="w-full h-full object-cover" />
            ) : (
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-400">{name.charAt(0)}</span>
                  </div>
                  <p className="text-yellow-400 font-medium">{name}</p>
                </div>
              </div>
            )}
            
            <Button
              size="icon"
              className="absolute inset-0 w-16 h-16 m-auto bg-yellow-400/90 hover:bg-yellow-400 text-black rounded-full"
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
          <div className="text-center">
            <p className="text-red-400 font-semibold text-sm mb-1">ANTES</p>
            <p className="text-white font-bold text-lg">{before}</p>
          </div>
          <div className="text-center">
            <p className="text-green-400 font-semibold text-sm mb-1">DESPUÉS</p>
            <p className="text-yellow-400 font-bold text-lg">{after}</p>
          </div>
        </div>
        
        {/* Stars */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        
        {/* Testimonial */}
        <blockquote className="text-gray-200 italic text-center mb-6 text-lg leading-relaxed">
          "{testimonial}"
        </blockquote>
        
        {/* Author */}
        <div className="text-center">
          <p className="text-white font-bold">{name}</p>
          <p className="text-yellow-400 font-medium">{position}</p>
          <p className="text-gray-400">{company}</p>
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
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6" data-testid="text-testimonials-title">
            CASOS DE ÉXITO <span className="text-yellow-400">COMPLETOS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reales y verificables de empresas que ya transformaron su negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}