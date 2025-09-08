import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera, ExternalLink } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJufGVufDF8fHx8MTc1NzI0NDc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Lobby Principal",
    category: "Áreas Comunes"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBsdXh1cnklMjBtb2Rlcm58ZW58MXx8fHwxNzU3MzAxNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Suite Ejecutiva",
    category: "Habitaciones"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1712488070063-696f22cce02c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmclMjBlbGVnYW50fGVufDF8fHx8MTc1NzMwMTU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Restaurante Gourmet",
    category: "Gastronomía"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1666813721996-42956e40788e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwbHV4dXJ5fGVufDF8fHx8MTc1NzMwMTU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Spa & Wellness",
    category: "Bienestar"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1547064663-a07e03f25fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN3aW1taW5nJTIwcG9vbCUyMGx1eHVyeXxlbnwxfHx8fDE3NTczMDE1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Piscina de Lujo",
    category: "Recreación"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1583406774389-792c13563143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNpdHklMjB2aWV3JTIwc2t5bGluZXxlbnwxfHx8fDE3NTczMDE1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Vista de la Ciudad",
    category: "Vistas"
  }
];

export function HotelGallery() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 flex items-center space-x-2 w-fit mx-auto">
            <Camera className="h-4 w-4" />
            <span>Galería</span>
          </Badge>
          <h2 className="mb-4">Descubre Nuestras Instalaciones</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore cada rincón de nuestro hotel a través de nuestra galería fotográfica 
            y descubra los espacios que harán de su estadía una experiencia inolvidable.
          </p>
        </div>

        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden h-full">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? 'h-full min-h-[400px]' : 'h-64'
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <Badge className="mb-2 bg-white/20 text-white border-white/30">
                    {image.category}
                  </Badge>
                  <h4 className="text-white">{image.title}</h4>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="font-bold text-2xl text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Fotografías</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="font-bold text-2xl text-primary">12</div>
            <div className="text-sm text-muted-foreground">Áreas</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="font-bold text-2xl text-primary">360°</div>
            <div className="text-sm text-muted-foreground">Tours Virtuales</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="font-bold text-2xl text-primary">4K</div>
            <div className="text-sm text-muted-foreground">Alta Resolución</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="mr-4">
            Ver Galería Completa
          </Button>
          <Button variant="outline" size="lg">
            Tour Virtual 360°
          </Button>
        </div>
      </div>
    </section>
  );
}