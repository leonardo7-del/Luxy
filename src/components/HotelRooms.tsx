import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Wifi, Car, Coffee, Bath, Bed } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Suite Ejecutiva",
    description: "Espaciosa suite con vista panorámica de la ciudad, perfecta para huéspedes de negocios.",
    price: "$299",
    priceUnit: "por noche",
    image: "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBsdXh1cnklMjBtb2Rlcm58ZW58MXx8fHwxNzU3MzAxNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["2-4 huéspedes", "45m²", "Vista ciudad", "Wifi gratuito"],
    amenities: [
      { icon: <Users className="h-4 w-4" />, text: "2-4 personas" },
      { icon: <Bed className="h-4 w-4" />, text: "Cama king size" },
      { icon: <Bath className="h-4 w-4" />, text: "Baño de lujo" },
      { icon: <Wifi className="h-4 w-4" />, text: "WiFi gratuito" },
    ]
  },
  {
    id: 2,
    name: "Habitación Deluxe",
    description: "Elegante habitación con diseño contemporáneo y todas las comodidades modernas.",
    price: "$199",
    priceUnit: "por noche",
    image: "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBsdXh1cnklMjBtb2Rlcm58ZW58MXx8fHwxNzU3MzAxNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["1-2 huéspedes", "35m²", "Vista jardín", "Minibar"],
    amenities: [
      { icon: <Users className="h-4 w-4" />, text: "1-2 personas" },
      { icon: <Bed className="h-4 w-4" />, text: "Cama queen" },
      { icon: <Coffee className="h-4 w-4" />, text: "Minibar" },
      { icon: <Car className="h-4 w-4" />, text: "Estacionamiento" },
    ]
  },
  {
    id: 3,
    name: "Suite Presidencial",
    description: "La experiencia de lujo definitiva con servicio personalizado y amenidades exclusivas.",
    price: "$599",
    priceUnit: "por noche",
    image: "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBsdXh1cnklMjBtb2Rlcm58ZW58MXx8fHwxNzU3MzAxNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["4-6 huéspedes", "85m²", "Vista panorámica", "Mayordomo"],
    amenities: [
      { icon: <Users className="h-4 w-4" />, text: "4-6 personas" },
      { icon: <Bed className="h-4 w-4" />, text: "2 habitaciones" },
      { icon: <Bath className="h-4 w-4" />, text: "Jacuzzi privado" },
      { icon: <Coffee className="h-4 w-4" />, text: "Servicio 24/7" },
    ]
  },
];

export function HotelRooms() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Nuestras Habitaciones</Badge>
          <h2 className="mb-4">Experiencias de Lujo Personalizadas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada habitación ha sido diseñada meticulosamente para ofrecer el máximo confort y elegancia, 
            combinando tecnología moderna con un servicio excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground">
                    {room.features[0]}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2">{room.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="text-primary">
                          {amenity.icon}
                        </div>
                        <span className="text-muted-foreground">{amenity.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="font-medium">{room.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{room.priceUnit}</span>
                    </div>
                    <Button>
                      Reservar Ahora
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todas las Habitaciones
          </Button>
        </div>
      </div>
    </section>
  );
}