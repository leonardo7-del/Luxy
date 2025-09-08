import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Utensils, 
  Waves, 
  Dumbbell, 
  Car, 
  Wifi, 
  HeadphonesIcon,
  MapPin,
  Clock
} from "lucide-react";

const services = [
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "Restaurante Gourmet",
    description: "Cocina internacional de primera clase con chef ejecutivo y ambiente sofisticado.",
    image: "https://images.unsplash.com/photo-1712488070063-696f22cce02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmclMjBlbGVnYW50fGVufDF8fHx8MTc1NzMwMTU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Menú degustación", "Carta de vinos premium", "Servicio 24 horas"],
    hours: "06:00 - 24:00"
  },
  {
    icon: <Waves className="h-8 w-8" />,
    title: "Spa & Wellness",
    description: "Centro de bienestar completo con tratamientos exclusivos y terapias relajantes.",
    image: "https://images.unsplash.com/photo-1666813721996-42956e40788e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzMwMTU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Masajes terapéuticos", "Sauna y vapor", "Piscina climatizada"],
    hours: "08:00 - 22:00"
  },
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Gimnasio Premium",
    description: "Equipamiento de última generación y entrenadadores personales disponibles.",
    image: "https://images.unsplash.com/photo-1547064663-a07e03f25fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN3aW1taW5nJTIwcG9vbCUyMGx1eHVyeXxlbnwxfHx8fDE3NTczMDE1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Equipos Technogym", "Clases grupales", "Entrenador personal"],
    hours: "05:00 - 23:00"
  }
];

const amenities = [
  {
    icon: <Car className="h-6 w-6" />,
    title: "Estacionamiento Valet",
    description: "Servicio de estacionamiento completo con valet parking las 24 horas."
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "WiFi Premium",
    description: "Conexión de alta velocidad gratuita en todas las áreas del hotel."
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: "Concierge 24/7",
    description: "Servicio de conserjería personalizado disponible las 24 horas del día."
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Ubicación Privilegiada",
    description: "En el corazón de la ciudad, cerca de centros comerciales y culturales."
  }
];

export function HotelServices() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Services */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Servicios Premium</Badge>
          <h2 className="mb-4">Experiencias Excepcionales</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestros servicios están diseñados para superar sus expectativas y crear 
            momentos inolvidables durante su estadía.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {service.icon}
                    <h3 className="text-white">{service.title}</h3>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{service.hours}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Amenities */}
        <div className="bg-background rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="mb-2">Servicios Adicionales</h3>
            <p className="text-muted-foreground">
              Amenidades complementarias para una experiencia completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <div className="text-primary">
                    {amenity.icon}
                  </div>
                </div>
                <div>
                  <h4 className="mb-1">{amenity.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}