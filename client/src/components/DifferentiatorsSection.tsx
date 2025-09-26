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
    <Card className="bg-gradient-to-br from-yellow-400/10 to-transparent border-yellow-400/30 hover-elevate transition-all duration-300">
      <CardHeader className="text-center">
        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="h-10 w-10 text-black" />
        </div>
        <CardTitle className="text-2xl font-serif font-bold text-white">{title}</CardTitle>
        <p className="text-yellow-400 font-medium italic text-lg">"{subtitle}"</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
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
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6" data-testid="text-differentiators-title">
            DIFERENCIADORES <span className="text-yellow-400">ÚNICOS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Por qué IA MOTORSHUB es diferente a cualquier otra empresa de automatización
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((differentiator, index) => (
            <DifferentiatorCard
              key={index}
              {...differentiator}
            />
          ))}
        </div>
      </div>
    </section>
  );
}