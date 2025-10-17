
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

interface ScheduleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ScheduleModal({ open, onOpenChange }: ScheduleModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    webInstagram: "",
    descripcion: ""
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Generar horarios disponibles de 11:00 a 20:00 cada 30 minutos
  const timeSlots = [];
  for (let hour = 11; hour <= 19; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  timeSlots.push("20:00");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert("Por favor selecciona fecha y hora");
      return;
    }

    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          fecha: selectedDate.toLocaleDateString('es-AR'),
          hora: selectedTime
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onOpenChange(false);
          setFormData({ nombre: "", email: "", webInstagram: "", descripcion: "" });
          setSelectedDate(undefined);
          setSelectedTime("");
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error al agendar la cita");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-serif font-bold text-[hsl(220,70%,25%)]">
            Agendar Consulta Estratégica
          </DialogTitle>
          <DialogDescription className="text-lg text-[hsl(220,10%,45%)]">
            Agenda tu sesión de 30 minutos con nuestros expertos
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
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
                    Web / Instagram
                  </Label>
                  <Input
                    id="webInstagram"
                    name="webInstagram"
                    type="text"
                    value={formData.webInstagram}
                    onChange={handleChange}
                    placeholder="www.minegocio.com"
                    className="border-[hsl(210,100%,55%)]/30 focus:border-[hsl(210,100%,55%)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion" className="text-[hsl(220,70%,25%)] font-semibold">
                    ¿Qué deseas automatizar? *
                  </Label>
                  <Textarea
                    id="descripcion"
                    name="descripcion"
                    required
                    value={formData.descripcion}
                    onChange={handleChange}
                    placeholder="Describe tu negocio y qué te gustaría automatizar..."
                    className="border-[hsl(210,100%,55%)]/30 focus:border-[hsl(210,100%,55%)]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[hsl(220,70%,25%)] font-semibold">
                    Selecciona Fecha *
                  </Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0 || date.getDay() === 6;
                    }}
                    className="rounded-md border border-[hsl(210,100%,55%)]/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[hsl(220,70%,25%)] font-semibold">
                    Selecciona Horario *
                  </Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="border-[hsl(210,100%,55%)]/30">
                      <SelectValue placeholder="Elige un horario" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-[hsl(220,10%,45%)]">
                    Sesiones de 30 minutos • Lunes a Viernes
                  </p>
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              size="lg" 
              className="w-full bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,50%)] text-white font-bold px-8 py-6 text-lg"
            >
              CONFIRMAR CITA
            </Button>
          </form>
        ) : (
          <div className="text-center py-12 space-y-6">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
            <h3 className="text-3xl font-serif font-bold text-[hsl(220,70%,25%)]">
              ¡Cita Agendada!
            </h3>
            <p className="text-xl text-[hsl(220,10%,45%)]">
              Recibirás un email de confirmación en breve.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
