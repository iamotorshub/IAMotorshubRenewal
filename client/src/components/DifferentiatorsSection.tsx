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
    <Card className="group relative overflow-hidden bg-gradient-to-br from-[hsl(220,15%,92%)] to-white border-[hsl(210,100%,55%)]/30 transition-all duration-300 hover:scale-[1.02] hover:border-[hsl(210,100%,55%)]/50 hover:shadow-xl hover:shadow-[hsl(210,100%,55%)]/20">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)]"></div>
      
      <CardHeader className="pt-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(210,100%,55%)] shadow-lg shadow-[hsl(210,100%,55%)]/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:h-20 sm:w-20">
          <Icon className="h-8 w-8 text-white sm:h-10 sm:w-10" />
        </div>
        <CardTitle className="text-xl font-serif font-bold text-[hsl(220,70%,25%)] sm:text-2xl">{title}</CardTitle>
        <p className="mt-2 text-base font-medium italic text-[hsl(210,100%,55%)] sm:text-lg">"{subtitle}"</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm leading-relaxed text-[hsl(220,20%,15%)] sm:text-base">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[hsl(210,100%,55%)]"></div>
              <span>{feature}</span>
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
    <section className="bg-gradient-to-b from-white via-[hsl(220,15%,97%)] to-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center animate-slide-up sm:mb-16">
          <h2 className="mb-6 text-3xl font-serif font-black text-[hsl(220,70%,25%)] sm:text-4xl md:text-6xl" data-testid="text-differentiators-title">
            DIFERENCIADORES <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">ÚNICOS</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[hsl(220,10%,45%)] sm:text-lg">
            Por qué IA MOTORSHUB es diferente a cualquier otra empresa de automatización
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
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
