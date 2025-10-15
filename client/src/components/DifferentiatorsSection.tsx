import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Code, BarChart3 } from "lucide-react";

interface DifferentiatorProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  features: string[];
}

function DifferentiatorCard({ icon: Icon, title, subtitle, features }: DifferentiatorProps) {
  return (
    <Card className="relative bg-gradient-to-br from-[hsl(220,15%,92%)] to-white border-[hsl(210,100%,55%)]/30 hover-elevate transition-all duration-300 hover:border-[hsl(210,100%,55%)]/50 hover:shadow-xl hover:shadow-[hsl(210,100%,55%)]/20 overflow-hidden group hover:scale-105">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)]"></div>
      
      <CardHeader className="text-center pt-8">
        <div className="w-20 h-20 bg-[hsl(210,100%,55%)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[hsl(210,100%,55%)]/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-10 w-10 text-white" />
        </div>
        <CardTitle className="text-2xl font-serif font-bold text-[hsl(220,70%,25%)]">{title}</CardTitle>
        <p className="text-[hsl(210,100%,55%)] font-medium italic text-lg mt-2">"{subtitle}"</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-[hsl(220,20%,15%)]">
              <div className="w-2 h-2 bg-[hsl(210,100%,55%)] rounded-full mt-2 flex-shrink-0"></div>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: Camera,
      title: "EXPERIENCIA CINEMATOGRÁFICA REAL",
      subtitle: "No somos programadores que aprendieron de cine. Somos cineastas que dominamos IA.",
      features: [
        "Producciones cinematográficas reales",
        "Conocimiento técnico profesional",
        "Estándares de calidad Hollywood",
        "Aplicado a automatización empresarial"
      ]
    },
    {
      icon: Code,
      title: "ARSENAL TECNOLÓGICO PROPIO",
      subtitle: "Mientras otros prometen 'próximamente', nosotros demostramos con tecnología funcionando.",
      features: [
        "Storyboard Studio Pro: OPERATIVO",
        "AI Agent Hub: FUNCIONAL",
        "Sistema rotación automática: ACTIVO",
        "Generación ilimitada: REAL"
      ]
    },
    {
      icon: BarChart3,
      title: "RESULTADOS COMPROBABLES",
      subtitle: "Cada cliente puede verificar resultados específicos y cuantificables.",
      features: [
        "Métricas transparentes tiempo real",
        "ROI garantizado documentado",
        "Casos de estudio detallados",
        "Before/After verificables"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[hsl(220,15%,97%)] to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[hsl(220,70%,25%)] mb-6" data-testid="text-differentiators-title">
            DIFERENCIADORES <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">ÚNICOS</span>
          </h2>
          <p className="text-xl text-[hsl(220,10%,45%)] max-w-3xl mx-auto">
            Por qué IA MOTORSHUB es diferente a cualquier otra empresa de automatización
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((differentiator, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <DifferentiatorCard {...differentiator} />
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
