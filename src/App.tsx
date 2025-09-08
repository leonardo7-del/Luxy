import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { HotelRooms } from "./components/HotelRooms";
import { HotelServices } from "./components/HotelServices";
import { HotelGallery } from "./components/HotelGallery";
import { BookingForm } from "./components/BookingForm";
import { Testimonials } from "./components/Testimonials";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Award,
  Shield,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-primary-foreground fill-current" />
              </div>
              <div>
                <h1 className="font-bold text-lg">Grand Hotel Elite</h1>
                <p className="text-xs text-muted-foreground">Luxury & Excellence</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">Inicio</a>
              <a href="#habitaciones" className="text-sm font-medium hover:text-primary transition-colors">Habitaciones</a>
              <a href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">Servicios</a>
              <a href="#galeria" className="text-sm font-medium hover:text-primary transition-colors">Galería</a>
              <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">Contacto</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <Button>Reservar Ahora</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647249893022-9287c83b8cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJufGVufDF8fHx8MTc1NzI0NDc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Grand Hotel Elite Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Experiencia de Lujo Excepcional
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Grand Hotel Elite
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Donde la elegancia se encuentra con el servicio excepcional. 
              Descubra un oasis de lujo en el corazón de la ciudad.
            </p>
            
      

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Premio Excelencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm">5 Estrellas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">Protocolo Sanitario</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Servicio 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">Bienvenido</Badge>
            <h2 className="mb-6">Una Experiencia Inolvidable Le Espera</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              En Grand Hotel Elite, cada detalle ha sido cuidadosamente diseñado para ofrecerle 
              una experiencia de hospitalidad sin igual. Desde nuestras elegantes habitaciones 
              hasta nuestros servicios de clase mundial, nos comprometemos a superar sus expectativas 
              y crear momentos que atesorará para siempre.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h4>Servicio Excepcional</h4>
                <p className="text-sm text-muted-foreground">
                  Personal altamente capacitado dedicado a brindarle atención personalizada
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4>Instalaciones de Lujo</h4>
                <p className="text-sm text-muted-foreground">
                  Amenidades premium y espacios diseñados para su máximo confort
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4>Ubicación Privilegiada</h4>
                <p className="text-sm text-muted-foreground">
                  En el corazón de la ciudad, cerca de los principales centros de interés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="habitaciones">
        <HotelRooms />
      </section>

      {/* Services Section */}
      <section id="servicios">
        <HotelServices />
      </section>

      {/* Gallery Section */}
      <section id="galeria">
        <HotelGallery />
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Booking Section */}
      <section id="contacto">
        <BookingForm />
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">¿Listo para Vivir una Experiencia Excepcional?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve ahora y descubra por qué somos el hotel de lujo preferido 
            por huéspedes distinguidos de todo el mundo.
          </p>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Hotel Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary-foreground fill-current" />
                </div>
                <div>
                  <h4>Grand Hotel Elite</h4>
                  <p className="text-xs text-muted-foreground">Luxury & Excellence</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Experiencias de lujo excepcionales en el corazón de la ciudad. 
                Su hogar lejos de casa con servicios de clase mundial.
              </p>
              
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <Instagram className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <Twitter className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4>Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">info@grandhotelelite.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm">
                    123 Avenida Principal<br />
                    Centro Histórico, Ciudad<br />
                    Código Postal 12345
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4>Servicios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Habitaciones de Lujo</li>
                <li>Restaurante Gourmet</li>
                <li>Spa & Wellness</li>
                <li>Centro de Negocios</li>
                <li>Servicio de Consejería</li>
                <li>Estacionamiento Valet</li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4>Información</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Políticas de Reserva</li>
                <li>Términos y Condiciones</li>
                <li>Política de Privacidad</li>
                <li>Política de Cancelación</li>
                <li>Programa de Lealtad</li>
                <li>Ofertas Especiales</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2025 Grand Hotel Elite. Todos los derechos reservados.</p>
            <p>Diseñado con excelencia y dedicación.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}