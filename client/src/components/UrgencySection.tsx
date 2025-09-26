import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

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
      case 'limited': return 'bg-yellow-500';
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
    <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-yellow-400/20 hover-elevate transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white font-serif text-lg">{sector}</CardTitle>
          <Badge className={`${getStatusColor()} text-white font-bold`}>
            {getStatusText()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-2">
            {available}/{total}
          </div>
          <p className="text-gray-300 text-sm">
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
      <div className="bg-yellow-400/20 rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-yellow-400" data-testid="countdown-days">{timeLeft.days}</div>
        <div className="text-xs text-gray-300">DÍAS</div>
      </div>
      <div className="bg-yellow-400/20 rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-yellow-400" data-testid="countdown-hours">{timeLeft.hours}</div>
        <div className="text-xs text-gray-300">HORAS</div>
      </div>
      <div className="bg-yellow-400/20 rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-yellow-400" data-testid="countdown-minutes">{timeLeft.minutes}</div>
        <div className="text-xs text-gray-300">MIN</div>
      </div>
      <div className="bg-yellow-400/20 rounded-lg p-3 text-center">
        <div className="text-2xl font-bold text-yellow-400" data-testid="countdown-seconds">{timeLeft.seconds}</div>
        <div className="text-xs text-gray-300">SEG</div>
      </div>
    </div>
  );
}

export default function UrgencySection() {
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
    <section className="py-24 bg-gradient-to-b from-red-900/20 via-black to-yellow-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-400" />
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white" data-testid="text-urgency-title">
              URGENCIA Y <span className="text-red-400">ESCASEZ</span>
            </h2>
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solo trabajamos con 1 empresa por sector en cada ciudad para garantizar ventaja competitiva total
          </p>
        </div>

        {/* Exclusivity Section */}
        <div className="bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 rounded-2xl border border-yellow-400/30 p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-yellow-400" />
            <h3 className="text-2xl font-serif font-bold text-white">
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
        <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 rounded-2xl border border-yellow-400/50 p-8 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-yellow-400" />
              <h3 className="text-3xl font-serif font-bold text-white">
                OFERTA IRRESISTIBLE
              </h3>
            </div>
            <p className="text-xl text-yellow-400 font-bold mb-6">
              PARA LAS PRIMERAS 3 EMPRESAS ESTA SEMANA:
            </p>
            
            <CountdownTimer />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offers.map((offer, index) => (
              <div key={index} className="flex items-center gap-4 bg-black/30 rounded-lg p-4">
                <offer.icon className="h-6 w-6 text-green-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white font-medium">{offer.text}</p>
                  <p className="text-gray-400 text-sm">(valor {offer.value})</p>
                </div>
                <Badge className="bg-green-500 text-white font-bold">
                  {offer.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl md:text-5xl font-serif font-black text-white mb-6" data-testid="text-final-question">
            ¿LISTO PARA SER LA EMPRESA LÍDER<br />
            <span className="text-yellow-400">DE TU SECTOR EN ARGENTINA?</span>
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Franco Larrarte ya automatizó +50 empresas exitosamente. Tu competencia ya está preguntando 
            cómo implementar IA. <span className="text-yellow-400 font-bold">La diferencia entre líder y seguidor se decide HOY.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg"
              data-testid="button-final-consultation"
              onClick={() => console.log('Agendar Consulta Estratégica clicked')}
            >
              AGENDAR CONSULTA ESTRATÉGICA AHORA
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold px-8 py-4 text-lg"
              data-testid="button-whatsapp"
              onClick={() => console.log('WhatsApp directo clicked')}
            >
              WHATSAPP DIRECTO: +54 9 291 520-6692
            </Button>
          </div>
          
          <p className="text-yellow-400 font-bold text-xl mt-8" data-testid="text-closing">
            "No vendemos herramientas. Creamos ecosistemas que transforman industrias."
          </p>
        </div>
      </div>
    </section>
  );
}