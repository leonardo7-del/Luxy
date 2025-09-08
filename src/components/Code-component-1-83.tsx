import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Directora Ejecutiva",
    company: "TechCorp Internacional",
    avatar: "",
    rating: 5,
    text: "Una experiencia absolutamente excepcional. El servicio personalizado y la atención al detalle superaron todas mis expectativas. Sin duda regresaré en mi próximo viaje de negocios.",
    stayType: "Suite Ejecutiva",
    date: "Diciembre 2024"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Empresario",
    company: "Inversiones Globales",
    avatar: "",
    rating: 5,
    text: "Las instalaciones son de primer nivel y el personal es extraordinariamente profesional. El spa y el restaurante ofrecen una experiencia de lujo incomparable.",
    stayType: "Suite Presidencial",
    date: "Noviembre 2024"
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    role: "Consultora Internacional",
    company: "Strategy Partners",
    avatar: "",
    rating: 5,
    text: "La ubicación es perfecta y el hotel mantiene los más altos estándares de calidad. Cada detalle está cuidadosamente pensado para brindar confort y elegancia.",
    stayType: "Habitación Deluxe",
    date: "Enero 2025"
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "CEO",
    company: "Innovación Digital",
    avatar: "",
    rating: 5,
    text: "Un servicio excepcional desde el momento de la llegada. Las amenidades de negocio y la conectividad son perfectas para ejecutivos que necesitan mantenerse productivos.",
    stayType: "Suite Ejecutiva",
    date: "Diciembre 2024"
  }
];

const stats = [
  { number: "98%", label: "Satisfacción del Cliente" },
  { number: "4.9/5", label: "Calificación Promedio" },
  { number: "95%", label: "Huéspedes que Regresan" },
  { number: "15+", label: "Premios Internacionales" }
];

export function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Testimonios</Badge>
          <h2 className="mb-4">Lo Que Dicen Nuestros Huéspedes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros huéspedes es nuestro mayor logro. 
            Lea las experiencias de quienes han vivido momentos excepcionales en nuestro hotel.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-background rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="font-bold text-2xl text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>

                    <div className="text-right">
                      <Badge variant="outline" className="text-xs mb-1">
                        {testimonial.stayType}
                      </Badge>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="bg-background rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="mb-2">Reconocimientos y Premios</h3>
            <p className="text-muted-foreground">
              Nuestro compromiso con la excelencia ha sido reconocido internacionalmente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h4>Excelencia en Servicio</h4>
              <p className="text-sm text-muted-foreground">
                Premio Internacional de Hospitalidad 2024
              </p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h4>Hotel de Lujo del Año</h4>
              <p className="text-sm text-muted-foreground">
                Asociación Mundial de Turismo 2024
              </p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h4>Sostenibilidad Ambiental</h4>
              <p className="text-sm text-muted-foreground">
                Certificación Green Hotels 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}