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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
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
              className="w-full h-full object-cover brightness-105 contrast-105"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,25%)]/45 via-[hsl(220,25%,15%)]/55 to-[hsl(220,25%,12%)]/45"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,18,38,0.6),transparent_62%)] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,12,28,0.55)_20%,rgba(4,12,28,0.35)_55%,transparent_82%)]"></div>
      </div>

      {/* Luz azul animada */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-[hsl(210,100%,60%)]/25 blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
        <div className="absolute right-[-15%] top-1/3 h-80 w-80 rounded-full bg-[hsl(210,85%,55%)]/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-12%] left-1/3 h-64 w-64 rounded-full bg-[hsl(210,100%,65%)]/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Logo grande fijo con halo */}
      <div className="absolute left-1 top-2 z-[60] flex items-center sm:left-5 sm:top-4 md:left-10 md:top-8">
        <div className="pointer-events-none absolute -inset-[6.5rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(118,189,255,0.65),rgba(10,20,44,0.12))] blur-[120px] opacity-90 animate-[heroHalo_8s_ease-in-out_infinite]"></div>
        <div className="pointer-events-none absolute -inset-14 -z-10 rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,rgba(148,211,255,0.55),rgba(15,30,60,0.2))] backdrop-blur-3xl shadow-[0_55px_150px_rgba(30,110,255,0.6)] before:absolute before:inset-4 before:rounded-full before:border before:border-white/20 before:opacity-50 before:animate-[logoOrbit_18s_linear_infinite] before:content-['']"></div>
        <span className="pointer-events-none absolute -inset-[3.75rem] rounded-full border border-white/20 bg-gradient-to-br from-white/10 via-sky-400/20 to-transparent opacity-70 mix-blend-screen animate-[logoRing_14s_linear_infinite]"></span>
        <img
          src={logoPath}
          alt="IA MOTORSHUB"
          className="relative h-[14rem] w-auto sm:h-[19rem] md:h-[23rem] lg:h-[27rem] xl:h-[30rem] brightness-0 invert drop-shadow-[0_28px_90px_rgba(12,34,78,0.82)] transition-transform duration-[1200ms] ease-out will-change-transform animate-[logoFloat_11s_ease-in-out_infinite]"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 mix-blend-screen animate-[logoPulse_9s_ease-in-out_infinite]"></div>
      </div>

      {/* Botones de navegación (servicios, etc.) */}
      <div
        className={`absolute left-1/2 top-40 z-40 w-[min(92vw,380px)] -translate-x-1/2 transition-all duration-700 sm:left-auto sm:right-10 sm:top-24 sm:w-auto sm:-translate-x-0 md:top-24 lg:top-28 ${
          showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-wrap items-center justify-center gap-3 overflow-hidden rounded-[2.5rem] border border-white/15 bg-[rgba(6,18,40,0.22)] px-4 py-3 shadow-[0_28px_85px_rgba(5,18,40,0.38)] backdrop-blur-[26px] sm:flex-nowrap sm:justify-start">
          <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),rgba(12,25,50,0.4))] opacity-90 animate-[capsuleGlow_12s_linear_infinite]"></span>
          <span className="pointer-events-none absolute inset-[3px] rounded-[2.3rem] border border-white/10 bg-white/10 mix-blend-soft-light opacity-35"></span>
          {[
            ["Servicios", "servicios"],
            ["Diferenciadores", "diferenciadores"],
            ["Testimonios", "testimonios"],
            ["Contacto", "asistente"],
          ].map(([label, target]) => (
            <MovingButton
              key={label}
              borderRadius="1.5rem"
              className="px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-100 transition-all duration-300 hover:scale-[1.05] hover:text-white sm:text-sm"
              innerBackground="rgba(10, 28, 60, 0.45)"
              onClick={() =>
                document.getElementById(target)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              {label}
            </MovingButton>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 pb-28 pt-[19rem] text-center sm:px-6 sm:pt-[18rem] md:pt-[19rem] lg:pt-[22rem]">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[2.75rem] border border-white/10 bg-[rgba(5,12,24,0.68)] px-6 py-10 shadow-[0_50px_130px_rgba(5,16,38,0.62)] backdrop-blur-[22px] sm:gap-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -inset-px -z-10 rounded-[2.75rem] bg-[linear-gradient(135deg,rgba(59,130,246,0.2),rgba(14,165,233,0.16)_40%,rgba(2,132,199,0.1)_75%,transparent)] opacity-100"></div>
          <div className="pointer-events-none absolute inset-4 rounded-[2.25rem] border border-white/5"></div>
          <div className="flex w-full flex-col items-center gap-3 text-xs uppercase tracking-[0.4em] text-sky-100/90 animate-slide-up sm:flex-row sm:justify-center sm:text-[0.7rem]" style={{ animationDelay: "0.05s" }}>
            <span className="rounded-full border border-white/25 bg-white/10 px-5 py-2 font-semibold text-white shadow-[0_12px_35px_rgba(6,16,34,0.45)] backdrop-blur-sm">
              GRANDES SOLUCIONES
            </span>
            <span className="rounded-full border border-white/15 bg-[rgba(8,20,46,0.55)] px-5 py-2 font-semibold text-sky-200 shadow-[0_12px_35px_rgba(6,16,34,0.4)]">
              INTELIGENCIA ARTIFICIAL PARA TU NEGOCIO
            </span>
          </div>
          <h1 className="relative text-4xl font-serif font-black uppercase leading-tight text-white drop-shadow-[0_14px_35px_rgba(3,10,26,0.95)] animate-slide-up sm:text-5xl md:text-6xl lg:text-7xl">
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
            className="relative max-w-4xl rounded-[2rem] border border-white/10 bg-[rgba(6,18,36,0.55)] px-6 py-5 text-base leading-relaxed text-slate-100 shadow-[0_24px_65px_rgba(4,10,24,0.65)] backdrop-blur-lg animate-slide-up sm:text-lg md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Desde bares y restaurantes hasta e-commerce y empresas corporativas.
            <br />
            <span className="font-semibold text-sky-200">
              Posicionamiento digital
            </span>{" "}
            •{" "}
            <span className="font-semibold text-sky-200">
              Automatización inteligente
            </span>{" "}
            •{" "}
            <span className="font-semibold text-sky-200">
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
              className="group px-10 py-5 text-sm font-bold tracking-[0.14em] text-sky-50 transition-all duration-300 hover:scale-[1.06] sm:px-14 sm:py-6 sm:text-base"
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
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.1rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_65%)]"></div>
            {["BARES Y RESTAURANTES", "LOCALES DE ROPA", "E-COMMERCE", "POSICIONAMIENTO", "EMPRESAS"].map((title, index) => {
              const descriptions = [
                "Automatización y reservas inteligentes",
                "Asistentes virtuales y ventas online",
                "Optimización y conversión con IA",
                "SEO y marketing digital con IA",
                "Soluciones complejas personalizadas",
              ];
              return (
                <div
                  key={title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/10 p-4 text-slate-100 shadow-[0_22px_55px_rgba(5,18,48,0.45)] transition-all duration-300 backdrop-blur-xl hover:border-sky-300/70 hover:bg-white/15 hover:shadow-[0_32px_95px_rgba(10,34,82,0.55)] sm:p-6"
                >
                  <div className="mb-2 flex items-center justify-center gap-2 text-base font-bold uppercase tracking-[0.22em] text-sky-200 drop-shadow-[0_8px_22px_rgba(5,16,38,0.85)] sm:text-xl">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" /> {title}
                  </div>
                  <div className="text-xs font-medium text-slate-100/90 drop-shadow-[0_6px_18px_rgba(4,10,24,0.65)] sm:text-sm">
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
        @keyframes heroHalo {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes logoPulse {
          0%, 100% { opacity: 0; transform: scale(0.95); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes logoOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translate3d(0, -6px, 0) scale(1); }
          50% { transform: translate3d(0, 10px, 0) scale(1.02); }
        }
        @keyframes logoRing {
          0% { transform: rotate(0deg) scale(1); opacity: 0.75; }
          50% { transform: rotate(180deg) scale(1.05); opacity: 0.45; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.75; }
        }
        @keyframes capsuleGlow {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
}
