
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, CheckCircle } from "lucide-react";

export default function AssistantSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    email: "",
    webInstagram: "",
    descripcion: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Enviar formulario por email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'contacto@iamotorshub.com'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Error sending form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(220,15%,97%)] via-white to-[hsl(220,15%,97%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="h-12 w-12 text-[hsl(210,100%,55%)]" />
              <h2 className="text-4xl md:text-6xl font-serif font-black text-[hsl(220,70%,25%)]">
                ASISTENTE VIRTUAL
              </h2>
            </div>
            <p className="text-2xl md:text-3xl text-[hsl(220,10%,45%)] font-semibold mb-4">
              ¿Qué es lo que más te está costando o te gustaría automatizar?
            </p>
            <p className="text-xl text-[hsl(210,100%,55%)] font-bold">
              Te hacemos una demo GRATIS y SIN COMPROMISO
            </p>
          </div>

          {/* Form Card */}
          <Card className="bg-gradient-to-br from-white to-[hsl(220,15%,92%)] border-[hsl(210,100%,55%)]/30 shadow-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-serif font-bold text-[hsl(220,70%,25%)]">
                Agenda tu Consulta Gratuita
              </CardTitle>
              <CardDescription className="text-lg text-[hsl(220,10%,45%)]">
                Completa tus datos y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-[hsl(220,70%,25%)] font-semibold">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className="border-[hsl(210,100%,55%)]/30 focus:border-[hsl(210,100%,55%)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dni" className="text-[hsl(220,70%,25%)] font-semibold">
                      DNI *
                    </Label>
                    <Input
                      id="dni"
                      name="dni"
                      type="text"
                      required
                      value={formData.dni}
                      onChange={handleChange}
                      placeholder="12345678"
                      className="border-[hsl(210,100%,55%)]/30 focus:border-[hsl(210,100%,55%)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[hsl(220,70%,25%)] font-semibold">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@ejemplo.com"
                      className="border-[hsl(210,100%,55%)]/30 focus:border-[hsl(210,100%,55%)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="webInstagram" className="text-[hsl(220,70%,25%)] font-semibold">
                      Página Web / Instagram de tu Negocio
                    </Label>
                    <Input
                      id="webInstagram"
                      name="webInstagram"
                      type="text"
                      value={formData.webInstagram}
                      onChange={handleChange}
                      placeholder="www.minegocio.com o @minegocio"
                      className="border-[hsl(210,100%,55%)]/30 focus:border-[hsl(210,100%,55%)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descripcion" className="text-[hsl(220,70%,25%)] font-semibold">
                      Descripción de tu Negocio *
                    </Label>
                    <Textarea
                      id="descripcion"
                      name="descripcion"
                      required
                      value={formData.descripcion}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu negocio y qué te gustaría automatizar..."
                      className="border-[hsl(210,100%,55%)]/30 focus:border-[hsl(210,100%,55%)] min-h-32"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,50%)] text-white font-bold px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(210,100%,55%)]/40"
                  >
                    SOLICITAR DEMO GRATUITA
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
                  <h3 className="text-3xl font-serif font-bold text-[hsl(220,70%,25%)]">
                    ¡Solicitud Enviada!
                  </h3>
                  <p className="text-xl text-[hsl(220,10%,45%)]">
                    Gracias por tu interés. Nos pondremos en contacto contigo muy pronto.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-2 border-[hsl(210,100%,55%)] text-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,55%)] hover:text-white"
                  >
                    Enviar otra solicitud
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chatbot Integration */}
      <div className="mt-12 max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-white to-[hsl(220,15%,92%)] border-[hsl(210,100%,55%)]/30 shadow-2xl overflow-hidden">
          <CardHeader className="text-center bg-[hsl(220,70%,25%)] text-white">
            <CardTitle className="text-2xl font-serif font-bold">
              Chatea con Nuestro Asistente IA
            </CardTitle>
            <CardDescription className="text-[hsl(210,100%,55%)]">
              Obtén respuestas inmediatas a tus consultas
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              src="https://auditoria.base44.app/"
              className="w-full h-[600px] border-0"
              title="Chatbot IA MOTORSHUB"
              allow="microphone"
            />
          </CardContent>
        </Card>
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
