"use client";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { ChevronRight, Sparkles } from "lucide-react";
import logoPath from "@assets/IA MOTORSHUB LOGO_1758912846792.png";
import { useState, useEffect } from "react";

import heroAgentes from "@assets/hero-agentes-telefonicos.jpg";
import heroMenu from "@assets/hero-menu-vivo.jpg";
import heroRealEstate from "@assets/hero-real-estate-ai.jpg";
import heroRentals from "@assets/hero-rentals-ai.jpg";
import heroStoryboard from "@assets/hero-storyboard-pro.jpg";
import heroAutomatizacion from "@assets/hero-automatizacion-comercial.png";

const carouselImages = [
  heroAgentes,
  heroMenu,
  heroRealEstate,
  heroRentals,
  heroStoryboard,
  heroAutomatizacion,
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY < window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#040b1c]">
      {/* Fondo del carrusel */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full object-cover object-center brightness-[1.04] contrast-[1.05]"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,25%)]/14 via-[hsl(220,25%,18%)]/18 to-[hsl(220,25%,12%)]/14"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,16,32,0.32),transparent_76%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,8,20,0.28)_15%,rgba(2,8,20,0.18)_55%,transparent_85%)]"></div>
      </div>

      {/* Luz azul animada */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-[hsl(210,100%,60%)]/25 blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
        <div className="absolute right-[-15%] top-1/3 h-80 w-80 rounded-full bg-[hsl(210,85%,55%)]/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-12%] left-1/3 h-64 w-64 rounded-full bg-[hsl(210,100%,65%)]/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Logo y navegación */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-[70] px-0 pt-0 sm:px-12 sm:pt-4 md:px-16">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          {/* Logo con animación Aceternity */}
          <div className="logo-container pointer-events-auto absolute left-[-65px] top-[-7.4rem] z-10 sm:relative sm:left-auto sm:top-auto sm:z-auto sm:-translate-x-12 sm:-translate-y-[6rem] md:-translate-x-16 md:-translate-y-[7.5rem] lg:-translate-x-20 lg:-translate-y-[8.5rem]">
            <div className="logo-glow-wrapper">
              <img
                src={logoPath}
                alt="IA MOTORSHUB"
                className="h-[22rem] w-auto brightness-0 invert drop-shadow-[0_18px_50px_rgba(12,34,78,0.65)] sm:h-[22.4rem] md:h-[28rem] lg:h-[32rem]"
                style={{ filter: "brightness(0) invert(1)", imageRendering: "crisp-edges" }}
              />
            </div>
          </div>

          {/* Navegación en fila horizontal centrada - SIEMPRE VISIBLE */}
          <nav
            className="pointer-events-auto absolute left-1/2 top-[8.3rem] z-[80] flex -translate-x-1/2 gap-0.5 rounded-full bg-[rgba(4,10,24,0.8)] px-1 py-0.5 opacity-100 backdrop-blur-md sm:absolute sm:left-auto sm:right-20 sm:top-auto sm:ml-auto sm:translate-x-0 sm:gap-4 sm:bg-transparent sm:px-3 sm:py-1 sm:-translate-y-[6rem] md:-translate-y-[7.5rem] lg:-translate-y-[8.5rem]"
          >
            {[
              ["Servicios", "servicios"],
              ["Diferenciadores", "diferenciadores"],
              ["Testimonios", "testimonios"],
              ["Contacto", "asistente"],
            ].map(([label, target], index) => (
              <MovingButton
                key={label}
                borderRadius="1rem"
                className="tech-fade-in px-1.5 py-0.5 text-[0.38rem] font-semibold uppercase tracking-[0.06em] text-slate-100 transition-all duration-300 hover:scale-[1.05] hover:text-white sm:px-6 sm:py-2 sm:text-sm md:text-base"
                innerBackground="rgba(10, 28, 60, 0.38)"
                onClick={() =>
                  document.getElementById(target)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {label}
              </MovingButton>
            ))}
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 pb-20 pt-[12rem] text-center sm:px-6 sm:pb-24 sm:pt-[16rem] md:pt-[18rem] lg:pt-[19rem]">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-2 sm:gap-10 sm:px-10">
          <h1 className="relative text-3xl font-serif font-black uppercase leading-tight text-white drop-shadow-[0_18px_40px_rgba(3,10,26,0.95)] animate-slide-up sm:text-5xl md:text-6xl lg:text-7xl">
            SOLUCIONES DE IA
            <br />
            PARA{" "}
            <span
              className="bg-gradient-to-r from-[hsl(210,100%,68%)] via-[hsl(210,96%,75%)] to-[hsl(210,100%,90%)] bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 22px rgba(8,28,68,0.65)",
                WebkitTextStroke: "1px rgba(0,16,42,0.45)",
              }}
            >
              TODO TIPO DE NEGOCIO
            </span>
          </h1>

          <p
            className="relative max-w-3xl text-sm leading-relaxed text-slate-100 drop-shadow-[0_22px_46px_rgba(2,8,22,0.75)] animate-slide-up sm:text-lg md:text-xl"
            style={{
              animationDelay: "0.2s",
            }}
          >
            Desde bares y restaurantes hasta e-commerce y empresas corporativas.
            <br />
            <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text font-semibold text-transparent [text-shadow:0_0_16px_rgba(9,40,80,0.65)]">
              Posicionamiento digital
            </span>{" "}
            •{" "}
            <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text font-semibold text-transparent [text-shadow:0_0_16px_rgba(9,40,80,0.65)]">
              Automatización inteligente
            </span>{" "}
            •{" "}
            <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text font-semibold text-transparent [text-shadow:0_0_16px_rgba(9,40,80,0.65)]">
              Soluciones personalizadas
            </span>
          </p>

          {/* CTA único */}
          <div
            className="relative flex justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <MovingButton
              borderRadius="2.9rem"
              className="group px-8 py-4 text-xs font-bold tracking-[0.14em] text-sky-50 transition-all duration-300 hover:scale-[1.06] sm:px-12 sm:py-5 sm:text-sm md:px-14 md:py-6 md:text-base"
              innerBackground="rgba(12, 30, 68, 0.38)"
              borderColors={["#38bdf8", "#60a5fa", "#38bdf8"]}
              onClick={() => {
                document.getElementById("asistente")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <ChevronRight className="mr-3 h-6 w-6" />
              SOLICITAR DEMO GRATUITA
            </MovingButton>
            <div className="pointer-events-none absolute inset-x-6 bottom-2 h-10 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.58),transparent_70%)] blur-xl opacity-70"></div>
          </div>

          {/* Social Proof Cards */}
          <div
            className="relative grid w-full max-w-6xl grid-cols-1 gap-4 text-center animate-slide-up md:grid-cols-3 lg:grid-cols-5"
            style={{ animationDelay: "0.6s" }}
          >
            {["BARES Y RESTAURANTES", "LOCALES DE ROPA", "E-COMMERCE", "SEO", "EMPRESAS"].map((title, index) => {
              const descriptions = [
                "Automatización y reservas inteligentes",
                "Asistentes virtuales y ventas online",
                "Optimización y conversión con IA",
                "Posicionamiento y marketing IA",
                "Soluciones complejas personalizadas",
              ];
              return (
                <div
                  key={title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/10 p-4 text-slate-100 shadow-[0_22px_55px_rgba(5,18,48,0.45)] transition-all duration-300 backdrop-blur-xl hover:border-sky-300/70 hover:bg-white/15 hover:shadow-[0_32px_95px_rgba(10,34,82,0.55)] sm:p-6"
                >
                  <div className="mb-2 flex items-center justify-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-sky-200 drop-shadow-[0_8px_22px_rgba(5,16,38,0.85)] sm:text-base">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" /> {title}
                  </div>
                  <div className="text-pretty text-xs font-medium text-slate-100/90 drop-shadow-[0_6px_18px_rgba(4,10,24,0.65)] sm:text-sm">
                    {descriptions[index]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animaciones */}
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
        @keyframes capsuleGlow {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.02); }
        }

        /* Animación Aceternity para el logo */
        @keyframes logo-glow {
          0%, 100% {
            filter: brightness(0) invert(1) drop-shadow(0 0 20px rgba(56, 189, 248, 0.4)) drop-shadow(0 0 40px rgba(56, 189, 248, 0.2));
          }
          50% {
            filter: brightness(0) invert(1) drop-shadow(0 0 30px rgba(56, 189, 248, 0.6)) drop-shadow(0 0 60px rgba(56, 189, 248, 0.3)) drop-shadow(0 0 80px rgba(56, 189, 248, 0.1));
          }
        }

        @keyframes logo-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .logo-glow-wrapper {
          position: relative;
        }

        .logo-glow-wrapper::before {
          content: '';
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
          animation: logo-pulse 4s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }

        .logo-glow-wrapper img {
          animation: logo-glow 4s ease-in-out infinite;
        }

        /* Animación tech fade-in para botones */
        @keyframes tech-fade-in {
          0% {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
            filter: blur(4px);
          }
          50% {
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes tech-glitch {
          0%, 100% {
            text-shadow: 0 0 4px rgba(56, 189, 248, 0.5);
          }
          50% {
            text-shadow: 0 0 8px rgba(56, 189, 248, 0.8), 0 0 12px rgba(96, 165, 250, 0.4);
          }
        }

        .tech-fade-in {
          animation: tech-fade-in 0.8s ease-out both;
        }

        .tech-fade-in:hover {
          animation: tech-glitch 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
