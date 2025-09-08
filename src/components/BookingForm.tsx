import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import { CalendarIcon, Users, Bed, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
// import { format } from "date-fns";
// import { es } from "date-fns/locale";

export function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Booking Form */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4">Reserva Ahora</Badge>
              <h2 className="mb-4">Reserve Su Estadía Perfecta</h2>
              <p className="text-muted-foreground">
                Complete el formulario para verificar disponibilidad y obtener las mejores tarifas 
                para su estadía. Nuestro equipo se pondrá en contacto con usted en breve.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Formulario de Reserva</CardTitle>
                <CardDescription>
                  Ingrese sus datos para procesar su reserva
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Dates Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Fecha de Entrada</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? (
                            checkIn.toLocaleDateString('es-ES', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })
                          ) : (
                            <span>Seleccionar fecha</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Fecha de Salida</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? (
                            checkOut.toLocaleDateString('es-ES', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })
                          ) : (
                            <span>Seleccionar fecha</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Guests and Rooms */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Huéspedes</Label>
                    <Select>
                      <SelectTrigger>
                        <Users className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Número de huéspedes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Huésped</SelectItem>
                        <SelectItem value="2">2 Huéspedes</SelectItem>
                        <SelectItem value="3">3 Huéspedes</SelectItem>
                        <SelectItem value="4">4 Huéspedes</SelectItem>
                        <SelectItem value="5">5+ Huéspedes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Tipo de Habitación</Label>
                    <Select>
                      <SelectTrigger>
                        <Bed className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Seleccionar habitación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deluxe">Habitación Deluxe</SelectItem>
                        <SelectItem value="executive">Suite Ejecutiva</SelectItem>
                        <SelectItem value="presidential">Suite Presidencial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h4>Información Personal</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Ingrese su nombre" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Ingrese su apellido" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="correo@ejemplo.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="requests">Solicitudes Especiales</Label>
                  <textarea 
                    id="requests"
                    className="w-full min-h-[100px] px-3 py-2 border border-input bg-background rounded-md text-sm resize-none"
                    placeholder="Compártanos cualquier solicitud especial para su estadía..."
                  />
                </div>

                {/* Submit Button */}
                <Button className="w-full" size="lg">
                  Enviar Solicitud de Reserva
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, usted acepta nuestros términos y condiciones de reserva.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Póngase en contacto con nuestro equipo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">reservas@grandhotel.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      123 Avenida Principal,<br />
                      Centro Histórico, Ciudad
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Beneficios de Reserva Directa</CardTitle>
                <CardDescription>
                  Ventajas exclusivas al reservar con nosotros
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Mejor precio garantizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Upgrade gratuito (sujeto a disponibilidad)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Check-in temprano y check-out tardío</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">WiFi premium gratuito</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Cancelación flexible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="mb-2">Atención 24/7</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Nuestro equipo está disponible las 24 horas para asistirle con cualquier consulta o emergencia.
              </p>
              <Button variant="outline" size="sm">
                Contactar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}