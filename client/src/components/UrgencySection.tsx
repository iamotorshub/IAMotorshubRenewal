import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import ScheduleModal from "./ScheduleModal";

interface SlotProps {
  sector: string;
  available: number;
  total: number;
  status: 'available' | 'limited' | 'full';
}

function SlotCard({ sector, available, total, status }: SlotProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'limited': return 'bg-[hsl(210,100%,55%)]';
      case 'full': return 'bg-red-500';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'available': return 'DISPONIBLE';
      case 'limited': return 'LIMITADO';
      case 'full': return 'COMPLETO';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-white to-[hsl(220,15%,92%)] border-[hsl(210,100%,55%)]/30 hover-elevate transition-all duration-300 hover:border-[hsl(210,100%,55%)]/50 hover:scale-105">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[hsl(220,70%,25%)] font-serif text-base">{sector}</CardTitle>
          <Badge className={`${getStatusColor()} text-white font-bold`}>
            {getStatusText()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-3xl font-bold text-[hsl(210,100%,55%)] mb-2">
            {available}/{total}
          </div>
          <p className="text-[hsl(220,10%,45%)] text-sm">
            {status === 'full' ? 'Lista de espera' : 'Slots disponibles'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      <div className="bg-[hsl(210,100%,55%)]/20 border-2 border-[hsl(210,100%,55%)]/30 rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-[hsl(210,100%,55%)]" data-testid="countdown-days">{timeLeft.days}</div>
        <div className="text-xs text-[hsl(220,10%,45%)]">DÍAS</div>
      </div>
      <div className="bg-[hsl(210,100%,55%)]/20 border-2 border-[hsl(210,100%,55%)]/30 rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-[hsl(210,100%,55%)]" data-testid="countdown-hours">{timeLeft.hours}</div>
        <div className="text-xs text-[hsl(220,10%,45%)]">HORAS</div>
      </div>
      <div className="bg-[hsl(210,100%,55%)]/20 border-2 border-[hsl(210,100%,55%)]/30 rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-[hsl(210,100%,55%)]" data-testid="countdown-minutes">{timeLeft.minutes}</div>
        <div className="text-xs text-[hsl(220,10%,45%)]">MIN</div>
      </div>
      <div className="bg-[hsl(210,100%,55%)]/20 border-2 border-[hsl(210,100%,55%)]/30 rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-[hsl(210,100%,55%)]" data-testid="countdown-seconds">{timeLeft.seconds}</div>
        <div className="text-xs text-[hsl(220,10%,45%)]">SEG</div>
      </div>
    </div>
  );
}

export default function UrgencySection() {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const handleScheduleClick = () => {
    setShowScheduleModal(true);
  };

  const slots = [
    { sector: 'Concesionarios', available: 1, total: 1, status: 'limited' as const },
    { sector: 'Inmobiliarias', available: 2, total: 3, status: 'available' as const },
    { sector: 'Clínicas', available: 1, total: 2, status: 'limited' as const },
    { sector: 'Contables', available: 2, total: 3, status: 'available' as const },
    { sector: 'Call Centers', available: 0, total: 2, status: 'full' as const }
  ];

  const offers = [
    { icon: CheckCircle, text: 'Consulta estratégica 2 horas', value: '$50,000', status: 'GRATIS' },
    { icon: CheckCircle, text: 'Audit completo automatización', value: 'Premium', status: 'GRATIS' },
    { icon: CheckCircle, text: 'Preview personalizado funcionando', value: 'Exclusivo', status: 'GRATIS' },
    { icon: CheckCircle, text: '30 días implementación supervisada', value: 'Hands-on', status: 'GRATIS' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(220,15%,97%)] via-white to-[hsl(220,15%,97%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[hsl(220,70%,25%)]" data-testid="text-urgency-title">
              URGENCIA Y <span className="text-red-500">ESCASEZ</span>
            </h2>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-xl text-[hsl(220,10%,45%)] max-w-3xl mx-auto">
            Solo trabajamos con 1 empresa por sector en cada ciudad para garantizar ventaja competitiva total
          </p>
        </div>

        {/* Exclusivity Section */}
        <div className="bg-gradient-to-r from-[hsl(220,15%,92%)] via-white to-[hsl(220,15%,92%)] rounded-2xl border-2 border-[hsl(210,100%,55%)]/30 p-8 mb-12 shadow-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-[hsl(210,100%,55%)]" />
            <h3 className="text-2xl font-serif font-bold text-[hsl(220,70%,25%)]">
              BAHÍA BLANCA - SLOTS DISPONIBLES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {slots.map((slot, index) => (
              <SlotCard key={index} {...slot} />
            ))}
          </div>
        </div>

        {/* Limited Time Offer */}
        <div className="bg-gradient-to-r from-[hsl(210,100%,55%)]/10 via-[hsl(210,100%,55%)]/5 to-[hsl(210,100%,55%)]/10 rounded-2xl border-2 border-[hsl(210,100%,55%)]/50 p-8 mb-12 shadow-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-[hsl(210,100%,55%)]" />
              <h3 className="text-3xl font-serif font-bold text-[hsl(220,70%,25%)]">
                OFERTA IRRESISTIBLE
              </h3>
            </div>
            <p className="text-xl text-[hsl(210,100%,55%)] font-bold mb-6">
              PARA LAS PRIMERAS 3 EMPRESAS ESTA SEMANA:
            </p>

            <CountdownTimer />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offers.map((offer, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/70 rounded-lg p-4 border border-[hsl(210,100%,55%)]/20">
                <offer.icon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[hsl(220,70%,25%)] font-medium">{offer.text}</p>
                  <p className="text-[hsl(220,10%,45%)] text-sm">(valor {offer.value})</p>
                </div>
                <Badge className="bg-green-500 text-white font-bold">
                  {offer.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-[hsl(220,70%,25%)] mb-6" data-testid="text-final-question">
            ¿LISTO PARA SER LA EMPRESA LÍDER<br />
            <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">DE TU SECTOR EN ARGENTINA?</span>
          </h3>

          <p className="text-xl text-[hsl(220,10%,45%)] mb-8 max-w-4xl mx-auto">
            Ya automatizamos +50 empresas exitosamente. Tu competencia ya está preguntando 
            cómo implementar IA. <span className="text-[hsl(210,100%,55%)] font-bold">La diferencia entre líder y seguidor se decide HOY.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,50%)] text-white font-bold px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(210,100%,55%)]/40 hover:scale-105"
              data-testid="button-schedule"
              onClick={handleScheduleClick}
            >
              AGENDAR CONSULTA ESTRATÉGICA AHORA
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              data-testid="button-whatsapp"
              onClick={() => window.open('https://wa.me/5492915206692', '_blank')}
            >
              WHATSAPP DIRECTO: +54 9 291 520-6692
            </Button>
          </div>

          <p className="text-[hsl(210,100%,55%)] font-bold text-xl mt-8" data-testid="text-closing">
            "No vendemos herramientas. Creamos ecosistemas que transforman industrias."
          </p>
        </div>
      </div>

      {/* Modal de Agendamiento */}
      <ScheduleModal open={showScheduleModal} onOpenChange={setShowScheduleModal} />

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