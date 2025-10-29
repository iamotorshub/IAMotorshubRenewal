import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ScheduleModal from "./ScheduleModal";

const MANIFESTO_LINES = ["Creamos ecosistemas", "que transforman", "industrias."] as const;

function ManifestoStatement() {
  const manifestoRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(manifestoRef, {
    once: true,
    margin: "-10% 0px"
  });

  const [typedContent, setTypedContent] = useState("");
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasStartedTypingRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasStartedTypingRef.current) {
      return;
    }

    hasStartedTypingRef.current = true;
    const fullText = MANIFESTO_LINES.join("\n");
    let index = 0;

    const typeNextCharacter = () => {
      setTypedContent(fullText.slice(0, index + 1));
      index += 1;

      if (index < fullText.length) {
        typingTimeoutRef.current = setTimeout(typeNextCharacter, 60);
      }
    };

    typingTimeoutRef.current = setTimeout(typeNextCharacter, 120);

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [isInView]);

  const typedSegments = typedContent.split("\n");

  return (
    <div
      ref={manifestoRef}
      className="mx-auto max-w-4xl rounded-[2.25rem] border border-white/15 bg-[rgba(4,8,22,0.72)] px-6 py-12 shadow-[0_28px_95px_rgba(8,24,52,0.58)] backdrop-blur-2xl sm:rounded-[2.75rem] sm:px-12 md:px-16"
    >
      <motion.p
        className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-white/80 md:mb-4 md:text-xs"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        Manifiesto
      </motion.p>

      <motion.p
        className="text-center text-xl font-serif font-black uppercase tracking-[0.18em] text-white sm:text-2xl md:text-4xl"
        data-testid="text-closing"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      >
        No vendemos herramientas.
      </motion.p>

      <motion.div
        className="mt-4 text-center text-xl font-serif font-black uppercase tracking-[0.18em] sm:text-2xl md:text-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        aria-live="polite"
      >
        {MANIFESTO_LINES.map((line, lineIndex) => {
          const lineText = typedSegments[lineIndex] ?? "";

          return (
            <span
              key={line}
              className="block min-h-[1.4em] bg-gradient-to-r from-[hsl(210,100%,68%)] via-[hsl(210,96%,75%)] to-[hsl(210,100%,90%)] bg-clip-text text-transparent drop-shadow-[0_18px_55px_rgba(8,32,82,0.35)]"
            >
              {lineText}
            </span>
          );
        })}
      </motion.div>
    </div>
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
    <div className="mx-auto grid max-w-md grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      <div className="rounded-lg border-2 border-[hsl(210,100%,55%)]/30 bg-[hsl(210,100%,55%)]/20 p-3 text-center">
        <div className="text-xl font-bold text-[hsl(210,100%,55%)] sm:text-2xl" data-testid="countdown-days">{timeLeft.days}</div>
        <div className="text-[0.65rem] text-[hsl(220,10%,45%)] sm:text-xs">DÍAS</div>
      </div>
      <div className="rounded-lg border-2 border-[hsl(210,100%,55%)]/30 bg-[hsl(210,100%,55%)]/20 p-3 text-center">
        <div className="text-xl font-bold text-[hsl(210,100%,55%)] sm:text-2xl" data-testid="countdown-hours">{timeLeft.hours}</div>
        <div className="text-[0.65rem] text-[hsl(220,10%,45%)] sm:text-xs">HORAS</div>
      </div>
      <div className="rounded-lg border-2 border-[hsl(210,100%,55%)]/30 bg-[hsl(210,100%,55%)]/20 p-3 text-center">
        <div className="text-xl font-bold text-[hsl(210,100%,55%)] sm:text-2xl" data-testid="countdown-minutes">{timeLeft.minutes}</div>
        <div className="text-[0.65rem] text-[hsl(220,10%,45%)] sm:text-xs">MIN</div>
      </div>
      <div className="rounded-lg border-2 border-[hsl(210,100%,55%)]/30 bg-[hsl(210,100%,55%)]/20 p-3 text-center">
        <div className="text-xl font-bold text-[hsl(210,100%,55%)] sm:text-2xl" data-testid="countdown-seconds">{timeLeft.seconds}</div>
        <div className="text-[0.65rem] text-[hsl(220,10%,45%)] sm:text-xs">SEG</div>
      </div>
    </div>
  );
}

export default function UrgencySection() {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const handleScheduleClick = () => {
    setShowScheduleModal(true);
  };

  const offers = [
    { icon: CheckCircle, text: 'Consulta estratégica 1 hora', value: '$50,000', status: 'GRATIS' },
    { icon: CheckCircle, text: 'Audit completo automatización', value: 'Premium', status: 'GRATIS' },
    { icon: CheckCircle, text: 'Preview personalizado funcionando', value: 'Exclusivo', status: 'GRATIS' },
    { icon: CheckCircle, text: '30 días implementación supervisada', value: 'Hands-on', status: 'GRATIS' }
  ];

  return (
    <section className="bg-gradient-to-b from-[hsl(220,15%,97%)] via-white to-[hsl(220,15%,97%)] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center animate-slide-up sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <AlertTriangle className="h-7 w-7 text-red-500 sm:h-8 sm:w-8" />
            <h2 className="text-3xl font-serif font-black text-[hsl(220,70%,25%)] sm:text-4xl md:text-6xl" data-testid="text-urgency-title">
              URGENCIA Y <span className="text-red-500">ESCASEZ</span>
            </h2>
            <AlertTriangle className="h-7 w-7 text-red-500 sm:h-8 sm:w-8" />
          </div>
          <p className="mx-auto max-w-3xl text-base text-[hsl(220,10%,45%)] sm:text-lg">
            Solo trabajamos con 2/3 empresas por sector en cada ciudad para garantizar ventaja competitiva total
          </p>
        </div>

        {/* Limited Time Offer */}
        <div className="mb-12 rounded-2xl border-2 border-[hsl(210,100%,55%)]/50 bg-gradient-to-r from-[hsl(210,100%,55%)]/10 via-[hsl(210,100%,55%)]/5 to-[hsl(210,100%,55%)]/10 p-6 shadow-xl animate-slide-up sm:p-8" style={{ animationDelay: '0.2s' }}>
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Clock className="h-6 w-6 text-[hsl(210,100%,55%)]" />
              <h3 className="text-2xl font-serif font-bold text-[hsl(220,70%,25%)] sm:text-3xl">
                OFERTA IRRESISTIBLE
              </h3>
            </div>
            <p className="mb-6 text-base font-bold text-[hsl(210,100%,55%)] sm:text-xl">
              LAS 3 PRIMERAS EMPRESAS DURANTE EL MES DE NOVIEMBRE
            </p>

            <CountdownTimer />
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {offers.map((offer, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/70 rounded-lg p-4 border border-[hsl(210,100%,55%)]/20">
                <offer.icon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[hsl(220,70%,25%)] sm:text-base">{offer.text}</p>
                  <p className="text-xs text-[hsl(220,10%,45%)] sm:text-sm">(valor {offer.value})</p>
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
          <h3 className="mb-6 text-2xl font-serif font-black text-[hsl(220,70%,25%)] sm:text-3xl md:text-5xl" data-testid="text-final-question">
            ¿LISTO PARA SER LA EMPRESA LÍDER<br />
            <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">DE TU SECTOR EN ARGENTINA?</span>
          </h3>

          <p className="mx-auto mb-8 max-w-4xl text-base text-[hsl(220,10%,45%)] sm:text-lg">
            Ya automatizamos +50 empresas exitosamente. Tu competencia ya está preguntando
            cómo implementar IA. <span className="text-[hsl(210,100%,55%)] font-bold">La diferencia entre líder y seguidor se decide HOY.</span>
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-[hsl(210,100%,55%)] px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[hsl(210,100%,50%)] hover:shadow-xl hover:shadow-[hsl(210,100%,55%)]/40 sm:px-8 sm:py-6 sm:text-lg"
              data-testid="button-schedule"
              onClick={handleScheduleClick}
            >
              AGENDAR CONSULTA ESTRATÉGICA AHORA
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-500 px-6 py-4 text-base font-bold text-green-600 transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:text-white sm:px-8 sm:py-6 sm:text-lg"
              data-testid="button-whatsapp"
              onClick={() => window.open('https://wa.me/5492915206692', '_blank')}
            >
              WHATSAPP DIRECTO: +54 9 291 520-6692
            </Button>
          </div>

          <div className="mx-auto mt-12 max-w-5xl px-2 sm:px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#040816] text-white shadow-[0_35px_110px_rgba(12,50,100,0.45)] sm:rounded-[3rem]">
              <motion.img
                src="https://assets.aceternity.com/linear-demo.webp"
                alt="Patrón iridiscente"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 78%)",
                  WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 78%)"
                }}
              />

              <motion.div
                aria-hidden
                className="absolute -inset-24 bg-[conic-gradient(from_140deg_at_50%_50%,rgba(56,189,248,0.55),rgba(192,132,252,0.45),rgba(236,72,153,0.55),rgba(249,115,22,0.5),rgba(16,185,129,0.55),rgba(56,189,248,0.55))] opacity-60 blur-[140px]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(12,74,110,0.28),transparent_70%)]" aria-hidden />
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(4,8,22,0.6),rgba(4,8,22,0.95))]" aria-hidden />

              <div className="relative z-10 px-4 py-10 text-center sm:px-10 sm:py-12 md:px-16 md:py-16">
                <ManifestoStatement />
              </div>
            </div>
          </div>
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